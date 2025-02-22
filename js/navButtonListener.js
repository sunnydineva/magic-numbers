document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function () {
            mobileNav.classList.toggle("active");
        });
    }
});

function toggleMenu() {
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("show"); // Показва или скрива главното меню
}

// hover + click за подменютата
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        let dropbtn = dropdown.querySelector(".dropbtn");

        if (dropbtn) {
            // клик
            dropbtn.addEventListener("click", function (event) {
                event.preventDefault();
                dropdown.classList.toggle("active");
            });

            //  hover
            dropdown.addEventListener("mouseenter", function () {
                dropdown.classList.add("active"); //
            });

            dropdown.addEventListener("mouseleave", function () {
                dropdown.classList.remove("active");
            });
        }
    });
});
