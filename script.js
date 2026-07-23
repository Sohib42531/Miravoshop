// HTML एलिमेंट्स को सिलेक्ट करना
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCount = document.getElementById('cart-count');
const priceCards = document.querySelectorAll('.price-card');

// कार्ट की शुरुआती गिनती
let cartItemsCount = 0;
let selectedWeight = "250g"; // शुरुआती वजन
let selectedPrice = "149";   // शुरुआती कीमत

// 1. वजन (Weight) बदलने का फंक्शन
priceCards.forEach(card => {
    card.addEventListener('click', function() {
        // पुरानी एक्टिव क्लास हटाना
        document.querySelector('.price-card.active').classList.remove('active');
        // नई एक्टिव क्लास जोड़ना
        this.classList.add('active');
        
        // डेटा एट्रिब्यूट से वैल्यू लेना
        selectedWeight = this.getAttribute('data-weight');
        selectedPrice = this.getAttribute('data-price');
    });
});

// 2. Add to Cart बटन क्लिक करने का फंक्शन
addToCartBtn.addEventListener('click', () => {
    // कार्ट काउंट बढ़ाना
    cartItemsCount += 1;
    cartCount.innerText = cartItemsCount;
    
    // कार्ट के आइकॉन पर थोड़ा सा पॉप एनिमेशन देना
    cartCount.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartCount.style.transform = "scale(1)";
    }, 200);

    // यूजर को स्क्रीन पर मैसेज दिखाना
    alert(`Added to Cart: Multani Mitti Powder (${selectedWeight}) - ₹${selectedPrice}.00`);
});
