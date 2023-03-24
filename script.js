 let initialnumber = 20;
let highscore = null;
let randomnumber = getrandom(20);

function getrandom(max){
    return Math.floor(Math.random()*max);
}
console.log(randomnumber);

function reloadgame(){
    document.querySelector('.number').textContent = "?"
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = "20"
    document.querySelector('.highscore').textContent = "0"
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.guess').value = ""
    randomnumber = getrandom(20);

}

function maincheck(){
    var inputvalue = document.querySelector('#guessid').value

    if(initialnumber!=0){
        if(inputvalue>randomnumber){
            document.querySelector('.message').textContent = "Guess Value is High"
            initialnumber--
            document.querySelector('.score').textContent = initialnumber
            document.querySelector('body').style.backgroundColor = "#222"




        }
        else if(inputvalue<randomnumber){
            document.querySelector('.message').textContent = "Guess Value is Low"
            initialnumber--
            document.querySelector('.score').textContent = initialnumber
            document.querySelector('body').style.backgroundColor = "#222"
        }
        else{
            document.querySelector('.message').textContent = "Hurray Your Value Matched"
            initialnumber--
            document.querySelector('.score').textContent = initialnumber
            document.querySelector('body').style.backgroundColor = "green"
            document.querySelector('.number').textContent = inputvalue
            document.querySelector('.highscore').textContent = inputvalue
        }
    }
    else{
        document.querySelector('.message').textContent = "Game Over"

    }
}
