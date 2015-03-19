$('button').on('click',function(){
var val1 = $('input').val();
  $('#mydiv').append("<p>"+val1"</p>");
  console.log(val1);
});
