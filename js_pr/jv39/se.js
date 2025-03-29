const student = {
    getDetails: function(m1,m2,m3) {
        let totalmarks = m1 + m2 + m3
        console.log(`hey ${this.firstName} ${this.secondName},\n`) 
        console.log(`your total marks are ${totalmarks}`)
    }
}

const s1 = {
    firstName: 'Charan',
    secondName: 'Reddy'
}

const s2 = {
    firstName: 'bala',
    secondName: 'babu'
}

const s3 = {
    firstName: 'ram',
    secondName: 'Charan'
}

let lanj = student.getDetails.bind(s1);

lanj(78,45,87)

let koi = student.getDetails.bind(s3)

koi(24,90,65)


// arrow functions

let add = (a,b) => a+b;

console.log(add(23,2));

let dou = (a,b) => a*b;
console.log(dou(23,2))

// for in looSp
let studentt = {
    fn:'cahrna',
    ln:'reddy',
    sal:3443511,
    html:94,
    css:92,
    js:77
}

for(i in studentt){
    console.log(i,':',studentt[i])
}

let writeEle = document.getElementById('output');

if (writeEle) { 
        writeEle.innerHTML = "<h3>Student Details:</h3>";
    for (let j in studentt) {
        writeEle.innerHTML += `<p><strong>${j}:</strong> ${studentt[j]}</p>`;
    }
} else {
    console.error("Element with id 'output' not found!");
}
