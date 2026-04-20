let countNumber = 10
let countDownText= document.querySelector("h1")
let colors = ['red', 'blue', 'green', 'brown', 'pink', 'cyan', 'yellow', 'royalblue',]
function countDownFunction() {
    countNumber--
    countDownText.innerHTML = countNumber;
    countDownText.style.color = colors[Math.floor(Math.random() * 8 )]
    if(countNumber == 0){
        clearInterval(abc)
        document.querySelector("#countDown").style.display = "none";
        document.querySelector("#stop").style.display = "flex";
    }
}

let abc = setInterval(countDownFunction,1000)