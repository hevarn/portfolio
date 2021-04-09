// var height=$("header").height();
// $(document).scroll(function(){
//     if($(document).scrollTop() > height){
//         $(".navbar").addClass("fixed");
//     }else{
//         $(".navbar").removeClass("fixed");
//     }
// })

// var height=document.getElementById("header").height();

$(document).scroll(function () {
    $(".navbar").toggleClass(
      "fixed",
      $(this).scrollTop() > $("header").height()
    );
  });