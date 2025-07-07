// === PHẦN 1: CODE CHO NÚT CHUYỂN GIAO DIỆN (DARK MODE) ===
const themeButton = document.getElementById('interactive-button');
const themeIcon = document.getElementById('theme-icon');

if (themeButton) {
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Nếu có icon, đổi giữa mặt trăng / mặt trời
        if (themeIcon) {
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
        }
    });
}

// === PHẦN 2: CODE CHO STICKY HEADER ===
const stickyHeader = document.getElementById('sticky-header');

if (stickyHeader) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            stickyHeader.classList.add('visible');
            document.body.classList.add('sticky-active');
        } else {
            stickyHeader.classList.remove('visible');
            document.body.classList.remove('sticky-active');
        }
    });
}

// === PHẦN 3: CODE CHO CARD HIỆN KHI CUỘN ===
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => observer.observe(card));
