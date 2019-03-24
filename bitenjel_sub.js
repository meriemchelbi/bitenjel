$(document).ready(function() {

console.log('Page Loaded');

$(".tile").mouseover(function() {
		$(this).children(".overlay").show();
	});
$(".tile").mouseout(function() {
	$(this).children(".overlay").hide();
	});

$(".overlay").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

});
