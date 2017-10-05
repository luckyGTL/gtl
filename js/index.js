/*景点*/
$(function(){
	$("#main1 li").hover(function(){
		$(this).find(".des").hide().end().stop().animate({"width":"400px"},500).siblings().stop().animate({"width":"160px"},500);
	},function(){
		$(this).find(".des").show().end().parent().find("li").stop().animate({"width":"200px"},500);
	})
})

/*景点分类的*/
$(function(){
	$("#main2 span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
})