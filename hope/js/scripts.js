$(document).ready(function() {
  $(".dentistselfies").hide();
  $(".dentistH").click(function(){
    $(".dentistselfies").toggle(1000);
  });
});
$(document).ready(function() {
  $(".Customers").hide();
  $(".meno").click(function(){
    $(".Customers").toggle(2000);
  });
});
//business logic
function ToReview(first){
this.firstEntry = first;
}
//user interface
$(document).ready(function(){
$("form#views").submit(function (event) {
  event.preventDefault();

  var inputtedFirstReview = $("input#theirViews").val();

  var newView = new ToReview(inputtedFirstReview);

  $("ol#toView").append("<li>" + newView.firstEntry + "<button class='rmve'>Cancel </button>" + "</li>")

  $('.rmve').on("click", function(){
    $(this).parent().remove();
  })



  $("input#theirViews").val();
});
});
