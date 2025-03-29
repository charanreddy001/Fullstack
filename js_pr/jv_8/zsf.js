let count = 0;

document.getElementById("btnD").onclick = function() {
    count -= 1;
    document.getElementById("lbl").innerHTML = count;
}

document.getElementById("btnR").onclick = function() {
    count = 0;
    document.getElementById("lbl").innerHTML = count;
}

document.getElementById("btnI").onclick = function() {
    count += 1;
    document.getElementById("lbl").innerHTML = count;
}