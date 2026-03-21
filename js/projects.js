// ============================================
// Projects Page
// ============================================

// Register ScrollTrigger only if GSAP is loaded
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// Projects Data
// ============================================

const projectsData = [
    {
        id: 'gym',
        title: 'GYM & Showrooms',
        subtitle: 'Commercial Lighting',
        image: 'assets/Alshola Projcts/GYM & Showrooms/p2.webp',
        images: [
            'assets/Alshola Projcts/GYM & Showrooms/p2.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p4.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p5.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p6.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p7.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p8.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p9.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p10.webp',
            'assets/Alshola Projcts/GYM & Showrooms/p11.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P12.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P13.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P14.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P15.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P16.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P17.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P18.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P20.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P21.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P23.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P24.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P26.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P27.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P29.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P31.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P32.webp',
            'assets/Alshola Projcts/GYM & Showrooms/P33.webp'
        ]
    },
    {
        id: 'landscape',
        title: 'Landscape',
        subtitle: 'Outdoor Lighting',
        image: 'assets/Alshola Projcts/Lanscape/p10.webp',
        images: [
            // p10 to p20 first
            'assets/Alshola Projcts/Lanscape/p10.webp',
            'assets/Alshola Projcts/Lanscape/p11.webp',
            'assets/Alshola Projcts/Lanscape/p12.webp',
            'assets/Alshola Projcts/Lanscape/p13.webp',
            'assets/Alshola Projcts/Lanscape/p14.webp',
            'assets/Alshola Projcts/Lanscape/p15.webp',
            'assets/Alshola Projcts/Lanscape/p16.webp',
            'assets/Alshola Projcts/Lanscape/p17.webp',
            'assets/Alshola Projcts/Lanscape/p18.webp',
            'assets/Alshola Projcts/Lanscape/p19.webp',
            'assets/Alshola Projcts/Lanscape/p20.webp',
            // Rest of the images
            'assets/Alshola Projcts/Lanscape/p1.webp',
            'assets/Alshola Projcts/Lanscape/p2.webp',
            'assets/Alshola Projcts/Lanscape/p3.webp',
            'assets/Alshola Projcts/Lanscape/p4.webp',
            'assets/Alshola Projcts/Lanscape/p6.webp',
            'assets/Alshola Projcts/Lanscape/p7.webp',
            'assets/Alshola Projcts/Lanscape/p9.webp'
        ]
    },
    {
        id: 'villa-exterior',
        title: 'Villa Exterior',
        subtitle: 'Architectural Lighting',
        image: 'assets/Alshola Projcts/Private Villa Exterior/p1.webp',
        images: [
            'assets/Alshola Projcts/Private Villa Exterior/p1.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p2.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p3.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p4.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p5.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p6.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p7.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p8.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p9.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p10.webp',
            'assets/Alshola Projcts/Private Villa Exterior/p11.webp'
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
        image: 'assets/Alshola Projcts/Street Light/p1.webp',
        images: [
            'assets/Alshola Projcts/Street Light/p1.webp',
            'assets/Alshola Projcts/Street Light/p2.webp',
            'assets/Alshola Projcts/Street Light/p3.webp',
            'assets/Alshola Projcts/Street Light/p4.webp',
            'assets/Alshola Projcts/Street Light/p5.webp'
        ]
    },
    {
        id: 'towers',
        title: 'Towers',
        subtitle: 'Architectural Lighting',
        image: 'assets/Alshola Projcts/Towers/p1.webp',
        images: [
            'assets/Alshola Projcts/Towers/p1.webp',
            'assets/Alshola Projcts/Towers/p2.webp',
            'assets/Alshola Projcts/Towers/p3.webp',
            'assets/Alshola Projcts/Towers/p4.webp',
            'assets/Alshola Projcts/Towers/p5.webp',
            'assets/Alshola Projcts/Towers/p6.webp',
            'assets/Alshola Projcts/Towers/p7.webp',
            'assets/Alshola Projcts/Towers/p8.webp'
        ]
    },
    {
        id: 'mosque',
        title: 'Mosque',
        subtitle: 'Religious Architecture',
        image: 'assets/Alshola Projcts/Mosque/P1.webp',
        images: [
            'assets/Alshola Projcts/Mosque/P1.webp',
            'assets/Alshola Projcts/Mosque/P2.webp',
            'assets/Alshola Projcts/Mosque/P3.webp',
            'assets/Alshola Projcts/Mosque/P4.webp',
            'assets/Alshola Projcts/Mosque/P5.webp'
        ]
    }
];

// ============================================
// DOM Elements
// ============================================

const projectsGrid = document.getElementById('projectsGrid');
const projectsGallery = document.getElementById('projectsGallery');
const galleryTitle = document.getElementById('galleryTitle');
const backButton = document.getElementById('backButton');
const projectsCategoriesSection = document.querySelector('.projects-categories-section');

/* Carousel DOM (Comfi.Inn-style: central framed image + layered sides) */
const galleryCarouselWrapper = document.getElementById('galleryCarouselWrapper');
const galleryCarouselPrev = document.getElementById('galleryCarouselPrev');
const galleryCarouselNext = document.getElementById('galleryCarouselNext');
const galleryCarouselCenter = document.getElementById('galleryCarouselCenter');
const galleryCarouselLeft = document.getElementById('galleryCarouselLeft');
const galleryCarouselRight = document.getElementById('galleryCarouselRight');
const galleryCarouselCaption = document.getElementById('galleryCarouselCaption');

let currentCarouselProject = null;
let currentCarouselIndex = 0;

// ============================================
// Initialize Projects Grid
// ============================================

function initializeProjectsGrid() {
    try {
        if (!projectsGrid) {
            console.error('projectsGrid element not found');
            return;
        }
        
        if (!projectsData || projectsData.length === 0) {
            console.error('projectsData is empty or not defined');
            return;
        }
        
        // Hide gallery section and its elements when showing categories
        if (projectsGallery) {
            projectsGallery.style.display = 'none';
            projectsGallery.style.opacity = '0';
            projectsGallery.style.visibility = 'hidden';
        }
        
        if (backButton) {
            backButton.style.display = 'none';
        }
        
        if (galleryTitle) {
            galleryTitle.textContent = '';
            galleryTitle.style.display = 'none';
        }
        
        // Ensure categories section is visible
        if (projectsCategoriesSection) {
            projectsCategoriesSection.style.display = 'block';
            projectsCategoriesSection.style.opacity = '1';
            projectsCategoriesSection.style.visibility = 'visible';
        }
        
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
            try {
        const card = createProjectCard(project, index);
                if (card) {
        projectsGrid.appendChild(card);
                }
            } catch (error) {
                console.error('Error creating card for project:', project.title, error);
            }
    });
    
        const cards = projectsGrid.querySelectorAll('.project-category-card');
        
        // Ensure cards are visible immediately
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.display = 'block';
        });
        
        // Animate cards in - Only once, no repeat on scroll
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Wait a bit for layout to settle
            setTimeout(() => {
                try {
                    gsap.from(cards, {
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
                            toggleActions: 'play none none none',
                            once: true,
                markers: false
            }
        });
                } catch (error) {
                    console.error('Error animating cards:', error);
        // Fallback: ensure cards are visible
                    cards.forEach(card => {
                        card.style.opacity = '1';
                        card.style.visibility = 'visible';
                    });
                }
            }, 100);
    } else {
            // Fallback: ensure cards are visible without animation
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.display = 'block';
        });
        }
    } catch (error) {
        console.error('Error in initializeProjectsGrid:', error);
        // Ensure grid is visible even if there's an error
        if (projectsGrid) {
            projectsGrid.style.opacity = '1';
            projectsGrid.style.visibility = 'visible';
            projectsGrid.style.display = 'grid';
        }
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
    
    // Use proper URL encoding for paths with spaces and special characters
    // Split path and encode each segment properly
    const pathParts = project.image.split('/');
    const encodedParts = pathParts.map(part => encodeURIComponent(part));
    const encodedImagePath = encodedParts.join('/');
    const simpleEncoded = encodeURI(project.image);
    const originalImagePath = project.image;
    
    // Check if this is a video project
    const isVideo = project.isVideo || project.image.toLowerCase().endsWith('.mp4') || 
                   project.image.toLowerCase().endsWith('.webm') || 
                   project.image.toLowerCase().endsWith('.mov');
    
    let mediaElement = '';
    if (isVideo) {
        mediaElement = `
            <video src="${encodedImagePath}" 
                   style="opacity: 1; visibility: visible; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;"
                   muted loop playsinline preload="metadata" loading="lazy"
                   onerror="if(this.src === '${encodedImagePath.replace(/'/g, "\\'")}') { this.src = '${simpleEncoded.replace(/'/g, "\\'")}'; return; } if(this.src === '${simpleEncoded.replace(/'/g, "\\'")}') { this.src = '${originalImagePath.replace(/'/g, "\\'")}'; return; } this.onerror=null;">
            </video>
        `;
    } else {
        mediaElement = `
            <img src="${encodedImagePath}" alt="${project.title}" loading="lazy" 
                 style="opacity: 1; visibility: visible; width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;"
                 onerror="if(this.src === '${encodedImagePath.replace(/'/g, "\\'")}') { this.src = '${simpleEncoded.replace(/'/g, "\\'")}'; return; } if(this.src === '${simpleEncoded.replace(/'/g, "\\'")}') { this.src = '${originalImagePath.replace(/'/g, "\\'")}'; return; } this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%232F2F2F\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23fff\' font-family=\'Arial\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${project.title}%3C/text%3E%3C/svg%3E';">
        `;
    }
    
    card.innerHTML = `
        <div class="project-category-image">
            ${mediaElement}
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
    
    // Add click handler with error handling
    card.addEventListener('click', (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            showProjectsGallery(project.id);
        } catch (error) {
            console.error('Error opening gallery:', error);
            // Fallback: try again after a short delay
            setTimeout(() => {
                try {
                    showProjectsGallery(project.id);
                } catch (retryError) {
                    console.error('Retry failed:', retryError);
                }
            }, 100);
        }
    });
    
    return card;
}

// ============================================
// Clear Gallery (Carousel) Function
// ============================================

function clearGallery() {
    try {
        if (window.galleryClearTimeout) {
            clearTimeout(window.galleryClearTimeout);
            window.galleryClearTimeout = null;
        }
        currentCarouselProject = null;
        currentCarouselIndex = 0;
        if (galleryCarouselCenter) galleryCarouselCenter.innerHTML = '';
        if (galleryCarouselLeft) galleryCarouselLeft.innerHTML = '';
        if (galleryCarouselRight) galleryCarouselRight.innerHTML = '';
        if (galleryCarouselCaption) galleryCarouselCaption.textContent = '';
    } catch (error) {
        console.error('Error clearing gallery:', error);
    }
}

// Encode path for src (spaces and special chars)
function encodeMediaPath(path) {
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
}

// Create img or video element for carousel
function createCarouselMedia(path, isVideo, opts) {
    opts = opts || {};
    const encoded = encodeMediaPath(path);
    if (isVideo) {
        const video = document.createElement('video');
        video.src = encoded;
        video.controls = !!opts.controls;
        video.muted = !!opts.muted;
        video.loop = !!opts.loop;
        video.playsInline = true;
        video.preload = opts.preload || 'metadata';
        video.setAttribute('playsinline', '');
        if (opts.className) video.className = opts.className;
        return video;
    }
    const img = document.createElement('img');
    img.src = encoded;
    img.alt = opts.alt || '';
    img.loading = opts.loading || 'eager';
    if (opts.className) img.className = opts.className;
    img.onerror = function() {
        this.src = encodeURI(path);
    };
    return img;
}

// Render central framed image/video and caption
function renderCarousel(project, index) {
    if (!project || !project.images.length || !galleryCarouselCenter) return;
    const paths = project.images;
    const len = paths.length;
    const i = ((index % len) + len) % len;
    const isVideo = project.isVideo || /\.(mp4|webm|mov)$/i.test(paths[i]);

    galleryCarouselCenter.innerHTML = '';
    const frame = document.createElement('div');
    frame.className = 'gallery-carousel-frame';
    const media = createCarouselMedia(paths[i], isVideo, {
        controls: isVideo,
        muted: false,
        loop: isVideo,
        preload: 'auto',
        className: 'gallery-carousel-center-media'
    });
    frame.appendChild(media);
    frame.addEventListener('click', () => openLightbox(project.images, i, project.title));
    galleryCarouselCenter.appendChild(frame);

    if (galleryCarouselLeft) {
        galleryCarouselLeft.innerHTML = '';
        const prevIndices = [i - 1, i - 2].filter(j => j >= 0);
        prevIndices.forEach((idx) => {
            const isV = project.isVideo || /\.(mp4|webm|mov)$/i.test(paths[idx]);
            const sideFrame = document.createElement('div');
            sideFrame.className = 'gallery-carousel-side-frame gallery-carousel-side-frame-left';
            const sideMedia = createCarouselMedia(paths[idx], isV, { className: 'gallery-carousel-side-media', loading: 'lazy' });
            if (isV && sideMedia.tagName === 'VIDEO') sideMedia.muted = true;
            sideFrame.appendChild(sideMedia);
            sideFrame.addEventListener('click', () => goCarouselIndex(project, idx));
            galleryCarouselLeft.appendChild(sideFrame);
        });
    }

    if (galleryCarouselRight) {
        galleryCarouselRight.innerHTML = '';
        const nextIndices = [i + 1, i + 2].filter(j => j < len);
        nextIndices.forEach((idx) => {
            const isV = project.isVideo || /\.(mp4|webm|mov)$/i.test(paths[idx]);
            const sideFrame = document.createElement('div');
            sideFrame.className = 'gallery-carousel-side-frame gallery-carousel-side-frame-right';
            const sideMedia = createCarouselMedia(paths[idx], isV, { className: 'gallery-carousel-side-media', loading: 'lazy' });
            if (isV && sideMedia.tagName === 'VIDEO') sideMedia.muted = true;
            sideFrame.appendChild(sideMedia);
            sideFrame.addEventListener('click', () => goCarouselIndex(project, idx));
            galleryCarouselRight.appendChild(sideFrame);
        });
    }

    if (galleryCarouselCaption) {
        galleryCarouselCaption.textContent = (i + 1) + ' / ' + len;
    }
}

function goCarouselIndex(project, index) {
    if (!project) return;
    currentCarouselIndex = index;
    renderCarousel(project, index);
}

// ============================================
// Show Projects Gallery
// ============================================

function showProjectsGallery(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !galleryTitle || !projectsGallery || !projectsCategoriesSection) {
        console.error('Missing elements or project not found');
        return;
    }
    if (!galleryCarouselWrapper || !galleryCarouselCenter) {
        console.error('Carousel elements not found');
        return;
    }

    clearGallery();
    currentCarouselProject = project;
    currentCarouselIndex = 0;

    galleryTitle.textContent = project.title;
    galleryTitle.style.display = 'block';
    if (backButton) backButton.style.display = 'inline-flex';
    if (galleryCarouselWrapper) {
        galleryCarouselWrapper.style.display = 'flex';
        galleryCarouselWrapper.style.opacity = '1';
        galleryCarouselWrapper.style.visibility = 'visible';
    }

    renderCarousel(project, 0);

    if (galleryCarouselPrev && !galleryCarouselPrev._carouselBound) {
        galleryCarouselPrev._carouselBound = true;
        galleryCarouselPrev.addEventListener('click', () => {
            if (!currentCarouselProject || !currentCarouselProject.images.length) return;
            const len = currentCarouselProject.images.length;
            currentCarouselIndex = (currentCarouselIndex - 1 + len) % len;
            renderCarousel(currentCarouselProject, currentCarouselIndex);
        });
    }
    if (galleryCarouselNext && !galleryCarouselNext._carouselBound) {
        galleryCarouselNext._carouselBound = true;
        galleryCarouselNext.addEventListener('click', () => {
            if (!currentCarouselProject || !currentCarouselProject.images.length) return;
            const len = currentCarouselProject.images.length;
            currentCarouselIndex = (currentCarouselIndex + 1) % len;
            renderCarousel(currentCarouselProject, currentCarouselIndex);
        });
    }

    function doShowGallerySection() {
        projectsCategoriesSection.style.display = 'none';
        projectsGallery.style.display = 'block';
        projectsGallery.style.opacity = '1';
        projectsGallery.style.visibility = 'visible';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const header = document.getElementById('header');
        if (header) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }

    if (typeof gsap !== 'undefined') {
        gsap.to(projectsCategoriesSection, {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
                doShowGallerySection();
                gsap.from(projectsGallery, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
            }
        });
    } else {
        doShowGallerySection();
    }
}

// ============================================
// Back to Categories
// ============================================

if (backButton) {
    backButton.addEventListener('click', () => {
        // Clear gallery completely when going back
        clearGallery();
        
        if (typeof gsap !== 'undefined') {
            gsap.to(projectsGallery, {
                opacity: 0,
                y: 30,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    projectsGallery.style.display = 'none';
                    projectsGallery.style.opacity = '0';
                    projectsGallery.style.visibility = 'hidden';
                    
                    // Hide back button and gallery title
                    if (backButton) {
                        backButton.style.display = 'none';
                    }
                    if (galleryTitle) {
                        galleryTitle.textContent = '';
                        galleryTitle.style.display = 'none';
                    }
                    
                    projectsCategoriesSection.style.display = 'block';
                    projectsCategoriesSection.style.opacity = '1';
                    projectsCategoriesSection.style.visibility = 'visible';
                    
                    // Reset header to transparent when back to categories (has hero section)
                    const header = document.getElementById('header');
                    if (header) {
                        const currentScroll = window.pageYOffset || window.scrollY;
                        const heroSection = document.querySelector('.hero');
                        if (heroSection && currentScroll < heroSection.offsetHeight - 50) {
                            header.classList.remove('scrolled');
                            header.style.backgroundColor = 'transparent';
                            header.style.backdropFilter = 'none';
                            header.style.boxShadow = 'none';
                        }
                    }
                    
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
            projectsGallery.style.opacity = '0';
            projectsGallery.style.visibility = 'hidden';
            
            // Hide back button and gallery title
            if (backButton) {
                backButton.style.display = 'none';
            }
            if (galleryTitle) {
                galleryTitle.textContent = '';
                galleryTitle.style.display = 'none';
            }
            
            projectsCategoriesSection.style.display = 'block';
            projectsCategoriesSection.style.opacity = '1';
            projectsCategoriesSection.style.visibility = 'visible';
            
            // Reset header to transparent when back to categories (has hero section)
            const header = document.getElementById('header');
            if (header) {
                const currentScroll = window.pageYOffset || window.scrollY;
                const heroSection = document.querySelector('.hero');
                if (heroSection && currentScroll < heroSection.offsetHeight - 50) {
                    header.classList.remove('scrolled');
                    header.style.backgroundColor = 'transparent';
                    header.style.backdropFilter = 'none';
                    header.style.boxShadow = 'none';
                }
            }
            
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
    
    // Kill any existing GSAP animations on the image
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(lightboxImage);
        gsap.killTweensOf(lightboxModal);
    }
    
    // Clear previous image and handlers first - CRITICAL for second open
    lightboxImage.src = '';
    lightboxImage.onload = null;
    lightboxImage.onerror = null;
    
    // Reset image styles
    lightboxImage.style.opacity = '0';
    lightboxImage.style.visibility = 'hidden';
    lightboxImage.style.transform = 'scale(0.8)';
    
    // Reset modal styles
    lightboxModal.style.opacity = '0';
    
    currentLightboxImages = images;
    currentLightboxIndex = index;
    
    // Use proper URL encoding for paths with spaces and special characters
    // This ensures all image formats (jpg, jpeg, png, webp, gif, svg, etc.) are supported
    const imagePath = images[index];
    // Split path and encode each segment properly
    const pathParts = imagePath.split('/');
    const encodedParts = pathParts.map(part => encodeURIComponent(part));
    const encodedImagePath = encodedParts.join('/');
    const simpleEncoded = encodeURI(imagePath);
    
    // Update counter
    if (lightboxCounter) {
        lightboxCounter.textContent = `${index + 1} / ${images.length}`;
    }
    
    // Show lightbox first
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Function to load image with retry mechanism
    function loadImage() {
        // Clear handlers again before setting new ones
        lightboxImage.onload = null;
        lightboxImage.onerror = null;
        
        lightboxImage.alt = `${title} ${index + 1}`;
        
        // Add onload handler FIRST before setting src
        lightboxImage.onload = function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
            this.style.display = 'block';
        };
        
        // Add error handler to retry with different encoding strategies
        let retryCount = 0;
        lightboxImage.onerror = function() {
            retryCount++;
            if (retryCount === 1 && this.src === encodedImagePath) {
                // Try with simple encodeURI
                this.src = simpleEncoded;
                return;
            }
            if (retryCount === 2 && (this.src === encodedImagePath || this.src === simpleEncoded)) {
                // Try with original path as fallback
                this.src = imagePath;
                return;
            }
            this.onerror = null; // Prevent infinite loop
        };
        
        // Set src AFTER handlers are set
        lightboxImage.src = encodedImagePath;
    }
    
    // Small delay to ensure modal is visible before loading image
    setTimeout(() => {
        loadImage();
    
    // Animate in (smoother, longer)
    if (typeof gsap !== 'undefined') {
            gsap.to(lightboxModal, {
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out'
            });
            gsap.to(lightboxImage, {
                scale: 1,
                opacity: 1,
                duration: 0.55,
                ease: 'power4.out',
                delay: 0.08
            });
        } else {
            // Fallback without GSAP
            lightboxModal.style.opacity = '1';
            lightboxImage.style.opacity = '1';
            lightboxImage.style.visibility = 'visible';
            lightboxImage.style.transform = 'scale(1)';
        }
    }, 50);
}

function closeLightbox() {
    if (!lightboxModal || !lightboxImage) return;
    
    // Kill any existing GSAP animations
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(lightboxImage);
        gsap.killTweensOf(lightboxModal);
    }
    
    if (typeof gsap !== 'undefined') {
        gsap.to(lightboxModal, {
            opacity: 0,
            duration: 0.45,
            ease: 'power3.in',
            onComplete: () => {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = '';
                // Clear image and handlers after closing - CRITICAL for next open
                lightboxImage.src = '';
                lightboxImage.onload = null;
                lightboxImage.onerror = null;
                lightboxImage.style.opacity = '0';
                lightboxImage.style.visibility = 'hidden';
                lightboxImage.style.transform = 'scale(0.8)';
                lightboxModal.style.opacity = '0';
            }
        });
    } else {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = '';
        // Clear image and handlers after closing - CRITICAL for next open
        lightboxImage.src = '';
        lightboxImage.onload = null;
        lightboxImage.onerror = null;
        lightboxImage.style.opacity = '0';
        lightboxImage.style.visibility = 'hidden';
        lightboxImage.style.transform = 'scale(0.8)';
        lightboxModal.style.opacity = '0';
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
    
    // Kill any existing GSAP animations on the image
    if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(lightboxImage);
    }
    
    const imagePath = currentLightboxImages[currentLightboxIndex];
    // Split path and encode each segment properly
    const pathParts = imagePath.split('/');
    const encodedParts = pathParts.map(part => encodeURIComponent(part));
    const encodedImagePath = encodedParts.join('/');
    const simpleEncoded = encodeURI(imagePath);
    
    // Update counter
    if (lightboxCounter) {
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
    }
    
    // Function to load image with retry mechanism
    // This ensures all image formats (jpg, jpeg, png, webp, gif, svg, etc.) are supported
    function loadNewImage() {
        // Clear previous handlers
        lightboxImage.onload = null;
        lightboxImage.onerror = null;
        
        // Add onload handler FIRST before setting src
        lightboxImage.onload = function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
            this.style.display = 'block';
        };
        
        // Add error handler to retry with different encoding strategies
        let retryCount = 0;
        lightboxImage.onerror = function() {
            retryCount++;
            if (retryCount === 1 && this.src === encodedImagePath) {
                // Try with simple encodeURI
                this.src = simpleEncoded;
                return;
            }
            if (retryCount === 2 && (this.src === encodedImagePath || this.src === simpleEncoded)) {
                // Try with original path as fallback (localhost compatibility)
                this.src = imagePath;
                return;
            }
            this.onerror = null; // Prevent infinite loop
        };
        
        // Set new image source AFTER handlers are set
        lightboxImage.src = encodedImagePath;
    }
    
    if (typeof gsap !== 'undefined') {
        gsap.to(lightboxImage, {
            opacity: 0,
            scale: 0.92,
            duration: 0.28,
            ease: 'power3.in',
            onComplete: () => {
                // Clear previous image before loading new one
                lightboxImage.src = '';
                // Load new image
                loadNewImage();
                // Animate in (smooth)
                gsap.to(lightboxImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power4.out'
                });
            }
        });
    } else {
        // Clear previous image before loading new one
        lightboxImage.src = '';
        // Load new image
        loadNewImage();
        lightboxImage.style.opacity = '1';
        lightboxImage.style.visibility = 'visible';
        lightboxImage.style.transform = 'scale(1)';
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
    // Check if we're on the projects page
    if (!projectsGrid || !document.getElementById('projectsGrid')) {
        return; // Not on projects page
    }
    
    try {
        initializeProjectsGrid();
        
        // Refresh ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);
        }
    } catch (error) {
        console.error('Error initializing projects:', error);
        // Fallback: try again after a delay
        setTimeout(() => {
            try {
                initializeProjectsGrid();
            } catch (retryError) {
                console.error('Retry failed:', retryError);
            }
        }, 500);
    }
}

// Initialize immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            initProjects();
        }, 100);
        });
    } else {
    // DOM is already ready
    setTimeout(() => {
        initProjects();
    }, 100);
    }

// Also initialize on window load as backup
window.addEventListener('load', () => {
    setTimeout(() => {
        initProjects();
        
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 200);
});

// Fallback: Try to initialize after a longer delay
setTimeout(() => {
    if (projectsGrid && projectsGrid.children.length === 0) {
        initProjects();
    }
}, 500);


