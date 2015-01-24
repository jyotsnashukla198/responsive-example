$(document).ready(function()
{
//console.log($("#buttondiv1").children().length);
$(".buttondiv").children().click(function(){
  console.log($(this).parent().closest("span"));
    $(this).siblings().removeClass("active");
  $(this).addClass("active");
      if(this.id==="entireRoom")
    $(".description").slideDown();
  
 if(this.id==="singleRoom")
  {
    $("#buttondiv3 input").removeClass("active");
    $("#buttondiv4 input").removeClass("active");
    $(".description").slideUp();
   
  }
 });

$("#nextstep").click(function(){
  $(".error").remove();
 /*if(!($(".buttondiv a").hasClass(".active")))
  $("<span class='error'>*A Selection is required</span>").insertBefore(".buttondiv");*/
$('.buttondiv').each(function(){
  var count=0;
  $(this).children().each(function(){
    if($(this).hasClass("active"))
      count++;
       });
 
    if(count==0)
      $("<span class='error'>*A Selection is required</span>").insertBefore($(this));

});


});

});

