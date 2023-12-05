window.alert("hello word");
document.write("<center><h1>Hello world</h1></center>");
let x = 3;
let y = 6;
let z = 8;
let A = x + y + z;
let B = (2*x) + (3*z);
console.log("A = ",A);
console.log("B = ",B);
window.alert(A);
window.alert(B);
document.write(A);
document.write(B);
document.write("<p>", A, "</p>");
document.write("<p>B=", B, "</p>");

fname = prompt("What's your name?");
document.write(fname);

let multiplyby = prompt("Please enter a number");

for (counter = 1 ; counter <= 10 ; counter = counter + 1)
{
    document.write("<p>", counter, " * ", multiplyby, " = ", counter*multiplyby, "</p>");

}