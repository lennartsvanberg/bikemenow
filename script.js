document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typed-text');
    const prompts = [
        "Hur reparerar jag avgassystemet på en Kawasaki 2025:a?",
        "Hur mycket sålde vi för under januari 2026?",
        "Vilka service-tider är bokade imorgon?"
    ];
    
    let promptIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!textElement) return; // Basic error check

        const currentPrompt = prompts[promptIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPrompt.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPrompt.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPrompt.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            promptIndex = (promptIndex + 1) % prompts.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start the animation
    typeEffect();

    // Form Handling - Modified to allow default form action (mailto)
    const form = document.getElementById('waitlist-form');
    const msg = document.getElementById('form-msg');

    if (form && msg) {
        form.addEventListener('submit', () => {
            // We do NOT call e.preventDefault() here.
            // We want the default mailto: action to proceed.
            // But we will still show the feedback message.
            form.classList.add('hidden');
            msg.classList.remove('hidden');
        });
    }
});
