/**
 * Created by youqixin on 2017/3/23.
 */
/*加载动画加载完后关闭*/
$(function () {
    $('body').addClass('loaded');
    setTimeout(function () {
        $("#loader-wrapper").hide();
    }, 2000);
    $(".swiper-wrapper").show();
    var myVideo;
    var W = 640;
    var H = 1040;
    myVideo = document.querySelector("#myVideo");
    reSize();
    window.addEventListener("resize", reSize);
    //document.addEventListener('touchstart', touchstart);

    $("#myVideo").bind("ended",function () {
        $("#myVideo").css({display:"none"});
        // $("#page1").css({display:"block"});
    });
    function canplay(){
        myVideo.pause();
        $("#myVideo").show();
        // $("#load").show();
    }
    function reSize(event) {
        var IH = window.innerHeight;
        var IW=window.innerWidth;
        myVideo.style = 'z-index:100;position: absolute;width: 640px;height: 1040px;top: 0px;left: 0px;-webkit-transform-origin: 0px 0px;-webkit-transform: scale('+IW/W+',' + IH / H + ')';
    }
    function audioAutoPlay(id){
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    // $(".p0_1").on("click", function () {
    //     // audioAutoPlay("music");
    //     $("#start").css({display:"none"});
    //     myVideo.play();
    // });

    // $(".btn1").on("touchend", function () {
    //     window.location.href = "more.html"
    // });
    // $(".btn2").on("touchend", function () {
    //     window.location.href = "http://shop.brc.com.cn"
    // });
    /*拖拽*/
    // var startX,startY,moveEndX,moveEndY,X,Y;
    //
    //    $(".p0_1").on("touchmove", function(e) {
    //       e.preventDefault();
    //       moveEndX = e.originalEvent.changedTouches[0].pageX;
    //       moveEndY = e.originalEvent.changedTouches[0].pageY;
    //       X = moveEndX - startX;
    //       Y = moveEndY - startY;
    //       // console.log(moveEndX);
    //       var Width = $(this).width();
    //       $(this).css({left:moveEndX - Width/2})
    //    });
});

// window.onload = function () {
//
//    var flag = false;
//    init();
//    var SHAKE_THRESHOLD = 1000;
//    var last_update = 0;
//    var x = y = z = last_x = last_y = last_z = 0;
//    function init() {
//       if (window.DeviceMotionEvent) {
//          window.addEventListener('devicemotion', deviceMotionHandler, false);
//       } else {
//          alert('not support mobile event');
//       }
//    }
//    function deviceMotionHandler(eventData) {
//       var acceleration = eventData.accelerationIncludingGravity;
//       var curTime = new Date().getTime();
//       if ((curTime - last_update) > 100&&!flag) {
//          var diffTime = curTime - last_update;
//          last_update = curTime;
//          x = acceleration.x;
//          y = acceleration.y;
//          z = acceleration.z;
//          var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
//
//          if (speed > SHAKE_THRESHOLD) {
//             /*摇一摇触发事件*/
//             flag = true;
//             $("#onoff").css({display:"none"});
//             myVideo.play();
//             myVideo.addEventListener('canplay',canplay);
//             document.addEventListener("WeixinJSBridgeReady", function () {
//                myVideo.play();
//                myVideo.addEventListener('canplay',canplay);
//             }, false);
//             setTimeout(function () {
//                flag = false;
//             },1000)
//          }
//          last_x = x;
//          last_y = y;
//          last_z = z;
//       }
//    }
// };