const button = document.querySelector("button");
const countNumber = document.querySelector(".counter");
const inputsHtml = document.querySelector(".inputs");

let interval
let count

button.addEventListener("mousedown", countWhenHold);
button.addEventListener("mouseup", buttonRelease );

function countWhenHold() {

    count = 0;
    countNumber.innerHTML = count;
    inputsHtml.innerHTML = "";

    interval = setInterval(function(){

        count++;
        countNumber.innerHTML = count;

    }, 100);

    this.textContent = "Release to stop counting";
}



function buttonRelease() {

    this.textContent = "Press and hold to count";
    clearInterval(interval);


    for(i = 1; i <= count; i++){
        inputsHtml.innerHTML += `<input name="${i} id="${i}" placeholder="Input ${i}">`
    }

}