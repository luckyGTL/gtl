/*景点*/
$(function(){
	/*--------------搜索框------------*/
	$("#Section1 input").on("focus",function(){
		$(".hotScenic").slideDown(300);
	})
	$("input").on("blur",function(){
		$(".hotScenic").slideUp(300);
	})
	
	$("#Section2 input").on("focus",function(){
		$(".hotHotel").slideDown(300);
	})
	$("input").on("blur",function(){
		$(".hotHotel").slideUp(300);
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
				$('#shanghai').css('display','block');
				$('#beijing').css('display','none');
				$('#beijing1').css('display','none');
				$('#beijing2').css('display','none');
				$('#beijing3').css('display','none');
				$('#beijing4').css('display','none');
				break;
			}
			case 1: {
				$('#shanghai').css('display','none');
				$('#beijing').css('display','block');
				$('#beijing1').css('display','none');
				$('#beijing2').css('display','none');
				$('#beijing3').css('display','none');
				$('#beijing4').css('display','none');
				
			}
				break;
			case 2: {
				$('#shanghai').css('display','none');
				$('#beijing').css('display','none');
				$('#beijing1').css('display','block');
				$('#beijing2').css('display','none');
				$('#beijing3').css('display','none');
				$('#beijing4').css('display','none');
				
				
			};
				break;
			case 3: {
				$('#shanghai').css('display','none');
				$('#beijing').css('display','none');
				$('#beijing1').css('display','none');
				$('#beijing2').css('display','block');
				$('#beijing3').css('display','none');
				$('#beijing4').css('display','none');
			}
				break;
			case 4: {
				$('#shanghai').css('display','none');
				$('#beijing').css('display','none');
				$('#beijing1').css('display','none');
				$('#beijing2').css('display','none');
				$('#beijing3').css('display','block');
				$('#beijing4').css('display','none');
			}
				break;
			case 5: {
				$('#shanghai').css('display','none');
				$('#beijing').css('display','none');
				$('#beijing1').css('display','none');
				$('#beijing2').css('display','none');
				$('#beijing3').css('display','none');
				$('#beijing4').css('display','block');
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
					$('#dali1').css('display','none');
					$('#dali2').css('display','none');
					$('#dali3').css('display','none');
					$('#dali4').css('display','none');
					break;
				}
				case 1: {
					$('#sanya').css('display','none');
					$('#dali').css('display','block');
					$('#dali1').css('display','none');
					$('#dali2').css('display','none');
					$('#dali3').css('display','none');
					$('#dali4').css('display','none');
					
				}
					break;
				case 2: {
					$('#sanya').css('display','none');
					$('#dali').css('display','none');
					$('#dali1').css('display','block');
					$('#dali2').css('display','none');
					$('#dali3').css('display','none');
					$('#dali4').css('display','none');
					
					
				};
					break;
				case 3: {
					$('#sanya').css('display','none');
					$('#dali').css('display','none');
					$('#dali1').css('display','none');
					$('#dali2').css('display','block');
					$('#dali3').css('display','none');
					$('#dali4').css('display','none');
				}
					break;
				case 4: {
					$('#sanya').css('display','none');
					$('#dali').css('display','none');
					$('#dali1').css('display','none');
					$('#dali2').css('display','none');
					$('#dali3').css('display','block');
					$('#dali4').css('display','none');
				}
					break;
				case 5: {
					$('#sanya').css('display','none');
					$('#dali').css('display','none');
					$('#dali1').css('display','none');
					$('#dali2').css('display','none');
					$('#dali3').css('display','none');
					$('#dali4').css('display','block');
				}
					break;
			}
	})
/*----------------自驾游--------------*/
$("#main-drive span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})


	$("#main-drive h3 span").click(function(){
		var i = $(this).index();
		console.log(i)
		switch (i-1){
				case 0: {
					$('#zjy1').css('display','block');
					$('#zjy2').css('display','none');
					$('#zjy3').css('display','none');
					break;
				}
				case 1: {
					$('#zjy1').css('display','none');
					$('#zjy2').css('display','block');
					$('#zjy3').css('display','none');
					
					
				}
					break;
				case 2: {
					$('#zjy1').css('display','none');
					$('#zjy2').css('display','none');
					$('#zjy3').css('display','block');
					
					
					
				};
					break;
			}
	})



		
			
			
		


/*--------------------推荐--------------*/

	$("#main .tit li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
	})
	
	
})

