document.addEventListener('DOMContentLoaded', () => {
    // Product Image Switching Logic
    const colorRadios = document.querySelectorAll('input[name="color"]');
    const mainImage = document.getElementById('main-product-image');

    colorRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if(e.target.checked) {
                const newImageSrc = e.target.getAttribute('data-image');
                
                // Add fade effect
                mainImage.style.opacity = '0';
                
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.style.opacity = '1';
                }, 300);
            }
        });
    });

    // Handle form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get selected size and color
            const selectedSize = document.querySelector('input[name="size"]:checked').value;
            const selectedColor = document.querySelector('input[name="color"]:checked').value;
            
            // Basic form validation/success message
            const btn = checkoutForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Processing Order...';
            btn.style.backgroundColor = 'var(--success-color)';
            btn.style.color = '#fff';
            
            // Simulate API call
            setTimeout(() => {
                alert(`Order Placed Successfully!\n\nProduct: Premium Polo (${selectedColor})\nSize: ${selectedSize}\n\nWe will contact you shortly to confirm your delivery.`);
                checkoutForm.reset();
                
                // Reset button
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--primary-color)';
                btn.style.color = '#000';
            }, 1500);
        });
    }
});
