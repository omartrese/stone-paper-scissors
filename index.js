addEventListener('DOMContentLoaded', () => {

  const elections = document.querySelectorAll('.elections');
  
  // console.log("buttons[0]: " + elections[0].innerText);
  // console.log("buttons[1]: " + elections[1].innerText);
  // console.log("buttons[2]: " + elections[2].innerText);
  for(let i = 0; i <= 100; i++)
  {
    console.log(Math.floor(Math.random() * 3));
  }

  for(let i = 0; i < elections.length; i++)
  {
    let clickedButton;
  
    elections[i].addEventListener('click', () =>
    {
      clickedButton = elections[i].innerText;
  
      console.log("You have pressed: " + clickedButton);
    })
  }

})
