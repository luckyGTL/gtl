/*景点*/
$(function(){
	/*--------------搜索框------------*/
	$(".box input").on("focus",function(){
		$(".hotScenic").slideDown(300);
	})
	$("input").on("blur",function(){
		$(".hotScenic").slideUp(300);
	})
	/*-------------搜索框的景点--------------*/
	$(".cityLists a").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
	})
	
	
	/*------------手风琴----------*/
	
	$("#main1 li").hover(function(){
		$(this).find(".des").hide().end().stop().animate({"width":"400px"},500).siblings().stop().animate({"width":"160px"},500);
	},function(){
		$(this).find(".des").show().end().parent().find("li").stop().animate({"width":"200px"},500);
	})

/*景点分类的  热门*/

	$("#main2 span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	$("#main2 h3 span").click(function(){
		var i = $(this).index();
		console.log(i)
		switch (i-1){
				case 0: {
					$('#beijing').css('display','block');
					$('#shanghai').css('display','none');
					
				};
					break;
				case 1: {
					$('#beijing').css('display','none');
					$('#shanghai').css('display','block');
				}
					break;
				case 2: {
					$('#beijing').css('display','block');
					$('#shanghai').css('display','none');
					
				};
					break;
				case 3: {
					$('#beijing').css('display','none');
					$('#shanghai').css('display','block');
				}
					break;
			}
	})

/*-------------热门-----------*/

	$("#main3 span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})


	$("#main3 h3 span").click(function(){
		var i = $(this).index();
		console.log(i)
		switch (i-1){
				case 0: {
					$('#sanya').css('display','block');
					$('#dali').css('display','none');
					
				};
					break;
				case 1: {
					$('#sanya').css('display','none');
					$('#dali').css('display','block');
				}
					break;
				case 2: {
					$('#sanya').css('display','block');
					$('#dali').css('display','none');
					
				};
					break;
				case 3: {
					$('#sanya').css('display','none');
					$('#dali').css('display','block');
				}
					break;
			}
	})




		
			
			
		


/*--------------------推荐--------------*/

	$("#main .tit li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
	})
	
	
})

