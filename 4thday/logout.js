// let ans = window.confirm("do you really want to logout")

// if(ans){
//     window.alert("the id is logout")
// }
// else
// {
//     window.alert("invalid click")
// }
let num1 = window.prompt("enter number 1")
let num2 = window.prompt("enter number 1")
let num3 = window.prompt("enter number 1")

if(num1>num2 && num1>num3)
{
    window.alert("the num1 is greater")
}
else if(num2>num3 && num2>num1)
{
    window.alert("the num2 is greater")
}
else{
    window.alert("the num3 is greater")
}