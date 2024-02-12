// Add your JavaScript logic here

// Smooth scroll to section on link click
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Implement animations using GSAP library
gsap.from('.hero', { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from('.features .feature', { opacity: 0, duration: 1, delay: 1, stagger: 0.2, y: 50 });
gsap.from('.courses .course', { opacity: 0, duration: 1, delay: 1.5, stagger: 0.2, y: 50 });
gsap.from('.about', { opacity: 0, duration: 1, delay: 2, y: 50 });

// Form validation
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorContainer = document.querySelector('.error-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    errorContainer.textContent = 'Please fill in all the fields.';
    return;
  }

  // Process form submission
  // ...
});