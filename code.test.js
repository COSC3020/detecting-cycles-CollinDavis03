const { hasCycle } = require('./code');
const assert = require('assert');

// Test cases
let graph, expected;

graph = [];
expected = false;
assert.strictEqual(hasCycle(graph), expected, 'Test 1 Failed: Empty graph');

graph = [[]];
expected = false;
assert.strictEqual(hasCycle(graph), expected, 'Test 2 Failed: Single node with no edges');

graph = [
    [1, 2],
    [],
    [3],
    [0]
];
expected = true;
assert.strictEqual(hasCycle(graph), expected, 'Test 3 Failed: Cycle present');

graph = [
    [1, 2],
    [],
    [3],
    [1]
];
expected = false;
assert.strictEqual(hasCycle(graph), expected, 'Test 4 Failed: No cycle');

graph = [
    [1, 3],
    [2, 3],
    [3],
    [4],
    []
];
expected = false;
assert.strictEqual(hasCycle(graph), expected, 'Test 5 Failed: Disconnected graph, no cycle');

graph = [
  [1, 2, 3], // Node A
  [2, 4, 5], // Node B
  [0, 4],    // Node C
  [2],       // Node D
  [3, 6],    // Node E
  [7],       // Node F
  [4, 5],    // Node G
  [6]        // Node H
];
expected = true;
assert.strictEqual(hasCycle(graph), expected, 'Test 6 Failed: Class notes example');

graph = [
  [1, 2],
  [3, 4],
  [1, 6],
  [2, 4, 6],
  [5, 6, 7],
  [8, 4],
  [7, 2],
  [5, 3],
  []
];
expected = true;
assert.strictEqual(hasCycle(graph), expected, 'Test 7 Failed: Tutorialspoint example');

console.log('All tests passed!');
