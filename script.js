// Products Data
const products = [
    {
        id: 1,
        name: "APEX Ultra Running Shoe",
        category: "shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "High-performance running shoes with advanced cushioning",
        rating: 4.8,
        reviews: 234
    },
    {
        id: 2,
        name: "APEX Performance T-Shirt",
        category: "apparel",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        description: "Breathable moisture-wicking t-shirt",
        rating: 4.6,
        reviews: 189
    },
    {
        id: 3,
        name: "APEX Core Training Shorts",
        category: "apparel",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1506629082632-19b5bbb78b79?w=400&h=400&fit=crop",
        description: "Lightweight training shorts with compression",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "APEX Elite Basketball Shoes",
        category: "shoes",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        description: "Professional basketball shoes with ankle support",
        rating: 4.9,
        reviews: 312
    },
    {
        id: 5,
        name: "APEX Sports Bra",
        category: "apparel",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
        description: "High-impact support sports bra",
        rating: 4.8,
        reviews: 267
    },
    {
        id: 6,
        name: "APEX Training Jacket",
        category: "apparel",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop",
        description: "Lightweight weather-resistant training jacket",
        rating: 4.7,
        reviews: 198
    },
    {
        id: 7,
        name: "APEX Athletic Socks (3 Pack)",
        category: "accessories",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1556821552-107d12294456?w=400&h=400&fit=crop",
        description: "Premium cushioned athletic socks",
        rating: 4.5,
        reviews: 421
    },
    {
        id: 8,
        name: "APEX Gym Backpack",
        category: "accessories",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description: "Durable gym backpack with shoe storage",
        rating: 4.6,
        reviews: 289
    },
    {
        id: 9,
        name: "APEX Yoga Mat",
        category: "accessories",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
        description: "Non-slip yoga mat with carrying strap",
        rating: 4.7,
        reviews: 342
    },
    {
        id: 10,
        name: "APEX Wireless Earbuds",
        category: "accessories",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        description: "Water-resistant wireless earbuds with noise cancellation",
        rating: 4.8,
        reviews: 523
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || {};
let currentFilter = 'all';
let currentLanguage = localStorage.getItem('language') || 'en';

// Translations
const translations = {
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        cart_title: "Shopping Cart",
        checkout: "Checkout",
        clear_cart: "Clear Cart",
        complete_purchase: "Complete Purchase",
        shop_now: "Shop Now",
        our_collection: "Our Collection",
        all: "All",
        shoes: "Shoes",
        apparel: "Apparel",
        accessories: "Accessories",
        about_title: "About APEX",
        about_text: "APEX is a premium athletic brand dedicated to providing high-quality sports apparel, shoes, and accessories for athletes of all levels. We combine innovation, comfort, and style to help you reach your peak performance.",
        quality: "Quality",
        quality_desc: "Premium materials and expert craftsmanship",
        innovation: "Innovation",
        innovation_desc: "Cutting-edge technology for performance",
        sustainability: "Sustainability",
        sustainability_desc: "Eco-friendly production practices",
        contact_title: "Contact Us",
        name_placeholder: "Your Name",
        email_placeholder: "Your Email",
        message_placeholder: "Your Message",
        send_message: "Send Message",
        where_performance: "Where Performance Meets Style",
        subtotal: "Subtotal: $",
        tax: "Tax (10%): $",
        total: "Total: $",
        shipping_info: "Shipping Information",
        full_name: "Full Name",
        address: "Address",
        city: "City",
        zip_code: "ZIP Code",
        payment_info: "Payment Information",
        card_number: "Card Number",
        expiry: "MM/YY",
        cvv: "CVV",
        order_confirmed: "Order Confirmed",
        thank_you: "Thank you for your purchase!",
        order_id: "Order ID:",
        email_confirmation: "You will receive a confirmation email shortly.",
        continue_shopping: "Continue Shopping",
        add_to_cart: "Add to Cart",
        your_cart_empty: "Your cart is empty",
        copyright: "© 2026 APEX Athletic. All rights reserved."
    },
    sq: {
        home: "Kreu",
        shop: "Dyqani",
        about: "Rreth nesh",
        contact: "Kontakt",
        cart_title: "Shporta e Blerjeve",
        checkout: "Paguaj",
        clear_cart: "Zbraz Shportën",
        complete_purchase: "Përfundo Blerjen",
        shop_now: "Bli Tani",
        our_collection: "Koleksioni Ynë",
        all: "Të Gjitha",
        shoes: "Këpucë",
        apparel: "Rroba",
        accessories: "Aksesorë",
        about_title: "Rreth APEX",
        about_text: "APEX është një markë atletike premium e dedikuar për të siguruar veshje sportive me cilësi të lartë, këpucë dhe aksesorë për atletët e të gjithë niveleve. Ne kombinojmë inovacionin, komoditetin dhe stilin për t'ju ndihmuar të arrini përfeksionin tuaj.",
        quality: "Cilësia",
        quality_desc: "Materiale premium dhe zanati i ekspertëve",
        innovation: "Inovacioni",
        innovation_desc: "Teknologjia e prerë për performancën",
        sustainability: "Qëndrueshmëria",
        sustainability_desc: "Praktikat e prodhimit miqësore me mjedisin",
        contact_title: "Kontaktu Mund",
        name_placeholder: "Emri Juaj",
        email_placeholder: "Email-i Juaj",
        message_placeholder: "Mesazhi Juaj",
        send_message: "Dërgo Mesazh",
        where_performance: "Ku Përformancat Plotësohen me Stilin",
        subtotal: "Nënshuma: $",
        tax: "Tatim (10%): $",
        total: "Gjithsej: $",
        shipping_info: "Informacioni i Dërgimit",
        full_name: "Emri i Plotë",
        address: "Adresa",
        city: "Qyteti",
        zip_code: "Kodi Postar",
        payment_info: "Informacioni i Pagesës",
        card_number: "Numri i Kartës",
        expiry: "MM/YY",
        cvv: "CVV",
        order_confirmed: "Porosi e Konfirmuar",
        thank_you: "Faleminderit për blerjen tuaj!",
        order_id: "ID i Porositë:",
        email_confirmation: "Ju do të merrni një email konfirmimi në breve.",
        continue_shopping: "Vazhdoni të Blini",
        add_to_cart: "Shto në Shportë",
        your_cart_empty: "Shporta juaj është bosh",
        copyright: "© 2026 APEX Athletic. Të gjitha të drejtat e rezervuara."
    }
};

// Switch Language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update page content
    updatePageLanguage();
}

// Update all text on page
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Navigation
    document.querySelectorAll('.nav-link')[0].textContent = t.home;
    document.querySelectorAll('.nav-link')[1].textContent = t.shop;
    document.querySelectorAll('.nav-link')[2].textContent = t.about;
    document.querySelectorAll('.nav-link')[3].textContent = t.contact;
    
    // Hero
    document.querySelector('.hero-content h1').textContent = 'APEX ATHLETIC';
    document.querySelector('.hero-content p').textContent = t.where_performance;
    document.querySelector('.hero .btn').textContent = t.shop_now;
    
    // Products Section
    document.querySelector('.products-section h2').textContent = t.our_collection;
    document.querySelectorAll('.filter-btn')[0].textContent = t.all;
    document.querySelectorAll('.filter-btn')[1].textContent = t.shoes;
    document.querySelectorAll('.filter-btn')[2].textContent = t.apparel;
    document.querySelectorAll('.filter-btn')[3].textContent = t.accessories;
    
    // About
    document.querySelector('.about h2').textContent = t.about_title;
    document.querySelector('.about > p').textContent = t.about_text;
    document.querySelectorAll('.feature')[0].querySelector('h3').textContent = t.quality;
    document.querySelectorAll('.feature')[0].querySelector('p').textContent = t.quality_desc;
    document.querySelectorAll('.feature')[1].querySelector('h3').textContent = t.innovation;
    document.querySelectorAll('.feature')[1].querySelector('p').textContent = t.innovation_desc;
    document.querySelectorAll('.feature')[2].querySelector('h3').textContent = t.sustainability;
    document.querySelectorAll('.feature')[2].querySelector('p').textContent = t.sustainability_desc;
    
    // Contact
    document.querySelector('.contact h2').textContent = t.contact_title;
    document.querySelectorAll('.contact-form input')[0].placeholder = t.name_placeholder;
    document.querySelectorAll('.contact-form input')[1].placeholder = t.email_placeholder;
    document.querySelector('.contact-form textarea').placeholder = t.message_placeholder;
    document.querySelector('.contact-form .btn').textContent = t.send_message;
    
    // Footer
    document.querySelector('.footer p').textContent = t.copyright;
    
    // Reload products with translated names
    loadProducts();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang === 'sq') {
        document.querySelectorAll('.lang-btn')[1].classList.add('active');
        document.querySelectorAll('.lang-btn')[0].classList.remove('active');
    }
    updatePageLanguage();
    loadProducts();
    updateCartCount();
});

// Load and Display Products
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const rating = '⭐'.repeat(Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-rating">${rating} (${product.reviews})</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <select id="qty-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts();
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    
    if (cart[productId]) {
        cart[productId].quantity += quantity;
    } else {
        cart[productId] = {
            product: product,
            quantity: quantity
        };
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    let count = 0;
    for (let id in cart) {
        count += cart[id].quantity;
    }
    document.getElementById('cart-count').textContent = count;
}

// Toggle Cart Modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        displayCartItems();
        updateCartSummary();
    }
}

// Display Cart Items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    
    if (Object.keys(cart).length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        return;
    }
    
    for (let id in cart) {
        const item = cart[id];
        const itemTotal = (item.product.price * item.quantity).toFixed(2);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.product.name}</div>
                <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${id}, 1)">+</button>
            </div>
            <div>$${itemTotal}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${id})">Remove</button>
        `;
        
        cartItemsDiv.appendChild(itemDiv);
    }
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart[productId];
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartCount();
        displayCartItems();
        updateCartSummary();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    delete cart[productId];
    saveCart();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = {};
        saveCart();
        updateCartCount();
        displayCartItems();
        updateCartSummary();
    }
}

// Update Cart Summary
function updateCartSummary() {
    let subtotal = 0;
    
    for (let id in cart) {
        const item = cart[id];
        subtotal += item.product.price * item.quantity;
    }
    
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Checkout
function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
}

// Close Checkout
function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Complete Checkout
function completeCheckout(event) {
    event.preventDefault();
    
    const orderId = 'APEX-' + Date.now();
    
    // Show confirmation
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('confirmation-modal').style.display = 'block';
    document.getElementById('order-id').textContent = orderId;
    
    // Clear cart
    cart = {};
    saveCart();
    updateCartCount();
}

// Close Confirmation
function closeConfirmation() {
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'none';
}

// Handle Contact Submit
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting APEX! We will get back to you soon.');
    event.target.reset();
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00d4ff;
        color: black;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        font-weight: bold;
        z-index: 300;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Close modal when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (event.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
}

// Add animation styles
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
