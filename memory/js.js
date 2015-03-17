$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]//creates a name for the cards
  var thecard;
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');//hols the card
  }
  var first_click="none"; //stores the first click
  var click_counter=0;
  $(".card").click(function(){
    thecard = $(this).find("p");//makes the card equal to something which is this find p 
    thecard.css("opacity", "1"); //turns the card over, so you cant see the letters, makes the letters completely see through
    if(click_counter==0){// lets you know what clcik your in 
      click_counter = 1;
    	first_click = $(this).find("p").html();
    }
    else{
      var second_click = $(this).find("p").html();
      console.log("second_click " + second_click + " first_click " + first_click)
      if(first_click===second_click){// if both clicks are equal then this happens 
        console.log("hey");// i was just trying to test something to make sure it knows when the second click happens
     		thecard.css("background-color", "blue")}
    click_counter=0;// sets the clicks back to zero 
// i would like to randomize the cards so they are not next to each other 
    }
  });
});
