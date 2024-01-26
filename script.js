let prevScrollPos = window.pageYOffset;

var fullViewportHeight =
  window.innerHeight || document.documentElement.clientHeight;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    document.querySelector("header").setAttribute("data-visible", "false");
  } else {
    document.querySelector("header").setAttribute("data-visible", "true");
    console.log({ currentScrollPos, fullViewportHeight });
    if (currentScrollPos < fullViewportHeight) {
      document.querySelector(
        'header[data-visible="true"]:after'
      ).style.background = "red";
    }
  }

  prevScrollPos = currentScrollPos;
};
