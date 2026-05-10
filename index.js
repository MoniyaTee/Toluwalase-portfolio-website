gsap.registerPlugin(ScrollTrigger);


// Menubar Toggle
document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".nav-center");

        toggle.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      });


    //   hero animation

    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%", // when hero enters screen
    toggleActions: "play none none reset"
  }
});

tl.from(".hero-text h1", {
  y: 80,
  opacity: 0,
  duration: 1
})
.from(".hero-text h2", {
  y: 80,
  opacity: 0,
  duration: 1
}, "-=0.7")
.from(".hero-text p", {
  opacity: 0,
  duration: 1
}, "-=0.7")
.from(".left-avatar", {
  x: -120,
  opacity: 0,
  duration: 1
}, "-=0.8")
.from(".right-avatar", {
  x: 120,
  opacity: 0,
  duration: 1
}, "-=1")
.from(".badge", {
  scale: 0,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: "back.out(1.7)"
}, "-=0.5");

// moving badges
gsap.to(".badge", {
  y: "+=10",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.2
});

// avatar movement
gsap.to(".right-avatar", {
  y: -15,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// About section
gsap.from(".about h2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "play none none reset"
  },
  y: 30,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});



// services

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });
}, {
  threshold: 0.2
});

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 150}ms`;
  observer.observe(card);
});

const line = document.querySelector(".service-line");

const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      line.classList.add("animate");
    } else {
      line.classList.remove("animate");
    }
  });
}, {
  threshold: 0.3
});

lineObserver.observe(line);




// scrollUp-button
const backToTop = document.getElementById("backToTop");

// show button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// darkmode toggle
const toggle = document.getElementById("darkmodeToggle");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  // save preference
 if (document.documentElement.classList.contains("dark")) {
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}