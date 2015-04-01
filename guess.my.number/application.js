$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);//find a way for the program to choose a random number between 1 and 100, save this as a variable
  
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var userGuess =  $('input').val() //save their guess as a variable
    console.log(userGuess)
    
    if (userGuess==randomNumber){
      alert.("You Guess Right")
    }
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    
      //what happens if the guess is correct?
      
    // if ( randomNumber > userGuess){
    //   console.log("Too Low. Guess Higher")
    // }//if the user guessed too high...
    // else if  {
    //   console.log("Too High. Guess Lower")
    // }
    // else(randomNumber = userGuess) {
    //   console.log("You Guessed It Right")
    // }
    //   //update the 'feedback' paragraph to tell them to guess lower
      
    // //otherwise, the user guessed too low...
    
    //   //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
