//a for loop
for (n = 1; n <= 100; n++) {
    console.log(n);
}

for (n = 1; n <= 100; n++) {
    //prints the result of n
    console.log(n)
    //checks for numbers divisible by 3 from 1-100 and prints Fizz
    if (n%3==0) {
        console.log("Fizz");
    }
    //checks for numbers divisible by 5 from 1-100 and prints Buzz
    if(n%5==0){
        console.log("Buzz")
    }
    //checks for numbers divisible by 3 and numbers divisible by 5 from 1-100 and prints FizzBuzz
    if (n%3==0 && n%5==0){
        console.log("FizzBuzz")
    } {
        
    }
}


var num = 25;
var result = num++;
console.log(result)
console.log(num)

var course1 = parseInt(prompt("what was your score in this course", "type it"));
var course2 = parseInt(prompt("what was your score in this course", "type it"));
var course3 = parseInt(prompt("what was your score in this course", "type it"));
var course4 = parseInt(prompt("what was your score in this course", "type it"));
var course5 = parseInt(prompt("what was your score in this course", "type it"));

var totalScore = course1 + course2 + course3 + course4 + course5;
var percentageScore = totalScore * 100 / 250;
alert (percentageScore);

if (percentageScore >=70) {
    alert("your grade is A "<br>" you've been offered a scholarship to study "<br>" abroad");
} 
else if (percentageScore >= 60) {
    alert("your grade is B");  
} else if (percentageScore >= 50) {
    alert("your grade is C");
}else if (percentageScore >= 40) {
    alert("your grade is D");
}else{
    alert("sorry you didn't pass, <br> try better next time")
}