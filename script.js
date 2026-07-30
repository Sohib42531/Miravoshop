// ==========================
// MIRAVO WEBSITE SCRIPT
// ==========================

// Smooth navbar shadow on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// Button animation
document.querySelectorAll(".btn,.buy-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});
