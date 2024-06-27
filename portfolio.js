document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });

    // Show/hide scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project filtering based on category
    const filterButtons = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Animating skill progress bars based on data-skill attribute
const skillBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        const section = bar.closest('section');
        if (section.getBoundingClientRect().top < window.innerHeight) {
            bar.style.setProperty('--skill-level', skillLevel);
        }
    });
});

    // Lightbox functionality for project images (placeholder for actual implementation)
    const lightboxLinks = document.querySelectorAll('.lightbox');
    lightboxLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Lightbox implementation can be added here
            // For example, open the image in a modal
        });
    });
});
