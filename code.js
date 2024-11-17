function hasCycle(graph) {
    //Track the visited nodes
    const visited = new Set(); 
    //DFS = Depth First Search 
    function DFS(node, parent) { 
        visited.add(node); //Mark current node visited

        //Iterate over all neighbors of current node
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                if (DFS(neighbor, node)) return true; //Recur on unvisited neighbors
            } else if (neighbor !== parent) {
                return true; //cycle detected 
            }
        }
        return false; //No cycle detected at all
    }
    //Handle disconnected components 
    for (let node = 0; node < graph.length; node++) {
        if (!visited.has(Number(node))) {
            if (DFS(Number(node), -1)) return true; //Start DFS if node has not been visited
        }
    }
    return false; //No cycle detected. 
}

module.exports = { hasCycle }; 
