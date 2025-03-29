let x = 1

function call() {
    console.log('jai balayya');
    x++;
    if(x <= 5) {
        call();
    }
}

call()

function countdown(num) {
    console.log(num);
    num--;
    if(num > 0){
        countdown(num)
    }
    if(num == 1){
        console.log("GO");
    }
}

countdown(5);

function fact(num) {
    if (num == 0){
        return 1
    }else if(num > 0){
        return num * fact(num - 1)
    }else {
        return "give a positive number";
    }
}

let numb = fact(4)
console.log(numb)