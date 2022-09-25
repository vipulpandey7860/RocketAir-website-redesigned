function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  locoScroll.on('scroll', function (dets) {

    if (dets.direction === "up") {
      document.querySelector('#nav').style.top = "0";
    }

    else {
      document.querySelector('#nav').style.top = "-100%";

    }

  })

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

function VideosSlidesShowAndChange() {
  const getSlides = document.querySelectorAll('.slide');
  const getVideos = document.querySelectorAll('.elemvideo');

  for (let i = 0; i < getSlides.length; i++) {
    getSlides[i].addEventListener('mouseover', (e) => {
      getVideos[i].style.width = `25vw`;

    })

    getSlides[i].addEventListener('mouseleave', (e) => {
      getVideos[i].style.width = `0vw`;

    })
  }
}

function SmallCircleMoving() {
  document.querySelector("#round-text")
    .addEventListener("mousemove", function (dets) {
      var bndrectvals = document.querySelector("#round-text").getBoundingClientRect()
      var xVal = dets.clientX - bndrectvals.x;
      var yVal = dets.clientY - bndrectvals.y;

      document.querySelector("#moving-circle").style.top = yVal + "px";
      document.querySelector("#moving-circle").style.left = xVal + "px";
      document.querySelector("#moving-circle").style.boxShadow = "0 0 10px 3px green";
      document.querySelector("#moving-circle").style.backgroundColor = "yellow";

    })

  document.querySelector("#round-text")
    .addEventListener("mouseleave", function (dets) {
      document.querySelector("#moving-circle").style.top = 50 + "%";
      document.querySelector("#moving-circle").style.left = 50 + "%";

      document.querySelector("#moving-circle").style.boxShadow = "none";
      document.querySelector("#moving-circle").style.backgroundColor = "white";

    })
}

function workAnimationCode() {


  gsap.to('#page8 .card', {

    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "20% 40%",
      scrub: 0.5,
      pin: true,
      // markers:true,
      pinSpacing: true,


    },

    top: '-120%',
    stagger: .07,

  })

}

function circleColorchange() {
  gsap.to('#page9 #circle', {

    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      start: "20% 30%",
      scrub: 0.5,
      pin: true,
      // markers:true,
      pinSpacing: true,
    },

    bottom: '47%',
    stagger: .07,

  })


  gsap.to('#circle', {

    scrollTrigger: {
      trigger: "#circle",
      scroller: "#main",
      start: "70% 30%",
      // markers:true,
      toggleActions: "play pause resume reverse",
    },

    color: "black",
    backgroundColor: "#DBFF00",

  })


  gsap.to('#circle h5', {

    scrollTrigger: {
      trigger: "#circle",
      scroller: "#main",
      start: "70% 30%",
      // markers:true,
      toggleActions: "play pause resume reverse",
    },

    color: "black",


  })


  gsap.to('#content', {

    scrollTrigger: {
      trigger: "#circle",
      scroller: "#main",
      start: "70% 30%",
      // markers:true,
      toggleActions: "play pause resume reverse",
    },

    backgroundColor: "black",
    color: "white",


  })
}

function PlayCircle() {

  document.querySelector('#page1').addEventListener("mousemove", function (dets) {

    document.querySelector('#play-circle').style.top = `${dets.clientY}px`;
    document.querySelector('#play-circle').style.left = `${dets.clientX}px`;


  })

}

function OpenCloseButton() {

  var menu = document.querySelector(".hamburger");
  var full = document.querySelector("#menu-page");
  var button = document.querySelector("#button");


  var clickCounter = 1;

  menu.addEventListener("click", function () {
    if (clickCounter === 1) {

      full.style.left = '0%';
      button.style.display='none';
      menu.innerHTML = `<i id="clicked" class="ri-close-circle-fill"></i>`;

      clickCounter = 0;
    } else {

      full.style.left = '-100%';
      menu.innerHTML = `  <div class="hamburger">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
  </div>`;
  button.style.display='initial';

      clickCounter = 1;
    }

  })

}

function heroTextAnimation(){
    
    gsap.from(".row", {
      opacity: 0,
      y: '40',
      autoAlpha: 1,
      stagger: 0.1,

    })
}

function TextAnimation() {
  var AnimateIt = document.querySelectorAll(".txts");

  for (let i = 0; i < AnimateIt.length; i++) {

    gsap.from(AnimateIt[i], {

      scrollTrigger: {
        trigger: AnimateIt[i],
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      y: '40',
      autoAlpha: 1,
      stagger: 0.5,

    })

  }

  gsap.to('#page3-intro span', {

    scrollTrigger: {
      trigger:'#page3-intro span',
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: true,

    },
    width: '80%',
    duration: 3,

  })

}


OpenCloseButton();
locoScroll();
PlayCircle();
TextAnimation();
VideosSlidesShowAndChange();
heroTextAnimation();
SmallCircleMoving();
workAnimationCode();
circleColorchange();