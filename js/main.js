// ===== GLOBAL FUNCTIONS (Used on all pages) =====

// Dynamic Greeting based on time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;
    
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning! Ready to code?';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon!let\'s Keep building.';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening! Still learning?';
    } else {
        greeting = 'Late night coding? That\'s the spirit!';
    }
    
    greetingElement.textContent = greeting;
}

// Dynamic Year and Date in footer
function setFooterDate() {
    const yearElement = document.getElementById('current-year');
    const dateElement = document.getElementById('dynamic-date');
    
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    if (dateElement) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateElement.textContent = new Date().toLocaleDateString('en-GB', options);
    }
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    setFooterDate();
    
    // Update greeting every minute (optional)
    setInterval(setGreeting, 60000);
});