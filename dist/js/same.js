//navigation js

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>150 ){ 
          // $(".navContainer").addClass('scrollNav')
          
          // $(".navlist").css({"transition":"top 1s", "position":"fixed","left":0,"top":0,"width":"100%","padding-left":"15%","padding-right":"15%","background-color":"black"})

           $(".navBox").css({ "position":"fixed","left":0,"top":0,"width":"100%","padding-left":"15%","padding-right":"15%","background-color":"black"})
            $(".dataList").css({"transform":"translateX(0px)","transition":"all 1s"})
        }else{
          // $(".navlist").css.css({"position":"sticky","width":"100%","padding-left":0,"padding-right":0})

          $(".dataList").css({"transform": "translateX(200px)","transition":"all 1s"})
           $(".navBox").css({"transition":"top 1s","position":"sticky","left":0,"top":-55,"width":"100%","padding-left":0,"padding-right":0,"background-color":"transparent"})
        }
        if($(window).scrollTop()>270){
          $(".itemsTable").css({"transition":"all 1.5s", "transform": "translateY(0px)"})
         }else{
          $(".itemsTable").css({"transition":"all 1.5s", "transform": "translateY(300px)"})
         }
        })
    })
    $(".navUl").mouseover(function(){
          $(".navinfo").slideDown("slow")
          // $(".navinfo").show()
        })  
    $(".navlist").mouseleave(function(){
            $(".navinfo").slideUp("slow")
            $(".navUl li").removeClass("navActive")
          });
          // $(".navBox").mouseout(function(){
          //   $(".navinfo").slideUp("fast")
          //   $(".navUl li").removeClass("navActive")
          // });

//nav change info
          $(".navUl li").mouseover(function(){
            if (!$(this).hasClass("navActive")){
              $(this).addClass("navActive");
            }
            $(this).siblings().removeClass("navActive");
          
            var id = $(this).attr('id');
            id = id.slice(-1);
            console.log(id)
          
          // console.log(id)
            var showId = $(".hiddenNav").find(".navInfoDetails").eq((id-1)).attr('id');
            showId ='#' + showId;
            console.log(showId)
            
            $(showId).show();
            $(showId).siblings().hide();
          })
  //web change type 
$(function(){
  $(".infoContainer").find(".scrollHidden").hide();
  $(".infoContainer").find(".scrollHiddenFirst").show();
  $("#nav1").addClass("spreadsActive");
})
$(".spreadnNavUl p").click(function(){
  if (!$(this).hasClass("spreadsActive")){
    $(this).addClass("spreadsActive");
  }
  $(this).siblings().removeClass("spreadsActive");

  var id = $(this).attr('id');
  id = id.slice(-1);
  // console.log(id)

// console.log(id)
  var showId = $(".infoContainer").find(".scrollHidden").eq((id-1)).attr('id');
  showId ='#' + showId;
  // console.log(showId)
  
  $(showId).show();
  $(showId).siblings().hide();
})




  //phone change type 
  $(function(){
    $(".infoContainerPhone").find(".scrollHidden").hide();
    $(".infoContainerPhone").find(".scrollHiddenFirst").show();
    $("#phoneNav1").addClass("spreadsActive");
  })
  $(".spreadnNavUl p").click(function(){
    if (!$(this).hasClass("spreadsActive")){
      $(this).addClass("spreadsActive");
    }
    $(this).siblings().removeClass("spreadsActive");
  
    var id = $(this).attr('id');
    id = id.slice(-1);
    // console.log(id)
  
  // console.log(id)
    var showId = $(".infoContainerPhone").find(".scrollHidden").eq((id-1)).attr('id');
    showId ='#' + showId;
    // console.log(showId)
    
    $(showId).show();
    $(showId).siblings().hide();
  })
//overlayer
function showOverlay() {
  // 遮罩层宽高分别为页面内容的宽高
  $('.overlay').css({'height':$(document).height(),'width':$(document).width()});
  $('.overlay').show();
}
$(".overlay").click(function () {
  $('.overlay').hide();
      $("#sideBar").removeClass("addWidth");
})
//phoneNav

$("#clickImg").click(function () {
  showOverlay();
      var sideBar = $("#sideBar");
      //先判断没有这个class，没有的话就添加，这个添加动作会触发过渡效果
      if (!sideBar.hasClass("addWidth")) {
          $("#sideBar").addClass("addWidth");
      }
      //同理，展开之后要切换，移除这个class来触发减小宽度的过渡效果
      else {
          $("#sideBar").removeClass("addWidth");
          $('.overlay').hide();
      }
})
  $("#phoneNavSlider").click(function () {
    showOverlay();
      var sideBar = $("#sideBar");
      //先判断没有这个class，没有的话就添加，这个添加动作会触发过渡效果
      if (!sideBar.hasClass("addWidth")) {
          $("#sideBar").addClass("addWidth");
      }
      //同理，展开之后要切换，移除这个class来触发减小宽度的过渡效果
      else {
          $("#sideBar").removeClass("addWidth");
          $('.overlay').hide();
      }
  })
