/* ═══════════════════════════════════════════════════════
   BEST CALCULATORS HUB - COMPLETE JAVASCRIPT
   All functionality ready to use
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ═══ HAMBURGER MENU ═══
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target);
            if (!isClickInside && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // ═══ BACK TO TOP BUTTON ═══
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }
    
    // ═══ READ MORE BUTTON - COMPLETE FIX ═══
    const readMoreBtn = document.getElementById('readMoreBtn');
    const contentMore = document.getElementById('contentMore');
    
    if (readMoreBtn && contentMore) {
        readMoreBtn.addEventListener('click', function() {
            if (contentMore.classList.contains('expanded')) {
                // Collapse
                contentMore.classList.remove('expanded');
                readMoreBtn.textContent = 'Read More';
                
                // Smooth scroll to content section
                const contentSection = document.querySelector('.content-section');
                if (contentSection) {
                    const offset = 100; // Offset from top
                    const elementPosition = contentSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Expand
                contentMore.classList.add('expanded');
                readMoreBtn.textContent = 'Show Less';
            }
        });
    }
    
    // ═══ SEARCH FUNCTIONALITY ═══
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // ═══ SMOOTH SCROLL FOR ANCHOR LINKS ═══
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});

// ═══ SEARCH FUNCTION ═══
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.trim();
    
    if (query) {
        // For now, show alert
        // Later you'll implement actual search functionality
        alert('Searching for: "' + query + '"\n\nSearch functionality will be implemented when you add calculators to the database.');
        
        // Future implementation:
        // window.location.href = 'search.html?q=' + encodeURIComponent(query);
    } else {
        alert('Please enter a search term');
    }
}

// ═══ OPTIONAL: Category Card Click Analytics ═══
// Track which categories users click on
document.querySelectorAll('.category-card').forEach(function(card) {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('.category-name').textContent;
        console.log('Category clicked: ' + categoryName);
        
        // Future: Send to analytics
        // gtag('event', 'category_click', { 'category': categoryName });
    });
});

// ═══ OPTIONAL: Prevent Default on Empty Links ═══
document.querySelectorAll('a[href="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});