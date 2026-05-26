const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('lightboxClose');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// State
let currentImages = [];
let currentIndex = 0;

// ===== Category Filter =====
filterBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 // Update active button