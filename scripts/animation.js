const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline.from(".header", { y: "-100%", ease: "bounce" });
