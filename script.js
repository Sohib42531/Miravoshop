// MIRAVO Website

document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar Shadow on Scroll
    window.addEventListener("scroll", function () {

        const header = document.querySelector("header");

        if(window.scrollY > 30){
            header.style.boxShadow="0 4px 15px rgba(0,0,0,.15)";
        }else{
            header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";
        }

    });

});
