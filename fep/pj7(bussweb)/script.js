const menuItems = document.querySelectorAll('nav ul li');

menuItems.forEach((li) => {
    li.addEventListener('click',()=>{
        removeactiveclass();
        li.classList.add('active')
    })
})

function removeactiveclass() {
    menuItems.forEach((li) => {
        li.classList.remove('active')
    })
}