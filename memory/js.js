$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]
  var thecard;
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  var first_click="none"
  var click_counter=0;
  $(".card").click(function(){
    if(click_counter==0){
      click_counter == 1;
      thecard = $(this).find("p");
    	thecard.css("opacity", "1"); 
    	var first_click = $(this).find("p").html();
    }
    else{
      var second_click = $(this).find("p").html();
      console.log("here")
      if(
      first_click===second_click){
        console.log("hey"+card);
     		$(".card").css("background-color", "blue")}
    }
  });
});
