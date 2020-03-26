$(function(){
	//回到顶部
	$(".top-up").click(function(){
		$("html , body").animate({"scrollTop": "0px"},'slow')
	})
	//头部微信悬停隐藏显示
	$(".h-vx").hover(function(){
		$(".h-vx-hover").toggle()
	})
	//头部助手悬停隐藏显示
	$(".h-aid").hover(function(){
		$(".h-aid-hover").toggle()
	})
	//版本抽屉悬停样式
	$(".drawer-box li").hover(function(){
		$(this).find(".version-title").addClass("version-title-hover")
		$(this).find(".version-ico").addClass("version-ico-hover")
		$(this).find(".version-hot").addClass("version-text-hover")
		$(this).find(".version-date").addClass("version-text-hover")
	},function(){
		$(this).find(".version-title").removeClass("version-title-hover")
		$(this).find(".version-ico").removeClass("version-ico-hover")
		$(this).find(".version-hot").removeClass("version-text-hover")
		$(this).find(".version-date").removeClass("version-text-hover")
	})
	$(".head").mouseleave(function(){
		$(".head-warp").hide()
		$(".head").removeClass("head-hover")
	})
	$(".head").find("li").mouseover(function(){
		$(".head-warp").show()
		$(".head").addClass("head-hover")
	})
	//左边历史版本抽屉
	$(".drawer-btn").toggle(function(){
		$(".drawer-btn").find("em").addClass("drawer-btn_bg")
		$(".drawer-box").stop().animate({"margin-left":"0px","transition":"1s"},100)
	},function(){
		$(".drawer-box").stop().animate({"margin-left":"-1044px","transition":"1s"},100)
		$(".drawer-btn").find("em").removeClass("drawer-btn_bg")
	})
	// 微信悬停显示
	$(".hover-vx").hover(function(){
		$(".DNF_vx").show()
	},function(){
		$(".DNF_vx").hide()
	})
	//左边服务悬停隐藏显示
	$(".l-menu").hover(function(){
		$(".l-menu-list").find("div").eq($(this).index()).toggle()
	})
	// 道聚城Tab切换
	$(".shop-hd-i").mouseover(function(){
		$(this).attr('class','shop-btn-show').siblings().attr('class','shop-hd-i');
		$(".tab-panel").eq($(this).index()).show().siblings().hide()
	})
	//合作媒体悬停下拉框
	$(".teamwork").mouseout(function(){
		$(this).find(".teamwork-list").hide();
	})
	$(".teamwork").mouseover(function(){
		$(".teamwork-list").show();
	});
	//二觉礼包悬停
	$(".gg_main").hover(function(){
		$(".gg-ico").find("span").attr("class","gg-bg-hover")
	},function(){
		$(".gg-ico").find("span").removeAttr("class","gg-bg-hover")
	})
	//轮播
	var lbtime = setInterval(lb,2000)
	function lb(){
		var marginLeft = parseInt($(".img-box ul").css("margin-left"));
		$(".img-box ul").animate({"margin-left":marginLeft-343+"px"},500,function(){
			if(marginLeft==-1715){
			$(".img-box ul").css("margin-left","0px")
		}
		})
		if((marginLeft/-343)+1==6){
			$(".lb-btn-1").eq(0).addClass("lb-btn-hover").siblings().removeClass("lb-btn-hover")
		}else{
			$(".lb-btn-1").eq((marginLeft/-343)+1).addClass("lb-btn-hover").siblings().removeClass("lb-btn-hover")
		}
	}
	$(".lb-dd").hover(function(){
		clearInterval(lbtime)
	},function(){
		lbtime = setInterval(lb,2000)
	})
	$(".lb-btn-1").click(function(){
		$(this).addClass("lb-btn-hover").siblings().removeClass("lb-btn-hover");
		$(".img-box ul"). animate({"marginLeft":$(this).index()*-343+"px"})
	})
	//轮播tab切换
	$(".news-btn").mouseover(function(){
		$(this).addClass("news-btn-bg").siblings().removeClass("news-btn-bg")
		$(this).children().addClass("news-btn-hover").parent().siblings().children().removeClass("news-btn-hover")
		$(".news-bd").siblings(".news-bd").hide()
		$(".news-bd").eq($(this).index()).show()
	})
	//活动中心tab切换
	$(".act-nav-btn").click(function(){
		$(this).find("strong").addClass("act-hover").parent().siblings().children().removeClass("act-hover")
		$(this).find("span").addClass("act-bg").parent().siblings().children().removeClass("act-bg")
		$(".act-tab-list").eq($(this).index()).show().siblings().hide()
	})
	//活动中心按钮悬停上浮
	$(".act-btn").find("span").hover(function(){
		$(this).stop().animate({"margin-top":"-10px"},500)
	},function(){
		$(this).stop().animate({"margin-top":"0px"},500)
	})
	//视频推荐按钮悬停上浮
	$(".video-title-btn").find("span").hover(function(){
		$(this).stop().animate({"margin-top":"-10px"},500)
	},function(){
		$(this).stop().animate({"margin-top":"0px"},500)
	})
	//视频推荐Tab切换
	$(".video-btn").mouseover(function(){
		$(this).find("a").addClass("act-hover").parent().siblings().children().removeClass("act-hover")
		$(this).find("span").addClass("act-bg").parent().siblings().children().removeClass("act-bg")
		$(".video-tab").eq($(this).index()).show().siblings().hide()
	})
	//视频点击无缝轮播
	var left = 0;
	$(".video-tab-left").click(function(){
		$(".works-list").find("ul").stop().animate({"margin-left":(left+590)+"px"},function(){//每点击一次移动两个li（视频的宽度）
			left = parseInt($(".works-list ul").css("margin-left"));//获取当前位置
			if(left!=1180){						
				$(".video-tab-right").show() 	//当没翻到最后一个视频的时候让右边的按钮显示
			}
			if(left==0){
				$(".video-tab-left").hide()		//当翻到第一个视频的时候让左边的按钮隐藏
			}
		});
	})
	$(".video-tab-right").click(function(){
		$(".works-list").find("ul").stop().animate({"margin-left":(left-590)+"px"},function(){
			left = parseInt($(".works-list ul").css("margin-left"));//获取当前位置
			if(left==-590){
				$(".video-tab-left").show()		//当翻了视频的时候左边的按钮显示
			}
			if(left==-1180){
				$(".video-tab-right").hide()	//当翻到最后一个视频的时候隐藏右边的按钮
			}
		});
	})
})
