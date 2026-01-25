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
    },
    {
        id: 'excerpts',
        title: 'Excerpts',
        subtitle: 'Project Highlights',
        image: 'assets/Alshola Projcts/Excerpts/v1.mp4',
        images: [
            'assets/Alshola Projcts/Excerpts/v1.mp4',
            'assets/Alshola Projcts/Excerpts/v2.mp4',
            'assets/Alshola Projcts/Excerpts/v3.mp4',
            'assets/Alshola Projcts/Excerpts/v4.mp4',
            'assets/Alshola Projcts/Excerpts/v5.mp4'
        ],
        isVideo: true
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
// Clear Gallery Function
// ============================================

function clearGallery() {
    if (!galleryGrid) return;
    
    try {
        // Disconnect any existing IntersectionObserver
        if (window.galleryImageObserver) {
            window.galleryImageObserver.disconnect();
            window.galleryImageObserver = null;
        }
        
        // Remove all event listeners and clear images
        const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
                // Cancel any pending image loads
                img.src = '';
                img.onload = null;
                img.onerror = null;
                // Clear dataset attributes
                img.removeAttribute('data-src');
                img.removeAttribute('data-simple-encoded');
                img.removeAttribute('data-original-path');
            }
        });
        
        // Remove all child elements
        while (galleryGrid.firstChild) {
            galleryGrid.removeChild(galleryGrid.firstChild);
        }
        
        // Clear all styles and reset
        galleryGrid.innerHTML = '';
        galleryGrid.style.display = 'none';
        galleryGrid.style.opacity = '0';
        galleryGrid.style.visibility = 'hidden';
        
        // Force reflow
        void galleryGrid.offsetHeight;
        
        // Clear any pending timeouts or intervals
        if (window.galleryClearTimeout) {
            clearTimeout(window.galleryClearTimeout);
            window.galleryClearTimeout = null;
        }
        
        // Clear any preload images
        if (window.preloadImages) {
            window.preloadImages.forEach(img => {
                if (img) {
                    img.onload = null;
                    img.onerror = null;
                    img.src = '';
                }
            });
            window.preloadImages = [];
        }
    } catch (error) {
        console.error('Error clearing gallery:', error);
        // Fallback: just clear innerHTML
        if (galleryGrid) {
            galleryGrid.innerHTML = '';
        }
    }
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
    
    // Log only in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Loading gallery for project:', project.title);
        console.log('Number of images:', project.images.length);
    }
    
    // Check if mobile for optimized loading
    const isMobile = window.innerWidth <= 768;
    
    // Clear gallery completely first
    clearGallery();
    
    // Initialize preload images array
    if (!window.preloadImages) {
        window.preloadImages = [];
    }
    
    // Wait a bit to ensure cleanup is complete
    setTimeout(() => {
        try {
            // Update title and show it
            galleryTitle.textContent = project.title;
            galleryTitle.style.display = 'block';
            
            // Show back button
            if (backButton) {
                backButton.style.display = 'inline-flex';
            }
            
            // Reset gallery grid
            galleryGrid.style.display = '';
            galleryGrid.style.opacity = '1';
            galleryGrid.style.visibility = 'visible';
            
            // Create gallery items with proper image loading
            // On mobile, load first 8 images eagerly, rest lazily
            // On desktop, load all images but use lazy loading for better performance
            const batchSize = isMobile ? 8 : 12; // Load more on desktop
            const imagesToLoad = project.images; // Load all images, just optimize loading strategy
        
    imagesToLoad.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-image-index', index);
            galleryItem.setAttribute('data-project-id', projectId);
        
        // Check if this is a video file
        const isVideo = project.isVideo || imagePath.toLowerCase().endsWith('.mp4') || 
                       imagePath.toLowerCase().endsWith('.webm') || 
                       imagePath.toLowerCase().endsWith('.mov');
        
        if (isVideo) {
            // Create video element with lazy loading
            const video = document.createElement('video');
            video.controls = true;
            video.preload = (isMobile && index >= batchSize) ? 'none' : 'metadata';
            video.loading = (isMobile && index >= batchSize) ? 'lazy' : 'eager';
            video.style.width = '100%';
            video.style.height = 'auto';
            video.style.display = 'block';
            video.style.opacity = '1';
            video.style.visibility = 'visible';
            
            // Encode video path
            const pathParts = imagePath.split('/');
            const encodedParts = pathParts.map(part => encodeURIComponent(part));
            const encodedVideoPath = encodedParts.join('/');
            const simpleEncoded = encodeURI(imagePath);
            
            // Use lazy loading for videos beyond first batch
            if (index >= batchSize) {
                video.dataset.src = encodedVideoPath;
                video.dataset.simpleEncoded = simpleEncoded;
                video.dataset.originalPath = imagePath;
                // Set poster placeholder
                video.poster = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f5f5f5\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'Arial\' font-size=\'14\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EVideo%3C/text%3E%3C/svg%3E';
            } else {
                video.src = encodedVideoPath;
            }
            
            // Add source element for better browser compatibility
            const source = document.createElement('source');
            source.src = encodedVideoPath;
            source.type = 'video/mp4';
            video.appendChild(source);
            
            galleryItem.appendChild(video);
        } else {
            // Create image with proper loading
            const img = document.createElement('img');
            img.alt = `${project.title} ${index + 1}`;
            // Use lazy loading for all images - improved performance
            img.loading = (index >= batchSize) ? 'lazy' : 'eager';
            
            // Set styles to ensure visibility
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            img.style.transition = 'opacity 0.3s ease';
            img.style.background = 'transparent';
            
            // Load image with proper URL encoding for server compatibility
            // encodeURI encodes spaces (%20) and special chars (%26 for &) but keeps / and : intact
            // This is necessary for paths with spaces like "Alshola Projcts" and "GYM & Showrooms"
            // Split path and encode each segment properly to handle spaces and special characters
            const pathParts = imagePath.split('/');
            const encodedParts = pathParts.map(part => {
                // Encode each part separately, but keep slashes
                return encodeURIComponent(part);
            });
            const encodedImagePath = encodedParts.join('/');
            
            // Also try original encodeURI for fallback
            const simpleEncoded = encodeURI(imagePath);
            
            // Use lazy loading for images beyond first batch
            if (index >= batchSize) {
                // Use IntersectionObserver for lazy loading
                img.dataset.src = encodedImagePath;
                img.dataset.simpleEncoded = simpleEncoded;
                img.dataset.originalPath = imagePath;
                // Set placeholder to maintain layout
                img.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f5f5f5\' width=\'400\' height=\'300\'/%3E%3C/svg%3E';
            } else {
                // Try encoded path first (required for server with spaces in paths)
                img.src = encodedImagePath;
            }
            
            // Set initial styles
            img.style.display = 'block';
            img.style.visibility = 'visible';
            
            // For lazy loaded images, keep opacity low until loaded
            if (index >= batchSize) {
                img.style.opacity = '0.3';
            } else {
                img.style.opacity = '1';
            }
            
            // Single onload handler
            img.onload = function() {
                this.style.opacity = '1';
                this.style.visibility = 'visible';
                this.style.display = 'block';
                this.style.background = 'transparent';
            };
            
            // Check if image is already loaded (cached)
            if (img.complete && img.naturalWidth > 0) {
                img.style.opacity = '1';
                img.style.visibility = 'visible';
                img.style.display = 'block';
            }
            
            // Add error handling with retry mechanism
            // Special handling for webp images which may need different encoding
            let retryCount = 0;
            const maxRetries = 3;
            const isWebP = imagePath.toLowerCase().endsWith('.webp');
            
            img.onerror = function() {
                retryCount++;
                
                // Retry strategies
                if (retryCount === 1) {
                    // Try 1: Simple encodeURI (less aggressive encoding)
                    this.src = simpleEncoded;
                    return;
                }
                
                if (retryCount === 2) {
                    // Try 2: Original path (may work on localhost)
                    this.src = imagePath;
                    return;
                }
                
                if (retryCount === 3) {
                    // Try 3: Replace spaces with %20 manually for problematic paths
                    const manualEncoded = imagePath.replace(/ /g, '%20').replace(/&/g, '%26');
                    this.src = manualEncoded;
                    return;
                }
                
                // If all attempts failed, show placeholder
                this.onerror = null; // Prevent infinite loop
                this.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'Arial\' font-size=\'14\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EImage not found%3C/text%3E%3C/svg%3E';
                this.style.opacity = '1';
                this.style.visibility = 'visible';
                this.style.display = 'block';
            };
            
            galleryItem.appendChild(img);
        }
        
        // Ensure gallery item is visible
        galleryItem.style.opacity = '1';
        galleryItem.style.visibility = 'visible';
        galleryItem.style.display = 'inline-block';
        
        // Add click handler to open lightbox
        galleryItem.addEventListener('click', () => {
            // Use all images for lightbox, not just loaded ones
            openLightbox(project.images, index, project.title);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // Setup IntersectionObserver for lazy loading (works on all devices)
    if (typeof IntersectionObserver !== 'undefined') {
        // Disconnect any existing observer
        if (window.galleryImageObserver) {
            window.galleryImageObserver.disconnect();
        }
        
        window.galleryImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Handle video elements
                    if (element.tagName === 'VIDEO' && element.dataset.src) {
                        const encodedPath = element.dataset.src;
                        const simpleEncoded = element.dataset.simpleEncoded;
                        const originalPath = element.dataset.originalPath;
                        
                        element.src = encodedPath;
                        element.load();
                        
                        element.addEventListener('loadeddata', function() {
                            this.style.opacity = '1';
                            this.removeAttribute('data-src');
                            this.removeAttribute('data-simpleEncoded');
                            this.removeAttribute('data-originalPath');
                            observer.unobserve(this);
                        });
                        
                        element.addEventListener('error', function() {
                            if (this.src === encodedPath && simpleEncoded) {
                                this.src = simpleEncoded;
                                return;
                            }
                            if (this.src === simpleEncoded && originalPath) {
                                this.src = originalPath;
                                return;
                            }
                            this.style.opacity = '1';
                            this.removeAttribute('data-src');
                            this.removeAttribute('data-simpleEncoded');
                            this.removeAttribute('data-originalPath');
                            observer.unobserve(this);
                        });
                        return;
                    }
                    
                    // Handle image elements
                    const img = element;
                    if (img.dataset.src) {
                        // Load image with retry mechanism
                        const encodedPath = img.dataset.src;
                        const simpleEncoded = img.dataset.simpleEncoded;
                        const originalPath = img.dataset.originalPath;
                        
                        // Set src and handle loading
                        img.src = encodedPath;
                        
                        // Add onload handler to remove placeholder and fade in
                        img.onload = function() {
                            // Fade in smoothly
                            this.style.transition = 'opacity 0.4s ease, background 0.4s ease';
                            this.style.opacity = '1';
                            this.style.background = 'transparent';
                            // Remove placeholder attributes
                            this.removeAttribute('data-src');
                            this.removeAttribute('data-simple-encoded');
                            this.removeAttribute('data-original-path');
                            observer.unobserve(this);
                        };
                        
                        // Add error handling with retry
                        let retryCount = 0;
                        img.onerror = function() {
                            retryCount++;
                            if (retryCount === 1 && this.src === encodedPath && simpleEncoded) {
                                this.src = simpleEncoded;
                                return;
                            }
                            if (retryCount === 2 && this.src === simpleEncoded && originalPath) {
                                this.src = originalPath;
                                return;
                            }
                            this.onerror = null; // Prevent infinite loop
                            this.style.opacity = '1';
                            this.style.background = '#f0f0f0';
                            // Clean up even on error
                            this.removeAttribute('data-src');
                            this.removeAttribute('data-simple-encoded');
                            this.removeAttribute('data-original-path');
                            observer.unobserve(this);
                        };
                    }
                }
            });
        }, {
            rootMargin: isMobile ? '150px' : '200px', // Start loading before image is visible
            threshold: 0.01
        });
        
        // Observe all lazy-loaded images and videos after a short delay
        setTimeout(() => {
            try {
                const lazyImages = galleryGrid.querySelectorAll('img[data-src], video[data-src]');
                lazyImages.forEach(element => {
                    try {
                        window.galleryImageObserver.observe(element);
                    } catch (err) {
                        // If observation fails, load image immediately
                        if (element.dataset.src) {
                            element.src = element.dataset.src;
                            element.removeAttribute('data-src');
                        }
                    }
                });
            } catch (err) {
                console.error('Error setting up image observer:', err);
            }
        }, 100);
    }
        
        // Show gallery grid after all items are added
        galleryGrid.style.display = '';
        galleryGrid.style.opacity = '1';
        galleryGrid.style.visibility = 'visible';
        
        // Force all images to be visible immediately
        const allItems = galleryGrid.querySelectorAll('.gallery-item');
        allItems.forEach((item) => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.display = 'inline-block';
            
            const img = item.querySelector('img');
            if (img) {
                // Only set opacity for images that are loaded (not lazy ones)
                if (!img.dataset.src) {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                }
                img.style.display = 'block';
            }
        });
        
        // Force reflow to ensure layout
        void galleryGrid.offsetHeight;
        
        } catch (error) {
            console.error('Error creating gallery:', error);
            // Show error message to user
            if (galleryGrid) {
                galleryGrid.innerHTML = '<div style="padding: 40px; text-align: center; color: #666;"><p>Error loading gallery. Please try again.</p></div>';
            }
        }
    
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
                projectsGallery.style.opacity = '1';
                projectsGallery.style.visibility = 'visible';
                
                // Show gallery items immediately - no animation for better performance
                const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
                if (galleryItems.length > 0) {
                    // Ensure all items are visible immediately
                    galleryItems.forEach((item, index) => {
                        item.style.opacity = '1';
                        item.style.visibility = 'visible';
                        item.style.display = 'inline-block';
                        
                            const img = item.querySelector('img');
                        if (img) {
                            img.style.opacity = '1';
                            img.style.visibility = 'visible';
                            img.style.display = 'block';
                        }
                    });
                }
                
                // Animate gallery in (but keep it visible)
                gsap.from(projectsGallery, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Force reflow to ensure masonry layout updates
                window.galleryClearTimeout = setTimeout(() => {
                    if (galleryGrid) {
                        const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
                        
                        // Ensure all images are loaded and visible
                        galleryItems.forEach((item, idx) => {
                            const img = item.querySelector('img');
                            if (img) {
                                // Force visibility immediately
                                item.style.opacity = '1';
                                item.style.visibility = 'visible';
                                item.style.display = 'inline-block';
                                img.style.opacity = '1';
                                img.style.visibility = 'visible';
                                img.style.display = 'block';
                                
                                // If image not loaded yet, ensure it shows anyway
                                if (!img.complete || img.naturalWidth === 0) {
                                    // Force show after a delay
                                    setTimeout(() => {
                                        img.style.opacity = '1';
                                        img.style.visibility = 'visible';
                                        img.style.display = 'block';
                                    }, 200);
                                }
                            }
                        });
                        
                        // Force reflow
                        void galleryGrid.offsetHeight;
                        
                        // Additional check after a delay
                        setTimeout(() => {
                            galleryItems.forEach((item) => {
                                const img = item.querySelector('img');
                                if (img) {
                                    img.style.opacity = '1';
                                    img.style.visibility = 'visible';
                                    img.style.display = 'block';
                                }
                            });
                            void galleryGrid.offsetHeight;
                        }, 300);
                    }
                }, 100);
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Make header white when gallery is shown (no hero section)
                const header = document.getElementById('header');
                if (header) {
                    header.classList.add('scrolled');
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            }
        });
    } else {
        // Fallback without GSAP
        projectsCategoriesSection.style.display = 'none';
        projectsGallery.style.display = 'block';
            projectsGallery.style.opacity = '1';
            projectsGallery.style.visibility = 'visible';
        
        // Make header white when gallery is shown (no hero section)
        const header = document.getElementById('header');
        if (header) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        // Ensure all gallery items are visible
        const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
                item.style.display = 'inline-block';
                
                const img = item.querySelector('img');
                if (img) {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                    img.style.display = 'block';
                }
            });
            
        // Force reflow to ensure masonry layout updates
        window.galleryClearTimeout = setTimeout(() => {
            if (galleryGrid) {
                const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
                
                // Ensure all images are loaded and visible
                galleryItems.forEach((item, idx) => {
                    const img = item.querySelector('img');
                    if (img) {
                        // Force visibility immediately
                        item.style.opacity = '1';
                        item.style.visibility = 'visible';
                        item.style.display = 'inline-block';
                        img.style.opacity = '1';
                        img.style.visibility = 'visible';
                        img.style.display = 'block';
                        
                        // If image not loaded yet, ensure it shows anyway
                        if (!img.complete || img.naturalWidth === 0) {
                            // Force show after a delay
                            setTimeout(() => {
                                img.style.opacity = '1';
                                img.style.visibility = 'visible';
                                img.style.display = 'block';
                            }, 200);
                        }
                    }
                });
                
                // Force reflow
                void galleryGrid.offsetHeight;
                
                // Additional check after a delay
                setTimeout(() => {
                    galleryItems.forEach((item) => {
                        const img = item.querySelector('img');
                        if (img) {
                            img.style.opacity = '1';
                            img.style.visibility = 'visible';
                            img.style.display = 'block';
                        }
                    });
                    void galleryGrid.offsetHeight;
                }, 300);
            }
        }, 100);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    }, 50); // Small delay to ensure cleanup is complete
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
    
    // Animate in
    if (typeof gsap !== 'undefined') {
            gsap.to(lightboxModal, {
                opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        
            gsap.to(lightboxImage, {
                scale: 1,
                opacity: 1,
            duration: 0.4,
            ease: 'power3.out',
            delay: 0.1
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
            duration: 0.3,
            ease: 'power2.in',
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
            scale: 0.9,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                // Clear previous image before loading new one
                lightboxImage.src = '';
                // Load new image
                loadNewImage();
                // Animate in
                gsap.to(lightboxImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
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


