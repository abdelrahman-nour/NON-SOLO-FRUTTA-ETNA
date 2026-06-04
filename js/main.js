// scroll navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// close mobile menu
const mobileNavLinks = document.querySelectorAll(".navbar-collapse .nav-link");
const navbarCollapse = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
  toggle: false,
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.hide();
  });
});

// counter number trust
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = +counter.dataset.target;
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  let count = 0;
  const increment = target / 100;

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.innerText = prefix + Math.floor(count) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = prefix + target + suffix;
    }
  };

  updateCounter();
};

counters.forEach((counter) => {
  startCounter(counter);
});

// Reveal Animation

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        const counter = entry.target.querySelector(".counter");
        if (counter) {
          startCounter(counter);
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

// Active Navbar Links
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// WhatsApp Form

const sendBtn = document.getElementById("sendWhatsApp");
sendBtn.addEventListener("click", () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const whatsappMessage = `
New Wholesale Inquiry
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message:
${message}
`;
  const phoneNumber = "201120616552";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  window.open(whatsappURL, "_blank");
});
