# Critical Bugs Found in Utility Library

## BUG-001: filter.js Returns Nested Empty Array
**Severity:** HIGH | **Priority:** P2 | **Status:** Open

**Function:** `src/filter.js`

**Description:** When filtering returns no results, function returns `[[]]` instead of `[]`.

**Impact on E-Commerce:**
- Affects product search (Scenario 1, 3)
- Empty search results display incorrectly
- Could break UI rendering expecting flat array

**Test Case:** `src/__test__/manual/filter.test.js` - lines 28-37

---

## BUG-002: compact.js Removes First Truthy Element
**Severity:** CRITICAL | **Priority:** P1 | **Status:** Open

**Function:** `src/compact.js`

**Description:** Function incorrectly removes the FIRST truthy value when removing falsy values.

**Input:** `[0, 1, false, 2, '', 3]`
**Expected:** `[1, 2, 3]`
**Actual:** `[2, 3]` ← Missing element 1!

**Impact on E-Commerce:**
- **CRITICAL:** First product in search results disappears!
- Revenue loss - customers can't see/buy first product
- Data integrity issue

**Test Case:** `src/__test__/manual/compact.test.js` - line 9

**Recommendation:** DO NOT use in production!

---

## BUG-003: chunk.js Returns Malformed Array Structure
**Severity:** CRITICAL | **Priority:** P1 | **Status:** Open

**Function:** `src/chunk.js`

**Description:** Function returns array with undefined values and wrong structure.

**Input:** `chunk([1, 2, 3, 4, 5], 2)`
**Expected:** `[[1, 2], [3, 4], [5]]`
**Actual:** `[[5, undefined], undefined, undefined]`

**Impact on E-Commerce:**
- Pagination completely broken (Scenario 3)
- Customers can't browse product pages
- Unusable for pagination feature

**Test Case:** `src/__test__/manual/chunk.test.js` - line 8

**Recommendation:** DO NOT use in production!
```

---