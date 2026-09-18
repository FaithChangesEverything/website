"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { recordJourneyEngagementAction } from "../progress/engagement-actions";

type Props = {
  contentKey: string;
  targetId: string;
  path: string;
};

/**
 * Sequence 8 engagement evaluator.
 *
 * This component intentionally records only coarse threshold evidence. It does not
 * store scrolling history, keystrokes, pause/seek history, or second-by-second
 * behavior. The database remains authoritative for Meaningful View and completion
 * eligibility.
 */
export function JourneyEngagementEvaluator({ contentKey, targetId, path }: Props) {
  const router = useRouter();
  const highestReportedRef = useRef(0);
  const activeSecondsRef = useRef(0);
  const eligibleRef = useRef(false);
  const requestInFlightRef = useRef(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    let activeTimer: number | undefined;
    let rafId: number | undefined;

    const report = async (percent: number) => {
      if (requestInFlightRef.current || eligibleRef.current) return;

      const rounded = Math.max(0, Math.min(100, Math.floor(percent / 5) * 5));
      if (rounded < 50 || rounded <= highestReportedRef.current) return;

      highestReportedRef.current = rounded;
      requestInFlightRef.current = true;

      try {
        const result = await recordJourneyEngagementAction(
          contentKey,
          "written",
          rounded,
          activeSecondsRef.current,
          path,
        );

        if (result.completionEligible) {
          eligibleRef.current = true;
          router.refresh();
        }
      } catch {
        // Handbook rule: analytics/engagement recording must fail quietly and must
        // never interfere with access to Journey content. Do not retry aggressively.
      } finally {
        requestInFlightRef.current = false;
      }
    };

    const evaluate = () => {
      rafId = undefined;
      const rect = target.getBoundingClientRect();
      const height = Math.max(target.scrollHeight, target.offsetHeight, 1);
      const viewportBottom = window.innerHeight;
      const traversed = viewportBottom - rect.top;
      const percent = (traversed / height) * 100;
      void report(percent);
    };

    const scheduleEvaluate = () => {
      if (rafId !== undefined) return;
      rafId = window.requestAnimationFrame(evaluate);
    };

    const isActivelyViewing = () => document.visibilityState === "visible" && document.hasFocus();

    activeTimer = window.setInterval(() => {
      if (isActivelyViewing()) activeSecondsRef.current += 1;
    }, 1000);

    window.addEventListener("scroll", scheduleEvaluate, { passive: true });
    window.addEventListener("resize", scheduleEvaluate);
    document.addEventListener("visibilitychange", scheduleEvaluate);
    scheduleEvaluate();

    return () => {
      if (activeTimer !== undefined) window.clearInterval(activeTimer);
      if (rafId !== undefined) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleEvaluate);
      window.removeEventListener("resize", scheduleEvaluate);
      document.removeEventListener("visibilitychange", scheduleEvaluate);
    };
  }, [contentKey, path, router, targetId]);

  return null;
}
