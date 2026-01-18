// Spot Light Page JavaScript

// Product descriptions
const productDescriptions = {
    'LL-3012': 'A range of recessed spot lights for low voltage LED light source offering a variety of decorative and architectural spot lights ideal for commercial offices, shopping complex, corridors they may be used on normally inflammable surfaces such as fabrics wall paper and wood. Die cast aluminium body with polyester powder coated LED lamp reflector. Adjustable fixing clips and suitable for ceiling clips remote type sheet steel or polycarbonate control gear box.',
    'LL-3013': 'A range of recessed weather proof spot light for low voltage halogen source ideal for humid environments kitchens, bathrooms, saunas, showers and exterior canopies. Die cast aluminium body with suitable ceiling clips. Tempered frosted glass diffuser.',
    'LL-3021': 'High purity aluminum heat sink with best heat dissipation ensure LED chip with long lifespan and different beam angle. LED driver, High PF, Safety isolation and flicker free Die cast High purity aluminum Pure aluminum reflector Optical lens',
    'LL-3022-BK': 'A wide choice of wattage and sizes options plus the chance to decide between reflector plating option of chrome, gold etc. to answer all architect selection of designs. The high quality of the materials and the finish are ratifying this item as high quality, high resistance and long lasting one. Thanks to its design and the advanced technologies contained inside it, this item guarantees high lumen output with low glare effect and homogeneous enlightenment.',
    'LL-3019': 'Nowadays when we are going to choose a product we have to look as much as the economical issue as much as the human resources. That\'s why we have to think about energy savings as a priority. That\'s why we have to study how the light can affect the health and the work attitude of the employees, or the mood and the consecutive inclination to buy of a customer. Imola is the perfect balance between efficiency, performance and comfortable relaxing light effect results. Wide beam angle and no glare effect, thanks to the deep position of the light source.',
    'LL-3032-S': 'A range of recessed weather proof spot light for low voltage halogen source ideal for humid environments kitchens, bathrooms, saunas, showers and exterior canopies. Die cast aluminium body with suitable ceiling clips. Tempered frosted glass diffuser.',
    'LL-3032-R': 'A range of recessed weather proof spot light for low voltage halogen source ideal for humid environments kitchens, bathrooms, saunas, showers and exterior canopies. Die cast aluminium body with suitable ceiling clips. Tempered frosted glass diffuser.',
    'LL-3031': 'The series is an innovative range of professional recessed spotlights, created to deliver high lighting performance and excellent visual comfort, without forgetting about energy saving requirements. A complete, flexible product range, which is extremely versatile in its various applications like shops, showrooms, restaurants, offices and supermarkets; this type of luminaire is studied to win the challenge of high lighting performance criteria in every place.',
    'LL-3043': 'Nowadays when we are going to choose a product we have to look as much as the economical issue as much as the human resources. That\'s why we have to think about energy savings as a priority. That\'s why we have to study how the light can affect the health and the work attitude of the employees, or the mood and the consecutive inclination to buy of a customer. Imola is the perfect balance between efficiency, performance and comfortable relaxing light effect results. Wide beam angle and no glare effect, thanks to the deep position of the light source.',
    'LL-3061': 'Frameless spotlight with driver and LED chip are separated, which prolongs the working life span of the luminaire. The energy saving is up to 95%. The deep-positioned light source helps to keep the glare effect in very low levels. The colour rendering index is high, and the quality of the light is kept constant for long time with very low luminance decrease. Easy to install with the chance to change the colour of the inner reflector. Mainly employed in offices, shops, restaurants, kitchens, living rooms, bedrooms.',
    'LL-3016': 'LED grille down light is unique designed with COB high power LED Chip. High efficient reflector with COB LED provides high lumen output and options of beam angle. Single head, double head and triple head provided for wide choice. Adjustable lighting direction offers various lighting orientation. The anti-glare effect is the warranty of a bright, homogeneous, comfortable light result.',
    'LL-3017': 'LED grille down light is unique designed with COB high power LED chip. High efficient reflector with COB LED provides high lumen output and options of beam angle. Single head, double head and triple head provided for wide choice. Adjustable lighting direction offers various lighting orientation. The anti-glare effect is the warranty of a bright, homogeneous, comfortable light result.',
    'LL-3018': 'LED grille down light is unique designed with COB high power LED chip. High efficient reflector with COB LED provides high lumen output and options of beam angle. Single head, double head and triple head provided for wide choice. Adjustable lighting direction offers various lighting orientation. The anti-glare effect is the warranty of a bright, homogeneous, comfortable light result.',
    'LL-3003': 'Premium spotlight solution designed for modern lighting applications.',
    'LL-2003': 'Nowadays when we are going to choose a product we have to look as much as the economical issue as much as the human resources. That\'s why we have to think about energy savings as a priority. That\'s why we have to study how the light can affect the health and the work attitude of the employees, or the mood and the consecutive inclination to buy of a customer. Imola is the perfect balance between efficiency, performance and comfortable relaxing light effect results. Wide beam angle and no glare effect, thanks to the deep position of the light source.',
    'LL-3009': 'Frameless spotlight with driver and LED chip are separated, which prolongs the working life span of the luminaire. The energy saving is up to 95%. The deep-positioned light source helps to keep the glare effect in very low levels. The colour rendering index is high, and the quality of the light is kept constant for long time with very low luminance decrease. Easy to install with the chance to change the colour of the inner reflector. Mainly employed in offices, shops, restaurants, kitchens, living rooms, bedrooms.',
    'LL-3033': 'Extractable, adjustable, recessed luminaire for neutral white LED lamp. Passive heat dispatch system. Die-cast aluminium main body and frame; stainless steel rotation ring. Rotation ring with safety cover in a high resistance thermoplastic material.',
    'LL-5010': 'Suitable for installation (which is very simple to do) in false ceiling, with the body in die cast aluminium which gives to the product that look of tough and professional at the same time, the luminaire is pure efficiency',
    'LL-3017CH': 'A round recessed light housing made of durable white material with a black inner lining. It features two side wings, each equipped with three mounting holes for easy installation.',
    'LL-3027': 'Recessed spotlight with separate driver and LED chip, a design that prolongs the luminaire\'s working lifespan.',
    'LL-3028': 'A modern recessed LED spotlight featuring a sleek white circular trim and a deep reflector design.',
    'LL-3034': 'A range of recessed spotlights designed for low-voltage halogen sources, ideal for use in humid environments such as kitchens, bathrooms, saunas, showers, and exterior canopies.',
    'LL-S303': 'A range of recessed spot lights for low voltage LED light source offering a variety of decorative and architectural spot lights ideal for commercial offices, shopping complex, corridors they may be used on normally inflammable surfaces such as fabrics wall paper and wood. Die cast aluminium body with polyester powder coated LED lamp reflector. Adjustable fixing clips and suitable for ceiling clips remote type sheet steel or polycarbonate control gear box.',
    'LL-S304': 'Premium LED spot light designed for modern interiors. Features high-quality materials and excellent light distribution.',
    'LL-310-1': 'Versatile recessed spot light with adjustable angle. Perfect for accent lighting in residential and commercial spaces.',
    'LL-310-2-R': 'Round recessed spot light with premium finish. Ideal for modern architectural lighting solutions.',
    'LL-310-2-SQ': 'Square recessed spot light offering clean lines and contemporary design. Perfect for minimalist interiors.',
    'LL-310-SQ': 'Square format spot light with excellent light output and energy efficiency.',
    'LL-313': 'Compact recessed spot light suitable for tight spaces. Features high-quality LED technology.',
    'LL-212': 'Professional grade spot light with superior light quality and long lifespan.',
    'LL-222': 'Modern spot light design with advanced LED technology for optimal performance.',
    'LL-2230': 'Premium spot light solution with exceptional build quality and lighting performance.',
};

// Generate spotlight products
function generateSpotlightProducts() {
    const grid = document.getElementById('spotlightProductsGrid');
    if (!grid) {
        console.error('spotlightProductsGrid not found');
        return;
    }

    // Get spot-light products from productsData
    if (typeof productsData === 'undefined') {
        console.error('productsData is not defined');
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">Loading products data...</p>';
        return;
    }

    const spotLightProducts = productsData?.indoor?.['spot-light'] || [];
    
    if (spotLightProducts.length === 0) {
        console.warn('No spot-light products found');
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">No products available</p>';
        return;
    }

    console.log(`Generating ${spotLightProducts.length} spotlight products`);

    let html = '';
    let productCount = 0;
    
    spotLightProducts.forEach((product) => {
        if (!product || !product.name) {
            console.warn('Invalid product found:', product);
            return;
        }
        
        productCount++;
        const imgPath = `assets/Products Img/${product.img}`;
        const dataSheetPath = typeof getDataSheetPath === 'function' ? getDataSheetPath(product.name) : `assets/DATA-SHEETS/${product.name}.png`;
        const description = productDescriptions[product.name] || 'Premium spotlight solution designed for modern lighting applications.';
        
        html += `
            <div class="spotlight-product-card" 
                 data-product-name="${product.name}" 
                 data-product-datasheet="${dataSheetPath}" 
                 data-product-img="${product.img}"
                 data-product-desc="${description.replace(/"/g, '&quot;')}">
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
    setupSpotlightModal();
    
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
}

// Setup filters
function setupFilters() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const filterButtons = document.querySelectorAll('.filter-btn-small');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            document.querySelectorAll('.filter-item').forEach(item => {
                item.classList.remove('active');
            });
            // Add active to clicked
            link.closest('.filter-item').classList.add('active');
            // Filter logic can be added here
        });
    });
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from siblings
            btn.parentElement.querySelectorAll('.filter-btn-small').forEach(b => {
                b.classList.remove('active');
            });
            // Add active to clicked
            btn.classList.add('active');
            // Filter logic can be added here
        });
    });
}

// Setup sort dropdown
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortValue = e.target.value;
            const grid = document.getElementById('spotlightProductsGrid');
            const cards = Array.from(grid.querySelectorAll('.spotlight-product-card'));
            
            // Sort cards based on selected option
            cards.sort((a, b) => {
                const nameA = a.getAttribute('data-product-name');
                const nameB = b.getAttribute('data-product-name');
                
                switch(sortValue) {
                    case 'name-asc':
                        return nameA.localeCompare(nameB);
                    case 'name-desc':
                        return nameB.localeCompare(nameA);
                    case 'newest':
                        // Could add date attribute later
                        return 0;
                    default:
                        return 0;
                }
            });
            
            // Re-append sorted cards
            cards.forEach(card => grid.appendChild(card));
        });
    }
}

// Setup spotlight modal
function setupSpotlightModal() {
    const modal = document.getElementById('spotlightModal');
    const closeBtn = modal?.querySelector('.spotlight-modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    const productCards = document.querySelectorAll('.spotlight-product-card');
    
    if (!modal) return;

    // Close modal with slide-out animation
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

    // Open modal on product card click
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

                // Update modal content
                document.getElementById('spotlightModalTitle').textContent = productName;
                document.getElementById('spotlightModalDesc').textContent = productDesc || 'Premium spotlight solution designed for modern lighting applications.';
                const mainImg = document.getElementById('spotlightModalMainImage');
                if (mainImg) {
                    mainImg.src = `assets/Products Img/${productImg}`;
                    // Force mobile size on mobile devices
                    if (window.innerWidth <= 480) {
                        mainImg.style.width = '120px';
                        mainImg.style.height = '200px';
                        mainImg.style.maxWidth = '120px';
                        mainImg.style.maxHeight = '200px';
                        mainImg.style.margin = '0 auto 15px';
                        mainImg.style.display = 'block';
                        mainImg.style.objectFit = 'contain';
                    }
                }
                const pdfElement = document.getElementById('spotlightDownloadPdf');
                if (pdfElement) {
                    pdfElement.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openDataSheetModal(productDataSheet, productName);
                    };
                }

                // Find and add additional images
                const thumbnailGallery = document.getElementById('spotlightThumbnailGallery');
                thumbnailGallery.innerHTML = '';

                // Add base image as first thumbnail
                const baseThumbnail = document.createElement('img');
                baseThumbnail.src = `assets/Products Img/${productImg}`;
                baseThumbnail.alt = `${productName} - Main Image`;
                baseThumbnail.loading = 'lazy';
                baseThumbnail.className = 'active';
                baseThumbnail.addEventListener('click', () => {
                    document.getElementById('spotlightModalMainImage').src = `assets/Products Img/${productImg}`;
                    thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    baseThumbnail.classList.add('active');
                });
                baseThumbnail.addEventListener('error', () => {
                    baseThumbnail.style.display = 'none';
                });
                thumbnailGallery.appendChild(baseThumbnail);

                // Find additional images
                const imgBase = productImg.replace(/\.(png|jpg|jpeg|webp)$/i, '');
                const baseName = productName.replace(/[^a-zA-Z0-9-]/g, '');

                // Check for additional images (up to 10 variations)
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
                            // Image exists, add it to gallery
                            const existing = thumbnailGallery.querySelector(`img[src="assets/Products Img/${variation}"]`);
                            if (existing) return;

                            const thumbnail = document.createElement('img');
                            thumbnail.src = `assets/Products Img/${variation}`;
                            thumbnail.alt = `${productName} - Image ${i}`;
                            thumbnail.loading = 'lazy';
                            thumbnail.addEventListener('click', () => {
                                document.getElementById('spotlightModalMainImage').src = `assets/Products Img/${variation}`;
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
        if (typeof productsData !== 'undefined' && productsData?.indoor?.['spot-light']) {
            clearInterval(checkInterval);
            console.log('productsData loaded successfully');
            callback();
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.error('productsData not loaded after maximum attempts');
            const grid = document.getElementById('spotlightProductsGrid');
            if (grid) {
                grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 18px;">Error loading products. Please refresh the page.</p>';
            }
        } else {
            // Log progress every 10 attempts
            if (attempts % 10 === 0) {
                console.log(`Waiting for productsData... (attempt ${attempts}/${maxAttempts})`);
            }
        }
    }, 100);
}

// Check if device is mobile
const isMobileDevice = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Initialize animations
function initializeAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        setTimeout(initializeAnimations, 100);
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Kill any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const cards = document.querySelectorAll('.spotlight-product-card');
    if (cards.length === 0) {
        setTimeout(initializeAnimations, 200);
        return;
    }
    
    // Ensure cards are visible first to prevent layout shift
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'flex';
    });
    
    if (isMobileDevice()) {
        // On mobile: simple fade in only, no movement or scale
        gsap.from(cards, {
            opacity: 0,
            duration: 0.3,
            stagger: {
                amount: 0.2,
                from: 'start'
            },
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.spotlight-products-grid',
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    } else {
        // On desktop: full animation
        gsap.from(cards, {
            y: 30,
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
            stagger: {
                amount: 0.4,
                from: 'start'
            },
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.spotlight-products-grid',
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    }
}

// Main initialization function
function initializeSpotlightPage() {
    console.log('Initializing spotlight page...');
    
    // Show loading message
    const grid = document.getElementById('spotlightProductsGrid');
    if (grid) {
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 16px;">Loading products...</p>';
    }
    
    waitForProductsData(() => {
        console.log('productsData is ready, generating products...');
        generateSpotlightProducts();
        
        // Initialize animations after products are generated
        setTimeout(() => {
            initializeAnimations();
        }, 500);
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Content Loaded');
        initializeSpotlightPage();
    });
} else {
    console.log('DOM already loaded');
    initializeSpotlightPage();
}

// Re-initialize when page becomes visible (when returning from another page)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        console.log('Page became visible, checking products...');
        const grid = document.getElementById('spotlightProductsGrid');
        if (grid && (grid.children.length === 0 || grid.textContent.includes('Loading') || grid.textContent.includes('Error'))) {
            console.log('Re-initializing products...');
            initializeSpotlightPage();
        }
    }
});

// Also re-initialize on page focus (for browser back/forward)
window.addEventListener('pageshow', (event) => {
    console.log('Page show event', event.persisted);
    if (event.persisted) {
        initializeSpotlightPage();
    } else {
        // Also check if products are missing
        const grid = document.getElementById('spotlightProductsGrid');
        if (grid && (grid.children.length === 0 || grid.textContent.includes('Loading') || grid.textContent.includes('Error'))) {
            initializeSpotlightPage();
        }
    }
});

// Fallback: Try to initialize after a delay if products still not loaded
setTimeout(() => {
    const grid = document.getElementById('spotlightProductsGrid');
    if (grid && (grid.children.length === 0 || grid.textContent.includes('Loading'))) {
        console.log('Fallback: Re-initializing after delay...');
        initializeSpotlightPage();
    }
}, 2000);

// Open Data Sheet Modal
function openDataSheetModal(dataSheetPath, productName) {
    const modal = document.getElementById('dataSheetModal');
    const modalImage = document.getElementById('datasheetModalImage');
    const closeBtn = modal?.querySelector('.datasheet-modal-close');
    const overlay = modal?.querySelector('.datasheet-modal-overlay');
    
    if (!modal || !modalImage) {
        console.error('Data Sheet Modal not found');
        return;
    }
    
    // Clear previous image and handlers
    modalImage.src = '';
    modalImage.onload = null;
    modalImage.onerror = null;
    
    // Close function
    function closeModal() {
        modal.classList.remove('active');
        // Clear image after closing
        setTimeout(() => {
            modalImage.src = '';
            modalImage.onload = null;
            modalImage.onerror = null;
        }, 300);
    }
    
    // Set up close handlers
    if (closeBtn) {
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            closeModal();
        };
    }
    if (overlay) {
        overlay.onclick = (e) => {
            e.stopPropagation();
            closeModal();
        };
    }
    
    // Close on ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // Load image
    modalImage.onload = () => {
        modal.classList.add('active');
    };
    
    modalImage.onerror = () => {
        console.error('Failed to load data sheet:', dataSheetPath);
        modalImage.alt = 'Data Sheet not found';
        modal.classList.add('active');
    };
    
    // Set image source
    modalImage.src = dataSheetPath;
    modalImage.alt = `Data Sheet - ${productName}`;
}
