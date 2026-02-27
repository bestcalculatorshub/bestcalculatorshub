// ═══ FAVICON - Auto loads on every page ═══
document.querySelectorAll("link[rel='icon']").forEach(el => el.remove());
const fav = document.createElement('link');
fav.rel = 'icon';
fav.type = 'image/x-icon';
fav.href = '/favicon.ico';
document.head.appendChild(fav);
/* ═══════════════════════════════════════════════════════
   Best Calculators Hub NAVIGATION — navigation.js
   Shared header and footer for ALL pages
   Change links here and ALL pages update automatically!
   ═══════════════════════════════════════════════════════ */

// ═══ GOOGLE ANALYTICS - Loads on every page automatically ═══
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VBEYYZFRS6';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VBEYYZFRS6');
})();

document.addEventListener('DOMContentLoaded', function() {
    
    // ═══ HEADER HTML ═══
    const headerHTML = `
        <header class="header">
            <nav class="nav">
                <a href="/index.html" class="nav-brand">
                    <img src="/logo.png" alt="Best Calculators Hub" style="height:65px; width:auto; display:block;">
                </a>
                <div class="nav-links" id="navLinks">
                    <a href="/index.html" class="nav-link">Home</a>
                    <a href="/aboutus.html" class="nav-link">About</a>
                    <a href="/contact.html" class="nav-link">Contact</a>
                    <a href="/privacypolicy.html" class="nav-link">Privacy</a>
                    <a href="/termandcondition.html" class="nav-link">Terms</a>
                </div>
                <button class="hamburger" id="hamburger" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </nav>
        </header>
    `;
    
    // ═══ FOOTER HTML ═══
    const footerHTML = `
        <footer class="footer">
            <div class="footer-inner">
                <div class="footer-grid">
                    <!-- Brand Column -->
                  <div class="footer-brand">
                         <img src="/logo.png" alt="Best Calculators Hub" style="height:50px; width:auto;">
                  </div>
                        <p class="footer-brand-desc">Free online calculators for every need. Fast, accurate, and simple to use. Trusted by thousands worldwide.</p>
                        <div class="footer-social">
                            <a href="#" class="social-link">Twitter</a>
                            <a href="#" class="social-link">Facebook</a>
                            <a href="#" class="social-link">YouTube</a>
                        </div>
                    </div>
                    
                    <!-- Popular Categories -->
                    <div class="footer-col">
                        <h4 class="footer-title">Popular</h4>
                        <div class="footer-links">
                            <a href="#">Finance</a>
                            <a href="#">Math</a>
                            <a href="#">Health</a>
                            <a href="#">Physics</a>
                            <a href="#">Conversion</a>
                        </div>
                    </div>
                    
                    <!-- More Categories -->
                    <div class="footer-col">
                        <h4 class="footer-title">Categories</h4>
                        <div class="footer-links">
                            <a href="/construction.html">Construction</a>
                            <a href="/chemistry.html">Chemistry</a>
                            <a href="/biology.html">Biology</a>
                            <a href="#">Sports</a>
                            <a href="#">Food</a>
                        </div>
                    </div>
                    
                    <!-- Company -->
                    <div class="footer-col">
                        <h4 class="footer-title">Company</h4>
                        <div class="footer-links">
                            <a href="/aboutus.html">About Us</a>
                            <a href="/contact.html">Contact Us</a>
                            <a href="/privacypolicy.html">Privacy Policy</a>
                            <a href="/termandcondition.html">Terms of Service</a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="footer-copy">© 2026 Best Calculators Hub. All Rights Reserved. Built with ❤️ for everyone.</p>
                </div>
            </div>
        </footer>
        
        <!-- Back to Top Button -->
        <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
    `;
    
    // ═══ INSERT HEADER ═══
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    }
    
    // ═══ INSERT FOOTER ═══
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
    
    // Wait a moment for DOM to update, then initialize interactive elements
    setTimeout(function() {
        initializeNavigation();
    }, 50);
    
});

// ═══ INITIALIZE NAVIGATION FEATURES ═══
function initializeNavigation() {
    
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
    
    // ═══ HIGHLIGHT ACTIVE PAGE ═══
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksElements = document.querySelectorAll('.nav-link');
    
    navLinksElements.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
}
