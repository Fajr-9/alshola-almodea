// Function to get data sheet path based on product name
function getDataSheetPath(productName) {
    // Special mappings for products with different naming conventions
    const mappings = {
        // LL-310 series
        'LL-310-1': 'LL-310-1.png',
        'LL-310-1-SQ': 'LL-310-1.png',
        'LL-310-2-R': 'LL-310-2.png',
        'LL-310-2-SQ': 'LL-310-2-SQ.png',
        'LL-310-3-R': 'LL-310-3.png',
        'LL-310-3-SQ': 'LL-310-3-SQ.png',
        // Flood lights
        'FD-LL-4401': 'FD-LL-4401.png',
        'FD-LL-4402': 'FD-LL-4402.png',
        'FD-LL-4407': 'FD-LL-4407.png',
        'FD-LL-4408': 'FD-LL-4408.png',
        'BL-LL-4407': 'FD-LL-4407.png',
        'BL-LL-4408': 'FD-LL-4408.png',
        // High bay lights
        'LL-8001': 'HB-LL-8001.png',
        'LL-8002': 'HB-LL-8002.png',
        'LL-8003': 'HB-LL-8003.png',
        // Down lights
        'LL-4002-R': 'LL-4002-RD.png',
        'LL-4003': 'LL-4003-R.png',
        // Spot lights with special prefixes
        'LL-3017CH': 'SL-LL-3017CH.png',
        'LL-3019': 'SL-LL-3019.png',
        'LL-3033': 'SL-LL-3033.png',
        'LL-5010': 'SL-LL-5010.png',
        // Mirror lights
        'LL-4612': 'LL-ML-4612.png',
        'LL-5512': 'ML-LL-5512.png',
        'LL-S303': 'ML-S303.png',
        // Pendant lights
        'LL-4586-3': 'LL-PL-4586.png',
        'LL-4597-3': 'LL-PL-4597.png',
        // T5 tubes
        'LL-5001': 'T5-LL-5004.png',
        // Special cases
        'LL-3021': 'LL-3021-R-10W.png',
        'LL-3043': 'LL-3043-R.png',
        'LL-3061': 'LL-3061-R.png',
        'LL-692': 'LL692.pdf', // Note: This might be PDF, but we'll try PNG first
    };
    
    // Check special mappings first
    if (mappings[productName]) {
        return `assets/DATA-SHEETS/${mappings[productName]}`;
    }
    
    // Try exact match
    const exactMatch = `assets/DATA-SHEETS/${productName}.png`;
    
    // Try variations (remove suffixes like -R, -S, -SQ, etc.)
    const variations = [
        productName,
        productName.replace(/-R$/, ''),
        productName.replace(/-S$/, ''),
        productName.replace(/-SQ$/, ''),
        productName.replace(/-1$/, ''),
        productName.replace(/-2$/, ''),
        productName.replace(/-3$/, ''),
    ];
    
    // Return the most likely match (exact match first)
    return exactMatch;
}

// Products Data - Classified by Type (Based on luna-luce.eu)
const productsData = {
    indoor: {
        'spot-light': [
            { name: 'LL-3012', img: 'LL-3012 3.png', pdf: 'LL-3012.pdf' },
            { name: 'LL-3013', img: 'LL-3013 1.png', pdf: 'LL-3013.pdf' },
            { name: 'LL-3021', img: 'DLU44.png', pdf: 'LL-3021.pdf' },
            { name: 'LL-3022-BK', img: 'LL-3022-BK.png', pdf: 'LL-3022-BK.pdf' },
            { name: 'LL-3019', img: 'LL-3019.png', pdf: 'LL-3019.pdf' },
            { name: 'LL-3032-S', img: 'LL-3032-S.png', pdf: 'LL-3032-S.pdf' },
            { name: 'LL-3032-R', img: 'LL-3032 3.png', pdf: 'LL-3032-R.pdf' },
            { name: 'LL-3031', img: 'LL-3031 2.png', pdf: 'LL-3031.pdf' },
            { name: 'LL-3043', img: 'LL-3043.png', pdf: 'LL-3043.pdf' },
            { name: 'LL-3061', img: 'LL-3061.png', pdf: 'LL-3061.pdf' },
            { name: 'LL-3016', img: 'LL-3016.png', pdf: 'LL-3016.pdf' },
            { name: 'LL-3017', img: 'LL-3017.png', pdf: 'LL-3017.pdf' },
            { name: 'LL-3018', img: 'LL-3018.png', pdf: 'LL-3018.pdf' },
            { name: 'LL-3003', img: 'SL-LL-3003.png', pdf: 'LL-3003.pdf' },
            { name: 'LL-2003', img: 'SL-LL-2003.png', pdf: 'LL-2003.pdf' },
            { name: 'LL-3009', img: 'LL-3009.png', pdf: 'LL-3009.pdf' },
            { name: 'LL-3033', img: 'LL-3033.png', pdf: 'LL-3033.pdf' },
            { name: 'LL-5010', img: 'LL-5010.png', pdf: 'LL-5010.pdf' },
            { name: 'LL-3017CH', img: 'LL-3017CH.png', pdf: 'LL-3017CH.pdf' },
            { name: 'LL-3027', img: 'LL-3027.png', pdf: 'LL-3027.pdf' },
            { name: 'LL-3028', img: 'LL-3028.png', pdf: 'LL-3028.pdf' },
            { name: 'LL-3034', img: 'LL-3034.png', pdf: 'LL-3034.pdf' },
        ],
        'down-light': [
            { name: 'LL-4001-R', img: 'LL-4001-R-12-15-18W.png', pdf: 'LL-4001-R.pdf' },
            { name: 'LL-4001-S', img: 'LL-4001-S-9-18-24W.png', pdf: 'LL-4001-S.pdf' },
            { name: 'LL-4002-R', img: 'LL-4002-R-8-12-18-24W.png', pdf: 'LL-4002-R.pdf' },
            { name: 'LL-2000', img: 'LL-2000.png', pdf: 'LL-2000.pdf' },
            { name: 'LL-4201-R', img: 'LL-4201-R-40W.png', pdf: 'LL-4201-R.pdf' },
            { name: 'LL-2020', img: 'LL-2020.png', pdf: 'LL-2020.pdf' },
            { name: 'LL-4302', img: 'LL-4302-12-18-25-40W.png', pdf: 'LL-4302.pdf' },
            { name: 'LL-3024', img: 'LL-3024.png', pdf: 'LL-3024.pdf' },
            { name: 'LL-3081', img: 'LL-3081.png', pdf: 'LL-3081.pdf' },
            { name: 'LL-4003-WH', img: 'LL-4003-WH.png', pdf: 'LL-4003.pdf' },
        ],
        'lamps-tubes': [
            { name: 'T8', img: 'T8.png', pdf: 'T8.pdf' },
            { name: 'LL-MR16', img: 'LL-MR.png', pdf: 'LL-MR16.pdf' },
            { name: 'LL-GU', img: 'LL-GU.png', pdf: 'LL-GU10.pdf' },
            { name: 'LL-E14', img: 'LL-E14.png', pdf: 'LL-E14.pdf' },
            { name: 'T5', img: 'T5.png', pdf: 'T5.pdf' },
            { name: 'LL-E27', img: 'LL-E27.png', pdf: 'LL-E27.pdf' },
        ],
        'strip-light': [
            { name: 'LL-5013', img: 'LL-5013.png', pdf: 'LL-5013.pdf' },
            { name: 'LL-6010', img: 'LL-6010.png', pdf: 'LL-6010.pdf' },
            { name: 'LL-6012-RGB', img: 'LL-6012-RGB.png', pdf: 'LL-6012-RGB.pdf' },
            { name: 'LL-6002', img: 'LL-6002.png', pdf: 'LL-6002.pdf' },
            { name: 'LL-6014', img: 'LL-6014.png', pdf: 'LL-6014.pdf' },
            { name: 'ALP-REC', img: 'ALP-REC.png', pdf: 'ALP-REC.pdf' },
            { name: 'ALP-SUR', img: 'ALP-SUR.png', pdf: 'ALP-SUR.pdf' },
            { name: 'LL-6020', img: 'LL-6020.png', pdf: 'LL-6020.pdf' },
            { name: 'LL-6005', img: 'LL-6005.png', pdf: 'LL-6005.pdf' },
        ],
        'mirror-light': [
            { name: 'LL-S304', img: 'LL-S304.png', pdf: 'LL-S304.pdf' },
            { name: 'LL-4612', img: 'LL-4612.png', pdf: 'LL-4612.pdf' },
            { name: 'LL-5512', img: 'LL-5512.png', pdf: 'LL-5512.pdf' },
            { name: 'LL-S303', img: 'LL-S303.png', pdf: 'LL-S303.pdf' },
        ],
        'track-light': [
            { name: 'LL-5210', img: 'LL-5210.png', pdf: 'LL-5210.pdf' },
            { name: 'LL-5211', img: 'LL-5211.png', pdf: 'LL-5211.pdf' },
            { name: 'LL-5310', img: 'LL-5310.png', pdf: 'LL-5310.pdf' },
            { name: 'LL-5311', img: 'LL-5311.png', pdf: 'LL-5311.pdf' },
            { name: 'LL-5410', img: 'LL-5410.png', pdf: 'LL-5410.pdf' },
            { name: 'LL-0102-S', img: 'LL-0102-S.png', pdf: 'LL-0102-S.pdf' },
            { name: 'LL-0102', img: 'LL-0102.png', pdf: 'LL-0102.pdf' },
            { name: 'LL-5001', img: 'LL-5001.png', pdf: 'LL-5001.pdf' },
        ],
        'chandelier-pendant': [
            { name: 'LL-310-1-SQ', img: 'LL-310-1-SQ.png', pdf: 'LL-310-1.pdf' },
            { name: 'LL-310-2-SQ', img: 'LL-310-2-SQ.png', pdf: 'LL-310-2-SQ.pdf' },
            { name: 'LL-310-3-SQ', img: 'LL-310-3-SQ.png', pdf: 'LL-310-3-SQ.pdf' },
            { name: 'LL-2022', img: 'LL-2022.png', pdf: 'LL-2022.pdf' },
            { name: 'LL-310-1', img: 'LL-310-1.png', pdf: 'LL-310-1.pdf' },
            { name: 'LL-310-2-R', img: 'LL-310-2-R.png', pdf: 'LL-310-2-R.pdf' },
            { name: 'LL-310-3-R', img: 'LL-310-3-R.png', pdf: 'LL-310-3.pdf' },
            { name: 'LL-313', img: 'LL-313.png', pdf: 'LL-313.pdf' },
            { name: 'LL-4637', img: 'LL-4637.png', pdf: 'LL-4637.pdf' },
            { name: 'LL-4609', img: 'LL-4609.png', pdf: 'PL-4609.pdf' },
            { name: 'LL-4636', img: 'LL-4636.png', pdf: 'LL-4636.pdf' },
            { name: 'LL-5565', img: 'LL-5565.png', pdf: 'LL-5565.pdf' },
            { name: 'LL-4586-3', img: 'LL-4586-3.png', pdf: 'LL-PL-4586.pdf' },
            { name: 'LL-4596-3', img: 'LL-4596-3.png', pdf: 'LL-4596-3.pdf' },
            { name: 'LL-4597-3', img: 'LL-4597-3.png', pdf: 'LL-PL-4597.pdf' },
        ],
    },
    outdoor: {
        'industrial-light': [
            { name: 'LL-212', img: 'LL-212.png', pdf: 'LL-212.pdf' },
            { name: 'LL-222', img: 'LL-222.png', pdf: 'LL-222.pdf' },
            { name: 'LL-8001', img: 'LL-8001.png', pdf: 'LL-8001.pdf' },
            { name: 'LL-8002', img: 'LL-8002.png', pdf: 'LL-8002.pdf' },
            { name: 'LL-8003', img: 'LL-8003.png', pdf: 'LL-8003.pdf' },
            { name: 'LL-BT-22', img: 'LL-BT-22.png', pdf: 'LL-BT-22.pdf' },
        ],
        'external-light': [
            { name: 'LL-4503', img: 'LL-4503.png', pdf: 'LL-4503.pdf' },
            { name: 'LL-4506', img: 'LL-4506.png', pdf: 'LL-4506.pdf' },
            { name: 'LL-4581-R', img: 'LL-4581-R,1.png', pdf: 'LL-4581-R.pdf' },
            { name: 'LL-4581-S', img: 'LL-4581-S.png', pdf: 'LL-4581-S.pdf' },
            { name: 'LL-4582-R', img: 'LL-4582-R.png', pdf: 'LL-4582-R.pdf' },
            { name: 'LL-544', img: 'LL-544.png', pdf: 'LL-544.pdf' },
            { name: 'LL-663', img: 'LL-663.webp', pdf: 'LL-663.pdf' },
            { name: 'LL-690', img: 'LL-690.png', pdf: 'LL-690.pdf' },
            { name: 'LL-692', img: 'LL-692.png', pdf: 'LL692.pdf' },
            { name: 'LL-1621', img: 'LL-1621.png', pdf: 'LL-1621.pdf' },
            { name: 'LL-4582-S', img: 'LL-4582-S.png', pdf: 'LL-4582-S.pdf' },
            { name: 'LL-4583-1', img: 'LL-4583-1.png', pdf: 'LL-4583-1.pdf' },
            { name: 'LL-4583-2', img: 'LL-4583-2.png', pdf: 'LL-4583-2.pdf' },
            { name: 'LL-4584-1', img: 'LL-4584-1,1.png', pdf: '4584-1.pdf' },
            { name: 'LL-4584-2', img: 'LL-4584-2.png', pdf: 'LL-4584-2.pdf' },
            { name: 'LL-555', img: 'LL-555.png', pdf: 'LL-555.pdf' },
            { name: 'LL-4507', img: 'LL-4507.png', pdf: 'LL-4507.pdf' },
            { name: 'LL-4585', img: 'LL-4585.png', pdf: 'LL-4585.pdf' },
            { name: 'LL-4489', img: 'LL-4489.png', pdf: 'LL-4489.pdf' },
            { name: 'LL-693', img: 'LL-693.png', pdf: 'LL-693.pdf' },
            { name: 'LL-4512', img: 'LL-4512.png', pdf: 'LL-4512.pdf' },
        ],
        'pole-bollard-light': [
            { name: 'LL-4407', img: 'BL-LL-4407.png', pdf: 'LL-4407.pdf' },
            { name: 'BL-LL-4408', img: 'BL-LL-4408.png', pdf: 'LL-4408.pdf' },
            { name: 'LL-4400', img: 'LL-4400.png', pdf: 'LL-4400.pdf' },
            { name: 'LL-4403', img: 'LL-4403.png', pdf: 'LL-4403.pdf' },
            { name: 'LL-4404', img: 'LL-4404.png', pdf: 'LL-4404.pdf' },
            { name: 'LL-4405', img: 'LL-4405.png', pdf: 'LL-4405.pdf' },
            { name: 'LL-4406', img: 'LL-4406.png', pdf: 'LL-4406.pdf' },
            { name: 'LL-4405-2', img: 'LL-4405-2.png', pdf: 'LL-4405-2.pdf' },
            { name: 'LL-4412', img: 'LL-4412.png', pdf: 'LL-4412.pdf' },
        ],
        'up-light': [
            { name: 'LL-0720', img: 'LL-0720.png', pdf: 'LL-0720.pdf' },
            { name: 'LL-0722', img: 'LL-0722.png', pdf: 'LL-0722.pdf' },
            { name: 'LL-0723', img: 'LL-0723.png', pdf: 'LL-0723.pdf' },
            { name: 'LL-0724', img: 'LL-0724.png', pdf: 'LL-0724.pdf' },
            { name: 'LL-2133', img: 'LL-2133.png', pdf: 'LL-2133.pdf' },
            { name: 'LL-9011', img: 'LL-9011.png', pdf: 'LL-9011.pdf' },
            { name: 'LL-9012', img: 'LL-9012.png', pdf: 'LL-9012.pdf' },
            { name: 'LL-9013', img: 'LL-9013.png', pdf: 'LL-9013.pdf' },
            { name: 'LL-0725', img: 'LL-0725.webp', pdf: 'LL-0725.pdf' },
            { name: 'LL-0007', img: 'LL-0007.png', pdf: 'LL-0007.pdf' },
        ],
        'ceiling-light': [
            { name: 'LL-1014', img: 'LL-1014.png', pdf: 'LL-1014.pdf' },
            { name: 'LL-1015', img: 'LL-1015.png', pdf: 'LL-1015.pdf' },
            { name: 'LL-1016', img: 'LL-1016.png', pdf: 'LL-1016.pdf' },
            { name: 'LL-1017-S', img: 'LL-1017-S.png', pdf: 'LL-1017-S.pdf' },
            { name: 'LL-160.1', img: 'LL-160.1.png', pdf: 'LL-160.1.pdf' },
            { name: 'LL-5013', img: 'LL-5013.png', pdf: 'LL-5013.pdf' },
        ],
        'flood-light': [
            { name: 'LL-4407', img: 'BL-LL-4407.png', pdf: 'LL-4407.pdf' },
            { name: 'LL-4407-4', img: 'LL-4407-4.png', pdf: 'LL-4407.pdf' },
            { name: 'LL-4408', img: 'FD-LL-4408.png', pdf: 'LL-4408.pdf' },
            { name: 'LL-4402', img: 'FD-LL-4402.png', pdf: 'LL-4402.pdf' },
            { name: 'LL-4401', img: 'FD-LL-4401.png', pdf: 'LL-4401.pdf' },
            { name: 'LL-4414', img: 'LL-4414.png', pdf: 'LL-4414.pdf' },
            { name: 'LL-4415', img: 'LL-4415.png', pdf: 'LL-4415.pdf' },
            { name: 'LL-4416', img: 'LL-4416.png', pdf: 'LL-4416.pdf' },
            { name: 'LL-4420', img: 'LL-4420.png', pdf: 'LL-4420.pdf' },
            { name: 'LL-4410', img: 'LL-4410.png', pdf: 'LL-4410.pdf' },
        ],
    }
};

// Function to generate product cards
function generateProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let html = '';

    // Generate Indoor Products
    Object.keys(productsData.indoor).forEach(type => {
        productsData.indoor[type].forEach(product => {
            const imgPath = `assets/Products Img/${product.img}`;
            const dataSheetPath = getDataSheetPath(product.name);
            const description = product.description || `Premium ${getCategoryName(type).toLowerCase()} solution designed for modern lighting applications.`;
            html += `
                <div class="spotlight-product-card product-card" data-category="indoor" data-type="${type}" data-product-name="${product.name}" data-product-datasheet="${dataSheetPath}" data-product-img="${product.img}" data-product-desc="${description.replace(/"/g, '&quot;')}">
                    <div class="product-image-wrapper">
                        <img src="${imgPath}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=${product.name}'">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-category">${getCategoryName(type)}</p>
                        <button class="open-spotlight-modal">Show More</button>
                    </div>
                </div>
            `;
        });
    });

    // Generate Outdoor Products
    Object.keys(productsData.outdoor).forEach(type => {
        productsData.outdoor[type].forEach(product => {
            const imgPath = `assets/Products Img/${product.img}`;
            const dataSheetPath = getDataSheetPath(product.name);
            const description = product.description || `Premium ${getCategoryName(type).toLowerCase()} solution designed for modern lighting applications.`;
            html += `
                <div class="spotlight-product-card product-card" data-category="outdoor" data-type="${type}" data-product-name="${product.name}" data-product-datasheet="${dataSheetPath}" data-product-img="${product.img}" data-product-desc="${description.replace(/"/g, '&quot;')}">
                    <div class="product-image-wrapper">
                        <img src="${imgPath}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=${product.name}'">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-category">${getCategoryName(type)}</p>
                        <button class="open-spotlight-modal">Show More</button>
                    </div>
                </div>
            `;
        });
    });

    productsGrid.innerHTML = html;
}

function getCategoryName(type) {
    const names = {
        'spot-light': 'Spot Light',
        'down-light': 'Down Light',
        'lamps-tubes': 'Lamps & Tubes',
        'strip-light': 'Strip Light & Aluminium Profile',
        'mirror-light': 'Mirror Light',
        'track-light': 'Track Light',
        'chandelier-pendant': 'Chandelier & Pendant',
        'industrial-light': 'Industrial Light',
        'external-light': 'External Light',
        'pole-bollard-light': 'Pole & Bollard Light',
        'up-light': 'Up Light',
        'ceiling-light': 'Ceiling Light',
        'flood-light': 'Flood Light'
    };
    return names[type] || type;
}

// Function to find additional images for a product
function findAdditionalImages(productName, baseImg) {
    const images = [baseImg]; // Start with base image
    const imgBase = baseImg.replace(/\.(png|jpg|jpeg)$/i, '');
    const baseName = productName.replace(/[^a-zA-Z0-9-]/g, '');
    
    // Common image patterns to check
    const patterns = [
        // Pattern: name,1.png, name,2.png, etc.
        (i) => `${imgBase},${i}.png`,
        (i) => `${imgBase},${i}.jpg`,
        // Pattern: name 1.png, name 2.png, etc.
        (i) => `${imgBase} ${i}.png`,
        (i) => `${imgBase} ${i}.jpg`,
        // Pattern: LL-XXX,1.png
        (i) => `${baseName},${i}.png`,
        (i) => `${baseName},${i}.jpg`,
        // Pattern: LL-XXX 1.png
        (i) => `${baseName} ${i}.png`,
        (i) => `${baseName} ${i}.jpg`,
    ];
    
    // Check for images up to 10 variations
    for (let i = 1; i <= 10; i++) {
        patterns.forEach(pattern => {
            const imgPath = pattern(i);
            if (!images.includes(imgPath)) {
                // Check if image exists by creating an image object
                const img = new Image();
                img.onload = function() {
                    if (!images.includes(imgPath)) {
                        images.push(imgPath);
                        updateThumbnailGallery(images);
                    }
                };
                img.src = `assets/Products Img/${imgPath}`;
            }
        });
    }
    
    return images;
}

// Update thumbnail gallery when new images are found
function updateThumbnailGallery(images) {
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    if (!thumbnailGallery) return;
    
    images.forEach((img, index) => {
        // Check if thumbnail already exists
        const existing = thumbnailGallery.querySelector(`img[src="assets/Products Img/${img}"]`);
        if (existing) return;
        
        const thumbnail = document.createElement('img');
        thumbnail.src = `assets/Products Img/${img}`;
        thumbnail.alt = `Product Image ${index + 1}`;
        thumbnail.loading = 'lazy';
        thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
            thumbnail.addEventListener('click', () => {
                document.getElementById('modalMainImage').src = `assets/Products Img/${img}`;
                thumbnailGallery.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        thumbnail.addEventListener('error', () => {
            thumbnail.style.display = 'none';
        });
        thumbnailGallery.appendChild(thumbnail);
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        generateProductCards();
        // Re-initialize filters after products are generated
        setTimeout(() => {
            if (typeof initializeProductsFilter === 'function') {
                initializeProductsFilter();
            }
            if (typeof setupFilterButtons === 'function') {
                setupFilterButtons();
            }
            if (typeof setupDropdownItems === 'function') {
                setupDropdownItems();
            }
            setupProductModal();
        }, 100);
    });
} else {
    generateProductCards();
    setTimeout(() => {
        if (typeof initializeProductsFilter === 'function') {
            initializeProductsFilter();
        }
        if (typeof setupFilterButtons === 'function') {
            setupFilterButtons();
        }
        if (typeof setupDropdownItems === 'function') {
            setupDropdownItems();
        }
        setupProductModal();
    }, 100);
}

// Setup product modal
function setupProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = modal?.querySelector('.spotlight-modal-close') || modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    const openButtons = document.querySelectorAll('.open-spotlight-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    if (!modal) return;
    
    // Close modal
    function closeModal() {
        const modalContent = modal.querySelector('.spotlight-modal-content');
        
        if (modalContent) {
            // New modal style (side panel)
            gsap.to(modalContent, {
                x: '100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            });
            
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        } else {
            // Old modal style (centered)
            gsap.to(modal, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        }
    }
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    
    // Open modal from new button style
    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const card = button.closest('.spotlight-product-card') || button.closest('.product-card');
            if (!card) return;
            
            const productName = card.getAttribute('data-product-name');
            const productDataSheet = card.getAttribute('data-product-datasheet') || getDataSheetPath(productName);
            const productImg = card.getAttribute('data-product-img');
            const productDesc = card.getAttribute('data-product-desc') || 'Premium lighting solution designed for modern applications.';
            
            // Check if new modal structure exists
            const titleEl = document.getElementById('spotlightModalTitle');
            const descEl = document.getElementById('spotlightModalDesc');
            const imgEl = document.getElementById('spotlightModalMainImage');
            const pdfEl = document.getElementById('spotlightDownloadPdf');
            const thumbnailGallery = document.getElementById('spotlightThumbnailGallery');
            
            if (titleEl && descEl && imgEl && pdfEl) {
                // New modal structure
                titleEl.textContent = productName;
                descEl.textContent = productDesc;
                imgEl.src = `assets/Products Img/${productImg}`;
                // Force mobile size on mobile devices
                if (window.innerWidth <= 480) {
                    imgEl.style.width = '120px';
                    imgEl.style.height = '200px';
                    imgEl.style.maxWidth = '120px';
                    imgEl.style.maxHeight = '200px';
                    imgEl.style.margin = '0 auto 15px';
                    imgEl.style.display = 'block';
                    imgEl.style.objectFit = 'contain';
                }
                // Update data sheet link - open in new tab to view PNG
                pdfEl.href = productDataSheet;
                pdfEl.target = '_blank';
                pdfEl.download = '';
                
                // Setup thumbnail gallery
                if (thumbnailGallery) {
                    thumbnailGallery.innerHTML = '';
                    
                    const baseThumbnail = document.createElement('img');
                    baseThumbnail.src = `assets/Products Img/${productImg}`;
                    baseThumbnail.alt = `${productName} - Main Image`;
                    baseThumbnail.loading = 'lazy';
                    baseThumbnail.className = 'active';
                    baseThumbnail.addEventListener('click', () => {
                        imgEl.src = `assets/Products Img/${productImg}`;
                        thumbnailGallery.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                        baseThumbnail.classList.add('active');
                    });
                    thumbnailGallery.appendChild(baseThumbnail);
                    
                    // Find additional images
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
                                    imgEl.src = `assets/Products Img/${variation}`;
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
                
                // Show modal with slide-in animation
                modal.style.display = 'flex';
                const modalContent = modal.querySelector('.spotlight-modal-content');
                
                gsap.fromTo(overlay,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4 }
                );
                
                gsap.fromTo(modalContent,
                    { x: '100%', opacity: 0 },
                    { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            } else {
                // Old modal structure (fallback)
                const nameEl = document.getElementById('modalProductName');
                const categoryEl = document.getElementById('modalProductCategory');
                const mainImgEl = document.getElementById('modalMainImage');
                const viewPdfEl = document.getElementById('modalViewPDF');
                const downloadPdfEl = document.getElementById('modalDownloadPDF');
                
                if (nameEl) nameEl.textContent = productName;
                if (categoryEl) categoryEl.textContent = card.querySelector('.product-category')?.textContent || '';
                if (mainImgEl) mainImgEl.src = `assets/Products Img/${productImg}`;
                const dataSheetPath = card.getAttribute('data-product-datasheet') || getDataSheetPath(productName);
                if (viewPdfEl) viewPdfEl.href = dataSheetPath;
                if (downloadPdfEl) downloadPdfEl.href = dataSheetPath;
                
                modal.style.display = 'flex';
                gsap.fromTo(modal, 
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3 }
                );
            }
        });
    });
    
    // Open modal from old button style (backward compatibility)
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.getAttribute('data-product-name');
            const productDataSheet = btn.getAttribute('data-product-datasheet') || getDataSheetPath(productName);
            const productImg = btn.getAttribute('data-product-img');
            
            const nameEl = document.getElementById('modalProductName') || document.getElementById('spotlightModalTitle');
            const mainImgEl = document.getElementById('modalMainImage') || document.getElementById('spotlightModalMainImage');
            const pdfEl = document.getElementById('modalDownloadPDF') || document.getElementById('spotlightDownloadPdf');
            
            if (nameEl) nameEl.textContent = productName;
            if (mainImgEl) mainImgEl.src = `assets/Products Img/${productImg}`;
            if (pdfEl) {
                pdfEl.href = productDataSheet;
                pdfEl.target = '_blank';
            }
            
            modal.style.display = 'flex';
            gsap.fromTo(modal, 
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}
