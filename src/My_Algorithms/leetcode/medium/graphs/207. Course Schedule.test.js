// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = new Map();
    for (const [v, u] of prerequisites) {
        if (adj.has(v)) {
            adj.set(v, adj.get(v).add(u));
        } else {
            adj.set(v, new Set().add(u));
        }
    }
    
    const visited = new Set();
    
    function dfs(v) {
        if (visited.has(v)) {
            return false;
        }

        if (!adj.has(v)) {
            return true;
        }

        visited.add(v);
        
        const adjNodes = adj.get(v);

        for (const n of adjNodes) {
            if (!dfs(n)) return false;
        }

        visited.delete(v);
        adj.delete(v);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited.has(i)) {
            if (!dfs(i)) return false;
        }
    }

    return true;
};