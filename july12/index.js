//WAP TO ADD ALL 10 ELEMENT IN Array
//WAP TO PRINT ODD NUMBER IN ARRAY 20 TO 1


let ar=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for(var i=0;i<10;i++)
{
    sum+=ar[i]
}
console.log(sum)



let arr=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
for(var i=0;i<20;i++){
    if(arr[i]%2!=0){
        console.log(arr[i])
    }
}


//for of loop:-without using indexing

let array=[10,9,8,7,6,5,4,3,2,1]

for( let v of array)
{
    console.log(v);
}
//for in loop:- print the index value

let a=[10,9,8,7,6,5,4,3,2,1]

for( let v in a)
{
    console.log(v);

}



