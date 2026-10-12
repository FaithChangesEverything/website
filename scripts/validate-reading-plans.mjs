import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const catalog = JSON.parse(readFileSync(new URL("../lib/reading-plans/content.json", import.meta.url), "utf8"));
assert.equal(catalog.schemaVersion, 1);
assert.equal(catalog.translation, "KJV");
assert.equal(catalog.planCount, 22);
assert.equal(catalog.lessonCount, 322);
assert.deepEqual(
  [7, 10, 30].map((days) => catalog.plans.filter((p) => p.days === days).length),
  [6, 10, 6],
);
const planIds = new Set();
const lessonIds = new Set();
for (const plan of catalog.plans) {
  assert.ok(!planIds.has(plan.id), `Duplicate plan ID: ${plan.id}`);
  planIds.add(plan.id);
  assert.equal(plan.lessonCount, plan.days);
  assert.equal(plan.lessons.length, plan.days);
  for (const [index, lesson] of plan.lessons.entries()) {
    assert.equal(lesson.day, index + 1);
    assert.ok(!lessonIds.has(lesson.id), `Duplicate lesson ID: ${lesson.id}`);
    lessonIds.add(lesson.id);
    assert.ok(lesson.title && lesson.primaryReading && lesson.keyVerse.text && lesson.keyVerse.reference);
    assert.ok(lesson.readingFocus || lesson.devotionalThought);
  }
}
assert.ok(catalog.plans.find((p) => p.title === "30 Days of Prayer"));
const salvation = catalog.plans.find((p) => p.title === "30 Days of Understanding Salvation and Grace");
assert.ok(salvation.lessons[13].primaryReading.includes("Romans 4:23–25"));
assert.ok(salvation.lessons[17].keyVerse.text.includes("who walk not after the flesh"));
console.log(`Verified ${planIds.size} plans, ${lessonIds.size} unique daily lessons, KJV — all checks passed.`);