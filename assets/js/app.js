const texts = [
    "Desarrolladora Web",
    "Java Developer",
    "Frontend Enthusiast",
    "Backend Learner"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1500);
    }
}

function darkmode() {
    const themeButton =
        document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme) {

        document.documentElement.setAttribute("data-theme", savedTheme);

        themeButton.textContent = savedTheme === "light" ? "☀️" : "🌙";

    }

    themeButton.addEventListener("click", () => {

        const currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "light") {

            document.documentElement.removeAttribute("data-theme");

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeButton.textContent = "🌙";

        } else {

            document.documentElement
                .setAttribute(
                    "data-theme",
                    "light"
                );

            localStorage.setItem(
                "theme",
                "light"
            );

            themeButton.textContent = "☀️";

        }
    });
}

function scrollAnimations() {
    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList
                            .add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    document
        .querySelectorAll(".fade-up")
        .forEach(element => {

            observer.observe(element);

        });
}

function deleteText() {
    if (charIndex > 0) {

        typingElement.textContent =
            texts[textIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {

            textIndex = 0;

        }

        setTimeout(typeText, 300);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    typeText
);

document.addEventListener("DOMContentLoaded", () => {
  scrollAnimations();
});
