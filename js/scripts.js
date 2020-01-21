
$(document).ready(function(){
  $("form#quiz_input").submit(function(event){
    event.preventDefault();
    var total = 0;
    $("input:checkbox[name=positive]:checked").each(function(){
      total += 1;
    });
    $("input:checkbox[name=negative]:checked").each(function(){
      total -= 1;
    });
    if (total === 0) {
      $(".results").append("<li>You got it okay.</li>");
    } else if (total < 0) {
      $(".results").append("<li>wow, your life sucks!</li>");
    } else if (total > 0) {
      $(".results").append("<li>You got it pretty good, fam!</li>");
    }
    console.log(total);
    $('#transportation_survey').hide();
  });
});
