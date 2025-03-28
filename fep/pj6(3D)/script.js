const container = document.querySelector('.container')
const card = document.querySelector('.card')
const title = document.querySelector('.desc h2')
const img = document.querySelector('.imgbox img')

container.addEventListener('mousemove', (e) => {

  let xaxis = (window.innerWidth / 2 - e.pageX) / 20
  let yaxis = (window.innerHeight / 2 - e.pageY) / 20
  
  card.style.transform = `rotateX(${yaxis * -1}deg) rotateY(${xaxis}deg)`
  img.style.transform = `translateZ(100px) rotateX(${yaxis}deg)`
  title.style.transform = `translateZ(80px) rotateX(${yaxis}deg)`
})

// without this that transisition will be there and card move slowly 
container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
    img.style.transition = 'none'; 
})

container.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    img.style.transition = 'all 0.5s ease'; 
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    img.style.transform = `translateZ(0px) rotateX(0deg)`;
    title.style.transform = `translateZ(0px) rotateX(0deg)`;
})

/*processor buttons*/
const probuttons = document.querySelectorAll('.butt button')

probuttons.forEach((btn) => {
  btn.addEventListener('click' , ()=> {
    removeactive()
    btn.classList.add('active')
  })
})

function removeactive() {
  probuttons.forEach((btn) => {
    btn.classList.remove('active')
  })
}