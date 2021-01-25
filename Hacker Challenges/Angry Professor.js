// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().
//
//     Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
//
//     Example
//
//
//
//
// The first  students arrived on. The last  were late. The threshold is  students, so class will go on. Return YES.
//
//     Note: Non-positive arrival times () indicate the student arrived early or on time; positive arrival times () indicate the student arrived  minutes late.

// Solution
function angryProfessor(k, a) {
    return a.filter(student => student <= 0).length >= k ? 'NO' : 'YES';
}