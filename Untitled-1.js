//------------------------------------------------------------------------------
// Sends a message to the main document telling it that the animation is finished
function startNextMotionGraphic() {
  window.parent.postMessage("complete", "*");
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Get the root font-size from the parent document and apply it to this one.
const parent = window.parent.document.querySelector("html");
const style = getComputedStyle(parent).fontSize;
document.documentElement.style.setProperty("font-size", style);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// GSAP Timeline
// https://greensock.com/docs/v3/GSAP/Timeline

// Create a new gsap timeline
var tl = gsap.timeline({ onComplete: startNextMotionGraphic });

// Pause the timeline (we'll start the animation on .Ready();)
tl.pause();
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// GSAP TIMELINE HINTS
// https://greensock.com/docs/v3/GSAP/Timeline/to()
// https://greensock.com/docs/v3/GSAP/Timeline/from()
// https://greensock.com/docs/v3/GSAP/Timeline/fromTo()

// Position Parameters
// 3        Absolute: Start exactly 3 seconds from the start of the timeline
// "+=1"    Relative: Start +1 second relative to the end of the time line
// "-=1"    Relative: Start -1 second relative to the end of the time line
// "<"      Start at the beginning of the most recent animation
// ">"      Start at the end of the most recent animation
// "<1"     Start at the beginning of the most recent animation +1 second
// ">-1"     Start at the end of the most recent animation -1 second

// Easing Parameters
// "power1" "power2"    "power3"    "power4"
// "back"   "elastic"   "bounce"    "rough"
// "slow"   "steps"     "circ"      "expo"
// "sine"

// 2D Transforms
// rotation, rotationX, rotationY, scaleX, scaleY, scale, skewX, skewY, x, y, xPercent, yPercent

// Note: A common mistake is to forget to use camel case representations of the properties,
// so instead of “font-size”, you’d use “fontSize”. “background-color” should be “backgroundColor”.
//------------------------------------------------------------------------------

// tl.to(target, variables, position)
// tl.from(target, variables, position)
// tl.fromTo(target, from vars, to vars, position)

//-----------------------------
// EXAMPLE CODE...PLEASE DELETE
//-----------------------------

gsap.set(
  "#logo, #haedline1, #text1, #dateheading, #date, #img1, #bar, #headline2, #text2, #img2, #img3, #headline3, #text3, #text4, #background",
  {
    transformOrigin: "center center",
  }
);

tl.from(
  "#logo",
  {
    scale: 0,
    rotation: 180,
    duration: 2,
    ease: "circ",
  },
  1
); //play 1s after previous

tl.to(
  "#logo",
  {
    scale: 0,
    rotation: -180,
    duration: 1,
    ease: "circ",
  },
  ">2"
);

tl.from(
  "#background",
  {
    opacity: 0,
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#bar",
  {
    opacity: 0,
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#haedline1",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#subheadline1",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  ">"
);

tl.from(
  "#text1",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  ">"
);

tl.from(
  "#img1",
  {
    opacity: 0,
    x: "-100",
    duration: 1,
    ease: "back",
  },
  ">"
);

tl.from(
  "#img2",
  {
    opacity: 0,
    x: "100",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#haedline1",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  ">5"
);

tl.to(
  "#subheadline1",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#text1",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  ">"
);

tl.to(
  "#img1",
  {
    opacity: 0,
    x: "-100",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#img2",
  {
    opacity: 0,
    x: "100",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#headline2",
  {
    opacity: 0,
    x: "-200",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#text2",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  ">"
);

tl.from(
  "#img3",
  {
    opacity: 0,
    y: "300",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#headline2",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  ">6"
);

tl.to(
  "#text2",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  "<"
);

tl.to(
  "#img3",
  {
    opacity: 0,
    y: "300",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#headline3",
  {
    opacity: 0,
    x: "-200",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.from(
  "#text3",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  ">"
);

tl.from(
  "#img4",
  {
    opacity: 0,
    y: "300",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#headline3",
  {
    opacity: 0,
    y: "-100",
    duration: 1,
    ease: "back",
  },
  ">5"
);

tl.to(
  "#text3",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "bounce",
  },
  "<"
);

tl.to(
  "#img4",
  {
    opacity: 0,
    y: "300",
    duration: 1,
    ease: "back",
  },
  "<"
);

tl.to(
  "#background",
  {
    opacity: 0,
    duration: 1,
    ease: "back",
  },
  ">"
);

tl.to(
  "#bar",
  {
    opacity: 0,
    duration: 1,
    ease: "back",
  },
  "<"
);

// Start the animation
$(document).ready(function () {
  // Resume/Play the gsap timeline(s)
  tl.resume();
});
