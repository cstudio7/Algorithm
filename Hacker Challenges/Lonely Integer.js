There are N integers in an array A. All but one integer occur in pairs. Your task is to find out the number that occurs only once.

    Input Format
The first line of the input contains an integer N indicating number of integers. The next line contains N space separated integers that form the array A.

    //Solution

    function findOdd(A) {
    let res = 0;
    for( let num in A) {
        res ^= A[num];
    }
    return res;
}

