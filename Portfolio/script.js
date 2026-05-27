// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
 navLinks.classList.toggle('active');
});

// --- Active Navbar Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
 let current = '';
 sections.forEach(section => {
 const sectionTop = section.offsetTop;
 const sectionHeight = section.clientHeight;
 if (scrollY >= sectionTop - 200) {
 current = section.getAttribute('id');
 }
 });

 navItems.forEach(item => {
 item.classList.remove('active');
 if (item.getAttribute('href').includes(current)) {
 item.classList.add('active');
 }
 });
});

// --- Smooth Scroll for Nav Links ---
document.querySelectorAll('.nav-links a').forEach(link => {
 link.addEventListener('click', (e) => {
 e.preventDefault();
 const targetId = link.getAttribute('href');
 document.querySelector(targetId).scrollIntoView({
 behavior: 'smooth'
 });
 // Close mobile menu on click
 navLinks.classList.remove('active');
 });
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
 revealElements.forEach(el => {
 const windowHeight = window.innerHeight;
 const elementTop = el.getBoundingClientRect().top;
 const revealPoint = 150;

 if (elementTop < windowHeight - revealPoint) {
 el.classList.add('active');
 }
 });
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// --- Optional: Typing Effect for Hero ---
const heroText = document.querySelector('.hero h1');
// Add your typing animation logic here if desired