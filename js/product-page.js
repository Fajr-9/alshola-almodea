// Generic Product Page JavaScript
// Works with any product category page

// Configuration object - will be set per page
let productPageConfig = {
    category: '', // 'indoor' or 'outdoor'
    type: '', // e.g., 'spot-light', 'down-light', etc.
    pageTitle: '', // e.g., 'Spot Light'
    heroImage: '', // Path to hero image
    heroTitle: '', // Hero section title
    heroSubtitle: '', // Hero section subtitle
    gridId: 'productsGrid', // ID of the products grid
    modalId: 'productModal', // ID of the modal
    productCount: 0 // Number of products
};

// Product descriptions - can be extended per category
const productDescriptions = {
    // Spot Light descriptions (already in spot-light.js, keeping for reference)
    'LL-3012': 'A range of recessed spot lights for low voltage LED light source offering a variety of decorative and architectural spot lights ideal for commercial offices, shopping complex, corridors they may be used on normally inflammable surfaces such as fabrics wall paper and wood. Die cast aluminium body with polyester powder coated LED lamp reflector. Adjustable fixing clips and suitable for ceiling clips remote type sheet steel or polycarbonate control gear box.',
    // Add more descriptions as needed
};

// Initialize product page
function initializeProductPage(config) {
    productPageConfig = { ...productPageConfig, ...config };
    console.log('Initializing product page:', productPageConfig);
    
    const grid = document.getElementById(productPageConfig.gridId);
    if (grid) {
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 16px;">Loading products...</p>';
    }
    
    waitForProductsData(() => {
        console.log('productsData is ready, generating products...');
        generateProducts();
        
        setTimeout(() => {
            initializeAnimations();
        }, 500);
    });
}

// Generate products for the current page
function generateProducts() {
    const grid = document.getElementById(productPageConfig.gridId);
    if (!grid) {
        console.error(`${productPageConfig.gridId} not found`);
        return;
    }

    if (typeof productsData === 'undefined') {
        console.error('productsData is not defined');
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">Loading products data...</p>';
        return;
    }

    const categoryData = productsData[productPageConfig.category];
    if (!categoryData) {
        console.error(`Category ${productPageConfig.category} not found in productsData`);
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">Category not found</p>';
        return;
    }

    const products = categoryData[productPageConfig.type] || [];
    
    if (products.length === 0) {
        console.warn(`No ${productPageConfig.type} products found`);
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">No products available</p>';
        return;
    }

    console.log(`Generating ${products.length} products for ${productPageConfig.type}`);

    let html = '';
    let productCount = 0;
    
    products.forEach((product) => {
        if (!product || !product.name) {
            console.warn('Invalid product found:', product);
            return;
        }
        
        productCount++;
        const imgPath = `assets/Products Img/${product.img}`;
        const dataSheetPath = typeof getDataSheetPath === 'function' ? getDataSheetPath(product.name) : `assets/DATA-SHEETS/${product.name}.png`;
        const description = product.description || productDescriptions[product.name] || `Premium ${productPageConfig.pageTitle.toLowerCase()} solution designed for modern lighting applications.`;
        const thumbnails = product.thumbnails || [];
        
        html += `
            <div class="spotlight-product-card" 
                 data-product-name="${product.name}" 
                 data-product-datasheet="${dataSheetPath}" 
                 data-product-img="${product.img}"
                 data-product-desc="${description.replace(/"/g, '&quot;')}"
                 ${thumbnails.length > 0 ? `data-thumbnails='${JSON.stringify(thumbnails)}'` : ''}>
                <div class="product-image-wrapper">
                    <img src="${imgPath}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=${product.name}'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <button class="open-spotlight-modal">Show More</button>
                </div>
            </div>
        `;
    });

    if (productCount === 0) {
        console.error('No valid products to display');
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 18px;">No products found. Please check the products data.</p>';
        return;
    }

    console.log(`Successfully generated ${productCount} product cards`);
    grid.innerHTML = html;

    // Ensure products are visible immediately
    const productCards = grid.querySelectorAll('.spotlight-product-card');
    productCards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'flex';
    });

    // Setup modal event listeners
    setupProductModal();
    
    // Update product count
    updateProductCount(productCount);
    
    // Setup filters and sort
    setupFilters();
    setupSort();
}

// Update product count
function updateProductCount(count) {
    const countElement = document.getElementById('productCount');
    if (countElement) {
        countElement.textContent = count;
    }
    productPageConfig.productCount = count;
}

// Setup filters
function setupFilters() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const filterButtons = document.querySelectorAll('.filter-btn-small');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if it's a filter link (has data-category) or href is #
            const href = link.getAttribute('href');
            const hasDataCategory = link.hasAttribute('data-category');
            
            // If it's a navigation link (has real href and no data-category), allow normal navigation
            if (href && href !== '#' && !hasDataCategory) {
                // Allow normal navigation - don't prevent default
                return;
            }
            
            // Otherwise, prevent default for filter links
            e.preventDefault();
            document.querySelectorAll('.filter-item').forEach(item => {
                item.classList.remove('active');
            });
            link.closest('.filter-item').classList.add('active');
        });
    });
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.querySelectorAll('.filter-btn-small').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
        });
    });
}

// Setup sort dropdown
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortValue = e.target.value;
            const grid = document.getElementById(productPageConfig.gridId);
            const cards = Array.from(grid.querySelectorAll('.spotlight-product-card'));
            
            cards.sort((a, b) => {
                const nameA = a.getAttribute('data-product-name');
                const nameB = b.getAttribute('data-product-name');
                
                switch(sortValue) {
                    case 'name-asc':
                        return nameA.localeCompare(nameB);
                    case 'name-desc':
                        return nameB.localeCompare(nameA);
                    case 'newest':
                        return 0;
                    default:
                        return 0;
                }
            });
            
            cards.forEach(card => grid.appendChild(card));
        });
    }
}

// Setup product modal
function setupProductModal() {
    const modal = document.getElementById(productPageConfig.modalId);
    const closeBtn = modal?.querySelector('.spotlight-modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    const productCards = document.querySelectorAll('.spotlight-product-card');
    
    if (!modal) return;

    function closeModal() {
        const modalContent = modal.querySelector('.spotlight-modal-content');
        
        gsap.to(modalContent, {
            x: '100%',
            opacity: 0,
            duration: 0.4,
            ease: 'power3.in'
        });
        
        gsap.to(modal.querySelector('.modal-overlay'), {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modal.style.display = 'none';
            }
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    productCards.forEach(card => {
        const button = card.querySelector('.open-spotlight-modal');
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const productName = card.getAttribute('data-product-name');
                const productDataSheet = card.getAttribute('data-product-datasheet') || (typeof getDataSheetPath === 'function' ? getDataSheetPath(productName) : `assets/DATA-SHEETS/${productName}.png`);
                const productImg = card.getAttribute('data-product-img');
                const productDesc = card.getAttribute('data-product-desc');
                const thumbnailsAttr = card.getAttribute('data-thumbnails');
                let thumbnails = [];

                if (thumbnailsAttr) {
                    try {
                        thumbnails = JSON.parse(thumbnailsAttr);
                    } catch (e) {
                        console.warn('Error parsing thumbnails:', e);
                    }
                }

                // Update modal content
                const titleElement = document.getElementById('spotlightModalTitle');
                const descElement = document.getElementById('spotlightModalDesc');
                const imgElement = document.getElementById('spotlightModalMainImage');
                const pdfElement = document.getElementById('spotlightDownloadPdf');

                if (titleElement) titleElement.textContent = productName;
                if (descElement) descElement.textContent = productDesc || `Premium ${productPageConfig.pageTitle.toLowerCase()} solution designed for modern lighting applications.`;
                if (imgElement) {
                    imgElement.src = `assets/Products Img/${productImg}`;
                    // Force mobile size on mobile devices
                    if (window.innerWidth <= 480) {
                        imgElement.style.width = '120px';
                        imgElement.style.height = '200px';
                        imgElement.style.maxWidth = '120px';
                        imgElement.style.maxHeight = '200px';
                        imgElement.style.margin = '0 auto 15px';
                        imgElement.style.display = 'block';
                        imgElement.style.objectFit = 'contain';
                    }
                }
                if (pdfElement) {
                    pdfElement.href = productDataSheet;
                    pdfElement.target = '_blank';
                    pdfElement.download = '';
                }

                // Setup thumbnail gallery
                const thumbnailGallery = document.getElementById('spotlightThumbnailGallery');
                if (thumbnailGallery) {
                    thumbnailGallery.innerHTML = '';

                    // Add base image as first thumbnail
                    const baseThumbnail = document.createElement('img');
                    baseThumbnail.src = `assets/Products Img/${productImg}`;
                    baseThumbnail.alt = `${productName} - Main Image`;
                    baseThumbnail.loading = 'lazy';
                    baseThumbnail.className = 'active';
                    baseThumbnail.addEventListener('click', () => {
                        if (imgElement) imgElement.src = `assets/Products Img/${productImg}`;
                        thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                        baseThumbnail.classList.add('active');
                    });
                    baseThumbnail.addEventListener('error', () => {
                        baseThumbnail.style.display = 'none';
                    });
                    thumbnailGallery.appendChild(baseThumbnail);

                    // Add thumbnails from data if available
                    if (thumbnails.length > 0) {
                        thumbnails.forEach((thumb, index) => {
                            if (thumb === productImg) return; // Skip if same as base
                            
                            const thumbnail = document.createElement('img');
                            thumbnail.src = `assets/Products Img/${thumb}`;
                            thumbnail.alt = `${productName} - Image ${index + 2}`;
                            thumbnail.loading = 'lazy';
                            thumbnail.addEventListener('click', () => {
                                if (imgElement) imgElement.src = `assets/Products Img/${thumb}`;
                                thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                                thumbnail.classList.add('active');
                            });
                            thumbnail.addEventListener('error', () => {
                                thumbnail.style.display = 'none';
                            });
                            thumbnailGallery.appendChild(thumbnail);
                        });
                    } else {
                        // Fallback: Try to find additional images
                        const imgBase = productImg.replace(/\.(png|jpg|jpeg|webp)$/i, '');
                        const baseName = productName.replace(/[^a-zA-Z0-9-]/g, '');

                        for (let i = 1; i <= 10; i++) {
                            const variations = [
                                `${imgBase},${i}.png`,
                                `${imgBase},${i}.jpg`,
                                `${imgBase},${i}.webp`,
                                `${imgBase} ${i}.png`,
                                `${imgBase} ${i}.jpg`,
                                `${imgBase} ${i}.webp`,
                                `${baseName},${i}.png`,
                                `${baseName},${i}.jpg`,
                                `${baseName},${i}.webp`,
                                `${baseName} ${i}.png`,
                                `${baseName} ${i}.jpg`,
                                `${baseName} ${i}.webp`,
                            ];

                            variations.forEach(variation => {
                                const img = new Image();
                                img.onload = function() {
                                    const existing = thumbnailGallery.querySelector(`img[src="assets/Products Img/${variation}"]`);
                                    if (existing) return;
                                    
                                    const thumbnail = document.createElement('img');
                                    thumbnail.src = `assets/Products Img/${variation}`;
                                    thumbnail.alt = `${productName} - Image ${i}`;
                                    thumbnail.loading = 'lazy';
                                    thumbnail.addEventListener('click', () => {
                                        if (imgElement) imgElement.src = `assets/Products Img/${variation}`;
                                        thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                                        thumbnail.classList.add('active');
                                    });
                                    thumbnail.addEventListener('error', () => {
                                        thumbnail.style.display = 'none';
                                    });
                                    thumbnailGallery.appendChild(thumbnail);
                                };
                                img.src = `assets/Products Img/${variation}`;
                            });
                        }
                    }
                }

                // Show modal with slide-in animation
                modal.style.display = 'flex';
                const modalContent = modal.querySelector('.spotlight-modal-content');
                
                gsap.fromTo(modal.querySelector('.modal-overlay'),
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4 }
                );
                
                gsap.fromTo(modalContent,
                    { x: '100%', opacity: 0 },
                    { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            });
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// Wait for productsData to be loaded
function waitForProductsData(callback, maxAttempts = 100) {
    let attempts = 0;
    const checkInterval = setInterval(() => {
        attempts++;
        const categoryData = productsData?.[productPageConfig.category];
        const typeData = categoryData?.[productPageConfig.type];
        
        if (typeof productsData !== 'undefined' && typeData) {
            clearInterval(checkInterval);
            console.log('productsData loaded successfully');
            callback();
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.error('productsData not loaded after maximum attempts');
            const grid = document.getElementById(productPageConfig.gridId);
            if (grid) {
                grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 18px;">Error loading products. Please refresh the page.</p>';
            }
        } else {
            if (attempts % 10 === 0) {
                console.log(`Waiting for productsData... (attempt ${attempts}/${maxAttempts})`);
            }
        }
    }, 100);
}

// Initialize animations
function initializeAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        setTimeout(initializeAnimations, 100);
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const cards = document.querySelectorAll('.spotlight-product-card');
    if (cards.length === 0) {
        setTimeout(initializeAnimations, 200);
        return;
    }
    
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'flex';
    });
    
    gsap.from(cards, {
        y: 30,
        scale: 0.95,
        duration: 0.6,
        stagger: {
            amount: 0.4,
            from: 'start'
        },
        ease: 'power2.out',
        scrollTrigger: {
            trigger: `.${productPageConfig.gridId.replace('#', '')}`,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
        }
    });
}

// Setup header scroll behavior
function setupHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const heroSection = document.querySelector('.spot-hero');
        
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            
            if (currentScroll > heroHeight - 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
            }
        }
    }, { passive: true });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupHeaderScroll();
    });
} else {
    setupHeaderScroll();
}

