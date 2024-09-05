//WAP TO CHECK NO. IS EVEN OR DIVISIBLE BY 3 OR NOT

/*var a=parseInt(prompt("enetr any no."))

if(a%2==0)
{
  alert("the number is even")
}
else if(a%3==0){
    alert("the number is divisible by 3")
}
else(a%3!==0)
{
    alert("the number is not divisible by 3")
}
    */
//WAP TO CHECK NUMBER IS NEUTRAL OR NOT

 /*var a=parseInt(prompt("enter the number"))

if(a=0){
   document.write("the number is neutral") 
}
else{
    document.write("the number is not neutral")
}
    */

//WAP TO PRINT ONLY EVEN NUMBERS B/W 1-30

/*var a=1;

while(a<=30)
{
    if(a%2==0)
    {
       console.log(a)
    }
    a++;
}
    */
   

//wap to take 3 input check 1 input is even or odd  .check 1 input is even so multiply 1 & 2 input.check 1 input is odd so add 3 of them

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let result;
if (num1 % 2 === 0) {
    result = num1 * num2;
    console.log("First input is even. Multiplying first two inputs.");
} else {
    result = num1 + num2 + num3;
    console.log("First input is odd. Adding all three inputs.");
}
console.log("Result:", result);

