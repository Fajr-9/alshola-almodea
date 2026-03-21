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

// Fallback descriptions when a product has no `description` in productsData
const productDescriptions = {
    'LL-3012': 'A range of recessed spot lights for low voltage LED light source offering a variety of decorative and architectural spot lights ideal for commercial offices, shopping complex, corridors they may be used on normally inflammable surfaces such as fabrics wall paper and wood. Die cast aluminium body with polyester powder coated LED lamp reflector. Adjustable fixing clips and suitable for ceiling clips remote type sheet steel or polycarbonate control gear box.'
};

function productNameNumericKey(name) {
    const parts = String(name).match(/\d+/g);
    if (!parts || parts.length === 0) return [0];
    return parts.map((s) => parseInt(s, 10));
}

function compareProductNameStrings(nameA, nameB) {
    const ka = productNameNumericKey(nameA);
    const kb = productNameNumericKey(nameB);
    const len = Math.max(ka.length, kb.length);
    for (let i = 0; i < len; i++) {
        const va = ka[i] ?? 0;
        const vb = kb[i] ?? 0;
        if (va !== vb) return va - vb;
    }
    return String(nameA).localeCompare(String(nameB));
}

function compareProductsByNumericName(a, b) {
    return compareProductNameStrings(a?.name ?? '', b?.name ?? '');
}

// Initialize product page
function initializeProductPage(config) {
    productPageConfig = { ...productPageConfig, ...config };

    const grid = document.getElementById(productPageConfig.gridId);
    if (grid) {
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 16px;">Loading products...</p>';
    }
    
    waitForProductsData(() => {
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

    const products = [...(categoryData[productPageConfig.type] || [])].sort(compareProductsByNumericName);
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px;">No products available</p>';
        return;
    }

    let html = '';
    let productCount = 0;
    
    products.forEach((product) => {
        if (!product || !product.name) {
            return;
        }
        
        productCount++;
        const imgPath = `assets/Products Img/${product.img}`;
        const dataSheetPath = typeof getDataSheetPath === 'function' ? getDataSheetPath(product.name) : `assets/DATA-SHEETS/${product.name}.png`;
        const description = product.description || productDescriptions[product.name] || `Premium ${productPageConfig.pageTitle.toLowerCase()} solution designed for modern lighting applications.`;
        const gallery = typeof buildCardGalleryData === 'function'
            ? buildCardGalleryData(productPageConfig.category, productPageConfig.type, product)
            : { leadThumbnails: product.leadThumbnails || [], thumbnails: product.thumbnails || [] };
        const thumbnails = gallery.thumbnails;
        const leadThumbnails = gallery.leadThumbnails;
        
        // Get product title from mapping (for modal only)
        const productTitle = (typeof getProductTitle === 'function') ? getProductTitle(product.name) : null;
        
        const leadB64Attr =
            leadThumbnails.length > 0 && typeof encodeGalleryPathsForDataAttr === 'function'
                ? ` data-lead-thumbnails-b64="${encodeGalleryPathsForDataAttr(leadThumbnails)}"`
                : '';
        const thumbB64Attr =
            thumbnails.length > 0 && typeof encodeGalleryPathsForDataAttr === 'function'
                ? ` data-thumbnails-b64="${encodeGalleryPathsForDataAttr(thumbnails)}"`
                : '';
        html += `
            <div class="spotlight-product-card" 
                 data-category="${productPageConfig.category}"
                 data-type="${productPageConfig.type}"
                 data-product-name="${product.name}" 
                 data-product-title="${productTitle ? productTitle.replace(/"/g, '&quot;') : ''}"
                 data-product-datasheet="${dataSheetPath}" 
                 data-product-img="${product.img}"
                 data-product-desc="${description.replace(/"/g, '&quot;')}"
                 ${leadB64Attr}
                 ${thumbB64Attr}>
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

    if (typeof setupProductGridSearch === 'function') {
        setupProductGridSearch(productPageConfig.gridId);
    }
}

// Update product count
function updateProductCount(count) {
    const countElement = document.getElementById('productCount');
    if (countElement) {
        countElement.textContent = count;
    }
    const grid = document.getElementById(productPageConfig.gridId);
    if (grid) {
        grid.dataset.totalProductCount = String(count);
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
                    case 'number-asc':
                        return compareProductNameStrings(nameA, nameB);
                    case 'name-asc':
                        return nameA.localeCompare(nameB);
                    case 'name-desc':
                        return nameB.localeCompare(nameA);
                    case 'newest':
                        return 0;
                    default:
                        return compareProductNameStrings(nameA, nameB);
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
        const modalOverlay = modal.querySelector('.modal-overlay');
        
        document.body.classList.remove('modal-open');
        modal.classList.remove('active');
        
        if (typeof gsap !== 'undefined') {
            gsap.to(modalContent, {
                x: '100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            });
            
            gsap.to(modalOverlay, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    modal.style.display = 'none';
                    modal.style.visibility = 'hidden';
                }
            });
        } else {
            // Fallback without GSAP
            modal.style.display = 'none';
            modal.style.visibility = 'hidden';
            if (modalContent) {
                modalContent.style.transform = 'translateX(100%)';
                modalContent.style.opacity = '0';
            }
            if (modalOverlay) {
                modalOverlay.style.opacity = '0';
            }
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
        closeBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            closeModal();
        }, { passive: false });
    }
    if (overlay) {
        overlay.addEventListener('click', closeModal);
        overlay.addEventListener('touchend', (e) => {
            e.preventDefault();
            closeModal();
        }, { passive: false });
    }

    productCards.forEach(card => {
        const button = card.querySelector('.open-spotlight-modal');
        if (button) {
            // Handler function for both click and touch
            const handleOpen = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const productName = card.getAttribute('data-product-name');
                const productDataSheet = card.getAttribute('data-product-datasheet') || (typeof getDataSheetPath === 'function' ? getDataSheetPath(productName) : `assets/DATA-SHEETS/${productName}.png`);
                const productImg = card.getAttribute('data-product-img');
                const productDesc = card.getAttribute('data-product-desc');
                const mergedGallery =
                    typeof mergeGalleryFromProductCard === 'function'
                        ? mergeGalleryFromProductCard(card, productName, productImg)
                        : { leadThumbnails: [], thumbnails: [] };
                let leadThumbnails = mergedGallery.leadThumbnails;
                let thumbnails = mergedGallery.thumbnails;

                // Update modal content
                const titleElement = document.getElementById('spotlightModalTitle');
                const descElement = document.getElementById('spotlightModalDesc');
                const imgElement = document.getElementById('spotlightModalMainImage');
                const pdfElement = document.getElementById('spotlightDownloadPdf');
                
                // Get product title from mapping or data attribute
                const productTitle = card.getAttribute('data-product-title') || 
                                   (typeof getProductTitle === 'function' ? getProductTitle(productName) : null) ||
                                   productName;
                const displayTitle = productTitle || productName;

                if (titleElement) titleElement.innerHTML = displayTitle;
                if (descElement) {
                    let descText = productDesc || `Premium ${productPageConfig.pageTitle.toLowerCase()} solution designed for modern lighting applications.`;
                    // Add attribution to Luna-Luce.eu
                    descText += '<br><br><small style="color: #666; font-style: italic;">Product from <a href="https://luna-luce.eu" target="_blank" rel="noopener" style="color: #B22A1F; text-decoration: underline;">Luna-Luce.eu</a></small>';
                    descElement.innerHTML = descText;
                }
                if (imgElement) {
                    imgElement.src =
                        typeof productAssetImgUrl === 'function'
                            ? productAssetImgUrl(productImg)
                            : `assets/Products Img/${productImg}`;
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
                    const openDataSheet = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openDataSheetModal(productDataSheet, productName);
                    };
                    pdfElement.onclick = openDataSheet;
                    pdfElement.ontouchend = openDataSheet;
                }

                // Setup thumbnail gallery
                const thumbnailGallery = document.getElementById('spotlightThumbnailGallery');
                if (thumbnailGallery) {
                    thumbnailGallery.innerHTML = '';

                    const seenPaths = new Set();
                    const toImgSrc = (rel) =>
                        typeof productAssetImgUrl === 'function'
                            ? productAssetImgUrl(rel)
                            : `assets/Products Img/${rel}`;
                    const addGalleryThumb = (relPath, isActive) => {
                        if (!relPath || seenPaths.has(relPath)) return;
                        seenPaths.add(relPath);
                        const thumbnail = document.createElement('img');
                        thumbnail.src = toImgSrc(relPath);
                        thumbnail.alt = `${productName} - ${isActive ? 'Main' : 'Image'}`;
                        thumbnail.loading = 'eager';
                        thumbnail.decoding = 'async';
                        if (isActive) thumbnail.classList.add('active');
                        thumbnail.addEventListener('click', () => {
                            if (imgElement) imgElement.src = toImgSrc(relPath);
                            thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                            thumbnail.classList.add('active');
                        });
                        thumbnail.addEventListener('error', () => {
                            thumbnail.style.display = 'none';
                        });
                        thumbnailGallery.appendChild(thumbnail);
                    };

                    const hasExplicitGallery = leadThumbnails.length > 0 || thumbnails.length > 0;

                    if (hasExplicitGallery) {
                        leadThumbnails.forEach((thumb) => addGalleryThumb(thumb, false));
                        addGalleryThumb(productImg, true);
                        thumbnails.forEach((thumb) => {
                            if (thumb === productImg) return;
                            addGalleryThumb(thumb, false);
                        });
                    } else {
                        addGalleryThumb(productImg, true);
                    }

                    for (let i = 1; i <= 10; i++) {
                        const variations =
                            typeof buildGalleryProbePaths === 'function'
                                ? buildGalleryProbePaths(productImg, productName, i)
                                : [];
                        variations.forEach((variation) => {
                            if (!variation || variation === productImg || seenPaths.has(variation)) return;
                            const probe = new Image();
                            probe.onload = function () {
                                if (seenPaths.has(variation)) return;
                                addGalleryThumb(variation, false);
                            };
                            probe.src = toImgSrc(variation);
                        });
                    }
                }

                // Show modal with slide-in animation
                document.body.classList.add('modal-open');
                modal.classList.add('active');
                modal.style.display = 'flex';
                modal.style.visibility = 'visible';
                modal.style.opacity = '1';
                const modalContent = modal.querySelector('.spotlight-modal-content');
                const modalOverlay = modal.querySelector('.modal-overlay');
                
                // Ensure modal is visible immediately as fallback
                if (modalOverlay) {
                    modalOverlay.style.opacity = '1';
                }
                if (modalContent) {
                    modalContent.style.opacity = '1';
                    modalContent.style.transform = 'translateX(0)';
                }
                
                // Add GSAP animation if available
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(modalOverlay,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.4 }
                    );
                    
                    gsap.fromTo(modalContent,
                        { x: '100%', opacity: 0 },
                        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
                    );
                }
            };
            
            // Add both click and touch event listeners for mobile support
            // Add click event listener (works for both desktop and mobile)
            let isProcessing = false;
            const safeOpen = (e) => {
                if (isProcessing) return;
                isProcessing = true;
                handleOpen(e);
                setTimeout(() => { isProcessing = false; }, 500);
            };
            
            button.addEventListener('click', safeOpen);
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                safeOpen(e);
            }, { passive: false });
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
            callback();
        } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            console.error('productsData not loaded after maximum attempts');
            const grid = document.getElementById(productPageConfig.gridId);
            if (grid) {
                grid.innerHTML = '<p style="color: #fff; text-align: center; grid-column: 1 / -1; padding: 40px; font-size: 18px;">Error loading products. Please refresh the page.</p>';
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
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const cards = document.querySelectorAll('.spotlight-product-card');
    if (cards.length === 0) {
        setTimeout(initializeAnimations, 200);
        return;
    }
    
    // Set cards visible immediately to prevent layout shift
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
                trigger: `.${productPageConfig.gridId.replace('#', '')}`,
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
                trigger: `.${productPageConfig.gridId.replace('#', '')}`,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    }
}

// Setup header scroll behavior - Optimized for mobile performance
function setupHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let scrollTimeout;
    let isScrolling = false;

    function updateHeader() {
        if (!header) return;
        
        const currentScroll = window.pageYOffset || window.scrollY;
        const heroSection = document.querySelector('.spot-hero');
        
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            
            if (currentScroll > heroHeight - 50) {
                if (!header.classList.contains('scrolled')) {
                    header.classList.add('scrolled');
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            } else {
                if (header.classList.contains('scrolled')) {
                    header.classList.remove('scrolled');
                    header.style.backgroundColor = 'transparent';
                    header.style.backdropFilter = 'none';
                    header.style.boxShadow = 'none';
                }
            }
        }
    }

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(updateHeader);
            isScrolling = true;
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    }, { passive: true });
}

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
    
    // Close function
    function closeModal() {
        modal.classList.remove('active');
        modal.style.display = 'none';
        const pdfEl = document.getElementById('datasheetModalPdf');
        if (pdfEl) {
            pdfEl.removeAttribute('src');
            pdfEl.style.display = 'none';
        }
        if (modalImage) {
            modalImage.style.display = 'block';
            modalImage.removeAttribute('src');
        }
    }
    
    // Set up close handlers with touch support
    if (closeBtn) {
        closeBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        };
        closeBtn.ontouchend = (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        };
    }
    if (overlay) {
        overlay.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        };
        overlay.ontouchend = (e) => {
            e.preventDefault();
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
    
    // Show modal immediately
    modal.style.display = 'flex';
    modal.classList.add('active');

    const modalBody = modalImage.parentElement;
    let modalPdf = document.getElementById('datasheetModalPdf');
    if (!modalPdf && modalBody) {
        modalPdf = document.createElement('iframe');
        modalPdf.id = 'datasheetModalPdf';
        modalPdf.className = 'datasheet-iframe';
        modalPdf.title = 'Data Sheet';
        modalBody.appendChild(modalPdf);
    }

    const srcEnc = encodeURI(dataSheetPath).replace(/#/g, '%23');
    const isPdf = /\.pdf($|\?)/i.test(dataSheetPath);

    if (isPdf && modalPdf) {
        modalImage.style.display = 'none';
        modalImage.removeAttribute('src');
        modalPdf.style.display = 'block';
        modalPdf.src = srcEnc;
    } else {
        if (modalPdf) {
            modalPdf.style.display = 'none';
            modalPdf.removeAttribute('src');
        }
        modalImage.style.display = 'block';
        modalImage.src = srcEnc;
        modalImage.alt = `Data Sheet - ${productName}`;
        modalImage.onerror = () => {
            console.error('Failed to load data sheet:', dataSheetPath);
            modalImage.alt = 'Data Sheet not found';
        };
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupHeaderScroll();
    });
} else {
    setupHeaderScroll();
}

