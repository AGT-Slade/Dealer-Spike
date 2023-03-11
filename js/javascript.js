$(document).ready(function () {
  $("nav ul li:nth-of-type(1)").click(function () {
    $("nav ul.side-nav-list").toggle(500);
    $(this).toggleClass("toggle-menu");
  });
});
