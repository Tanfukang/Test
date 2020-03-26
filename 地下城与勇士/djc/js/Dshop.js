$(function(){
	//轮播
	var lbtime = setInterval(lb,2000)
	function lb(){
		var marginLeft = parseInt($(".lb-top1 ul").css("margin-left"));
		$(".lb-top1 ul").stop().animate({"margin-left":marginLeft-770+"px"},500,function(){
			if(marginLeft==-2310){
			$(".lb-top1 ul").css("margin-left","0px")
		}
		})
		if((marginLeft/-770)+1==4){
			$(".lb-btn").eq(0).addClass("lb-hover").siblings().removeClass("lb-hover")
		}else{
			$(".lb-btn").eq((marginLeft/-770)+1).addClass("lb-hover").siblings().removeClass("lb-hover")
		}
	}
	$(".lb-top1").hover(function(){
		clearInterval(lbtime)
	},function(){
		lbtime = setInterval(lb,2000)
	})
	$(".lb-btn").mouseover(function(){
		$(this).addClass("lb-hover").siblings().removeClass("lb-hover");
		$(".lb-top1 ul").stop(true).animate({"marginLeft":$(this).index()*-770+"px"})
	})
	//推荐tab切换
	$(".tab-btn").click(function(){
		$(this).addClass("ml-hover").siblings().removeClass("ml-hover")
		$(".ml-bottom").hide()
		$(".ml-bottom").eq($(this).index()).show()
	})
	//回到顶部
	$(".top").click(function(){
		$("html , body").animate({"scrollTop": "0px"},'slow')
	})
})