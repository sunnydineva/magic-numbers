document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const menuBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Отваряне/затваряне на мобилното меню
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function () {
            mobileNav.classList.toggle("active");

        });
    }

    // Основна навигация toggle
    function toggleMenu() {
        if (navMenu) {
            navMenu.classList.toggle("show");
        }
        if (menuBtn) {
            menuBtn.classList.toggle("open");
        }
    }

    // Глобално достъпна
    window.toggleMenu = toggleMenu;

    document.addEventListener("click", function (event) {
        const isClickInsideNav = navMenu && navMenu.contains(event.target);
        const isClickOnBtn = menuBtn && menuBtn.contains(event.target);

        if (!isClickInsideNav && !isClickOnBtn) {
            if (navMenu) navMenu.classList.remove("show");
            if (menuBtn) menuBtn.classList.remove("open"); // ← ВАЖНО! това връща бутона в ☰
            if (mobileNav) mobileNav.classList.remove("active");

            dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
        }
    });

    // Подменюта: click + hover
    dropdowns.forEach((dropdown) => {
        const dropbtn = dropdown.querySelector(".dropbtn");

        if (dropbtn) {
            dropbtn.addEventListener("click", function (event) {
                event.preventDefault();
                dropdown.classList.toggle("active");
            });

            dropdown.addEventListener("mouseenter", function () {
                dropdown.classList.add("active");
            });

            dropdown.addEventListener("mouseleave", function () {
                dropdown.classList.remove("active");
            });
        }
    });

    // Клик извън менюто — затваря всичко
    document.addEventListener("click", function (event) {
        const isClickInsideNav = navMenu && navMenu.contains(event.target);
        const isClickOnBtn = menuBtn && menuBtn.contains(event.target);

        if (!isClickInsideNav && !isClickOnBtn) {
            if (navMenu) navMenu.classList.remove("show"); // или .visible
            if (menuBtn) menuBtn.classList.remove("open");
            if (mobileNav) mobileNav.classList.remove("active");

            // Затваря и всички подменюта
            dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
        }
    });
});
