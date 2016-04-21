
$(function(){
	$(".con2 .chongzhibtn").click(function(){
		$(this).css({background:"#de8131"});
	})
	$(".con2 .tixianbtn").click(function(){
		$(this).css({background:"#d14f3f"});
	})
	$(".con2 .qiandaobtn").click(function(){
		$(this).css({background:"#369f98"});
		alert("签到成功");
		$(this).html("今日已签到");
		$(this).css({background:"#ccc",color:"#999"});
	})
	$(".fabubox button").click(function(){
		$(this).css({background:"#d13d3d"});
	})
	$(".erji button").click(function(){
		$(this).css({background:"#d13d3d"});
	})
	
	var kapianbox=document.querySelector(".kapianbox");
	var zhezhao=document.querySelector(".zhezhao");
	var data=[
	{title:"C",id:"momoda",riqi:"2012",yongjin:"200",num:"10",name:"haha",bianhao:"000",renming:"qqq",tiaojian:"0000000000000",beizhu:"11"},
	{title:"C",id:"momoda",riqi:"2012",yongjin:"200",num:"10",name:"haha",bianhao:"000",renming:"qqq",tiaojian:"0000000000000",beizhu:"22"}
	];
	var getfn=function(){
		if(data.length==0){
			return false;
		}
		else{
			data.forEach(function(value){
				var sbo=document.createElement("div");
				sbo.className="kapian";
				sbo.innerHTML='<div class="yiji"> <div class="touxiangbox"> <div class="touxiang"></div> </div> <div class="kpcon"> <div class="title">'+value.title+'</div> <div class="id">任务ID：'+value.id+'</div> <div class="riqi">发表日期：'+value.riqi+'</div> <div class="yongjin">佣金：'+value.yongjin+'</div> </div> <div class="shengyubox"><span>剩余 : </span><span>'+value.num+'</span></div> <div  class="jiantoubox"> </div> </div> <div class="erji"> <div class="renwu"> <p>任务链接：点我去投票</p> <p>微信公众号：'+value.name+'</p> <p>选手编号：'+value.bianhao+'</p> <p>被投票人：'+value.renming+'</p> <p>条件：'+value.tiaojian+'</p> <p>备注：'+value.beizhu+'</p> </div> <div class="jierenwubox"><button>接任务</button></div> </div>';
				kapianbox.appendChild(sbo);
			})
		}
	}

	var nums=0;
	$(window).scroll(function(){
		var scrollFunc=function(e){
			e=e || window.event;
			if(getData()){
				if(e.wheelDelta){
					if(e.wheelDelta==-120){
						if(getfn()==false){
							return;
						}
						else{
							nums++;
							if(nums==2){
								$(".dingbu").css({display:"block"})
							}
							// console.log(nums);
						}
					}
				}
				getfn();

			}				}

$(document).bind("swipeUp",scrollFunc,false);
			if(document.addEventListener){
				document.addEventListener('DOMMouseScroll',scrollFunc,false);
				document.addEventListener('swipe',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
// $(document).on("scrollstart",function(){
// scrollFunc
// });
// $(document).scrollstart=scrollFunc;//IE/Opera/Chrome/Safari

})

	// 点击卡片的效果
	var pre;
	var erjichuxian=function(es){
		if(pre){
			pre.parentElement.nextElementSibling.style.cssText="visibility: hidden;transform: translateX(-300px);position: none;transition: transform 0 ease";
		}
		es.parentElement.nextElementSibling.style.cssText="visibility: visible;transform: none;position: static;transition: transform 300ms ease";
		pre=es;
	}
	var chuxian=function(e){
		var es=e.target;
		if(es.className=="jiantoubox"){
			erjichuxian(es);
		}
	}
	kapianbox.addEventListener("click",chuxian,false);
	
})
function getData(){
	var kapian=$(".kapian");
	var offset=$(kapian[kapian.length-1]).offset().top+Math.floor($(kapian[kapian.length-1]).outerHeight()/2);
	var height=$(window).height();
	var scroll=$(document).scrollTop();
	return offset<scroll+height?true:false;
}



