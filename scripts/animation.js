const timeline = gsap.timeline({
  defaults: { duration: 0.3 },
});

timeline
  .from(".header-img", { y: "-100%" })
  .from(".title", { x: "100%" })
  .from(".slogan", { y: "9000%" })
  .from(".overview", { opacity: 0, stagger: 0.5 })
  .from(".first-image", { x: "-300%" })
  .to(".first-image", { x: "0%" })
  .from(".second-image", { x: "-300%" })
  .to(".second-image", { x: "0%" })
  .from(".third-image", { x: "-300%" })
  .to(".third-image", { x: "0%" })
  .from(".fourth-image", { x: "-300%" })
  .to(".fourth-image", { x: "0%" })
  .from(".fifth-image", { x: "-300%" })
  .to(".fifth-image", { x: "0%" })
  .from(".metho1", { y: "1000%" })
  .to(".metho1", { y: "0%" })
  .from(".cta-logo", { x: "-400%" })
  .to(".cta-logo", { x: "0%" })
  .from(".cta-text", { x: "400%" })
  .to(".cta-text", { x: "0%" });
