const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videoAnimation() {
  const v_cont = document.querySelector("#video-container");
  const play_btn = document.querySelector(".play");

  v_cont.addEventListener("mouseenter", () => {
    gsap.to(play_btn, {
      scale: 1,
      opacity: 1,
    });
  });

  v_cont.addEventListener("mouseleave", () => {
    gsap.to(play_btn, {
      scale: 0,
      opacity: 0,
    });
  });

  v_cont.addEventListener("mousemove", (e) => {
    gsap.to(play_btn, {
      left: e.x - 50,
      top: e.y - 50,
    });
  });
}
videoAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 80,
    opacity: 0,
    delay: 0.2,
    stagger: 0.4,
    duration: 0.5,
  });
}
loadingAnimation();
