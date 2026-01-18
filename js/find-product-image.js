// Auto-find product images based on name similarity
// This function finds images that match product names even if prefixes differ
// e.g., LL-2000 matches BL-2000, FD-2000, etc.

// Cache for available image files (populated once)
let availableImagesCache = null;
let availableDataSheetsCache = null;

// Initialize image cache
async function initializeImageCache() {
    if (availableImagesCache && availableDataSheetsCache) {
        return; // Already initialized
    }
    
    availableImagesCache = [];
    availableDataSheetsCache = [];
    
    // Note: In a real environment, you would fetch this from the server
    // For now, we'll use a fallback approach that checks images on-demand
    console.log('Image cache initialized (will check on-demand)');
}

// Extract numeric part and prefix from product name
function parseProductName(productName) {
    // Extract numbers (e.g., "2000" from "LL-2000" or "BL-2000")
    const numbers = productName.match(/\d+/g);
    const numericPart = numbers ? numbers.join('') : '';
    
    // Extract prefix (e.g., "LL" from "LL-2000")
    const prefixMatch = productName.match(/^([A-Z]+)-?/);
    const prefix = prefixMatch ? prefixMatch[1] : '';
    
    // Extract suffix (e.g., "-R", "-S", "-SQ")
    const suffixMatch = productName.match(/-([A-Z0-9]+)$/);
    const suffix = suffixMatch ? suffixMatch[1] : '';
    
    return {
        fullName: productName,
        numericPart: numericPart,
        prefix: prefix,
        suffix: suffix,
        baseName: numericPart ? `${prefix}-${numericPart}` : productName
    };
}

// Find matching image file for a product
async function findProductImage(productName, currentImg = null) {
    await initializeImageCache();
    
    const parsed = parseProductName(productName);
    
    // If current image exists, use it
    if (currentImg) {
        const img = new Image();
        return new Promise((resolve) => {
            img.onload = () => resolve(currentImg);
            img.onerror = () => {
                // Current image doesn't exist, try to find alternative
                findMatchingImage(parsed).then(resolve);
            };
            img.src = `assets/Products Img/${currentImg}`;
        });
    }
    
    // Try to find matching image
    return findMatchingImage(parsed);
}

// Find matching image based on parsed name
async function findMatchingImage(parsed) {
    const { numericPart, prefix, suffix, fullName } = parsed;
    
    // Common prefixes to try
    const prefixes = ['LL', 'BL', 'FD', 'SL', 'ML', 'PL', 'HB', 'T5', 'T8'];
    
    // Try exact match first
    const exactMatch = `${fullName}.png`;
    if (await checkImageExists(exactMatch)) {
        return exactMatch;
    }
    
    // Try with different prefixes but same number
    if (numericPart) {
        for (const testPrefix of prefixes) {
            const variations = [
                `${testPrefix}-${numericPart}.png`,
                `${testPrefix}-${numericPart}${suffix ? '-' + suffix : ''}.png`,
                `${testPrefix}${numericPart}.png`,
                `${testPrefix}_${numericPart}.png`,
            ];
            
            for (const variation of variations) {
                if (await checkImageExists(variation)) {
                    return variation;
                }
            }
        }
    }
    
    // Try variations without prefix
    if (numericPart) {
        const variations = [
            `${numericPart}.png`,
            `${numericPart}${suffix ? '-' + suffix : ''}.png`,
        ];
        
        for (const variation of variations) {
            if (await checkImageExists(variation)) {
                return variation;
            }
        }
    }
    
    // Try removing suffix
    if (suffix) {
        const withoutSuffix = fullName.replace(`-${suffix}`, '');
        if (await checkImageExists(`${withoutSuffix}.png`)) {
            return `${withoutSuffix}.png`;
        }
    }
    
    // Fallback: return original name
    return `${fullName}.png`;
}

// Check if image exists
function checkImageExists(filename) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = `assets/Products Img/${filename}`;
        // Timeout after 2 seconds
        setTimeout(() => resolve(false), 2000);
    });
}

// Find matching data sheet for a product
async function findProductDataSheet(productName) {
    await initializeImageCache();
    
    const parsed = parseProductName(productName);
    const { numericPart, prefix, suffix, fullName } = parsed;
    
    // Try exact match first
    const exactMatch = `${fullName}.png`;
    if (await checkDataSheetExists(exactMatch)) {
        return `assets/DATA-SHEETS/${exactMatch}`;
    }
    
    // Try with different prefixes but same number
    if (numericPart) {
        const prefixes = ['LL', 'BL', 'FD', 'SL', 'ML', 'PL', 'HB', 'T5', 'T8'];
        
        for (const testPrefix of prefixes) {
            const variations = [
                `${testPrefix}-${numericPart}.png`,
                `${testPrefix}-${numericPart}${suffix ? '-' + suffix : ''}.png`,
                `${testPrefix}${numericPart}.png`,
            ];
            
            for (const variation of variations) {
                if (await checkDataSheetExists(variation)) {
                    return `assets/DATA-SHEETS/${variation}`;
                }
            }
        }
    }
    
    // Fallback: use getDataSheetPath if available
    if (typeof getDataSheetPath === 'function') {
        return getDataSheetPath(productName);
    }
    
    // Final fallback
    return `assets/DATA-SHEETS/${fullName}.png`;
}

// Check if data sheet exists
function checkDataSheetExists(filename) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = `assets/DATA-SHEETS/${filename}`;
        // Timeout after 2 seconds
        setTimeout(() => resolve(false), 2000);
    });
}

// Auto-update product images on page load
async function autoUpdateProductImages() {
    const productCards = document.querySelectorAll('.spotlight-product-card, .product-card');
    
    for (const card of productCards) {
        const productName = card.getAttribute('data-product-name');
        const currentImg = card.getAttribute('data-product-img');
        const imgElement = card.querySelector('img');
        
        if (!productName || !imgElement) continue;
        
        // Find matching image
        const foundImg = await findProductImage(productName, currentImg);
        
        if (foundImg && foundImg !== currentImg) {
            // Update image
            card.setAttribute('data-product-img', foundImg);
            imgElement.src = `assets/Products Img/${foundImg}`;
            console.log(`Updated image for ${productName}: ${currentImg} -> ${foundImg}`);
        }
        
        // Find matching data sheet
        const foundDataSheet = await findProductDataSheet(productName);
        if (foundDataSheet) {
            card.setAttribute('data-product-datasheet', foundDataSheet);
        }
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        findProductImage,
        findProductDataSheet,
        autoUpdateProductImages,
        parseProductName
    };
}
