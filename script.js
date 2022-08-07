function computerPlay(){
    
    let computerChoiceArray = ["rock","paper","scissors"]
    let rdmComputerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
    return rdmComputerChoice
}



let playerScore = 0 
let computerScore = 0 
let h2 = document.createElement("h2")

let winnerRound = document.querySelector(".round-container")
let H2 = document.createElement("h2")

let userScore = document.querySelector(".userScore")
let compScore = document.querySelector(".compScore")

userScore.style.cssText="color:royalblue"
compScore.style.cssText="color:red"
let scoreContainer = document.querySelector(".score-container")






function playRound(playerSelection,computerSelection)
{
    
   

    if((playerSelection=="rock") && (computerSelection=="rock") ||(playerSelection=="paper") && (computerSelection=="paper") || (playerSelection=="scissors") && (computerSelection=="scissors"))
    {
        
        h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
        H2.textContent="Equal"
        displayChoice.appendChild(h2)
        winnerRound.appendChild(H2)
        
    }

    if((playerSelection=="rock") && (computerSelection=="paper") || (playerSelection=="rock") && (computerSelection=="scissors"))
    {
        if((playerSelection=="rock") && (computerSelection=="paper"))
        {
            computerScore++
            
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="Computer Wins"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)
           

        }

        else
        {
            
            playerScore+=1
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="You Win"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)
            

        }
    }
    if((playerSelection=="paper") && (computerSelection=="rock") || (playerSelection=="paper") && (computerSelection=="scissors"))
    {
        if((playerSelection=="paper") && (computerSelection=="rock"))
        {
            
            playerScore++
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="You Win"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)
            

        }

        else 
        {   
            
            computerScore++
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="Computer Wins"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)
            

        }
    }

    if((playerSelection=="scissors") && (computerSelection=="rock") || (playerSelection=="scissors") && (computerSelection=="paper"))
    {
        if((playerSelection=="scissors") && (computerSelection=="rock")) 
        {   
            
            computerScore++
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="Computer Wins"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)

        }
        else 
        {
            
            playerScore++
            h2.textContent=`You : ${playerSelection.toUpperCase()} | Computer : ${computerSelection.toUpperCase()}`
            H2.textContent="You Win"
            displayChoice.appendChild(h2)
            winnerRound.appendChild(H2)

        }
    }

   

    if(H2.textContent==="Equal")
    {
        H2.style.cssText="color:black;"
    }


    if(H2.textContent==="You Win")
    {
        H2.style.cssText="color:royalblue;"
    }


    if(H2.textContent==="Computer Wins")
    {
        H2.style.cssText="color:red;"
    }
        
    
 
  }
  let winner = document.querySelector(".winner")

  function checksForWinner()
  {
      if(playerScore===5)
      {
          let h1 = document.createElement("h1")
          h1.textContent="You Won !"
          h1.style.cssText="font-size:50px; color:royalblue"
          winner.appendChild(h1)
          gameOver()
          
          
      }

      if(computerScore===5)
      {
        let h1 = document.createElement("h1")
        h1.textContent="You Loose!"
        h1.style.cssText="font-size:50px; color:red"
        winner.appendChild(h1)
       
        gameOver()
       
        
      }

  
  }
  
 
 

   

let displayChoice = document.querySelector(".display-container")

let buttons = document.querySelectorAll("i")
buttons.forEach(button=>
    button.addEventListener("click",playGame))
    

    function playGame(e)
    {
        let playerSelection=e.target.id
        playRound(playerSelection,computerPlay())
        userScore.textContent=playerScore
        compScore.textContent=computerScore
        checksForWinner()
    }
       
        
    function gameOver()
    {
        buttons.forEach(button=>{
            button.removeEventListener("click",playGame)
        })
    }









/*function game()
{
    for(let i = 0; i<5;i++){
        let playerChoice = prompt("Choose rock,paper or scissors")
         
        console.log(playRound(playerChoice,computerPlay()))
    }
    if(playerScore>computerScore){
        return `You Won The Game by ${playerScore} to ${computerScore}`
    }
    else if (playerScore<computerScore)
    {
        return `You Loose The Game by ${playerScore} to ${computerScore}`
    }
    else return `Equal`
}
console.log(game())*/















