document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');

    const textsToType = [
        "Mahasiswa Informatika UPNVJT",
        "Web Developer",
        "UI/UX Enthusiast"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayBetweenTexts = 1500;

    function type(){
        const currentText = textsToType[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }

        else if (isDeleting && charIndex > 0) {
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        }

        else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenTexts);
        } 

        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textsToType.length;
            setTimeout(type, typingSpeed);
        }
    }
    type();
} );

document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('#skills');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevels = document.querySelectorAll('.skill-level');
                skillLevels.forEach(skill => {
                    const level = skill.getAttribute('data-level');
                    skill.style.width = level;
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});