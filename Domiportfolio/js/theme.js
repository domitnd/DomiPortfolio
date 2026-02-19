// ===== DARK MODE TOGGLE FUNCTIONALITY =====

(function() {
    // Theme key for localStorage
    const THEME_KEY = 'portfolio_theme';
    
    // Get DOM elements
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;
    
    // Check for saved theme preference
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.checked = true;
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeToggle) themeToggle.checked = false;
        }
    }
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            newTheme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            newTheme = 'light';
        }
        
        // Save to localStorage
        localStorage.setItem(THEME_KEY, newTheme);
        
        // Update toggle state
        if (themeToggle) {
            themeToggle.checked = (newTheme === 'dark');
        }
        
        // Dispatch event for other scripts
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        }));
    }
    
    // Add event listener to theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }
    
    // Initialize theme
    initTheme();
    
    // Optional: Add floating theme toggle button alternative
    function addFloatingThemeToggle() {
        // Check if floating toggle already exists
        if (document.querySelector('.theme-toggle')) return;
        
        const floatingToggle = document.createElement('div');
        floatingToggle.className = 'theme-toggle';
        floatingToggle.innerHTML = `
            <button class="theme-toggle-btn" id="floatingThemeBtn" aria-label="Toggle theme">
                🌓
            </button>
        `;
        
        document.body.appendChild(floatingToggle);
        
        const floatingBtn = document.getElementById('floatingThemeBtn');
        if (floatingBtn) {
            floatingBtn.addEventListener('click', function() {
                // Trigger the main toggle if it exists
                if (themeToggle) {
                    themeToggle.checked = !themeToggle.checked;
                    themeToggle.dispatchEvent(new Event('change'));
                } else {
                    toggleTheme();
                }
                
                // Update button emoji based on theme
                updateFloatingButtonEmoji();
            });
        }
        
        updateFloatingButtonEmoji();
    }
    
    function updateFloatingButtonEmoji() {
        const floatingBtn = document.getElementById('floatingThemeBtn');
        if (!floatingBtn) return;
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        floatingBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
    
    // Update floating button when theme changes
    window.addEventListener('themeChanged', updateFloatingButtonEmoji);
    
    // Add floating toggle after page load
    document.addEventListener('DOMContentLoaded', addFloatingThemeToggle);
    
})();