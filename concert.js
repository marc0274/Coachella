//alert("hi")
$(document).ready(function(){
	
	$("nav a").click(function(){


		goTo = $(this).attr("href")

		$("nav a").removeClass("active")
		$(this).addClass("active");

		$("html,body").animate({scrollTop: $(goTo).offset().top},1000)

	
	})//end click 





	var current =1
	var total = 3




$(".right").click(function(){
	if(current<total){

	$(".sliderbox").animate({left:"-=1040"},500)
	current= current + 1
	console.log("the value of current is:" +current)


}//end if statement
})//end right click method


$(".left").click(function(){

	if(current>1){
	$(".sliderbox").animate({left:"+=1040"},500)
	current= current - 1
	console.log("the value of current is:" +current)
}//end if statement
})//end left






}) //end doc ready