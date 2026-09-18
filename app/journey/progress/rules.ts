export const JOURNEY_ID_MIN_LENGTH = 12;
export const GENERATED_JOURNEY_ID_LENGTH = 12;
export const APPROVED_JOURNEY_ID_SYMBOLS = "!@#$%&*-_";
export const JOURNEY_PASSCODE_LENGTH = 4;
export const MAX_CONSECUTIVE_ACCESS_FAILURES = 5;
export const ACCESS_LOCKOUT_MINUTES = 15;
export const REMEMBERED_SESSION_INACTIVITY_DAYS = 30;
export const MEANINGFUL_WRITTEN_ENGAGEMENT_PERCENT = 50;
export const MEDIA_COMPLETION_PERCENT = 90;

export type JourneyLessonStatus = "not_started" | "in_progress" | "completed";
export type SiteOperatingMode = "normal" | "restricted" | "full_lockdown";

const allowedJourneyIdCharacters = /^[A-Za-z0-9!@#$%&*_\-]+$/;

export type JourneyIdValidation = {
  valid: boolean;
  errors: string[];
};

export function validateJourneyId(value: string): JourneyIdValidation {
  const errors: string[] = [];

  if (value.length < JOURNEY_ID_MIN_LENGTH) {
    errors.push(`Journey ID must be at least ${JOURNEY_ID_MIN_LENGTH} characters.`);
  }

  if (!/[A-Z]/.test(value)) {
    errors.push("Journey ID must include at least one uppercase letter.");
  }

  if (!/[a-z]/.test(value)) {
    errors.push("Journey ID must include at least one lowercase letter.");
  }

  const numberCount = (value.match(/[0-9]/g) ?? []).length;
  if (numberCount < 2) {
    errors.push("Journey ID must include at least two numbers.");
  }

  if (!/[!@#$%&*_\-]/.test(value)) {
    errors.push("Journey ID must include at least one approved symbol.");
  }

  if (!allowedJourneyIdCharacters.test(value)) {
    errors.push(
      `Journey ID may use letters, numbers, and these symbols only: ${APPROVED_JOURNEY_ID_SYMBOLS}`,
    );
  }

  return { valid: errors.length === 0, errors };
}

export function isValidJourneyPasscode(value: string): boolean {
  return /^\d{4}$/.test(value);
}
