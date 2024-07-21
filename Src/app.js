document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    function closeMenu() {
        if (window.innerWidth <= 700) {
            navMenu.style.opacity = "0";
            setTimeout(() => {
                navMenu.style.display = "none";
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";
            }, 300); // Correspondente ao tempo de transição
        }
    }

    menuIcon.addEventListener("click", function() {
        if (window.innerWidth <= 700) {
            navMenu.style.display = "flex";
            setTimeout(() => {
                navMenu.style.opacity = "1";
            }, 10); // Pequeno atraso para garantir a transição
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        }
    });

    closeIcon.addEventListener("click", closeMenu);

    window.addEventListener("resize", function() {
        if (window.innerWidth > 700) {
            navMenu.style.display = "flex";
            navMenu.style.opacity = "1";
            menuIcon.style.display = "none";
            closeIcon.style.display = "none";
        } else {
            closeMenu();
        }
    });

    // Fechar menu ao clicar em qualquer link do menu
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});
