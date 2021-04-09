$(document).scroll(function () {
    $(".navbar").toggleClass(
      "fixed",
      $(this).scrollTop() > $("header").height()
    );
  });