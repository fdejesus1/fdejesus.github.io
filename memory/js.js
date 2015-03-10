$(document).ready(function(){
  for(i=0; i<20; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
  }
  var click_counter=0;

  $(".card").click(function(){
    if(click_counter==0){
      click_counter == 1;
    	$(this).find("p").css("opacity", "1");}
    else{
      
    }
  });
