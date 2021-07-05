
//
//
// A shopaholic has to buy a pair of jeans, a pair of shoes, a skirt, and
// a top with budgeted dollars. Given the quality of each product and the price per unit,
// determine how many options there are to  buy all items. If required, all budgeted dollars can be spent

// Example
// priceOfjeans = [2,3]
// priceOfShoes =[4]
// priceOfskirts =[2,3]
// priceOfTops = [1,2]
// budgeted = 10


//Brute force method

// const shoppersDelight = (a,b,c,d, budget) => {
//     let count = 0;
//     for(let i = 0; i<a.length; i++){
//         for(let j = 0; j<b.length; j++){
//             for(let k = 0; k<c.length; k++){
//                 for(let l = 0; l<d.length; l++){
//                     if(a[i]+b[j]+c[k]+d[l] <= budget){
//                         count++
//                     }else break
//                 }
//             }
//         }
//     }
//     return count
// }
//
// console.log(shoppersDelight([4],[3,4,1],[3,2],[4], 12))


// Question: 2. Shopper's Delight A shopaholic has to buy a pair of jeans, a pair of shoes, a skirt, and a top...
// (3 bookmarks)
// Flag
// 2. Shoppers Delight A shopaholic has to buy a pair of jeans, a pair of shoes, a skirt, and a top with budgeted dollars. GiveFunction Description Complete the getNumberOfOptions function in the editor below. getNumberOfOptions has 5 parameters: int pSample Input STDIN Function 1 4 priceOfJeans[] size a = 1 priceOfJeans [4] priceofShoes [] size b = 3 priceofShoes [3, 4, 1]STDIN Function 2 priceOfJeans[] size a = 2 priceOfJeans [2, 3] 2 → = 3 1 4 1 priceofShoes [] size b = 1 priceofShoes [4] pricSample Input STDIN Function 1 1 → 1 1 4 = 1 → priceOfJeans[] size a = 1 priceOfJeans [1] priceofShoes [] size b = priceofShoeJava please!
//
//     Show transcribed image text
// View comments (2)
// Expert Answer
// Anonymous's Avatar
// Anonymous answered thisWas this answer helpful?
//     Thumbs up inactive1Thumbs down inactive0
// 493 answers
// Java code for this problem statement can be easily done by using four layer for loop. The logic is very simple, Check the sum of each element of the first array with all the other array element combinations using four layer for loop and check if the sum of that combination is less than budget. If yes then increment the result count.
//
//     The Java code :
//
//
// //Importing Scanner class to create a Scanner object to read user input
//     import java.util.Scanner;
//
// public class ShoppersDelight {
//
//     // getInput() function takes an integer 'j' as input
//     // and reads an array of size 'j' and returns it
//     // This function will be called 4 times in this program
//     public static int[] getInput(int j) {
//     int [] ar = new int [j];
//     Scanner scan1 = new Scanner(System.in);
//     System.out.printf("Enter %d jeans options one by one by pressing enter: ",j);
//     for(int i=0;i<j;i++) {
//     ar[i]=scan1.nextInt();
// }
// return ar;
// }
//
// // getNumberOfOptions() function takes 5 parameters as input
// // It contains a four layer for loop, which checks all possible unique combinations
// public static long getNumberOfOptions(int [] jeans, int[] shoes,int[] skirts,int[] tops,int budget) {
//     long count =0;
//     //four layer for loop to check all combinations of four arrays
//     for(int i=0; i<jeans.length;i++) {
//         for(int j=0; j<shoes.length;j++) {
//             for(int k=0; k<skirts.length;k++) {
//                 for(int l=0; l<tops.length;l++) {
//                     // Checking if the sum of this combination is less than
//                     // or equal to given budget. If yes increment count
//                     if (jeans[i]+shoes[j]+skirts[k]+tops[l]<=budget)
//                         count = count +1;
//                 }
//             }
//         }
//     }
//     //count contain final result, it is returned to main() function
//     return count;
// }
//
// // Program execution starts here
// public static void main(String[] args) {
//     int []jeans =new int [10];
//     int []shoes = new int [10];
//     int []skirts = new int [10];
//     int []tops = new int [10];
//     //Creating a Scanner object to read user input
//     Scanner scnr = new Scanner(System.in);
//     //Prompting for input and reading input
//     System.out.printf("Enter no.of options of jeans available: ");
//     int j = scnr.nextInt();
//     System.out.printf("Enter no.of options of shoes available: ");
//     int s = scnr.nextInt();
//     System.out.printf("Enter no.of options of skirts available: ");
//     int sk = scnr.nextInt();
//     System.out.printf("Enter no.of options of tops available: ");
//     int t = scnr.nextInt();
//     System.out.printf("Enter total Budget for shopping: ");
//     int budget =scnr.nextInt();
//
//     //Calling getInput() function four times to read four arrays
//     jeans = getInput(j);
//     shoes = getInput(s);
//     skirts = getInput(sk);
//     tops = getInput(t);
//
//     //Calling getNumberOfOptions() function to calculate no.of unique ways to shop
//     long options = getNumberOfOptions(jeans,shoes,skirts,tops,budget);
//
//     //Printing final output. i.e no.of possible ways to shop
//     System.out.printf("No.of options: %d",options);
//
// }
//
// }
// By using getInput() method, we read four arrays from user. Then these four arrays along with the budget is sent to the getNumberOfOptions() method. In this method using four for loops, each for loop for an array, we checked for all combinations of each element of first and checked if that combination sum is less than given budget.
//
//     I have provided comments in the program explaining lines of code. I have tested the code with many cases and it is doing good. I am sharing few output screenshots for your reference.
//
//     Enter no.of options of jeans available: 2 Enter no.of options of shoes available: 1 Enter no.of options of skirts available:
//
//     Enter no.of options of jeans available: 1 Enter no.of options of shoes available: 1 Enter no.of options of skirts available:
//
//     Enter no.of options of jeans available: 1 Enter no.of options of shoes available: 3 Enter no.of options of skirts available:
