let mc = {
    uname: 'rfhb',
    age:23,
    ds:12
}

// let fn = mc.uname;
// let a = mc.age;
// let dsp = mc.ds;

// console.log(a)

let {uname:s, age:l,ds:er} = mc

// let s = 'lo';

console.log(s)

// if change value here it will not effect the original value 

let person = {
    firstName: "charan",
    secondName:"Reddy",
    age:32,
    country:"India",
    State:"Andhra Pradesh"
}

function moto({firstName:fn,secondName:sn,age:a}){
    console.log(a)
}
moto(person)