$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]
  var thecard;
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  var first_click="none"
  var click_counter=0;
  $(".card").click(function(){
    thecard = $(this).find("p");
    thecard.css("opacity", "1"); 
    if(click_counter==0){
      click_counter = 1;
    	first_click = $(this).find("p").html();
    }
    else{
      var second_click = $(this).find("p").html();
      console.log("second_click " + second_click + " first_click " + first_click)
      if(first_click===second_click){
        console.log("hey");
     		thecard.css("background-color", "blue")}
    click_counter=0;

    }
  });
});
