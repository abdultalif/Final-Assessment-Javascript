import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum function tests", () => {
  // Test kasus input bukan angka
  assert.strictEqual(sum("21", 12), 0, 'Expected sum("21", 12) to be 0');

  // Test kasus angka negatif
  assert.strictEqual(sum(-1, 2), 0, "Expected sum(-1, 2) to be 0");

  // Test kasus biasa
  assert.strictEqual(sum(1, 2), 3, "Expected 1 + 2 to be 3");
});
