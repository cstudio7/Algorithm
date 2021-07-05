// const combinationSum = (candidates, target) => {
//     let answer = []
//
//     function backtrack (candidates, target, path, pathSum, i){
//         console.log(candidates, target, path, pathSum,i)
//         if(pathSum == target){
//             answer.push(path.slice())
//             return;
//         }
//
//         if(pathSum > target || i>= candidates.length){
//             return;
//         }
//         path.push(candidates[i]);
//         backtrack(candidates, target, path, pathSum+candidates[i],i);
//         // console.log(candidates, target, path, pathSum,i)
//         path.pop();
//         backtrack(candidates,target,path,pathSum,i+1);
//     }
//     backtrack(candidates,target,[],0,0);
//     return answer;
// }
//
//
//
// console.log(combinationSum([2,3,6,7],7))
