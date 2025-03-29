function createpe(namee, agee) {  // Function that takes name and age as arguments
    const gud = {  // Creating an object inside the function
        namee: namee,  // Assigning the name property
        agee: agee,    // Assigning the age property
        greet: function() {  // Method inside the object
            console.log(`hello`);
        }
    };
    return gud;  // Returning the created object
}

const pers = createpe("vikram", 22); // Creating a new object using the function

console.log(pers.namee);  // Output: vikram
console.log(pers.agee);   // Output: 22
pers.greet();             // Output: hello


function student(uname,m,p,c) {
    this.name = uname, // here this.your_name = name_declacred
    this.maths = m,
    this.phy = p,
    this.c = c
}

// declared an object 
const s1 = new student('vikram',32,54,45)
console.log(s1.name)
console.log(s1.maths)


// inheritance with constructor using call 

function marks(sub1,sub2,sub3) {
    this.m = sub1;
    this.p = sub2,
    this.c = sub3,
    this.totalM = function(){
        return `Total Marks: ${sub1} + ${sub2} + ${sub3}`
    }
}
function student(sid,sname,sgroup,sub1,sub2,sub3){
    this.id = sid,
    this.name = sname,
    this.grp = sgroup,
    marks.call(this,sub1,sub2,sub3)
    // this.marks = new marks(sub1,sub2,sub3) // if you do this way this will become a new object
}

const st1 = new student(1,'vikram','mPc',32,54,46)
console.log(st1)
// console.log(st1.totalM())


// inheritance with constructor using  __proto__ 

function namma(name,age) {
    this.n = name,
    this.a = age
}

function student(uid,branch) {
    this.id = uid;
    this.bra = branch;
}

const stt1 = new student(32,"cSe")
stt1.__proto__ = new namma("charan",20)

console.log(stt1.a);


// prototype property
// using this prototype we can add function to the constructor from outside 
// this reduces the memory usage

function stu(named,num){
    this.name = named,
    this.nu = num
}

stu.prototype.getdetails = function() {
    return `name is ${this.named} number is ${this.num}`
}



