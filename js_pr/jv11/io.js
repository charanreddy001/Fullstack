let jk = 8

if(jk >= 90) {
    console.log('best movie')
} else {
    console.log('average movie')
}

let ji = 79

if(ji >= 90){
    console.log("GPA: 10")
} else if (ji >= 80 && ji <=89) {
    console.log("GPA: 9")
} else if (ji >= 70 && ji <= 79) {
    console.log("GPA: 8")
} else if (ji >= 60 && ji <= 69) {
    console.log("GPA: 7")
}

function mycall() {
    console.log('hello')
}

mycall()

function jai() {
    console.log("jio");
    mycall();
}

jai()

let lan = function() {
    console.log('balakrishna')
}

lan()

function add(firstnumber, secondnumber) {
    let result = firstnumber + secondnumber;
    return result; // if return is present otherwise it will directly give value if it is console.log()
}

result = add(90,23)
console.log(result)
