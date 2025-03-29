const person = {
    uname: 'charan',
    age:20,
    designation: 'manager',
    experience: 10,
    salary: 130000,
    promotion: function() {
        let iseligible = false;
        if(this.designation == 'manager'){
            if(this.experience >= 4){ 
                this.iseligible = true;
                this.designation = 'CEO';
                this.salary += this.salary * 20/100;
            }else{
                this.iseligible = false;
            }
        }
        else if(this.designation == 'CEO'){
            if(this.experience >= 10) {
                this.iseligible = true;
                this.designation = 'Owner';
                this.salary += this.salary * 70/100;
            }else {
                this.iseligible = false;
            }
        }
        return this.iseligible;
    }
}

console.log(person.uname)

if(person.promotion()) {
    console.log(person.uname + ' ' + 'is eligible for promotion');
}else {
    console.log(`${person.uname} is not eligible`); // you should not use + ' ' in this type
}


// adding members from outside
const ani = {}

ani.name = 'ranbir kapoor';  // in this method you can add members from outside

console.log(ani.name) 


// accessing members by using brachet notation(instead of dot(.))
ani['age'] = 23;
console.log(ani['age'])


// function call

const persoon = {
    fullname: function() {
        return this.firstname  + " " + this.secondname;
    }
}

const person1 = {
    firstname : "jai",
    secondname: "balakrishna"
}

const person2 = {
    firstname : 'charan',
    secondname : 'reddy'
}

console.log(persoon.fullname.call(person2)) // here you should not use fullname() it generate error 

function printfullname() {
    return this;
}

console.log(printfullname.call(person1))