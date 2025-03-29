function student(fn,ln) {
    this.fn = fn,
    this.ln = ln,
    this.getdetails = function() {
        return `Name: ${this.fn} ${this.ln}`
    }
}

function lnj(lid,lcst) {
    this.lid = lid,
    this.lcst = lcst,
    this.getdetails = function() {
        return `cost:${this.lcst}  Id:${this.lid}`
    }
}

let s1 = new student('charan','reddy')
s1.__proto__ = new lnj(21,3333)

console.log(s1.lid)

// polymorphism
console.log(s1.getdetails()) // child 
console.log(s1.__proto__.getdetails()) // parent 

// abstraction
// hiding details and show only which are needed

function emp(id,ename,exp){
    this.id = id
    this.en = ename
    this.e = exp
    let salary = 200000
    let showsalary = function(){
        console.log('FinalSalary:' ,salary);
    }
    this.showdetails = function(key) {
        console.log('Name:' ,this.e)
        console.log("id:" ,this.id)
        console.log('experience:',this.e)
        if(key === 'yes'){
            showsalary()
        }
    }
}

let emp1 = new emp(21,'charan',2)
console.log('---------------------')
emp1.showdetails()
console.log('---------------------')
emp1.showdetails('yes')