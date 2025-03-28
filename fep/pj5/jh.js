// function cl(j) {
//     console.log(j);
// }



// console.log(articles)

// let endline = window.innerHeight * 0.7

// console.log(window.innerHeight)

// console.log(endline)

//let articletop = articles[0].getBoundingClientRect()
//console.log(articletop);

// calling below function

const articles = document.querySelectorAll(".article");

let endline = window.innerHeight * 0.5

window.addEventListener('scroll', checkarticle)

function checkarticle() {
    // let endline = window.innerHeight * 0.5

    articles.forEach((article) => {
        let articletop = article.getBoundingClientRect().top;
    if(articletop < endline) {
        article.classList.add('show')
    }else{
        article.classList.remove('show')
    }
    })   
}
