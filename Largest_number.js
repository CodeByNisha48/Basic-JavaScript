a = Number(prompt("Enter the first number: "));
b = Number(prompt("Enter the second number: "));
c = Number(prompt("Enter the third number: "));

if (a >= b && a >= c){
    console.log(a, " is largest number");
}
else if(b >= c && b >= a){
    console.log(b, " is largest number");
}
else{
    console.log(c, " is largest number")
}