// document.getElementById("readMore").addEventListener("click", expandBio());

function expandBio() {
  var dots = document.getElementById("dots");
  var fullBio = document.getElementById("fullBio");
  var readMore = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read more";
    fullBio.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read less";
    fullBio.style.display = "inline";
  }
}
