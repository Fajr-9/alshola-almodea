// ============================================
// Projects Page
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Projects Data
// ============================================

const projectsData = [
    {
        id: 'gym',
        title: 'GYM & Showrooms',
        subtitle: 'Commercial Lighting',
        image: 'assets/Alshola Projcts/GYM & Showrooms/p1.jpg',
        images: [
            'assets/Alshola Projcts/GYM & Showrooms/p1.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p2.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p3.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p4.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p5.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p6.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p7.jpg',
            'assets/Alshola Projcts/GYM & Showrooms/p8.jpeg',
            'assets/Alshola Projcts/GYM & Showrooms/p9.jpeg',
            'assets/Alshola Projcts/GYM & Showrooms/p10.jpeg',
            'assets/Alshola Projcts/GYM & Showrooms/p11.jpeg'
        ]
    },
    {
        id: 'landscape',
        title: 'Landscape',
        subtitle: 'Outdoor Lighting',
        image: 'assets/Alshola Projcts/Lanscape/p1.png',
        images: [
            'assets/Alshola Projcts/Lanscape/p1.png',
            'assets/Alshola Projcts/Lanscape/p2.png',
            'assets/Alshola Projcts/Lanscape/p3.png',
            'assets/Alshola Projcts/Lanscape/p4.jpg',
            'assets/Alshola Projcts/Lanscape/p5.jpg',
            'assets/Alshola Projcts/Lanscape/p6.jpg',
            'assets/Alshola Projcts/Lanscape/p7.jpg',
            'assets/Alshola Projcts/Lanscape/p8.jpg',
            'assets/Alshola Projcts/Lanscape/p9.jpg'
        ]
    },
    {
        id: 'villa-exterior',
        title: 'Villa Exterior',
        subtitle: 'Architectural Lighting',
        image: 'assets/Alshola Projcts/Private Villa Exterior/p1.webp',
        images: [
            'assets/Alshola Projcts/Private Villa Exterior/p1.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p2.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p3.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p4.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p5.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p6.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p7.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p8.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p9.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p10.jpg',
            'assets/Alshola Projcts/Private Villa Exterior/p11.jpg'
        ]
    },
    {
        id: 'villa-interior',
        title: 'Villa Interior',
        subtitle: 'Interior Lighting',
        image: 'assets/Alshola Projcts/Private Villa Interior/p1.webp',
        images: [
            'assets/Alshola Projcts/Private Villa Interior/p1.webp',
            'assets/Alshola Projcts/Private Villa Interior/p2.webp',
            'assets/Alshola Projcts/Private Villa Interior/p3.webp',
            'assets/Alshola Projcts/Private Villa Interior/p4.webp',
            'assets/Alshola Projcts/Private Villa Interior/p5.webp',
            'assets/Alshola Projcts/Private Villa Interior/p6.webp',
            'assets/Alshola Projcts/Private Villa Interior/p7.webp',
            'assets/Alshola Projcts/Private Villa Interior/p8.webp',
            'assets/Alshola Projcts/Private Villa Interior/p9.webp',
            'assets/Alshola Projcts/Private Villa Interior/p10.webp'
        ]
    },
    {
        id: 'street',
        title: 'Street Light',
        subtitle: 'Outdoor Lighting',
        image: 'assets/Alshola Projcts/Street Light/p1.png',
        images: [
            'assets/Alshola Projcts/Street Light/p1.png',
            'assets/Alshola Projcts/Street Light/p2.png',
            'assets/Alshola Projcts/Street Light/p3.png',
            'assets/Alshola Projcts/Street Light/p4.png',
            'assets/Alshola Projcts/Street Light/p5.png'
        ]
    },
    {
        id: 'towers',
        title: 'Towers',
        subtitle: 'Architectural Lighting',
        image: 'assets/Alshola Projcts/Towers/p1.jpg',
        images: [
            'assets/Alshola Projcts/Towers/p1.jpg',
            'assets/Alshola Projcts/Towers/p2.jpg',
            'assets/Alshola Projcts/Towers/p3.jpg',
            'assets/Alshola Projcts/Towers/p4.jpg',
            'assets/Alshola Projcts/Towers/p5.jpg',
            'assets/Alshola Projcts/Towers/p6.jpg',
            'assets/Alshola Projcts/Towers/p7.jpg',
            'assets/Alshola Projcts/Towers/p8.jpg'
        ]
    },
    {
        id: 'most-recent',
        title: 'Most Recent',
        subtitle: 'Latest Projects',
        image: 'assets/Alshola Projcts/Most Recent/_19A9918.webp',
        images: [
            'assets/Alshola Projcts/Most Recent/_19A9918.webp',
            'assets/Alshola Projcts/Most Recent/_19A9917.webp',
            'assets/Alshola Projcts/Most Recent/_19A9915.webp',
            'assets/Alshola Projcts/Most Recent/_19A9912.webp',
            'assets/Alshola Projcts/Most Recent/_19A9911.webp',
            'assets/Alshola Projcts/Most Recent/_19A9891.webp',
            'assets/Alshola Projcts/Most Recent/_19A9893.webp',
            'assets/Alshola Projcts/Most Recent/_19A9882.webp',
            'assets/Alshola Projcts/Most Recent/_19A9878.webp',
            'assets/Alshola Projcts/Most Recent/_19A9875.webp',
            'assets/Alshola Projcts/Most Recent/_19A9872.webp',
            'assets/Alshola Projcts/Most Recent/_19A9899.webp',
            'assets/Alshola Projcts/Most Recent/_19A9901.webp',
            'assets/Alshola Projcts/Most Recent/_19A9906.webp',
            'assets/Alshola Projcts/Most Recent/_19A9907.webp',
            'assets/Alshola Projcts/Most Recent/_19A9910.webp',
            'assets/Alshola Projcts/Most Recent/_19A0125.webp',
            'assets/Alshola Projcts/Most Recent/_19A0133.webp',
            'assets/Alshola Projcts/Most Recent/_19A0122.webp',
            'assets/Alshola Projcts/Most Recent/_19A0127.webp',
            'assets/Alshola Projcts/Most Recent/_19A0128.webp',
            'assets/Alshola Projcts/Most Recent/_19A9919.webp',
            'assets/Alshola Projcts/Most Recent/_19A9921.webp',
            'assets/Alshola Projcts/Most Recent/_19A9923.webp',
            'assets/Alshola Projcts/Most Recent/_19A9929.webp',
            'assets/Alshola Projcts/Most Recent/_19A9941.webp',
            'assets/Alshola Projcts/Most Recent/_19A9942.webp'
        ]
    }
];

// ============================================
// DOM Elements
// ============================================

const projectsGrid = document.getElementById('projectsGrid');
const projectsGallery = document.getElementById('projectsGallery');
const galleryGrid = document.getElementById('galleryGrid');
const galleryTitle = document.getElementById('galleryTitle');
const backButton = document.getElementById('backButton');
const projectsCategoriesSection = document.querySelector('.projects-categories-section');

// ============================================
// Initialize Projects Grid
// ============================================

function initializeProjectsGrid() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsGrid.appendChild(card);
    });
    
    // Animate cards in - Only once, no repeat on scroll
    if (typeof gsap !== 'undefined') {
        const cards = projectsGrid.querySelectorAll('.project-category-card');
        // Set initial state to visible
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.display = 'block';
        });
        
        // Create ScrollTrigger that plays only once
        const cardsAnimation = gsap.from(cards, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2,
            onComplete: () => {
                cards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.visibility = 'visible';
                });
            },
            scrollTrigger: {
                trigger: projectsGrid,
                start: 'top 85%',
                toggleActions: 'play none none none', // Play once, never reverse
                once: true, // Only trigger once
                markers: false
            }
        });
    } else {
        // Fallback: ensure cards are visible
        const cards = projectsGrid.querySelectorAll('.project-category-card');
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.display = 'block';
        });
    }
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-category-card';
    card.setAttribute('data-id', project.id);
    card.setAttribute('data-index', index);
    
    // Ensure card is visible
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    card.style.display = 'block';
    
    card.innerHTML = `
        <div class="project-category-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" 
                 style="opacity: 1; visibility: visible; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;"
                 onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%232F2F2F\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23fff\' font-family=\'Arial\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${project.title}%3C/text%3E%3C/svg%3E';">
        </div>
        <div class="project-category-content">
            <h3 class="project-category-title">${project.title}</h3>
            <p class="project-category-subtitle">${project.subtitle}</p>
            <div class="project-category-arrow">
                <span>View Gallery</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => {
        showProjectsGallery(project.id);
    });
    
    return card;
}

// ============================================
// Show Projects Gallery
// ============================================

function showProjectsGallery(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !galleryGrid || !galleryTitle || !projectsGallery || !projectsCategoriesSection) {
        console.error('Missing elements or project not found');
        return;
    }
    
    console.log('Loading gallery for project:', project.title);
    console.log('Project ID:', projectId);
    console.log('Number of images:', project.images.length);
    console.log('Image paths:', project.images);
    
    // Update title
    galleryTitle.textContent = project.title;
    
    // Clear previous images
    galleryGrid.innerHTML = '';
    
    // Create gallery items with proper image loading
    project.images.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-image-index', index);
        
        // Create image with proper loading
        const img = document.createElement('img');
        img.alt = `${project.title} ${index + 1}`;
        img.loading = 'lazy';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        
        // Set src directly first
        img.src = imagePath;
        
        // Ensure image is visible from start
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        
        // Add error handling
        img.onerror = function() {
            console.error('Failed to load image:', imagePath, 'for project:', project.title);
            // Try alternative path or show placeholder
            this.onerror = null; // Prevent infinite loop
            this.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'Arial\' font-size=\'14\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EImage not found%3C/text%3E%3C/svg%3E';
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        };
        
        // Add load handler to ensure image is visible
        img.onload = function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
            console.log('Image loaded successfully:', imagePath);
        };
        
        galleryItem.appendChild(img);
        
        // Add click handler to open lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(project.images, index, project.title);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    console.log(`Created ${project.images.length} gallery items for ${project.title}`);
    console.log('Project images:', project.images);
    
    // Verify all images are added to DOM
    const addedItems = galleryGrid.querySelectorAll('.gallery-item');
    console.log(`Total gallery items in DOM: ${addedItems.length}`);
    
    // Check each image after a short delay
    setTimeout(() => {
        addedItems.forEach((item, idx) => {
            const img = item.querySelector('img');
            if (img) {
                console.log(`Image ${idx + 1}: src="${img.src}", complete=${img.complete}, naturalWidth=${img.naturalWidth}`);
            }
        });
    }, 500);
    
    // Animate transition
    if (typeof gsap !== 'undefined') {
        gsap.to(projectsCategoriesSection, {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
                projectsCategoriesSection.style.display = 'none';
                projectsGallery.style.display = 'block';
                
                // Animate gallery in
                gsap.from(projectsGallery, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: 'power2.out'
                });
                
                // Show gallery items immediately - no animation for better performance
                const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
                if (galleryItems.length > 0) {
                    // Ensure all items are visible immediately
                    galleryItems.forEach((item, index) => {
                        item.style.opacity = '1';
                        item.style.visibility = 'visible';
                        item.style.display = 'inline-block';
                    });
                }
                
                // Force reflow to ensure masonry layout updates
                setTimeout(() => {
                    if (galleryGrid) {
                        galleryGrid.style.display = 'none';
                        galleryGrid.offsetHeight; // Force reflow
                        galleryGrid.style.display = '';
                            }
                }, 100);
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    } else {
        // Fallback without GSAP
        projectsCategoriesSection.style.display = 'none';
        projectsGallery.style.display = 'block';
        
        // Ensure all gallery items are visible
        const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.display = 'inline-block';
        });
        
        // Force reflow to ensure masonry layout updates
        setTimeout(() => {
            if (galleryGrid) {
                galleryGrid.style.display = 'none';
                galleryGrid.offsetHeight; // Force reflow
                galleryGrid.style.display = '';
            }
        }, 100);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================
// Back to Categories
// ============================================

if (backButton) {
    backButton.addEventListener('click', () => {
        if (typeof gsap !== 'undefined') {
            gsap.to(projectsGallery, {
                opacity: 0,
                y: 30,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    projectsGallery.style.display = 'none';
                    projectsCategoriesSection.style.display = 'block';
                    projectsCategoriesSection.style.opacity = '1';
                    projectsCategoriesSection.style.visibility = 'visible';
                    
                    // Ensure all cards are visible
                    if (projectsGrid) {
                        projectsGrid.style.opacity = '1';
                        projectsGrid.style.visibility = 'visible';
                        projectsGrid.style.display = 'grid';
                    }
                    
                    const cards = projectsGrid.querySelectorAll('.project-category-card');
                    cards.forEach(card => {
                        card.style.opacity = '1';
                        card.style.visibility = 'visible';
                        card.style.display = 'block';
                    });
                    
                    gsap.from(projectsCategoriesSection, {
                        opacity: 0,
                        y: -30,
                        duration: 0.6,
                        ease: 'power2.out',
                        onComplete: () => {
                            // Ensure visibility after animation
                            projectsCategoriesSection.style.opacity = '1';
                            projectsCategoriesSection.style.visibility = 'visible';
                            cards.forEach(card => {
                                card.style.opacity = '1';
                                card.style.visibility = 'visible';
                            });
                        }
                    });
                    
                    // Scroll to categories
                    window.scrollTo({
                        top: projectsCategoriesSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        } else {
            // Fallback without GSAP
            projectsGallery.style.display = 'none';
            projectsCategoriesSection.style.display = 'block';
            projectsCategoriesSection.style.opacity = '1';
            projectsCategoriesSection.style.visibility = 'visible';
            
            // Ensure all cards are visible
            if (projectsGrid) {
                projectsGrid.style.opacity = '1';
                projectsGrid.style.visibility = 'visible';
                projectsGrid.style.display = 'grid';
            }
            
            const cards = projectsGrid.querySelectorAll('.project-category-card');
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.visibility = 'visible';
                card.style.display = 'block';
            });
            
            window.scrollTo({
                top: projectsCategoriesSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// Lightbox Modal
// ============================================

const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(images, index, title) {
    if (!lightboxModal || !lightboxImage) return;
    
    currentLightboxImages = images;
    currentLightboxIndex = index;
    
    // Update image
    lightboxImage.src = images[index];
    lightboxImage.alt = `${title} ${index + 1}`;
    
    // Update counter
    if (lightboxCounter) {
        lightboxCounter.textContent = `${index + 1} / ${images.length}`;
    }
    
    // Show lightbox
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animate in
    if (typeof gsap !== 'undefined') {
        gsap.from(lightboxModal, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        gsap.from(lightboxImage, {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.out',
            delay: 0.1
        });
    }
}

function closeLightbox() {
    if (!lightboxModal) return;
    
    if (typeof gsap !== 'undefined') {
        gsap.to(lightboxModal, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    } else {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function showNextImage() {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateLightboxImage();
}

function showPrevImage() {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    if (!lightboxImage || currentLightboxImages.length === 0) return;
    
    const imagePath = currentLightboxImages[currentLightboxIndex];
    
    if (typeof gsap !== 'undefined') {
        gsap.to(lightboxImage, {
            opacity: 0,
            scale: 0.9,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                lightboxImage.src = imagePath;
                if (lightboxCounter) {
                    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
                }
                gsap.to(lightboxImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    } else {
        lightboxImage.src = imagePath;
        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
        }
    }
}

// Event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

// Close on background click
if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// ============================================
// Initialize on Load
// ============================================

// Performance optimization: Use requestAnimationFrame
function initProjects() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                initializeProjectsGrid();
            });
        });
    } else {
        requestAnimationFrame(() => {
            initializeProjectsGrid();
        });
    }
}

window.addEventListener('load', () => {
    // Initialize after a short delay for better performance
    setTimeout(() => {
        initProjects();
        
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 100);
});


