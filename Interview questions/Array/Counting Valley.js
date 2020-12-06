
// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
// During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a downhill, D steps.
// Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude.
// We define the following terms:
// A mountain is a sequence of consecutive steps above sea level,
// starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level,
// starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
// For example, if Gary's path is s = [DDUUUUDD], he first enters a valley 2 units deep.
// Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.

//Javascript Solution

function countingValleys(n, s) {
    let seaLevel = 0;
    let currLevel = 0;
    let valleys = 0;

    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        //update the current level
        if (s[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }


    }

    return valleys;

}


//  Java solution
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    String s = sc.next();

    int v = 0;     // # of valleys
    int lvl = 0;   // current level
    for(char c : s.toCharArray()){
        if(c == 'U') ++lvl;
        if(c == 'D') --lvl;

        // if we just came UP to sea level
        if(lvl == 0 && c == 'U')
            ++v;
    }
    System.out.print(v);
}

// c# solution

static int countingValleys(int n, string s) {
    int sum = 0;
    int count = 0;
    for(int i=0;i<n;i++){
        if(s[i]=='U'){
            if(++sum==0)
                count++;
        }
        else sum--;
    }
    return count;
}
