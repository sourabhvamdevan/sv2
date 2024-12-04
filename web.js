document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('about-text');
    const text = typewriterText.innerHTML;
    typewriterText.innerHTML = '';

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Example of adding interactivity
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert(`You clicked on ${project.querySelector('h3').innerText}!`);
        });
    });
});
