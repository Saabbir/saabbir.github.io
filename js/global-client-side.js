console.log("Saabbir:", "Client side js running!");

function setNavbarHeightCustomProperty() {
  setTimeout(function() {
    document.documentElement.style.setProperty(
      "--navbarHeight",
      document.querySelector(".c-navbar").clientHeight + 16 + "px"
    );
  }, 200);
}

!(function pollingFunction() {
  if (window._) {
    // On resize window, set --navbarHeight CSS custom property
    window.addEventListener(
      "resize",
      _.throttle(setNavbarHeightCustomProperty, 200)
    );
  } else {
    setTimeout(pollingFunction, 25);
  }
})();

$(".c-article-nav a").on("click", function(event) {
  event.preventDefault();

  // Animate to target section
  $("html, body").animate(
    {
      scrollTop:
        $(this.hash).offset().top -
        (document.querySelector(".c-navbar").clientHeight + 16)
    },
    450,
    "swing"
  );
});
