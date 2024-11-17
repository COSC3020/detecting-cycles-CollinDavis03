function hasCycle(graph) {
    const visited = new Set(); // Tracks visited nodes
    const recStack = new Set(); // Tracks nodes in the current recursion stack

    function DFS(node) {
        if (recStack.has(node)) return true; // Cycle detected
        if (visited.has(node)) return false; // Node already fully explored

        visited.add(node);
        recStack.add(node);

        for (const neighbor of graph[node] || []) {
            if (DFS(neighbor)) return true; // Recur for neighbors
        }

        recStack.delete(node); // Remove node from recursion stack
        return false;
    }

    for (let node = 0; node < graph.length; node++) {
        if (!visited.has(node)) {
            if (DFS(node)) return true;
        }
    }
    return false;
}

module.exports = { hasCycle };
