const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

describe('Cycle Detection Tests', () => {
    test('Graph with a cycle', () => {
        // Graph: 0 - 1, 1 - 2, 2 - 0 forms a cycle.
        const graph = {
            0: [1],
            1: [0, 2],
            2: [1, 0],
        };
        expect(hasCycle(graph)).toBe(true); // Should detect a cycle.
    });

    test('Graph without a cycle', () => {
        // Graph: 0 - 1, 1 - 2 does not form a cycle.
        const graph = {
            0: [1],
            1: [0, 2],
            2: [1],
        };
        expect(hasCycle(graph)).toBe(false); // Should not detect a cycle.
    });

    test('Disconnected graph without cycles', () => {
        // Graph: 0 - 1, 2 - 3 are two disconnected components, no cycles.
        const graph = {
            0: [1],
            1: [0],
            2: [3],
            3: [2],
        };
        expect(hasCycle(graph)).toBe(false); // Should not detect a cycle.
    });

    test('Single vertex graph', () => {
        // Graph with one node and no edges.
        const graph = {
            0: [],
        };
        expect(hasCycle(graph)).toBe(false); // Single vertex cannot have a cycle.
    });

    test('Graph with self-loop', () => {
        // Graph: 0 - 0 (self-loop) is a cycle.
        const graph = {
            0: [0],
        };
        expect(hasCycle(graph)).toBe(true); // Should detect a cycle due to self-loop.
    });
});
