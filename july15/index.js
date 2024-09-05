//splice function:- any element to add in any place.
//ar.splice(index no.,no.element)
//variable is called object.
//object is work without any class.user defined datatype,multiple type of data,key values pair data,
//defined object:- defined by {}.{key:value,key:value,and so on}
//. is called access member function.
//add new element.

let ar=[4,6,3,4,5,6]
ar.splice(2,2,"sapna")
console.log(ar)

let ob={name:"saket",
    education:"graduated",
    age:25,
    contactnumber:855445,
    address:"mp nagar bhopal"


}
console.log(ob.name)//print the object key values
for(let k in ob){
    console.log(ob[k])//print the values of key
}
 let s=Object.keys(ob)
 console.log(s[0])
  let h=Object.values(ob)
  console.log(h)