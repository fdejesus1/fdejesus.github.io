
$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]

  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  var click_counter=0;
    $(".card").click(function(){
    if(click_counter==0){
      click_counter == 1;
    	$(this).find("p").css("opacity", "1");}
    else{
      
    }

});
});
