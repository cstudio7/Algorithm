

function bfs(graph, root) {
    var nodesLen = {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    var quene = [root];
    var current;

    while (quene.length != 0) {
        current = quene.shift();

        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while(idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for(let j = 0; j< neighborIdx.length; j++){
            if(nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                quene.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}
