

// Using Dfs
class Solution {
    Map<Integer, List<Integer>> gph = new HashMap<>();
    boolean dfs(int source, int target, HashSet<Integer> visited) {
    if(visited.contains(source)){
        return false;
}

    if(source == target){
        return true;
    }
    visited.add(source);
    for(int i : gph.getOrDefault(source, new Arraylist<>())){
        if(dfs(i, target, visited)){
            return true;
        }
}
    return false ;
}

public int[] findRedundantConnection(int[][] edges){
        for(int[] edges : edges) {
            int u = edges[0];
            int v = edges[1];

            if(dfs(u,v, new HashSet<>())){
                return edge;
            }
            List<Integer> list1 = gph.getOrDefault(u, new AssrayList<>());
            list1.add(v);
            gph.put(u, list)

        List<Integer> list2 = gph.getOrDefault(v, new AssrayList<>());
        list1.add(u);
        gph.put(v, list2)
    }
}
}

//Using Union Find
