function hasCycle(graph) {
    //Track the visited nodes
    const visited = new Set(); 
    const recStack = new Set(); 
    //DFS = Depth First Search 
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
    
    or (let node = 0; node < graph.length; node++) {
        if (!visited.has(node)) {
            if (DFS(node)) return true;
        }
    }
    return false;
}

module.exports = { hasCycle }; 
