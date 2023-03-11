$(document).ready(function () {
  $("nav ul.nav-list li:nth-of-type(1)").click(function () {
    $("nav ul.side-nav-list").toggle(500);
    $(this).toggleClass("toggle-menu");
  });
});

const imgArray = document.querySelectorAll(
  "section#gallery ul.grid-container li"
);

for (let i = 0; i < imgArray.length; i++) {
  // imgArray[i].style.backgroundImage = `url("../images/gallery/img_${i}.jpg")`;
  imgArray[
    i
  ].innerHTML = `<img class="gall" src="images/gallery/img_${i}.jpg" alt="img_${i}.jpg" />`;
}

const heading = document.querySelectorAll(".container h2.section-heading");
console.log("AGT", heading);
