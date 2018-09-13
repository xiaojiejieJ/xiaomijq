/*
* @Author: Dell
* @Date:   2018-09-13 16:36:57
* @Last Modified by:   nanjiao
* @Last Modified time: 2018-09-14 01:40:01
*/
//页面加载
window.onload=function(){
	// 购物车
	$(".topbar .w .topbar-cart").mouseenter(function(){
		$(".topbar .w .yc").clearQueue().slideDown();
	});
	$(".topbar .w .topbar-cart").mouseleave(function(){
		$(".topbar .w .yc").clearQueue().slideUp();
	});
// 侧导航
  let lis=$(".slip .menu .box");
  let aside=$(".menu .box .children");

  // console.log(lis,aside);
  // 隐式循环
  lis.mouseenter(function(){
  	$(".children").css("display","none");
  	$(this).children(".children").css("display","block");
  })
  lis.mouseleave(function(){
  	$(this).children(".children").css("display","none");

  })
  // 小米闪购平移效果
    let buttom1=$(".xiaomishangou .jt .zuo");
    let milist1=$(".neirong .lists");
    // console.log(buttom1,milist1);
    let w1=milist1.width()/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
    buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
  // 商品选项卡
 //  let parent=$(".box-pj .top .lis1 a");
 //  let son=$(".box-pj .list");
 //  console.log(parent,son);
 //  parent.mouseenter(function(){
 //  	let i=$(this).index();
 //  	// 链式调用
 //  	son.css("display","none").eq(i).css("display","block");

 // parent.triggerHandler("mouseenter");
 //  })
 
// // 家电选项卡
//     let lis1=$(".household .top ul li");
//     let son1=$(".household .bdd .rig");
//     let hx=$(".household .top ul li .house");
//     lis1.last().css("color","#ff6700");
//     hx.last().css("background","#ff6700");
//     son1.last().css("display","block");
//     lis1.mouseenter(function(){
//         let i=$(this).index();
//         son1.css("display","none").eq(i).css("display","block");
//         lis1.css("color","#676769").eq(i).css("color","#ff6700");
//         hx.css("background","#F5F5F5").eq(i).css("background","#ff6700");
//     });
// 平移效果
    let button=$(".tuijian .box-tj .top .jt .zuo ");
    let milist=$(".tuijian .box-tj .list");
    let w=milist.width()/2;
    let times=0;
    button[0].onclick=function(){
             times++;
            if (times==2) {
                times=1;
            }
            milist.css("transform",`translate(${(-w*times)}px)`);
        }
    button[1].onclick=function(){
        times--;
        if (times==-1) {
            times=0;
        }
        milist.css("transform",`translate(${(-w*times)}px)`);
        }
  // 轮播图
  let imgs=$(".slip .banner img");
  let dots=$(".dot li");
   let leftbtn=$(".leftArrow");
    let rightbtn=$(".rightArrow");
     let banner=$(".banner");
    // console.log(imgs,dots,banner,leftbtn,rightbtn);
    let now=0;
    imgs.first().css({"z-index":"10"});
    dots.first().addClass('active');
    let t=setInterval(move, 2000);
    function move(){
        now++;
        if (now==imgs.length) {
            now=0;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    function moveL(){
        now--;
        if (now==-1) {
            now=imgs.length-1;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    rightbtn.click(function() {
        move();
    });

    leftbtn.click(function() {
        moveL();
    });
    banner.mouseenter(function () {
         clearInterval(t);
     })
    banner.mouseleave(function () {
         t=setInterval(move,2000);
    })
    dots.click(function(){
        let i=$(this).index();
        dots.removeClass('active').eq(i).addClass('active');
        imgs.css("z-index","5").eq(i).css("z-index","10");
    })
// 图书轮播
    let imgss=$(".content .top .content-list ul li:nth-child(1) .banner .master");
    let dotss=$(".content .top .content-list ul li:nth-child(1) .banner .dot ul li");
    let leftbtns=$(".content .top .content-list ul li:nth-child(1) .banner .leftbtn")[0];
    let rightbtns=$(".content .top .content-list ul li:nth-child(1) .rightbtn")[0];
    lb(imgss,dotss,leftbtns,rightbtns);


    let img2=$(".content .top .content-list ul li:nth-child(2) .banner .master");
    let dot2=$(".content .top .content-list ul li:nth-child(2) .banner .dot ul li");
    let leftbtn2=$(".content .top .content-list ul li:nth-child(2) .banner .leftbtn")[0];
    let rightbtn2=$(".content .top .content-list ul li:nth-child(2) .banner .leftbtn")[0];
    lb(img2,dot2,leftbtn2,rightbtn2);


    let img3=$(".content .top .content-list ul li:nth-child(3) .banner .master");
    let dot3=$(".content .top .content-list ul li:nth-child(3) .banner .dot ul li");
    let leftbtn3=$(".content .top .content-list ul li:nth-child(3) .banner .leftbtn")[0];
    let rightbtn3=$(".content .top .content-list ul li:nth-child(3) .banner .leftbtn")[0];
    lb(img3,dot3,leftbtn3,rightbtn3);


    let img4=$(".content .top .content-list ul li:nth-child(4) .banner .figure");
    let dot4=$(".content .top .content-list ul li:nth-child(4) .banner .dot ul li");
    let leftbtn4=$(".content .top .content-list ul li:nth-child(4) .banner .leftbtn")[0];
    let rightbtn4=$(".content .top .content-list ul li:nth-child(4) .banner .leftbtn")[0];
    lb(img4,dot4,leftbtn4,rightbtn4);


// 返回顶部
    let back=document.querySelectorAll(".sort ul li")[3];
    // console.log(back);
    back.onclick=function(){
        animate(document.documentElement,{scrollTop:0},600);
    }

}
