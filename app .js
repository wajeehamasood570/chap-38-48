// chp 38---42
// q1
// function power(a,b){
//     var a = +prompt("Enter Base Number:");
//     var b = +prompt("Enter Exponent Number:");
//     var c = Math.pow(a,b);
//     return c;

// }

// var d  = power();
// alert(d);


//q2

// function isLeap()
// {
//     var a = +prompt("Enter Year Number:");
//     if (a % 4 == 0 || a % 100 == 0)
//     {
//         alert("It's a Leap Year");
//     }
//     else 
//     {
//         alert("It's not a leap Year");
//     }

// }
// isLeap();


//q3
// var a = +prompt("Enter  side A length:");
// var b = +prompt("Enter  side B length:");
// var c = +prompt("Enter  side C length:");

// function sides() {
//     var s = ((a + b + c) / 2);
//     return s;
// }


// var d = sides();



// function area() {
//     var ar = (d * (d - a) * (d - b) * (d - c));
//     return ar;
// }

// var e = area();
// alert("The area of triangle is :" + e);

// q4

// var std1Math = +prompt("Enter Math marks");
// var std2Math = +prompt("Enter maths  marks");
// var std3Math = +prompt("Enter maths marks");

// function main() {

//     function percentage() {

//         var obtMarks = (100 *(std1Math + std2Math + std3Math) ) / 300;
//         return obtMarks;

//     }

//     var obt = percentage();

//     function average() {
//         var a = ((std1Math + std2Math + std3Math) / 3);
//         return a;
//     }

//     var avg = average();

//     alert("Percentage is :" + obt);
//     alert("Average is : " + avg);
// }
// main();

//q6
// var string = "A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks.Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, production of goods, and communication";
// var newtext = string.replace(/[aeiou]/g , '');
// alert(newtext);

//q7
// var str = "Please read this application";


//q8
 
var distance = +prompt("Enter distance between 2 cities:");
alert("Distance in Km is: " +  distance);

function meter(){
     var m = distance * 1000;
     alert("Distance in meter is: " + m + "<br>");
 }

 function feet(){
    var f = distance * 3280;
    alert("Distance in feet is: " + f + "<br>");
}
function inches(){
    var inc = distance * 39370.079;
    alert("Distance in inches is: " + inc + "<br>");
}
function cen(){
    var c = distance * 100000;
    alert("Distance in Centimeter is: " + c + "<br>");
}