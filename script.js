gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".timeline-box").forEach((box, i) => {
  const fromX = i % 2 === 0 ? -200 : 200;

  gsap.from(box, {
    x: fromX,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "restart reverse restart reverse", 
    }
  });
});