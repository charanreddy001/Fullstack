let input = document.querySelector('#inp')
let btn = document.querySelector('#btn')
let output = document.querySelector('#outp')

function getfact(n) {
    if(n == 0) {
        return 1;
    }
    else {
        return n * getfact(n-1);
    }
}

btn.addEventListener('click',() => {
    // let num = parseInt(input.value);

    const numstr = input.value.trim();

    if(!numstr) {
        playsound();
        output.innerHTML = 'Please Enter A Number!';
        input.value = '';
        return
    }

    const num = parseInt(numstr)

    if(isNaN(num) || num < 0) {
        playsound();
        output.innerHTML = 'Positive integers only!';
        input.value = '';
        return;
    }

    if(num > 20) {
        playsound();
        output.innerHTML = 'Very Big Number!';
        input.value = '';
        return;
    }

    output.innerHTML = `${num}! = ${getfact(num)}`;
    console.log(getfact(num))

    input.value = '';  // to give blank in input every time you press get factorial
});

function playsound() {
    let sound = new Audio('sounds/beep.mp3')
    sound.play()
}