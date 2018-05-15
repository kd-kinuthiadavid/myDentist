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

   $("ol#toView").append("<li>" + newView.firstEntry + "<button class='rmve'>X </button>" + "</li>")

   $('.rmve').on("click", function(){
     $(this).parent().remove();
   })



   $("input#theirViews").val();
 });
});

// $(".a").click(function(){
//  $(".b").show();
// });
// $(".c").click(function(){
//  $(".d").show();
// });
// $(".e").click(function(){
//  $(".f").show();
// });
// $(".g").click(function(){
//  $(".h").show();
// });
