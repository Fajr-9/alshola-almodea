// ============================================
// GSAP Animations & Interactions
// ============================================

// Register ScrollTrigger plugin only if GSAP is loaded
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// Header Animation
// ============================================

const header = document.getElementById('header');
let lastScroll = 0;

// Header fade in on page load - keep transparent and light links
gsap.from(header, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    onComplete: () => {
        if (header) {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
            header.classList.remove('scrolled');
        }
    }
});

// Check initial scroll position on load
window.addEventListener('load', () => {
    const currentScroll = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        if (currentScroll < heroHeight - 50) {
            // At top or over hero - keep 100% transparent
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        } else {
            // Scrolled past hero - make white and separated
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Header scroll effect - 100% transparent over hero, white when scrolled past hero
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const heroBottom = heroSection.offsetTop + heroHeight;
        
        // If scrolled past hero section completely, make header white and separated
        if (currentScroll >= heroHeight - 50) {
            header.classList.add('scrolled');
            // Force white background when scrolled
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            // Keep 100% transparent when over hero
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    } else {
        // Fallback: use scroll position
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// ============================================
// Hero Slider
// ============================================

const heroSlides = document.querySelectorAll('.hero-slide');
const heroIndicators = document.querySelectorAll('.indicator');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
let currentSlide = 0;
let slideInterval;

// Initialize hero animations
heroSlides.forEach((slide, index) => {
    const title = slide.querySelector('.hero-title');
    const subtitle = slide.querySelector('.hero-subtitle');
    const button = slide.querySelector('.btn');
    
    if (index === 0) {
        // Animate first slide on load
        gsap.from([title, subtitle, button], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: 0.5,
            ease: 'power3.out'
        });
    }
});

// Hero slider function
function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    heroIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    // Animate content
    const activeSlide = heroSlides[index];
    const title = activeSlide.querySelector('.hero-title');
    const subtitle = activeSlide.querySelector('.hero-subtitle');
    const button = activeSlide.querySelector('.btn');
    
    gsap.from([title, subtitle, button], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
}

// Auto-play slider
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Event listeners
if (heroNext) {
    heroNext.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });
}

if (heroPrev) {
    heroPrev.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });
}

heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        stopSlider();
        startSlider();
    });
});

// Start auto-play
if (heroSlides.length > 0) {
    startSlider();
    
    // Pause on hover
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', stopSlider);
        hero.addEventListener('mouseleave', startSlider);
    }
}

// ============================================
// Services / Categories Animation
// ============================================

const serviceCards = document.querySelectorAll('.service-card');

if (serviceCards.length > 0) {
    gsap.utils.toArray(serviceCards).forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
}

// ============================================
// About Preview Animation
// ============================================

const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');
const aboutProjectsSlider = document.getElementById('aboutProjectsSlider');
const aboutSliderImage = document.getElementById('aboutSliderImage');

if (aboutText && aboutImage) {
    gsap.from(aboutText, {
        scrollTrigger: {
            trigger: aboutText,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from(aboutImage, {
        scrollTrigger: {
            trigger: aboutImage,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// Home About slider using selected project images
if (aboutProjectsSlider && aboutSliderImage) {
    const aboutSliderImages = [
        'assets/Alshola Projcts/Towers/p1.jpg',
        'assets/Alshola Projcts/Towers/p2.jpg',
        'assets/Alshola Projcts/Towers/p3.jpg',
        'assets/Alshola Projcts/Towers/p4.jpg',
        'assets/Alshola Projcts/Towers/p5.jpg',
        'assets/Alshola Projcts/Towers/p6.jpg',
        'assets/Alshola Projcts/Towers/p7.jpg',
        'assets/Alshola Projcts/Towers/p8.jpg'
    ];
    let aboutSliderIndex = 0;

    function rotateAboutImage() {
        aboutSliderIndex = (aboutSliderIndex + 1) % aboutSliderImages.length;
        const nextSrc = aboutSliderImages[aboutSliderIndex];

        if (typeof gsap !== 'undefined') {
            gsap.to(aboutSliderImage, {
                opacity: 0,
                duration: 0.7,
                ease: 'power1.inOut',
                onComplete: () => {
                    aboutSliderImage.src = nextSrc;
                    gsap.to(aboutSliderImage, {
                        opacity: 1,
                        duration: 0.7,
                        ease: 'power1.inOut'
                    });
                }
            });
        } else {
            aboutSliderImage.style.transition = 'opacity 0.7s ease';
            aboutSliderImage.style.opacity = '0';
            setTimeout(() => {
                aboutSliderImage.src = nextSrc;
                aboutSliderImage.style.opacity = '1';
            }, 700);
        }
    }

    setInterval(rotateAboutImage, 4000);
}

// ============================================
// Featured Products Animation
// ============================================

const productCards = document.querySelectorAll('.product-card');

if (productCards.length > 0) {
    gsap.utils.toArray(productCards).forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.2)'
        });
        
        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ============================================
// Projects Animation
// ============================================

const projectCards = document.querySelectorAll('.project-card');

if (projectCards.length > 0) {
    gsap.utils.toArray(projectCards).forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play reverse play reverse'
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
}

// ============================================
// Why Choose Us Animation
// ============================================

const featureCards = document.querySelectorAll('.feature-card');

if (featureCards.length > 0) {
    gsap.utils.toArray(featureCards).forEach((card, index) => {
        const icon = card.querySelector('.feature-icon');
        const title = card.querySelector('.feature-title');
        const description = card.querySelector('.feature-description');
        
        gsap.from(icon, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse'
            },
            scale: 0,
            rotation: -180,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.5)'
        });
        
        gsap.from([title, description], {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse'
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.15 + 0.3,
            stagger: 0.1,
            ease: 'power3.out'
        });
    });
}

// ============================================
// Contact CTA Animation
// ============================================

const ctaContent = document.querySelector('.cta-content');

if (ctaContent) {
    gsap.from(ctaContent, {
        scrollTrigger: {
            trigger: ctaContent,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// ============================================
// Footer Animation
// ============================================

const footer = document.querySelector('.footer');

if (footer) {
    gsap.from(footer, {
        scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// ============================================
// Page Header Animation
// ============================================

const pageHeader = document.querySelector('.page-header');

if (pageHeader) {
    gsap.from(pageHeader, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ============================================
// Contact Form Animation
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const formFields = contactForm.querySelectorAll('.form-group');
    
    gsap.utils.toArray(formFields).forEach((field, index) => {
        gsap.from(field, {
            scrollTrigger: {
                trigger: field,
                start: 'top 90%',
                toggleActions: 'play reverse play reverse'
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
}

// ============================================
// Stats Animation
// ============================================

const statNumbers = document.querySelectorAll('.stat-number');

if (statNumbers.length > 0) {
    statNumbers.forEach((stat) => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        if (!isNaN(numericValue)) {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                },
                textContent: 0,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                stagger: 0.2
            });
        }
    });
}

// ============================================
// Products Filter
// ============================================

let filterButtons = document.querySelectorAll('.filter-btn');
let productItems = document.querySelectorAll('.product-card[data-category]');
let dropdownItems = document.querySelectorAll('.dropdown-item');

// Function to initialize products filter
function initializeProductsFilter() {
    filterButtons = document.querySelectorAll('.filter-btn');
    productItems = document.querySelectorAll('.product-card[data-category], .spotlight-product-card[data-category]');
    dropdownItems = document.querySelectorAll('.dropdown-item');

    // Show all products by default on page load
    if (productItems.length > 0) {
        productItems.forEach(item => {
            item.style.display = 'flex';
            item.style.opacity = '1';
            item.style.visibility = 'visible';
        });
    }
}

// Initialize after products are loaded
setTimeout(initializeProductsFilter, 500);

// Main category filter (All, Indoor, Outdoor)
function setupFilterButtons() {
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Don't prevent default for dropdown buttons, let hover work
                const filter = button.getAttribute('data-filter');
                
                if (filter === 'all') {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    // Reset all dropdown items
                    dropdownItems.forEach(item => item.classList.remove('active'));
                    
                    // Show all products
                    productItems = document.querySelectorAll('.product-card[data-category], .spotlight-product-card[data-category]');
                    if (productItems.length > 0) {
                        productItems.forEach(item => {
                            gsap.to(item, {
                                opacity: 1,
                                scale: 1,
                                display: 'flex',
                                visibility: 'visible',
                                duration: 0.3,
                                ease: 'power2.out'
                            });
                        });
                    }
                }
            });
        });
    }
}

setupFilterButtons();

// Dropdown item click (Type filter)
function setupDropdownItems() {
    if (dropdownItems.length > 0) {
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const href = item.getAttribute('href');
                
                // If the item has a valid link (not #), allow navigation
                if (href && href !== '#' && !href.startsWith('#')) {
                    // Allow normal navigation to the linked page (e.g., spot-light.html)
                    return; // Don't prevent default, let the link work
                }
                
                // Otherwise, prevent default and filter products on current page
                e.preventDefault();
                
                // Get parent dropdown menu
                const parentMenu = item.closest('.dropdown-menu');
                const parentCategory = parentMenu ? parentMenu.getAttribute('data-category') : null;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                const parentButton = parentMenu ? parentMenu.previousElementSibling : null;
                if (parentButton) {
                    parentButton.classList.add('active');
                }
                
                // Update active dropdown item
                const sameMenuItems = parentMenu ? parentMenu.querySelectorAll('.dropdown-item') : [];
                sameMenuItems.forEach(ddItem => ddItem.classList.remove('active'));
                item.classList.add('active');
                
                const selectedType = item.getAttribute('data-type');
                
                // Filter product items
                productItems = document.querySelectorAll('.product-card[data-category], .spotlight-product-card[data-category]');
                if (productItems.length > 0) {
                    productItems.forEach(product => {
                        const productCategory = product.getAttribute('data-category');
                        const productType = product.getAttribute('data-type');
                        
                        if (productCategory === parentCategory && productType === selectedType) {
                            // Show matching products
                            gsap.to(product, {
                                opacity: 1,
                                scale: 1,
                                display: 'flex',
                                visibility: 'visible',
                                duration: 0.3,
                                ease: 'power2.out'
                            });
                        } else {
                            // Hide other products
                            gsap.to(product, {
                                opacity: 0,
                                scale: 0.8,
                                duration: 0.3,
                                ease: 'power2.out',
                                onComplete: () => {
                                    product.style.display = 'none';
                                }
                            });
                        }
                    });
                }
            });
        });
    }
}

setupDropdownItems();
    
// Check URL parameter for category filter
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');

if (categoryParam) {
    const categoryButton = document.querySelector(`[data-filter="${categoryParam}"]`);
    if (categoryButton) {
        categoryButton.click();
    }
}

// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

    if (!mobileMenuToggle || !navList) {
        // Retry if elements not found yet
        setTimeout(initMobileMenu, 100);
        return;
    }
    
    // Check if already initialized to prevent duplicate listeners
    if (mobileMenuToggle.dataset.initialized === 'true') {
        return;
    }
    
    // Mark as initialized
    mobileMenuToggle.dataset.initialized = 'true';
    
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        const isActive = navList.classList.contains('active');
        
        if (isActive) {
            // Close menu
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            // Open menu
            navList.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        
        // Animate menu items
        const navLinks = navList.querySelectorAll('.nav-link');
            if (typeof gsap !== 'undefined') {
            gsap.from(navLinks, {
                x: -30,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power3.out'
            });
            } else {
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(-30px)';
                    setTimeout(() => {
                        link.style.transition = 'all 0.4s ease';
                        link.style.opacity = '1';
                        link.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navList.classList.contains('active')) {
        if (!navList.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = navList.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        // Retry after a delay to ensure all scripts are loaded
        setTimeout(initMobileMenu, 200);
        setTimeout(initMobileMenu, 500);
    });
} else {
    initMobileMenu();
    // Retry after a delay to ensure all scripts are loaded
    setTimeout(initMobileMenu, 200);
    setTimeout(initMobileMenu, 500);
}

// Also initialize after page load
window.addEventListener('load', function() {
    setTimeout(initMobileMenu, 100);
    setTimeout(initMobileMenu, 300);
});

// Additional retry for product pages
setTimeout(function() {
    initMobileMenu();
}, 1000);

// ============================================
// Contact Form Submission
// ============================================

const contactFormElement = document.getElementById('contactForm');

if (contactFormElement) {
    contactFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactFormElement);
        const data = Object.fromEntries(formData);
        
        // Show success message (frontend only)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactFormElement.reset();
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Parallax Effect for Hero
// ============================================

const heroImages = document.querySelectorAll('.hero-image');

if (heroImages.length > 0) {
    heroImages.forEach(image => {
        gsap.to(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: '50%',
            ease: 'none'
        });
    });
}

// ============================================
// Initialize on Load
// ============================================

window.addEventListener('load', () => {
    // Refresh ScrollTrigger on load
    if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
    }
    
    // Animate page elements
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
    
    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    if (sectionHeaders.length > 0) {
        gsap.utils.toArray(sectionHeaders).forEach((header, index) => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });
    }
    
    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles.length > 0) {
        gsap.utils.toArray(sectionTitles).forEach((title, index) => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                },
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.05,
                ease: 'back.out(1.2)'
            });
        });
    }
    
    // Animate section subtitles
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    if (sectionSubtitles.length > 0) {
        gsap.utils.toArray(sectionSubtitles).forEach((subtitle, index) => {
            gsap.from(subtitle, {
                scrollTrigger: {
                    trigger: subtitle,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse'
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.05 + 0.2,
                ease: 'power3.out'
            });
        });
    }
});

// ============================================
// Projects Accordion - Auto Rotating Images
// ============================================

const projectsAccordion = document.getElementById('projectsAccordion');
const accordionImagesGrid = document.getElementById('accordionImagesGrid');
const accordionCounter = document.getElementById('accordionCounter');

if (projectsAccordion && accordionImagesGrid) {
    // All images from all categories
    const allProjectsImages = [
        // Towers only
        { src: 'assets/Alshola Projcts/Towers/p1.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p2.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p3.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p4.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p5.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p6.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p7.jpg', title: 'Towers', subtitle: 'Architectural Lighting' },
        { src: 'assets/Alshola Projcts/Towers/p8.jpg', title: 'Towers', subtitle: 'Architectural Lighting' }
    ];

    let currentImageIndex = 0;
    let rotationInterval;
    let currentSlotIndex = 0; // Which slot to update next (0, 1, or 2)
    const imagesToShow = 1;
    let isChanging = false;

    // Initialize accordion with 1 image
    function initializeAccordion() {
        if (allProjectsImages.length > 0) {
            createImageSlots();
            updateAllImages();
            startRotation();
            
            // Add scroll animation for projects accordion
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                const accordionImageSlot = accordionImagesGrid.querySelector('.accordion-image-slot');
                if (accordionImageSlot) {
                    gsap.from(accordionImageSlot, {
                        scrollTrigger: {
                            trigger: projectsAccordion,
                            start: 'top 80%',
                            toggleActions: 'play reverse play reverse'
                        },
                        scale: 0.9,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                }
            }
        }
    }

    // Create 1 image slot
    function createImageSlots() {
        accordionImagesGrid.innerHTML = '';
        for (let i = 0; i < imagesToShow; i++) {
            const imageSlot = document.createElement('div');
            imageSlot.className = 'accordion-image-slot';
            imageSlot.setAttribute('data-slot-index', i);
            imageSlot.innerHTML = '<img src="" alt="" loading="lazy">';
            accordionImagesGrid.appendChild(imageSlot);
        }
    }

    // Update the single image initially
    function updateAllImages() {
        const imageSlots = accordionImagesGrid.querySelectorAll('.accordion-image-slot');
        
        imageSlots.forEach((slot, slotIndex) => {
            const imageIndex = currentImageIndex % allProjectsImages.length;
            const imageData = allProjectsImages[imageIndex];
            const img = slot.querySelector('img');
            
            if (img && imageData) {
                img.src = imageData.src;
                img.alt = imageData.title;
                img.style.opacity = '1';
            }
        });
        
        updateCounter();
    }

    // Update single image
    function updateNextImage() {
        if (isChanging) return;
        
        isChanging = true;
        const imageSlots = accordionImagesGrid.querySelectorAll('.accordion-image-slot');
        const targetSlot = imageSlots[0]; // Always use the first (and only) slot
        
        if (!targetSlot) {
            isChanging = false;
            return;
        }
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % allProjectsImages.length;
        const imageData = allProjectsImages[currentImageIndex];
        const img = targetSlot.querySelector('img');
        
        if (!img || !imageData) {
            isChanging = false;
            return;
        }
        
        // Ultra smooth crossfade without any flicker
        if (typeof gsap !== 'undefined') {
            // Preload next image first
            const nextImg = new Image();
            nextImg.src = imageData.src;
            
            nextImg.onload = () => {
                // Very smooth fade - longer duration for seamless transition
                gsap.to(img, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        // Update image source only after fade out is complete
                        img.src = imageData.src;
                        img.alt = imageData.title;
                        
                        // Ensure image is loaded before fading in
                        const checkImg = new Image();
                        checkImg.src = imageData.src;
                        checkImg.onload = () => {
                            // Smooth fade in
                            gsap.to(img, {
                                opacity: 1,
                                duration: 0.8,
                                ease: 'power1.inOut',
                                onComplete: () => {
                                    isChanging = false;
                                }
                            });
                        };
                        checkImg.onerror = () => {
                            img.style.opacity = '1';
                            isChanging = false;
                        };
                    }
                });
            };
            
            nextImg.onerror = () => {
                img.src = imageData.src;
                img.alt = imageData.title;
                isChanging = false;
            };
        } else {
            // Fallback without GSAP - very smooth CSS transition
            img.style.transition = 'opacity 0.8s ease';
            img.style.opacity = '0';
            
            setTimeout(() => {
                // Preload before setting src
                const preloadImg = new Image();
                preloadImg.src = imageData.src;
                preloadImg.onload = () => {
                    img.src = imageData.src;
                    img.alt = imageData.title;
                    
                    setTimeout(() => {
                        img.style.opacity = '1';
                        isChanging = false;
                    }, 100);
                };
                preloadImg.onerror = () => {
                    img.src = imageData.src;
                    img.alt = imageData.title;
                    img.style.opacity = '1';
                    isChanging = false;
                };
            }, 800);
        }
        
        // Always use slot 0 for single image
        currentSlotIndex = 0;
        
        updateCounter();
    }

    // Update counter
    function updateCounter() {
        if (accordionCounter) {
            accordionCounter.textContent = `${currentImageIndex + 1} / ${allProjectsImages.length}`;
        }
    }

    // Start auto rotation - change one image at a time every 1.5 seconds
    function startRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }
        
        rotationInterval = setInterval(() => {
            updateNextImage();
        }, 1500); // Change one image every 1.5 seconds
    }

    // Stop rotation (optional - for hover pause)
    function stopRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    }

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAccordion);
    } else {
        initializeAccordion();
    }

    // Pause on hover (optional)
    if (projectsAccordion) {
        projectsAccordion.addEventListener('mouseenter', stopRotation);
        projectsAccordion.addEventListener('mouseleave', startRotation);
    }
}

