$(".tablink").each(function(index) {
  $(this).click(function(e) {
    triggletab();
    triigletabcontent();
    $(this).toggleClass("selected");
    $(".tabpage")
      .eq(index)
      .toggleClass("tabshow");
  });
});
//to remove all tab headers
function triggletab() {
  $(".tablink").each(function() {
    $(this).removeClass("selected");
  });
}
 
//triggle the tab content
function triigletabcontent() {
  $(".tabpage").each(function() {
    $(this).removeClass("tabshow");
  });
}