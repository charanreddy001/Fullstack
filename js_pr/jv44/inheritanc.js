
const jai = {
    namem:"charan",
    age:23
}

const jj = {
    salary: 150000,
    experience: 22
}

const hnt = {
    donation: 70
}


// here jj is child and jai is parent element
jj.__proto__ = jai;
console.log(jj.namem)

// child can get properties from parent but parent cannot get properties from child
hnt.__proto__ = jai;
console.log(jai.donation)