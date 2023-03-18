
addEventListener('DOMContentLoaded', () => {
  const elections = document.querySelectorAll('.elections');
  const resultText = document.getElementById('result');
  const chooseButton = document.getElementById('choose-button');
  const playerText = document.getElementById('player');
  const enemyText = document.getElementById('enemy');

  let currentDecision = "";
  
  let randomDecision;
  let enemyDecision = "";
  let enemyObjects = ["Stone", "Paper", "Scissors"];
  
  let isChecked = false;

  enemyText.innerText = "nothing  :Enemy";
  //buttons comprobation
  for(let i = 0; i < elections.length; i++)
  {
    let clickedButton;
  
    elections[i].addEventListener('click', () =>
    {

      isChecked = false;
      reset();

      clickedButton = elections[i].innerText;
      currentDecision = clickedButton;
      playerText.innerText = "Player: " + currentDecision;
      // console.log("You have pressed: " + clickedButton);
      // console.log("The current decision is: " + currentDecision);

    })
  }
  
  chooseButton.addEventListener('click', () => {


    if(currentDecision === "")
    {
      tie();
      enemyDecision = "";
      console.log("please choose one");
    }

    randomDecision = Math.floor(Math.random() * 3);
    enemyDecision = enemyObjects[randomDecision];
    enemyText.innerText = enemyDecision + "  :Enemy";
    // console.log(randomNumber);
    console.log("Enemy decision is: " + enemyDecision);
    console.log("Player decision is: " + currentDecision);

    isChecked = true;
    check(currentDecision, enemyDecision);

  })

  

  
  
  
  function check(playerDecision, enemyDecision) 
  {

    if(playerDecision === enemyDecision) 
    {
      tie();
    }

    switch (playerDecision) 
    {
      case "Stone":
        if(enemyDecision === "Paper")
        {
          lose();
        } 
        break;

      case "Paper":
        if(enemyDecision === "Stone")
        {
          win();
        } else if(enemyDecision !== playerDecision) lose();
        break;

      case "Scissors":
        if(enemyDecision === "Stone")
        {
          lose();
        } else if(enemyDecision !== playerDecision) win();
    
      default:
        break;
    }
  }
  
  function tie()
  {
    resultText.innerText = "The winner is ANYBODY";
    resultText.style = "color:red";
    console.log("The winner is: anybody");
    console.log("they are the SAME, so there is a TIE");

  }

  function win() 
  {
    console.log("the winner is: PLAYER");
    resultText.innerText = "The winner is PLAYER";
    resultText.style = "color:black";

  }

  function lose()
  {
    console.log("the winner is: ENEMY :(");
    resultText.innerText = "The winner is ENEMY :(";
    resultText.style = "color:black";

  }

  function reset() 
  {
    currentDecision = "";
    playerText.innerText = "Player:  nothing";

    enemyDecision = "";
    enemyText.innerText = "nothing  :Enemy";
  }
})


//TESTING CODE
// console.log("buttons[0]: " + elections[0].innerText);
// console.log("buttons[1]: " + elections[1].innerText);
// console.log("buttons[2]: " + elections[2].innerText);
// for(let i = 0; i <= 100; i++)
// {
//   console.log(Math.floor(Math.random() * 3));
// }

