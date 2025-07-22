let userScore = 0;
let computerScore = 0;
const msg=document.querySelector('#message');
let userS=document.querySelector('#user-score');
let compS=document.querySelector('#computer-score');
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*options.length);
    return options[randomIndex];
}
const drawGame=()=>{
    console.log("Game was drawed");
    msg.innerText="Game was drawed.Play again!";
    msg.style.backgroundColor="black";
}
const showScore=(userWin,userChoice,computerChoice)=>{
     if(userWin)
        {
            userScore++;
            userS.innerText=userScore;

            msg.innerText=`You win! .Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor="green";
        }
        else
        {
            computerScore++;
            compS.innerText=computerScore;
            msg.innerText=`You lose!.${computerChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
        }

}

const playGame=(userChoice)=>{
    console.log(userChoice);
    const computerChoice=genCompChoice();
    console.log(computerChoice);

    if(userChoice===computerChoice)
    {
        //draw match
        drawGame();

    }
    else
    {
        let userWin=true;
        if(userChoice=="rock")
        {
            //paper,scissor
            userWin=computerChoice==="paper"?false:true;
            
        }
        else if(userChoice=="paper")
        {
            //rock,scissor
            userWin=computerChoice==="scissors"?false:true;
        }
        else
        {
            //rock,paper
            userWin=computerChoice==="rock"?false:true;
        }
        showScore(userWin,userChoice,computerChoice);
        
       
    }
    
}
let choices=document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        playGame(userChoice);

    });
})