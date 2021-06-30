let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const piedra_div = document.getElementById("p");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("t");


function getComputerChoice(){
    const choices = ['p', 'pa', 't'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "p") return "Piedra";
    if (letter === "pa") return "Papel";
     return "Tijera";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " gana " + convertToWord(computerChoice) + ". Ganaste!!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + " pierde contra " + convertToWord(computerChoice) + ". Perdiste.";
}

function empate(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " es igual a " + convertToWord(computerChoice) + ". Empate.";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "pt":
        case "pap":
        case "tpa":
            win(userChoice, computerChoice);
            break;
        case "ppa":
        case "pat":
        case "tp":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "papa":
        case "tt":
            empate(userChoice, computerChoice);
            break;
    }
}

if (computerScore == 15){
    result_p.innerHTML = "El juego ha terminado";
} 

function main(){
    piedra_div.addEventListener('click', function(){
        game("p");
    })

    papel_div.addEventListener('click', function(){
        game("pa");
    })

    tijera_div.addEventListener('click', function(){
        game("t");
    })
}

main();