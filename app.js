gsap.registerPlugin(ScrollTrigger);

// Line One
const tlOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

tlOne.from(".line-one span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
});

tlOne.to(".line-one", {
  backgroundColor: "yellow",
  duration: 1,
});

tlOne.fromTo(
  ".sun",
  { x: "100vw", rotation: 0 },
  { x: 0, rotation: 180, duration: 1, ease: "power1.out" }
);

tlOne.to(
  ".sun",
  {
    x: "-100vw",
    rotation: 360,
    duration: 1,
  },
  "+=0.5"
);
tlOne.to(
  ".line-one span",
  {
    x: "100vw",
    opacity: 0,
    stagger: 0.05,
    duration: 1,
  },
  "<"
);
tlOne.to(
  ".line-one",
  {
    backgroundColor: "#fff",
    duration: 1,
  },
  "<"
);

// Line Two
gsap.from(".line-two span", {
  scale: 20,
  x: "100%",
  y: "100%",
  scrollTrigger: {
    trigger: ".line-two",
    start: "top bottom",
    end: "center center",
    scrub: 1,
  },
});

const tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "center center",
    end: "bottom top",
    scrub: 1,
  },
});

tlTwo.to(".line-two span:first-child", { y: -50 }, 0);
tlTwo.to(".line-two span:last-child", { y: 50 }, 0);

// Line Three
gsap.set(".line-three span", {
  color: "#fff",
  mixBlendMode: "difference",
  y: 100,
  opacity: 0,
});

gsap.set(".moon", { opacity: 0, x: -100, rotation: -90 });

const tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "+=150%",
    pin: true,
    scrub: 1,
  },
});

tlThree.to(".line-three span", {
  y: 0,
  opacity: 1,
  stagger: 0.1,
  duration: 1,
});

tlThree.to(".line-three", {
  backgroundPositionX: "0%",
  ease: "none",
  duration: 2,
});

tlThree.to(
  ".moon",
  {
    opacity: 1,
    x: 0,
    rotation: 0,
    duration: 1,
    ease: "power2.out",
  },
  "-=1"
);
