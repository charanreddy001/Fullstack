// we can declare variables using (var , let, const)

// nowadays every one uses let not var keyword because inly old browsers support var

// and constant means it cannot be changed once declared

let lk = "nani";

console.log(lk);

var jk;
jk="vd";
console.log(jk);

console.log(lk,jk); // this gives space between them automatically
console.log(lk + jk);
console.log(jk + " " + lk);

const rebel = "praboss";
console.log(rebel);
//rebel = "allu"; // error bcz it is a const;

// the drawback in var is it can be overridden but not in let

var vp;
vp="blackie";

vp = "shortie";

console.log(vp); // overriden as shortie

// but not in case of let

let ll = "uro";
//let ll = "fnow"; // error 

let username = window.prompt("enter your name: ");
console.log(username);

let user;

document.getElementById("btn").onclick = function (){
    user = document.getElementById("io").value;
    console.log(user);
    document.getElementById("pol").innerHTML = user;
}

let cf = "balay";
console.log(cf,typeof cf);

bn = 90;
console.log(bn,typeof bn);

np = 67;
np = String(np);
console.log(np,typeof np);
