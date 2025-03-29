function teller() {
    numb = arguments.length;
    for(let i = 0;i<numb;i++){
        console.log(arguments[i])
    }
}

teller(23,345,45)

function getbill(hj) {
    let len = arguments.length;
    let sum = 0;
    for(let i = 1; i<len; i++){
        sum += arguments[i];
    }
    hj(sum);
}

function addINR(n) {
    console.log('Rs. ' + n + '/-');
}

getbill(addINR,23, 43, 54)


/*
//tutorial - 28

// set-timeout
// this function takes of input only in milliseconds

function lana() {
    console.log("hello nana!")
} 

function jo() {
    console.log("vastava")
}

function sToMs(s) {
    return s * 1000
}

setTimeout(jo,sToMs(1))
*/


// tutorial - 29

// set - interval

// we are now using above functions

/*let timer = 10;

function sayHello() {
    console.log(timer);
    timer--;
}

let myTask = setInterval(sayHello, 1000);

function stopInterval() {
    clearInterval(myTask);
    console.log("completed");
}

// Adjust the timeout to ensure it stops after the last execution of sayHello
setTimeout(stopInterval, (timer + 1) * 1000);
*/

let username = "charan"

console.log(`my name is ${username}`);

// immediate invoked functions

(function(uname) {
    console.log(uname);
})("charan");


const car = {
    name:'benz',
    brand:'nj',
    color:'black',
    start: function() {
        console.log('started.........')
    },
    stop: function(){
        console.log('stopped')
    }
}

const bike = new Object();
bike.namee = 'lanj';
bike.brand = 'BMW';
bike.start = function(){
    console.log("started.......")
}

console.log(bike.namee)
console.log(car.name)
car.start()