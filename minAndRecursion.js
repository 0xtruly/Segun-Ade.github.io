function min(num1, num2) {

    if (num1 > num2) {
        return "the min between " + num1 + " and " + num2 + " is: " + num2
    } else {
        return "the min between " + num1 + " and " + num2 + " is: " + num1
    }

};
console.log(min(0, 10));
console.log(min(0, -10));

//Recursion
var isEven = (num) => {
    var t = true;
    if (num % 2 === 0 && num > 0) {
        return t;
    } else if ((num < 0)) {
        return "cannot evaluate negative numbers";
    } else {
        return !t;
    }
}
console.log(isEven(-8));

//another practice
function userDetails(name, occupation, location) {
    console.log(name + " is a " + occupation + " living in the city of " + location);

}
console.log(userDetails('Segun Ade', 'Front-end_Developer', 'Lagos'))