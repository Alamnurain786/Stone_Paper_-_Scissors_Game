let userScor = 0;
let computerScor = 0;

const choices = document.querySelectorAll(".choice");
const actionMsg = document.querySelector('#action-message');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');


//Generate coputer choice
const genCompChoice = () => {
    const option = ['Rock', 'Paper', 'Scissors']
    const randidx = Math.floor(Math.random() * 3)
    return option[randidx]
}

//Game Draw
const drawGame = () => {
    actionMsg.textContent = "Game was draw. Play Again!.";
    actionMsg.style.backgroundColor = "orange";
}

//show winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        actionMsg.textContent = `You Win! ${userChoice} Beats ${computerChoice}`;
        actionMsg.style.backgroundColor = "green";
        userScor++;
        userScorePara.textContent = userScor;

    } else {
        computerScor++;
        computerScorePara.textContent = computerScor;
        actionMsg.textContent = `You Lost. ${computerChoice} Beats your ${userChoice}`;
        actionMsg.style.backgroundColor = "red";
    }
}

//Game win
const playGame = (userChoice) => {
    //Generate coputer choice
    const computerChoice = genCompChoice()

    //Game Draw
    if (userChoice === computerChoice) {
        drawGame()
    } else {
        //Game win 
        let userWin = true;
        if (userChoice === 'Rock') {
            userWin = computerChoice === 'Paper' ? false : true;
        } else if (userChoice === 'Paper') {
            userWin = computerChoice === 'Scissors' ? false : true;
        } else {
            userWin = computerChoice === 'Rock' ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice)
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})

