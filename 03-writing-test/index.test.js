import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should sum", () => {
  const result = sum(4, 7);
  assert.strictEqual(result, 11, "Sum of 4 and 7 should be 11");
});
