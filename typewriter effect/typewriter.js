let count = 0;
storestr = " ";
let str = "we are developer";
const tpw = ()=>{
    setInterval(run,100)
}
const run =() =>{
   let s = document.querySelector('#output')
    storestr = storestr + str[count]
    s.innerHTML = storestr;
    count = count+1;
    if(count>str.length-1){
        count=0;
        storestr = "";
    }
}