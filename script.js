// Typing Animation

const text =
"AI & ML Enthusiast | Python Developer | C Programmer | GDG Volunteer | Multiple Hackathon Projects | Entrepreneurship";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 60);
    }
}

window.onload = () => {

    typeWriter();

    revealElements();
};


// Scroll Reveal Animation

const revealItems = document.querySelectorAll(
'.project-card, .edu-card, .cert-card, .stat-card, .skill, .interests div'
);

function revealElements() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealElements);


// Initial Styles

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition =
    "all 0.8s ease";
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#00e5ff"
    },
    shape: {
      type: "triangle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 5
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: true,
      straight: false
    },
    line_linked: {
      enable: false
    }
  }
});