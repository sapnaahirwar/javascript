let num = 8;
let str = "sapna ahirwar";

window.localStorage.setItem('number',num);
window.localStorage.setItem('name',str);

let obj = {
    "name" : "sapna",
    "age" :19
};

let convertedobj = JSON.stringify(obj);
window.localStorage.setItem('val',num);
window.localStorage.setItem('userinfo',convertedobj);

let arrobj = [
    {
        "name" :"sapna",
         "age" : 19
    },
    {
        "name" :"hanshu",
        "age" :21
    }
];

let convertedarrofobj = JSON.stringify(arrobj);

window.localStorage.setItem('userdata',convertedarrofobj)

//=======================retrive value from local storage

let fetcheddata = window.localStorage.getItem('userinfo');
let convert_fetched_data = JSON.parse(fetcheddata);

console.log(convert_fetched_data);



