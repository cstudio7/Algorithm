


// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
//
//     The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
//
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]




//Bfs
// time: O(V+E), vectors + edges
// space: O(V+E) max due to the returned array

// this would find whatever connections there are, then it would add it to the array and push it into the queue, to later be iterated and connected
var allPathsSourceTarget = function(graph) {
    let finalArr = []
    let queue = [[0]] // default [0] since the path always starts at 0
    while (queue.length > 0) {
        let curr = queue.shift()
        // console.log(curr)

        let last = curr[curr.length-1] // detects the last element of the current path

        // detects the array's last element, if it is n-1, then push it into the finalArr because it has fround a path from 0 -> n-1 for that specific pathway
        if (last === graph.length-1) {
            finalArr.push(curr)
            continue
        }

        // creates new instances if there are more paths
        // graph[last].length detects the paths that specific node has
        for (let i=0; i<graph[last].length; i++) {
            // [...curr] so I can create new array instances or else it would add to the previous resulting in [0,1,2,3,3] instead of [0,1,3] and [0,2,3]
            let newArr = Array(...curr, graph[last][i])
            queue.push(newArr)
        }
    }
    return finalArr
}

//Dfs
// time: O(V+E), vectors + edges
// space: O(V+E) due to the returned array

var allPathsSourceTarget = function(graph) {
    let resArr = []
    let currPath = [0] // starting path
    let connectors = graph[0] // different paths to connect to
    dfs(graph, currPath, connectors, resArr)
    // console.log("final answer:", resArr)
    return resArr
};

// this finishes each path array before going to the next one
function dfs(graph, currPath, connectors, resArr) {
    // console.log("currPath:", currPath)

    if (currPath[currPath.length-1] === graph.length-1) {
        // console.log("currPath has ended, moving to the next path...")
        // console.log()
        resArr.push(currPath)
        return
    }

    // the for loop keeps tracks of which subarray it is iterating. Therefore doesn't need reiterate the given subarrays in graph
    for (let i=0; i<connectors.length; i++) {
        // this newArr is to give itself a new array due to it being instances of each other but they would have different values that are its connections
        let newArr = new Array(...currPath, connectors[i])
        // console.log("connectors:", connectors)
        // console.log("connectors[i]:", connectors[i])
        // console.log("graph[connectors[i]]:", graph[connectors[i]])

        // graph[connectors[i]] because if the current position is in 3, you go to the specific placement in the array to determine its connections
        // Ex.                  [[4,3,1],[3,2,4],[3],[4],[]].
        // Index as reference:     0        1     2   3  4
        // If you are on [0][1] which is #3 in [4,3,1]. You need to go the element 3rd index, which is [4] at the end of the array.

        // then from that [4], you run the for loop again, and when you go to the 4th index, you reach []. Therefore it gets returned

        // so essentially, it gets a index value and pushes it to resArr, then it goes that values index in the graph and connects that value to the resArr. Until the last element of resArr is equal to n-1
        dfs(graph, newArr, graph[connectors[i]], resArr)
    }
}
