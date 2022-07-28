function computerPlay(){
    let computerChoiceArray = ["rock","paper","scissors"]
    let rdmComputerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
    return rdmComputerChoice
}



let playerScore = 0 
let computerScore = 0 

function playRound(playerSelection,computerSelection)
{
    
   

    if((playerSelection=="rock") && (computerSelection=="rock") ||(playerSelection=="paper") && (computerSelection=="paper") || (playerSelection=="scissors") && (computerSelection=="scissors"))
    {
        return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:Equal \nYour Score : ${playerScore} | Computer Score : ${computerScore}`
    }

    if((playerSelection=="rock") && (computerSelection=="paper") || (playerSelection=="rock") && (computerSelection=="scissors"))
    {
        if((playerSelection=="rock") && (computerSelection=="paper"))
        {
            computerScore+=1
            
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You loose\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }

        else
        {
            playerScore+=1
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You won\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }
    }
    if((playerSelection=="paper") && (computerSelection=="rock") || (playerSelection=="paper") && (computerSelection=="scissors"))
    {
        if((playerSelection=="paper") && (computerSelection=="rock"))
        {
            playerScore+=1
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You won\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }

        else 
        {   
            computerScore+=1
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You loose\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }
    }

    if((playerSelection=="scissors") && (computerSelection=="rock") || (playerSelection=="scissors") && (computerSelection=="paper"))
    {
        if((playerSelection=="scissors") && (computerSelection=="rock")) 
        {   
            computerScore+=1
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You loose\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }
        else 
        {
            playerScore+=1
            return `You chose ${playerSelection} \nComputer chose ${computerSelection} \nResult:You won\nYour Score : ${playerScore} | Computer Score : ${computerScore}`
        }
    }

    






}

function game()
{
    for(let i = 0; i<5;i++){
        let playerChoice = prompt("Choose rock,paper or scissors")
         
        console.log(playRound(playerChoice,computerPlay()))
    }
    if(playerScore>computerScore){
        return `You Won The Game`
    }
    else if (playerScore<computerScore)
    {
        return `You Loose The Game`
    }
    else return `Equal`
}
console.log(game())






