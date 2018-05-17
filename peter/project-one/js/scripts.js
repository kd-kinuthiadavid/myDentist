//business logic
function ToReview(first){
 this.firstEntry = first;
}
//user interface
$(document).ready(function(){
 $("form#views").submit(function (event) {
   event.preventDefault();

   var inputtedFirstReview = $("input#theirViews").val();
   $("input#theirViews").val('');
   var newView = new ToReview(inputtedFirstReview);

   $("ol#toView").append("<li>" + newView.firstEntry + "<button class='rmve'>X </button>" + "</li>")

   $('.rmve').on("click", function(){
     $(this).parent().remove();
   })



   $("input#theirViews").val();
 });
});
