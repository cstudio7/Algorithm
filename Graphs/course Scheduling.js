
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
//
//     For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether the course uj is a prerequisite of the course vj or not. Note that if course a is a prerequisite of course b and course b is a prerequisite of course c, then, course a is a prerequisite of course c.
//
//     Return a boolean array answer, where answer[j] is the answer of the jth query.


// Solution 1  JavaScript With Floyd-Warshall

var checkIfPrerequisite = function(n, prerequisites, queries) {
    // let matrix = [],res = [];
    // for(let i = 0;i < n;++i) matrix.push(new Array(n).fill(false));
    // for(let ele of prerequisites) matrix[ele[0]][ele[1]] = true;
    //
    // for(let k = 0;k < n;++k) for(let i = 0;i < n;++i) for(let j = 0;j < n;++j)
    //     matrix[i][j] |= matrix[i][k] && matrix[k][j];
    //
    // let c= []
    //return queries.map(query=>{
    //     return matrix[query[0]][query[1]];
    // })
};

console.log(checkIfPrerequisite(2,[[1,0]],[[0,1],[1,0]]))


//Bfs Solution
var checkIfPrerequisite = function(n, prerequisites, queries) {
    const courses = [...Array(n)].map(() => []);

    for (let [pre, next] of prerequisites) {
        courses[next].push(pre);
    }

    const res = new Array(queries.length).fill(false);
    const checked = new Array(n).fill(false);

    for (let i = 0; i < queries.length; i++) {
        checked.fill(false);

        let [target, cur] = queries[i];
        let q = [cur];

        while (q.length) {
            cur = q.shift();
            let preCourses = courses[cur];
            for (let pre of preCourses) {
                if (pre == target) {
                    res[i] = true;
                    break;
                }
                if (!checked[pre]) {
                    checked[pre] = true;
                    q.push(pre);
                }
            }
            if (res[i] == true) {
                break;
            }
        }
    }

    return res;
};
