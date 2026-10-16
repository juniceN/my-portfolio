document.addEventListener("DOMContentLoaded", function() {

    // Typing animation
    let text = "Frontend Developer";
    let i = 0;

    let heading = document.querySelector(".hero h1");

    let typingText = document.createElement("p");
    typingText.style.color = "#00d9f5";
    typingText.style.fontSize = "14px";

    heading.after(typingText);

    function typeText() {
        if (i < text.length) {
            typingText.textContent += text[i];
            i++;

            setTimeout(typeText, 100);
        }
    }

    typeText();


    // Scroll animation
    let elements = document.querySelectorAll(
        ".content, .about-image, .about-content, " +
        ".info-card, .contact-info, .contact-form"
    );

    elements.forEach(function(element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "0.8s";
    });

    window.addEventListener("scroll", function() {

        elements.forEach(function(element) {
            let position = element.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });

    });

});
