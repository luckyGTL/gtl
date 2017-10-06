/*景点*/
$(function(){
/*---------------banner的选项卡-----------*/	
	$("#aaaaa").click(function(){
		$(".box").eq(1).html('<input type="text" class="screen"/><a href="javascript:;" class="search">搜索</a>').siblings().html('');

		
	})
	
	$("#main1 li").hover(function(){
		$(this).find(".des").hide().end().stop().animate({"width":"400px"},500).siblings().stop().animate({"width":"160px"},500);
	},function(){
		$(this).find(".des").show().end().parent().find("li").stop().animate({"width":"200px"},500);
	})

/*景点分类的  热门*/

	$("#main2 span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})


/*-------------热门-----------*/

	$("#main3 span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})


/*--------------------推荐--------------*/

	$("#main .tit li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
	})
	
	
})

