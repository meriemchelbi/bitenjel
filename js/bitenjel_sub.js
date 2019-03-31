$(document).ready(function() {

  console.log('Page Loaded');

  if (window.matchMedia("(min-width: 576px)").matches) {

    $(".tile").mouseover(function() {
      $(this).children(".overlay").show();
    });

    $(".tile").mouseout(function() {
      $(this).children(".overlay").hide();
    });

  } else {
    $(".overlay").show();
  };

  $(".overlay").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

});
