function spacefind(){
    let str = document.querySelector('#val').ariaValueMax;
    console.log(str);
    let count = 0;
    for(i=0 ; i<str.length;i++){
        if(str[i] === " "){
            count = count + 1;
        }
    }
    document.querySelector('#output').innerHTML = count;
    console.log(count)
}