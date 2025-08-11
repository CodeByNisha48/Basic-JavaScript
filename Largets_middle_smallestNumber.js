num1 = Number(prompt("Enter the 1st number: "));
num2 = Number(prompt("Enter the 2nd number: "));
num3 = Number(prompt("Enter the 3rd number: "));

if (num1 > num2 && num1 > num3){
    console.log(num1," is largest number");
    if(num2 > num3){
        console.log(num2," is middle number");
        console.log(num3," is smallest number");
    }
    else if(num3 > num2){
        console.log(num3, " is middle number");
        console.log(num2," is smallest number");
    }
}
else if(num2 > num1 && num2 > num3){
    console.log(num2," is largest number");
    if(num1 > num3){
        console.log(num1, " is middle number");
        console.log(num2, " is smallest number");
    }
    else if(num3 > num1){
        console.log(num3," is middle number");
        console.log(num1, " is smallest number");
    }
}
else if(num3 > num2 && num3 > num1){
    console.log(num3, " is largest number");
    if(num1 > num2){
        console.log(num1, " is middle number");
        console.log(num2, " is smallest number");
    }
    else if(num2 > num1){
        console.log(num2," is middle number");
        console.log(num1," is smallest number");
    }
}