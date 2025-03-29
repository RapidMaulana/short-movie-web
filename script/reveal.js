document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 150); 
    });
});