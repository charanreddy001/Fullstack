let lanj=''
s_list = '';
fetch('stud.json') // fetch is executed first but .then is executed last so both will be executed at last
.then(Response => Response.json())
.then(sdata => {
    // let ke = Object.keys(sdata)
    // console.log(ke)
    console.log(sdata) // data is converted into object format
    console.log(sdata.students[1].skills[1])
    sdata.students.forEach(Element => {
        console.log(Element.name)
        s_list += `<li>${Element.name} - ${Element.age}</li>`
    });
    document.getElementById('slist').innerHTML = s_list;

    txt = JSON.stringify(sdata)  // this converts object as text so that you can send it to server
    console.log(txt)  // now this all info is a text 

    obj=''
    obj = JSON.parse(txt) // convert text to object 
    console.log(obj)
})

console.log('-------------------------------------------------')

e_list = ''
fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(udata => {
    console.log(udata)
    udata.forEach(Element => {
        console.log(Element.email)
        e_list += `<li>${Element.email}</li>`
    });
    document.getElementById('elist').innerHTML = e_list
})

// these are executed at first
let person_json = '{"Name" : "charan", "age": 19, "isdev":true}'
console.log(person_json)
conv=''
conv = JSON.parse(person_json)
console.log(conv)

conv_key_array = Object.keys(conv)
console.log("this is key - 2 :",conv_key_array[1])
