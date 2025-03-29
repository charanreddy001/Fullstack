let fruits = ['apple','banana','pineapple','papaya','orange','banana']

 // for each loop
fruits.forEach(
    (p) => {
        console.log(p)
    }
)

// includes method

// this method is used to check if an element is present in an array or not
// if present it returns true else false
// but it cannot be used to check if an object is present in an array or not
// object has to be checked by its variable name(reference) only
// otherwise it will return false

let check = fruits.includes('apple')
console.log(check)


// indexOf method
// this method is used to check the index of an element in an array
// if the element is not present it returns -1
// if the element is present it returns the index of the element
// it can also be used to check the index of an object in an array

let index = fruits.indexOf('banana')
console.log(index)

// if the element is present more than once it will return the index of the last occurence
let last = fruits.lastIndexOf('banana') // this will return the last index of the element
console.log(last)

// map method
// this method is used to create a new array from an existing array
// it returns a new array with the changes made to the existing array
// the changes can be made using a function
// the function can be an arrow function or a normal function

let products = [
    {name:'apple',price:20},
    {name:'banana',price:30},
    {name:'pineapple',price:40},
    {name:'papaya',price:50},
    {name:'orange',price:60},
    {name:'banana',price:70}
]
console.log(products)
console.log('-----------------------------------')

let newproducts = products.map(
    (p) => {
        p.price = p.price + 10
        return p
    }
)
console.log(newproducts)

// flat method
// it is used to remove the nested arrays from an array
// it returns a new array with the nested arrays removed
// it can also be used to remove the nested arrays upto a certain level
// the level can be specified in the argument

let ak = [1,2,3,[34,56,78,[23,45,67]]]
let newak = ak.flat() 
console.log(newak)

// flatmap method
// it is used to combine the map and flat methods
// it is used to create a new array from an existing array and remove the nested arrays

let pairs = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]
console.log(pairs)

let newpairs = pairs.flatMap(
    (p) => {
        return p[0] + p[1]
    }
)
console.log(newpairs)

// reverse method
// it is used to reverse the elements of an array
// it returns a new array with the elements reversed

let actors = ['allu arjun','prabhas','ram charan','mahesh babu','ntr']
console.log(actors)
let rev_act = actors.reverse()
console.log(rev_act)

// slice method
// it is used to extract a part of an array
// it returns a new array with the extracted part
// it takes two arguments
// the first argument is the starting index
// the second argument is the ending index
// the ending index is not included in the extracted part

let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
let newnumbers = numbers.slice(1,4)
console.log(newnumbers)

// sort method
// it is used to sort the elements of an array
// it returns a new array with the elements sorted
// it can also be used to sort the elements in descending order

let cars = ['bmw','audi','benz','volvo','jaguar']
console.log(cars)
let newcars = cars.sort() // in  strings the sort method sorts the elements in alphabetical order without any function
console.log(newcars)

let numbers1 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers1)
let newnum1 = numbers1.sort(
    (a,b) => {
        return b-a // for descending order
        // return a-b // for ascending order
    }
)
console.log(newnum1)