function inorderTraversal(root) {
    let tourist = root;
    let solution = [];

    while(tourist !== null){
        let guide = tourist.left;

        if(tourist.left !== null) {
            while (guide.right !== null && guide.right !== tourist) {
                guide = guide.right;
            }
            if (guide.right === null) {
                guide.right = tourist;
                tourist = tourist.left;
            } else {
                guide.right = null;
                solution.push(tourist.val);
                tourist = tourist.right
            }
        } else {
            solution.push(tourist.val);
            tourist = tourist.right;
        }
    }
    return solution;
};