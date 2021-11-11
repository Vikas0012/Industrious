$(document).ready(function(){
    $(".search_icon").click(function(){
        $("#sr").fadeToggle();
    });

    $(".pro1").click(function(){
        $(".prod1").css("color", "red")
          $(".pic").fadeIn();
        $(".pic2").fadeOut();
        $(".pic3").fadeOut();
        $(".pic4").fadeOut();
    });

    $(".pro2").click(function(){
        $(".prod2").css("color", "red", "borderBottom" , "2px solid red" );
        $(".pic").fadeOut();
        $(".pic2").fadeIn();
        $(".pic3").fadeOut();
        $(".pic4").fadeOut();
    });
    $(".pro3").click(function(){
        $(".prod3").css("color", "red")
        $(".pic2").fadeOut();
        $(".pic").fadeOut();
        $(".pic3").fadeIn();
        $(".pic4").fadeOut();
    });
    $(".pro4").click(function(){
        $(".prod4").css("color", "red")
        $(".pic2").fadeOut();
        $(".pic").fadeOut();
        $(".pic3").fadeOut();
        $(".pic4").fadeIn();
        
    });
    $(".imm").click(function(){
      $(".imoji").html();
        
    });
    $(".show1").click(function(){
        $(".lorem31").slideToggle();
    })
    $(".show2").click(function(){
        $(".lorem32").slideToggle();
    })
    $(".show3").click(function(){
        $(".lorem33").slideToggle();
    })
    $(".show4").click(function(){
        $(".lorem34").slideToggle();
    })
});



var data = document.getElementById('sr');
var ctx = data.getContext("2d");
ctx.moveTo(30,30);
ctx.lineTo(220,30);
ctx.stroke();
ctx.moveTo(220, 120);
ctx.lineTo(220,30);
ctx.stroke();
ctx.moveTo(30, 120);
ctx.lineTo(30,30);
ctx.stroke();
ctx.moveTo(30, 120);
ctx.lineTo(220,120);
ctx.stroke();

