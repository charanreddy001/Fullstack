let ar = ["apple","mahesh","jack","jonnalagadda"]

for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}

console.log("------------------------------------------")

let stu = [
    {Name:"charan",htn:1},
    {Name:"Pranay",htn:2},
    {Name:"Shasi",htn:3}
]
console.log(stu[1].Name)

for(let i=0;i<stu.length;i++){
    console.log(`Student Name: ${stu[i].Name}\nHTN:${stu[i].htn}`)
}

// in javascript there is a direct way to push and pop by just calling
// by just calling push() and pop() functions we can do it 

let arr = ["apple","mahesh","jack","jonnalagadda"]
console.log(arr)

arr.pop()
console.log(arr)

popped = arr.pop()
console.log(popped)
console.log(arr)

arr.push("lanj")
console.log(arr)

gh = [ {stu:"hj",dgu:23},
    {stu:"dhi",dhk:19}
]

console.log(gh)
gay = gh.pop()
console.log(gh)
console.log(gay)

gh.push(gay)
console.log(gh)

gh.push({stu:"cdbis"})  // use curly braces for object pushing
console.log(gh)

// splice method()
// using splice we can remove element at the given index and can also can replace that with other element
// syntax of splice is(starting_index,No.of.elements_to delete,replace with what elements that can be many elements...... ) 

let arra = ["apple","mahesh","jack","jonnalagadda"]

arra.splice(1,1)
console.log(arra)

arra.splice(2,1,'siddu')
console.log(arra)

arra.splice(3,0,"DJ Tillu 1","DJ Tillu 2")
console.log(arra)

// concat
// this will add two or more arrays and give a new array without touching those arrays

let arrayy = ["apple","mahesh","jack","jonnalagadda"]
let jo = ['fwe','ebvr']

let concatt = arrayy.concat(jo)
console.log(concatt)

// every() method
// it is just like "and" 

let marks = [39,39,87,56,32,98]
// this will return true if all of those satisfy the condition
// every one need to pass

let result = marks.every(
    (m) => { 
        return m > 35;
    }
)

console.log("Result is:",result ? 'pass':'fail')

// some() method
// it is just like "or"
// even if one is true it will return true
// if one is pass every one is pass 

let res = marks.some (
    (n) => {
        return n > 90;
    }
)

console.log("Result is:",res ? 'pass':'fail')