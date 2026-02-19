// ===== CONTACT FORM VALIDATION =====

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate
            if (!name || !email || !message) {
                showFeedback('Please fill in all required fields (*)', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFeedback('Please enter a valid email address', 'error');
                return;
            }
            
            if (message.length < 10) {
                showFeedback('Message must be at least 10 characters long', 'error');
                return;
            }
            
            // If validation passes (demo - no actual send)
            showFeedback('✓ Message sent successfully! (Demo - no actual email sent)', 'success');
            contactForm.reset();
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show feedback message
    function showFeedback(message, type) {
        feedbackDiv.textContent = message;
        feedbackDiv.className = 'form-feedback ' + type;
        
        // Clear after 5 seconds
        setTimeout(() => {
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'form-feedback';
        }, 5000);
    }
});