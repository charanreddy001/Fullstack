// this has to be connected at last in html file
alert("the paradise");
// you can write just alert() or you can write window.alert() both are same because we can perform operation in window itself

document.getElementById('ni').innerHTML = "hi bro"; // this overides the content present in it

// see onclick in html file

console.log("dad calls me ___"); // this will be only visible in console section of developer tools

let button = document.getElementById('change')

button.addEventListener("click", theme)

function theme() {
    document.body.classList.toggle('darkmode')
}