// Auto-filled from disk: node scripts/sync-datasheets.mjs (manual `mappings` below still wins)
// <auto-data-sheet-map>
const dataSheetAutoMap = {
    'LL-0102': 'New Data-Sheets/truck Light-Datasheets/LL-0102.pdf',
    'LL-1015': 'New Data-Sheets/Ceiling light-Datasheets/LL-1015.png',
    'LL-1016': 'New Data-Sheets/Ceiling light-Datasheets/LL-1016.png',
    'LL-1621': 'New Data-Sheets/External-light-DataSheets/LL-1621.png',
    'LL-2003': 'New Data-Sheets/Spot-light-DataSheets/LL-2003.png',
    'LL-212': 'New Data-Sheets/Industrial Light-Datasheets/LL-212.pdf',
    'LL-222': 'New Data-Sheets/Industrial Light-Datasheets/LL-222.pdf',
    'LL-3003': 'New Data-Sheets/Spot-light-DataSheets/LL-3003.png',
    'LL-3009': 'New Data-Sheets/Spot-light-DataSheets/LL-3009.png',
    'LL-3012': 'New Data-Sheets/Spot-light-DataSheets/LL-3012-R.png',
    'LL-3013': 'New Data-Sheets/Spot-light-DataSheets/LL-3013-R.png',
    'LL-3016': 'New Data-Sheets/Spot-light-DataSheets/LL-3016.png',
    'LL-3017': 'New Data-Sheets/Spot-light-DataSheets/LL-3017.png',
    'LL-3017CH': 'New Data-Sheets/Spot-light-DataSheets/LL-3017CH.png',
    'LL-3018': 'New Data-Sheets/Spot-light-DataSheets/LL-3018.png',
    'LL-3021': 'New Data-Sheets/Spot-light-DataSheets/LL-3021-R.png',
    'LL-3024': 'New Data-Sheets/Down-light-Datasheets/LL-3024.png',
    'LL-3027': 'New Data-Sheets/Spot-light-DataSheets/LL-3027.png',
    'LL-3028': 'New Data-Sheets/Spot-light-DataSheets/LL-3028.png',
    'LL-3031': 'New Data-Sheets/Spot-light-DataSheets/LL-3031-S-7W.png',
    'LL-3033': 'New Data-Sheets/Spot-light-DataSheets/LL-3033-R.png',
    'LL-3034': 'New Data-Sheets/Spot-light-DataSheets/LL-3034.png',
    'LL-3061': 'New Data-Sheets/Spot-light-DataSheets/LL-3061-R-12W.png',
    'LL-4001-R': 'New Data-Sheets/Ceiling light-Datasheets/LL-4001-R-12-15-18W.png',
    'LL-4001-S': 'New Data-Sheets/Down-light-Datasheets/LL-4001-S-9-18-24W.png',
    'LL-4302': 'New Data-Sheets/Down-light-Datasheets/LL-4302-12-18-25-40W.png',
    'LL-4489': 'New Data-Sheets/External-light-DataSheets/LL-4489.png',
    'LL-4503': 'New Data-Sheets/External-light-DataSheets/LL-4503.png',
    'LL-4506': 'New Data-Sheets/External-light-DataSheets/LL-4506.png',
    'LL-4507': 'New Data-Sheets/External-light-DataSheets/LL-4507.png',
    'LL-4512': 'New Data-Sheets/External-light-DataSheets/LL-4512.png',
    'LL-4581-R': 'New Data-Sheets/External-light-DataSheets/LL-4581-R.png',
    'LL-4582-R': 'New Data-Sheets/External-light-DataSheets/LL-4582-R.png',
    'LL-4582-S': 'New Data-Sheets/External-light-DataSheets/LL-4582-S.png',
    'LL-4585': 'New Data-Sheets/External-light-DataSheets/LL-4585-2.png',
    'LL-4612': 'New Data-Sheets/Mirror-light-DataSheets/LL-4612.png',
    'LL-5001': 'New Data-Sheets/truck Light-Datasheets/LL-5001.pdf',
    'LL-5010': 'New Data-Sheets/Spot-light-DataSheets/LL-5010.png',
    'LL-5013': 'New Data-Sheets/Strip-light-DataSheets/LL-5013.png',
    'LL-5210': 'New Data-Sheets/truck Light-Datasheets/LL-5210.pdf',
    'LL-5211': 'New Data-Sheets/truck Light-Datasheets/LL-5211.pdf',
    'LL-5310': 'New Data-Sheets/truck Light-Datasheets/LL-5310.pdf',
    'LL-5311': 'New Data-Sheets/truck Light-Datasheets/LL-5311.pdf',
    'LL-5410': 'New Data-Sheets/truck Light-Datasheets/LL-5410.pdf',
    'LL-544': 'New Data-Sheets/External-light-DataSheets/LL-544.png',
    'LL-555': 'New Data-Sheets/External-light-DataSheets/LL-555.png',
    'LL-6002': 'New Data-Sheets/Strip-light-DataSheets/LL-6002.png',
    'LL-6005': 'New Data-Sheets/Strip-light-DataSheets/LL-6005.png',
    'LL-6010': 'New Data-Sheets/Strip-light-DataSheets/LL-6010.png',
    'LL-6012-RGB': 'New Data-Sheets/Strip-light-DataSheets/LL-6012-RGB.png',
    'LL-6014': 'New Data-Sheets/Strip-light-DataSheets/LL-6014.png',
    'LL-663': 'New Data-Sheets/External-light-DataSheets/LL-663.png',
    'LL-690': 'New Data-Sheets/External-light-DataSheets/LL-690.png',
    'LL-693': 'New Data-Sheets/External-light-DataSheets/LL-693.png',
    'LL-8002': 'New Data-Sheets/Industrial Light-Datasheets/LL-8002.pdf',
    'LL-8003': 'New Data-Sheets/Industrial Light-Datasheets/LL-8003.pdf',
    'LL-S303': 'New Data-Sheets/Mirror-light-DataSheets/LL-S303.png',
};
// </auto-data-sheet-map>

// Function to get data sheet path based on product name
function getDataSheetPath(productName) {
    // Special mappings for products with different naming conventions
    const mappings = {
        // ======================
        // New structured data-sheets
        // ======================

        // Spot light data sheets (New Data-Sheets/Spot-light-DataSheets)
        'LL-2003': 'New Data-Sheets/Spot-light-DataSheets/LL-2003.png',
        'LL-3003': 'New Data-Sheets/Spot-light-DataSheets/LL-3003.png',
        'LL-3009': 'New Data-Sheets/Spot-light-DataSheets/LL-3009.png',
        'LL-3012': 'New Data-Sheets/Spot-light-DataSheets/LL-3012-R.png',
        'LL-3013': 'New Data-Sheets/Spot-light-DataSheets/LL-3013-R.png',
        'LL-3016': 'New Data-Sheets/Spot-light-DataSheets/LL-3016.png',
        'LL-3017': 'New Data-Sheets/Spot-light-DataSheets/LL-3017.png',
        'LL-3017CH': 'New Data-Sheets/Spot-light-DataSheets/LL-3017CH.png',
        'LL-3018': 'New Data-Sheets/Spot-light-DataSheets/LL-3018.png',
        'LL-3021': 'New Data-Sheets/Spot-light-DataSheets/LL-3021-R.png',
        'LL-3022-BK': 'New Data-Sheets/Spot-light-DataSheets/LL-3022-R-12W-BK.png',
        'LL-3023': 'New Data-Sheets/Spot-light-DataSheets/LL-3023-R-12W.png',
        'LL-3027': 'New Data-Sheets/Spot-light-DataSheets/LL-3027.png',
        'LL-3028': 'New Data-Sheets/Spot-light-DataSheets/LL-3028.png',
        'LL-3031': 'New Data-Sheets/Spot-light-DataSheets/LL-3031-S-7W.png',
        'LL-3032': 'New Data-Sheets/Spot-light-DataSheets/LL-3032.png',
        'LL-3032-S': 'New Data-Sheets/Spot-light-DataSheets/LL-3032.png',
        'LL-3032-R': 'New Data-Sheets/Spot-light-DataSheets/LL-3032.png',
        'LL-3033': 'New Data-Sheets/Spot-light-DataSheets/LL-3033-R.png',
        'LL-3034': 'New Data-Sheets/Spot-light-DataSheets/LL-3034.png',
        'LL-3036': 'New Data-Sheets/Spot-light-DataSheets/LL-3036.png',
        'LL-3043': 'New Data-Sheets/Spot-light-DataSheets/LL-3043.png',
        'LL-3044': 'New Data-Sheets/Spot-light-DataSheets/LL-3044.png',
        'LL-3061': 'New Data-Sheets/Spot-light-DataSheets/LL-3061-R-12W.png',
        'LL-3081': 'New Data-Sheets/Down-light-Datasheets/DL-LL-308.png',
        'LL-5010': 'New Data-Sheets/Spot-light-DataSheets/LL-5010.png',

        // Down light data sheets (New Data-Sheets/Down-light-Datasheets)
        'LL-2000': 'New Data-Sheets/Down-light-Datasheets/LL-2030-IP44.png',
        'LL-2030': 'New Data-Sheets/Down-light-Datasheets/LL-2030-IP44.png',
        'LL-2040': 'New Data-Sheets/Down-light-Datasheets/LL-2040.png',
        'LL-3024': 'New Data-Sheets/Down-light-Datasheets/LL-3024.png',
        'LL-4001-R': 'New Data-Sheets/Ceiling light-Datasheets/LL-4001-R-12-15-18W.png',
        'LL-4001-S': 'New Data-Sheets/Down-light-Datasheets/LL-4001-S-9-18-24W.png',
        'LL-4002-R': 'New Data-Sheets/Down-light-Datasheets/LL-4002-RD-8-12-18-24W.png',
        'LL-4003-WH': 'New Data-Sheets/Down-light-Datasheets/LL-4003.png',
        'LL-4101-R': 'New Data-Sheets/Down-light-Datasheets/LL-4101-R-18-20-24W.png',
        'LL-4101-S': 'New Data-Sheets/Down-light-Datasheets/LL-4101-S-24W.png',
        'LL-4201-R': 'New Data-Sheets/Down-light-Datasheets/LL-4201-40W.png',
        'LL-4302': 'New Data-Sheets/Down-light-Datasheets/LL-4302-12-18-25-40W.png',
        'LL-2020': 'New Data-Sheets/Down-light-Datasheets/LL-2030-IP65.png',

        // Strip light & aluminium profile (New Data-Sheets/Strip-light-DataSheets)
        'LL-5013': 'New Data-Sheets/Strip-light-DataSheets/LL-5013.png',
        'LL-5015': 'New Data-Sheets/Strip-light-DataSheets/LL-5015.png',
        'LL-6002': 'New Data-Sheets/Strip-light-DataSheets/LL-6002.png',
        'LL-6005': 'New Data-Sheets/Strip-light-DataSheets/LL-6005.png',
        'LL-6010': 'New Data-Sheets/Strip-light-DataSheets/LL-6010.png',
        'LL-6012': 'New Data-Sheets/Strip-light-DataSheets/LL-6012.png',
        'LL-6012-RGB': 'New Data-Sheets/Strip-light-DataSheets/LL-6012-RGB.png',
        'LL-6014': 'New Data-Sheets/Strip-light-DataSheets/LL-6014.png',
        'LL-6020': 'New Data-Sheets/Strip-light-DataSheets/LL-6020.png',

        // Mirror light (New Data-Sheets/Mirror-light-DataSheets)
        'LL-S304': 'New Data-Sheets/Mirror-light-DataSheets/LL-S304.png',
        'LL-4612': 'New Data-Sheets/Mirror-light-DataSheets/LL-4612.png',
        'LL-5512': 'New Data-Sheets/Mirror-light-DataSheets/LL-5512.png',
        'LL-S303': 'New Data-Sheets/Mirror-light-DataSheets/LL-S303.png',

        // Track light / truck light (New Data-Sheets/truck Light-Datasheets)
        'LL-5210': 'New Data-Sheets/truck Light-Datasheets/LL-5210.pdf',
        'LL-5211': 'New Data-Sheets/truck Light-Datasheets/LL-5211.pdf',
        'LL-5310': 'New Data-Sheets/truck Light-Datasheets/LL-5310.pdf',
        'LL-5311': 'New Data-Sheets/truck Light-Datasheets/LL-5311.pdf',
        'LL-5410': 'New Data-Sheets/truck Light-Datasheets/LL-5410.pdf',
        'LL-0102-S': 'New Data-Sheets/truck Light-Datasheets/LL-0102 - S.pdf',
        'LL-0102': 'New Data-Sheets/truck Light-Datasheets/LL-0102.pdf',
        'LL-5001': 'New Data-Sheets/truck Light-Datasheets/LL-5001.pdf',

        // Chandelier & pendant (existing PDFs likely unchanged, keep default handling)
        // Industrial light (New Data-Sheets/Industrial Light-Datasheets)
        'LL-212': 'New Data-Sheets/Industrial Light-Datasheets/LL-212.pdf',
        'LL-222': 'New Data-Sheets/Industrial Light-Datasheets/LL-222.pdf',
        'LL-240': 'New Data-Sheets/Industrial Light-Datasheets/LL-240.pdf',
        'LL-8002': 'New Data-Sheets/Industrial Light-Datasheets/LL-8002.pdf',
        'LL-8003': 'New Data-Sheets/Industrial Light-Datasheets/LL-8003.pdf',

        // External light (New Data-Sheets/External-light-DataSheets)
        'LL-544': 'New Data-Sheets/External-light-DataSheets/LL-544.png',
        'LL-555': 'New Data-Sheets/External-light-DataSheets/LL-555.png',
        'LL-663': 'New Data-Sheets/External-light-DataSheets/LL-663.png',
        'LL-690': 'New Data-Sheets/External-light-DataSheets/LL-690.png',
        'LL-693': 'New Data-Sheets/External-light-DataSheets/LL-693.png',
        'LL-696': 'New Data-Sheets/External-light-DataSheets/LL-696.png',
        'LL-1621': 'New Data-Sheets/External-light-DataSheets/LL-1621.png',
        'LL-4489': 'New Data-Sheets/External-light-DataSheets/LL-4489.png',
        'LL-4503': 'New Data-Sheets/External-light-DataSheets/LL-4503.png',
        'LL-4506': 'New Data-Sheets/External-light-DataSheets/LL-4506.png',
        'LL-4507': 'New Data-Sheets/External-light-DataSheets/LL-4507.png',
        'LL-4510': 'New Data-Sheets/External-light-DataSheets/LL-4510.png',
        'LL-4512': 'New Data-Sheets/External-light-DataSheets/LL-4512.png',
        'LL-4581-R': 'New Data-Sheets/External-light-DataSheets/LL-4581-R.png',
        'LL-4582-R': 'New Data-Sheets/External-light-DataSheets/LL-4582-R.png',
        'LL-4582-S': 'New Data-Sheets/External-light-DataSheets/LL-4582-S.png',
        'LL-4583-1': 'New Data-Sheets/External-light-DataSheets/LL-4583.png',
        'LL-4583-2': 'New Data-Sheets/External-light-DataSheets/LL-4583.png',
        'LL-4584-1': 'New Data-Sheets/External-light-DataSheets/LL-4584.png',
        'LL-4584-2': 'New Data-Sheets/External-light-DataSheets/LL-4584.png',
        'LL-4585': 'New Data-Sheets/External-light-DataSheets/LL-4585-2.png',

        // Ceiling light (New Data-Sheets/Ceiling light-Datasheets)
        'LL-0711': 'New Data-Sheets/Ceiling light-Datasheets/LL-0711-3.png',
        'LL-1014': 'New Data-Sheets/Ceiling light-Datasheets/LL-1014.png',
        'LL-1015': 'New Data-Sheets/Ceiling light-Datasheets/LL-1015.png',
        'LL-1016': 'New Data-Sheets/Ceiling light-Datasheets/LL-1016.png',
        'LL-1017-S': 'New Data-Sheets/Ceiling light-Datasheets/LL-1023.png', // closest available
        'LL-160.1': 'New Data-Sheets/Ceiling light-Datasheets/LL-160.png',
        'LL-2230': 'New Data-Sheets/Ceiling light-Datasheets/LL -2230.png',
        'LL-2240': 'New Data-Sheets/Ceiling light-Datasheets/LL -2240.png',
        'LL-3372': 'New Data-Sheets/Ceiling light-Datasheets/LL-3372.png',
        'LL-4001-R-OUT': 'New Data-Sheets/Ceiling light-Datasheets/LL-4001-R-12-15-18W.png',
        'LL-4102-R': 'New Data-Sheets/Ceiling light-Datasheets/LL-4102-R.png',

        // Lamps & Tubes (New Data-Sheets/Lamp&Tubes-DataSheets)
        'T8': 'New Data-Sheets/Lamp&Tubes-DataSheets/led Tube.png',
        'LL-MR16': 'New Data-Sheets/Lamp&Tubes-DataSheets/GU10 lamp.png', // closest GU/MR depiction
        'LL-GU': 'New Data-Sheets/Lamp&Tubes-DataSheets/GU10 lamp.png',
        'LL-E14': 'New Data-Sheets/Lamp&Tubes-DataSheets/E14.png',
        'T5': 'assets/DATA-SHEETS/T5.png', // keep old path if exists
        'LL-E27': 'New Data-Sheets/Lamp&Tubes-DataSheets/E27 lamp.png',

        // Up light (partially from existing structure / PDFs might be unchanged)
        'LL-0720': 'assets/DATA-SHEETS/LL-0720.png',
        'LL-0722': 'assets/DATA-SHEETS/LL-0722.png',
        'LL-0723': 'assets/DATA-SHEETS/LL-0723.png',
        'LL-0724': 'assets/DATA-SHEETS/LL-0724.png',
        'LL-0725': 'assets/DATA-SHEETS/LL-0725.png',
        'LL-0007': 'assets/DATA-SHEETS/LL-0007.png',
        'LL-2133': 'assets/DATA-SHEETS/LL-2133.png',
        'LL-9011': 'assets/DATA-SHEETS/LL-9011.png',
        'LL-9012': 'assets/DATA-SHEETS/LL-9012.png',
        'LL-9013': 'assets/DATA-SHEETS/LL-9013.png',

        // Pole & bollard & flood lights (keep existing mapping where still valid)
        'LL-4400': 'assets/DATA-SHEETS/LL-4400.png',
        'LL-4403': 'assets/DATA-SHEETS/LL-4403.png',
        'LL-4404': 'assets/DATA-SHEETS/LL-4404.png',
        'LL-4405': 'assets/DATA-SHEETS/LL-4405.png',
        'LL-4405-2': 'assets/DATA-SHEETS/LL-4405-2.png',
        'LL-4406': 'assets/DATA-SHEETS/LL-4406.png',
        'LL-4407': 'assets/DATA-SHEETS/LL-4407.png',
        'BL-LL-4407': 'assets/DATA-SHEETS/FD-LL-4407.png',
        'BL-LL-4408': 'assets/DATA-SHEETS/FD-LL-4408.png',
        'LL-4410': 'assets/DATA-SHEETS/LL-4410.png',
        'LL-4412': 'assets/DATA-SHEETS/LL-4412.png',
        'LL-4414': 'assets/DATA-SHEETS/LL-4414.png',
        'LL-4415': 'assets/DATA-SHEETS/LL-4415.png',
        'LL-4416': 'assets/DATA-SHEETS/LL-4416.png',
        'LL-4420': 'assets/DATA-SHEETS/LL-4420.png',

        // LL-310 series (chandelier/pendant) – keep existing PNGs in root
        'LL-310-1': 'assets/DATA-SHEETS/LL-310-1.png',
        'LL-310-1-SQ': 'assets/DATA-SHEETS/LL-310-1.png',
        'LL-310-2-R': 'assets/DATA-SHEETS/LL-310-2.png',
        'LL-310-2-SQ': 'assets/DATA-SHEETS/LL-310-2-SQ.png',
        'LL-310-3-R': 'assets/DATA-SHEETS/LL-310-3.png',
        'LL-310-3-SQ': 'assets/DATA-SHEETS/LL-310-3-SQ.png',

        // High bay lights legacy mapping (keep if root files still exist)
        'LL-8001': 'New Data-Sheets/Industrial Light-Datasheets/LL-8002.pdf',
        'LL-BT-22': 'assets/DATA-SHEETS/LL-BT-22.png',

        // Special legacy case
        'LL-692': 'assets/DATA-SHEETS/LL692.pdf',
    };
    
    // Check special mappings first
    if (mappings[productName]) {
        const mapped = mappings[productName];
        // Some entries in the map already contain full paths (starting with "assets/")
        if (mapped.startsWith('assets/')) {
            return mapped;
        }
        return `assets/DATA-SHEETS/${mapped}`;
    }

    if (dataSheetAutoMap[productName]) {
        const mapped = dataSheetAutoMap[productName];
        if (mapped.startsWith('assets/')) {
            return mapped;
        }
        return `assets/DATA-SHEETS/${mapped}`;
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
            { name: 'LL-3012', img: 'New Img/Spot-light-Pic/LL-3012 1.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3012-R.png' },
            { name: 'LL-3013', img: 'New Img/Spot-light-Pic/LL-3013 1.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3013-R.png' },
            { name: 'LL-3021', img: 'New Img/Spot-light-Pic/LL-3021-extracted.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3021-R.png' },
            { name: 'LL-3022-BK', img: 'New Img/Spot-light-Pic/LL-3022-BK.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3022-R-12W-BK.png' },
            { name: 'LL-3019', img: 'New Img/Spot-light-Pic/LL-3019.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3019.png' },
            { name: 'LL-3032-S', img: 'New Img/Spot-light-Pic/LL-3032-S.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3032.png' },
            { name: 'LL-3032-R', img: 'New Img/Spot-light-Pic/LL-3032 3.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3032.png' },
            { name: 'LL-3031', img: 'New Img/Spot-light-Pic/LL-3031 2.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3031-S-7W.png' },
            { name: 'LL-3043', img: 'New Img/Spot-light-Pic/LL-3043.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3043.png' },
            { name: 'LL-3061', img: 'New Img/Spot-light-Pic/LL-3061,3.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3061-R-12W.png' },
            { name: 'LL-3016', img: 'New Img/Spot-light-Pic/LL-3016.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3016.png' },
            { name: 'LL-3017', img: 'New Img/Spot-light-Pic/LL-3017.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3017.png' },
            { name: 'LL-3018', img: 'New Img/Spot-light-Pic/LL-3018.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3018.png' },
            { name: 'LL-3003', img: 'New Img/Spot-light-Pic/SL-LL-3003.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3003.png' },
            { name: 'LL-2003', img: 'New Img/Spot-light-Pic/SL-LL-2003.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-2003.png' },
            { name: 'LL-3009', img: 'New Img/Spot-light-Pic/LL-3009.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3009.png' },
            { name: 'LL-3033', img: 'New Img/Spot-light-Pic/LL-3033.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3033-R.png' },
            { name: 'LL-5010', img: 'New Img/Spot-light-Pic/LL-5010.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-5010.png' },
            { name: 'LL-3017CH', img: 'New Img/Spot-light-Pic/LL-3017CH.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3017CH.png' },
            { name: 'LL-3027', img: 'New Img/Spot-light-Pic/LL-3027.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3027.png' },
            { name: 'LL-3028', img: 'New Img/Spot-light-Pic/LL-3028.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3028.png' },
            { name: 'LL-3034', img: 'New Img/Spot-light-Pic/LL-3034.webp', pdf: 'New Data-Sheets/Spot-light-DataSheets/LL-3034.png' },
        ],
        'down-light': [
            { name: 'LL-4001-R', img: 'New Img/Down-Light-Pic/LL-4001-R-12-15-18W.webp', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-4001-R-12-15-18W.png' },
            { name: 'LL-4001-S', img: 'New Img/Down-Light-Pic/LL-4001-S-9-18-24W.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-4001-S-9-18-24W.png' },
            { name: 'LL-4002-R', img: 'New Img/Down-Light-Pic/LL-4002-R-8-12-18-24W.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-4002-RD-8-12-18-24W.png' },
            { name: 'LL-2000', img: 'New Img/Down-Light-Pic/LL-2030.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-2000.png' },
            { name: 'LL-4201-R', img: 'New Img/Down-Light-Pic/LL-4201-R-40W.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-4201-40W.png' },
            { name: 'LL-2020', img: 'New Img/Down-Light-Pic/LL-2020.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-2030-IP65.png' },
            { name: 'LL-4302', img: 'New Img/Down-Light-Pic/LL-4302-12-18-25-40W.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-4302-12-18-25-40W.png' },
            { name: 'LL-3024', img: 'New Img/Down-Light-Pic/LL-3024.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-3024.png' },
            // LL-3081 uses DL-LL-308 assets (same product)
            { name: 'LL-3081', img: 'New Img/Down-Light-Pic/DL-LL-308.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/DL-LL-308.png' },
            { name: 'LL-4003-WH', img: 'New Img/Down-Light-Pic/LL-4003-WH.webp', pdf: 'New Data-Sheets/Down-light-Datasheets/LL-4003.png' },
        ],
        'lamps-tubes': [
            { name: 'T8', img: 'New Img/Lamp&Tubes-Pic/T8.webp', pdf: 'New Data-Sheets/Lamp&Tubes-DataSheets/led Tube.png' },
            { name: 'LL-MR16', img: 'New Img/Lamp&Tubes-Pic/LL-MR16.webp', pdf: 'New Data-Sheets/Lamp&Tubes-DataSheets/GU10 lamp.png' },
            { name: 'LL-GU', img: 'New Img/Lamp&Tubes-Pic/LL-GU.webp', pdf: 'New Data-Sheets/Lamp&Tubes-DataSheets/GU10 lamp.png' },
            { name: 'LL-E14', img: 'New Img/Lamp&Tubes-Pic/LL-E14.webp', pdf: 'New Data-Sheets/Lamp&Tubes-DataSheets/E14.png' },
            { name: 'T5', img: 'New Img/Lamp&Tubes-Pic/T5.webp', pdf: 'assets/DATA-SHEETS/T5.png' },
            { name: 'LL-E27', img: 'New Img/Lamp&Tubes-Pic/LL-E27.webp', pdf: 'New Data-Sheets/Lamp&Tubes-DataSheets/E27 lamp.png' },
        ],
        'strip-light': [
            { name: 'LL-5013', img: 'New Img/Strip-light-Pic/LL-5015.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-5013.png' },
            { name: 'LL-6010', img: 'New Img/Strip-light-Pic/LL-6010.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6010.png' },
            // LL-6012-RGB: dedicated RGB main image
            { name: 'LL-6012-RGB', img: 'New Img/Strip-light-Pic/LL-6012-RGB.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6012-RGB.png' },
            { name: 'LL-6002', img: 'New Img/Strip-light-Pic/LL-6002.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6002.png' },
            { name: 'LL-6014', img: 'New Img/Strip-light-Pic/LL-6014.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6014.png' },
            { name: 'ALP-REC', img: 'New Img/Strip-light-Pic/ALP-REC.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/ALP-REC.png' },
            { name: 'ALP-SUR', img: 'New Img/Strip-light-Pic/ALP-SUR.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/ALP-SUR.png' },
            // LL-6020: main = second thumbnail (LL-6020,1); first thumb = LL-6020.webp
            {
                name: 'LL-6020',
                img: 'New Img/Strip-light-Pic/LL-6020,1.webp',
                pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6020.png',
                leadThumbnails: ['New Img/Strip-light-Pic/LL-6020.webp'],
                thumbnails: [
                    'New Img/Strip-light-Pic/LL-6020,2.webp',
                    'New Img/Strip-light-Pic/LL-6020,3.webp',
                ],
            },
            { name: 'LL-6005', img: 'New Img/Strip-light-Pic/LL-6005.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-6005.png' },
        ],
        'mirror-light': [
            { name: 'LL-S304', img: 'New Img/Mirror-Lights-Pic/LL-S304.webp', pdf: 'New Data-Sheets/Mirror-light-DataSheets/LL-S304.png' },
            { name: 'LL-4612', img: 'New Img/Mirror-Lights-Pic/LL-4612.webp', pdf: 'New Data-Sheets/Mirror-light-DataSheets/LL-4612.png' },
            { name: 'LL-5512', img: 'New Img/Mirror-Lights-Pic/LL-5512.webp', pdf: 'New Data-Sheets/Mirror-light-DataSheets/LL-5512.png' },
            { name: 'LL-S303', img: 'New Img/Mirror-Lights-Pic/LL-S303.webp', pdf: 'New Data-Sheets/Mirror-light-DataSheets/LL-S303.png' },
        ],
        'track-light': [
            { name: 'LL-5210', img: 'New Img/truck Light-Pic/LL-5210.webp', pdf: 'LL-5210.pdf' },
            { name: 'LL-5211', img: 'New Img/truck Light-Pic/LL-5211.webp', pdf: 'LL-5211.pdf' },
            { name: 'LL-5310', img: 'New Img/truck Light-Pic/LL-5310.webp', pdf: 'LL-5310.pdf' },
            { name: 'LL-5311', img: 'New Img/truck Light-Pic/LL-5311.webp', pdf: 'LL-5311.pdf' },
            { name: 'LL-5410', img: 'New Img/truck Light-Pic/LL-5410.webp', pdf: 'LL-5410.pdf' },
            { name: 'LL-0102-S', img: 'New Img/truck Light-Pic/LL-0102-S.webp', pdf: 'LL-0102-S.pdf' },
            // LL-0102 uses the D-variant image
            { name: 'LL-0102', img: 'New Img/truck Light-Pic/LL-0102-D.webp', pdf: 'LL-0102.pdf' },
            { name: 'LL-5001', img: 'New Img/truck Light-Pic/LL-5001.webp', pdf: 'LL-5001.pdf' },
        ],
        'chandelier-pendant': [
            { name: 'LL-310-1-SQ', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-1-SQ.webp', pdf: 'LL-310-1.pdf' },
            { name: 'LL-310-2-SQ', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ.webp', pdf: 'LL-310-2-SQ.pdf' },
            { name: 'LL-310-3-SQ', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-3-SQ.webp', pdf: 'LL-310-3-SQ.pdf' },
            { name: 'LL-2022', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-2022.webp', pdf: 'LL-2022.pdf' },
            { name: 'LL-310-1', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-1.webp', pdf: 'LL-310-1.pdf' },
            { name: 'LL-310-2-R', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-2-R.webp', pdf: 'LL-310-2-R.pdf' },
            { name: 'LL-310-3-R', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-310-3-R.webp', pdf: 'LL-310-3.pdf' },
            { name: 'LL-313', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-313.webp', pdf: 'LL-313.pdf' },
            { name: 'LL-4637', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4637.webp', pdf: 'LL-4637.pdf' },
            { name: 'LL-4609', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4609.webp', pdf: 'PL-4609.pdf' },
            { name: 'LL-4636', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4636.webp', pdf: 'LL-4636.pdf' },
            { name: 'LL-5565', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-5565.webp', pdf: 'LL-5565.pdf' },
            { name: 'LL-4586-3', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4586-3.webp', pdf: 'LL-PL-4586.pdf' },
            { name: 'LL-4596-3', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4596-3.webp', pdf: 'LL-4596-3.pdf' },
            { name: 'LL-4597-3', img: 'New Img/CHANDELIER & PENDANT-Pic/LL-4597-3.webp', pdf: 'LL-PL-4597.pdf' },
        ],
    },
    outdoor: {
        'industrial-light': [
            { name: 'LL-212', img: 'New Img/Industrial Light-Pic/LL-212.webp', pdf: 'New Data-Sheets/Industrial Light-Datasheets/LL-212.pdf' },
            { name: 'LL-222', img: 'New Img/Industrial Light-Pic/LL-222.webp', pdf: 'New Data-Sheets/Industrial Light-Datasheets/LL-222.pdf' },
            { name: 'LL-8001', img: 'New Img/Industrial Light-Pic/LL-8001.webp', pdf: 'New Data-Sheets/Industrial Light-Datasheets/LL-8002.pdf' },
            { name: 'LL-8002', img: 'New Img/Industrial Light-Pic/LL-8002.webp', pdf: 'New Data-Sheets/Industrial Light-Datasheets/LL-8002.pdf' },
            { name: 'LL-8003', img: 'New Img/Industrial Light-Pic/LL-8003.webp', pdf: 'New Data-Sheets/Industrial Light-Datasheets/LL-8003.pdf' },
            { name: 'LL-BT-22', img: 'New Img/Industrial Light-Pic/LL-BT-22,2.webp', pdf: 'assets/DATA-SHEETS/LL-BT-22.png' },
        ],
        'external-light': [
            { name: 'LL-4503', img: 'New Img/External LIGHT-Pic/LL-4503.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4503.png' },
            { name: 'LL-4506', img: 'New Img/External LIGHT-Pic/LL-4506.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4506.png' },
            { name: 'LL-4581-R', img: 'New Img/External LIGHT-Pic/LL-4581-R.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4581-R.png' },
            { name: 'LL-4581-S', img: 'New Img/External LIGHT-Pic/LL-4581-S.webp', pdf: 'assets/DATA-SHEETS/LL-4581-S.png' },
            { name: 'LL-4582-R', img: 'New Img/External LIGHT-Pic/LL-4582-R.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4582-R.png' },
            { name: 'LL-544', img: 'New Img/External LIGHT-Pic/LL-544.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-544.png' },
            { name: 'LL-663', img: 'New Img/External LIGHT-Pic/LL-663.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-663.png' },
            { name: 'LL-690', img: 'New Img/External LIGHT-Pic/LL-690.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-690.png' },
            { name: 'LL-692', img: 'New Img/External LIGHT-Pic/LL-692.webp', pdf: 'assets/DATA-SHEETS/LL692.pdf' },
            { name: 'LL-1621', img: 'New Img/External LIGHT-Pic/LL-1621.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-1621.png' },
            { name: 'LL-4582-S', img: 'New Img/External LIGHT-Pic/LL-4582-S.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4582-S.png' },
            { name: 'LL-4583-1', img: 'New Img/External LIGHT-Pic/LL-4583.png', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4583.png' },
            // Same main image as LL-4583-1
            { name: 'LL-4583-2', img: 'New Img/External LIGHT-Pic/LL-4583.png', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4583.png' },
            { name: 'LL-4584-1', img: 'New Img/External LIGHT-Pic/LL-4584-1,1.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4584.png' },
            { name: 'LL-4584-2', img: 'New Img/External LIGHT-Pic/LL-4584.png', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4584.png' },
            { name: 'LL-555', img: 'New Img/External LIGHT-Pic/LL-555.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-555.png' },
            { name: 'LL-4507', img: 'New Img/External LIGHT-Pic/LL-4507.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4507.png' },
            {
                name: 'LL-4585',
                img: 'New Img/External LIGHT-Pic/LL-4585,1.webp',
                pdf: 'New Data-Sheets/External-light-DataSheets/LL-4585-2.png',
                description:
                    'New innovative design for wall led luminaries with indirect lighting reflection give totally new feeling of outdoor lighting application weather proof protection rated IP65 can give freedom to use as many area has wet and medium humidity.',
                thumbnails: [
                    'New Img/External LIGHT-Pic/LL-4585.png',
                    'New Img/External LIGHT-Pic/LL-4585,2.webp',
                    'New Img/External LIGHT-Pic/LL-4585,3.webp',
                    'New Img/External LIGHT-Pic/LL-4585,4.webp',
                ],
            },
            { name: 'LL-4489', img: 'New Img/External LIGHT-Pic/LL-4489.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4489.png' },
            { name: 'LL-693', img: 'New Img/External LIGHT-Pic/LL-693.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-693.png' },
            { name: 'LL-4512', img: 'New Img/External LIGHT-Pic/LL-4512.webp', pdf: 'New Data-Sheets/External-light-DataSheets/LL-4512.png' },
        ],
        'pole-bollard-light': [
            { name: 'LL-4407', img: 'New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4407.webp', pdf: 'assets/DATA-SHEETS/LL-4407.png' },
            { name: 'BL-LL-4408', img: 'New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4408.webp', pdf: 'assets/DATA-SHEETS/LL-4408.png' },
            { name: 'LL-4400', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4400.webp', pdf: 'assets/DATA-SHEETS/LL-4400.png' },
            { name: 'LL-4403', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4403.webp', pdf: 'assets/DATA-SHEETS/LL-4403.png' },
            { name: 'LL-4404', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4404.webp', pdf: 'assets/DATA-SHEETS/LL-4404.png' },
            { name: 'LL-4405', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4405.webp', pdf: 'assets/DATA-SHEETS/LL-4405.png' },
            { name: 'LL-4406', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4406.webp', pdf: 'assets/DATA-SHEETS/LL-4406.png' },
            { name: 'LL-4405-2', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4405-2.webp', pdf: 'assets/DATA-SHEETS/LL-4405-2.png' },
            { name: 'LL-4412', img: 'New Img/POLE & BOLLARD LIGHT-Pic/LL-4412.webp', pdf: 'assets/DATA-SHEETS/LL-4412.png' },
        ],
        'up-light': [
            { name: 'LL-0720', img: 'New Img/UP-LIGHT-Pic/LL-0720.webp', pdf: 'assets/DATA-SHEETS/LL-0720.png' },
            { name: 'LL-0722', img: 'New Img/UP-LIGHT-Pic/LL-0722.webp', pdf: 'assets/DATA-SHEETS/LL-0722.png' },
            { name: 'LL-0723', img: 'New Img/UP-LIGHT-Pic/LL-0723.webp', pdf: 'assets/DATA-SHEETS/LL-0723.png' },
            { name: 'LL-0724', img: 'New Img/UP-LIGHT-Pic/LL-0724.webp', pdf: 'assets/DATA-SHEETS/LL-0724.png' },
            { name: 'LL-2133', img: 'New Img/UP-LIGHT-Pic/LL-2133.webp', pdf: 'assets/DATA-SHEETS/LL-2133.png' },
            { name: 'LL-9011', img: 'New Img/UP-LIGHT-Pic/LL-9011.webp', pdf: 'assets/DATA-SHEETS/LL-9011.png' },
            { name: 'LL-9012', img: 'New Img/UP-LIGHT-Pic/LL-9012.webp', pdf: 'assets/DATA-SHEETS/LL-9012.png' },
            { name: 'LL-9013', img: 'New Img/UP-LIGHT-Pic/LL-9013.webp', pdf: 'assets/DATA-SHEETS/LL-9013.png' },
            { name: 'LL-0725', img: 'New Img/UP-LIGHT-Pic/LL-0725.webp', pdf: 'assets/DATA-SHEETS/LL-0725.png' },
            { name: 'LL-0007', img: 'New Img/UP-LIGHT-Pic/LL-0007.webp', pdf: 'assets/DATA-SHEETS/LL-0007.png' },
        ],
        'ceiling-light': [
            { name: 'LL-1014', img: 'New Img/Ceiling light-Pic/LL-1014.webp', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-1014.png' },
            { name: 'LL-1015', img: 'New Img/Ceiling light-Pic/LL-1015.webp', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-1015.png' },
            { name: 'LL-1016', img: 'New Img/Ceiling light-Pic/LL-1016.webp', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-1016.png' },
            { name: 'LL-1017-S', img: 'New Img/Ceiling light-Pic/LL-1017-S.webp', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-1023.png' },
            { name: 'LL-160.1', img: 'New Img/Ceiling light-Pic/LL-160.1.png', pdf: 'New Data-Sheets/Ceiling light-Datasheets/LL-160.png' },
            { name: 'LL-5013', img: 'New Img/Strip-light-Pic/LL-5013.webp', pdf: 'New Data-Sheets/Strip-light-DataSheets/LL-5013.png' },
        ],
        'flood-light': [
            { name: 'LL-4407', img: 'New Img/Flood-Light-Pic/LL-4407.webp', pdf: 'assets/DATA-SHEETS/LL-4407.png' },
            { name: 'LL-4407-4', img: 'New Img/Flood-Light-Pic/LL-4407-4.webp', pdf: 'assets/DATA-SHEETS/LL-4407.png' },
            { name: 'LL-4408', img: 'New Img/Flood-Light-Pic/FD-LL-4408.webp', pdf: 'assets/DATA-SHEETS/FD-LL-4408.png' },
            { name: 'LL-4402', img: 'New Img/Flood-Light-Pic/FD-LL-4402.webp', pdf: 'assets/DATA-SHEETS/FD-LL-4402.png' },
            { name: 'LL-4401', img: 'New Img/Flood-Light-Pic/FD-LL-4401.webp', pdf: 'assets/DATA-SHEETS/FD-LL-4401.png' },
            { name: 'LL-4414', img: 'New Img/Flood-Light-Pic/LL-4414.webp', pdf: 'assets/DATA-SHEETS/LL-4414.png' },
            { name: 'LL-4415', img: 'New Img/Flood-Light-Pic/LL-4415.webp', pdf: 'assets/DATA-SHEETS/LL-4415.png' },
            { name: 'LL-4416', img: 'New Img/Flood-Light-Pic/LL-4416.webp', pdf: 'assets/DATA-SHEETS/LL-4416.png' },
            { name: 'LL-4420', img: 'New Img/Flood-Light-Pic/LL-4420.webp', pdf: 'assets/DATA-SHEETS/LL-4420.png' },
            { name: 'LL-4410', img: 'New Img/Flood-Light-Pic/LL-4410.webp', pdf: 'assets/DATA-SHEETS/LL-4410.png' },
        ],
    }
};


const productGalleryExtras = {
    'indoor/spot-light/LL-3012': ["New Img/Spot-light-Pic/LL-3012 2.webp","New Img/Spot-light-Pic/LL-3012 3.webp"],
    'indoor/spot-light/LL-3013': ["New Img/Spot-light-Pic/LL-3013 2.webp","New Img/Spot-light-Pic/LL-3013 3.webp"],
    'indoor/spot-light/LL-3019': ["New Img/Spot-light-Pic/LL-3019,2.webp","New Img/Spot-light-Pic/LL-3019,3.webp","New Img/Spot-light-Pic/LL-3019,4.webp","New Img/Spot-light-Pic/LL-3019,5.webp"],
    'indoor/spot-light/LL-3032-S': ["New Img/Spot-light-Pic/LL-3032-S,2.webp","New Img/Spot-light-Pic/LL-3032-S,3.webp","New Img/Spot-light-Pic/LL-3032-S,4.webp"],
    'indoor/spot-light/LL-3031': ["New Img/Spot-light-Pic/LL-3031 1.webp"],
    'indoor/spot-light/LL-3061': ["New Img/Spot-light-Pic/LL-3061,2.webp","New Img/Spot-light-Pic/LL-3061,4.webp","New Img/Spot-light-Pic/LL-3061,5.webp"],
    'indoor/spot-light/LL-3016': ["New Img/Spot-light-Pic/LL-3016,2.webp","New Img/Spot-light-Pic/LL-3016,3.webp"],
    'indoor/spot-light/LL-3017': ["New Img/Spot-light-Pic/LL-3017,2.webp","New Img/Spot-light-Pic/LL-3017,3.webp"],
    'indoor/spot-light/LL-3018': ["New Img/Spot-light-Pic/LL-3018,2.webp","New Img/Spot-light-Pic/LL-3018,3.webp"],
    'indoor/spot-light/LL-3003': ["New Img/Spot-light-Pic/SL-LL-3003,3.webp","New Img/Spot-light-Pic/SL-LL-3003,4.webp"],
    'indoor/spot-light/LL-2003': ["New Img/Spot-light-Pic/SL-LL-2003,2.webp","New Img/Spot-light-Pic/SL-LL-2003,3.webp","New Img/Spot-light-Pic/SL-LL-2003,4.webp","New Img/Spot-light-Pic/SL-LL-2003,5.webp","New Img/Spot-light-Pic/SL-LL-2003,6.webp"],
    'indoor/spot-light/LL-3009': ["New Img/Spot-light-Pic/LL-3009,1.webp","New Img/Spot-light-Pic/LL-3009,2.webp","New Img/Spot-light-Pic/LL-3009,3.webp"],
    'indoor/spot-light/LL-3033': ["New Img/Spot-light-Pic/LL-3033,1.webp","New Img/Spot-light-Pic/LL-3033,2.webp","New Img/Spot-light-Pic/LL-3033,3.webp","New Img/Spot-light-Pic/LL-3033,4.webp"],
    'indoor/down-light/LL-4001-R': ["New Img/Down-Light-Pic/LL-4001-R-12-15-18W,2.webp","New Img/Down-Light-Pic/LL-4001-R-12-15-18W,3.webp","New Img/Down-Light-Pic/LL-4001-R-12-15-18W,4.webp","New Img/Down-Light-Pic/LL-4001-R-12-15-18W,6.webp"],
    'indoor/down-light/LL-4001-S': ["New Img/Down-Light-Pic/LL-4001-S-9-18-24W,2-clean.webp","New Img/Down-Light-Pic/LL-4001-S-9-18-24W,2.webp","New Img/Down-Light-Pic/LL-4001-S-9-18-24W,3.webp"],
    'indoor/down-light/LL-2020': ["New Img/Down-Light-Pic/LL-2020,2.webp","New Img/Down-Light-Pic/LL-2020,3.webp","New Img/Down-Light-Pic/LL-2020,4.webp"],
    'indoor/down-light/LL-4302': ["New Img/Down-Light-Pic/LL-4302-12-18-25-40W,2.webp","New Img/Down-Light-Pic/LL-4302-12-18-25-40W,3.webp","New Img/Down-Light-Pic/LL-4302-12-18-25-40W,4.webp","New Img/Down-Light-Pic/LL-4302-12-18-25-40W,5.webp"],
    'indoor/down-light/LL-3024': ["New Img/Down-Light-Pic/LL-3024-clean.webp","New Img/Down-Light-Pic/LL-3024,1-clean.webp","New Img/Down-Light-Pic/LL-3024,1.webp","New Img/Down-Light-Pic/LL-3024,2-clean.webp","New Img/Down-Light-Pic/LL-3024,2.webp"],
    'indoor/lamps-tubes/T8': ["New Img/Lamp&Tubes-Pic/T8,1.webp"],
    'indoor/strip-light/LL-6002': ["New Img/Strip-light-Pic/LL-6002,1.webp","New Img/Strip-light-Pic/LL-6002,2.webp"],
    'indoor/strip-light/LL-6014': ["New Img/Strip-light-Pic/LL-6014,1.webp","New Img/Strip-light-Pic/LL-6014,2.webp"],
    'indoor/strip-light/ALP-REC': ["New Img/Strip-light-Pic/ALP-REC,1.webp","New Img/Strip-light-Pic/ALP-REC,2.webp"],
    'indoor/strip-light/ALP-SUR': ["New Img/Strip-light-Pic/ALP-SUR,1.webp","New Img/Strip-light-Pic/ALP-SUR,2.webp","New Img/Strip-light-Pic/ALP-SUR,3.webp","New Img/Strip-light-Pic/ALP-SUR,4.webp","New Img/Strip-light-Pic/ALP-SUR,5.webp","New Img/Strip-light-Pic/ALP-SUR,6.webp"],
    'indoor/strip-light/LL-6020': ["New Img/Strip-light-Pic/LL-6020,2.webp","New Img/Strip-light-Pic/LL-6020,3.webp","New Img/Strip-light-Pic/LL-6020.webp"],
    'indoor/strip-light/LL-6005': ["New Img/Strip-light-Pic/LL-6005,1.webp"],
    'indoor/mirror-light/LL-S304': ["New Img/Mirror-Lights-Pic/LL-S304,1.webp","New Img/Mirror-Lights-Pic/LL-S304,2.webp","New Img/Mirror-Lights-Pic/LL-S304,3.webp","New Img/Mirror-Lights-Pic/LL-S304,4.webp"],
    'indoor/mirror-light/LL-4612': ["New Img/Mirror-Lights-Pic/LL-4612,1-clean.webp","New Img/Mirror-Lights-Pic/LL-4612,1.webp","New Img/Mirror-Lights-Pic/LL-4612,2.webp","New Img/Mirror-Lights-Pic/LL-4612,3.webp"],
    'indoor/mirror-light/LL-5512': ["New Img/Mirror-Lights-Pic/LL-5512,1.webp"],
    'indoor/mirror-light/LL-S303': ["New Img/Mirror-Lights-Pic/LL-S303,1.webp","New Img/Mirror-Lights-Pic/LL-S303,2.webp"],
    'indoor/track-light/LL-5211': ["New Img/truck Light-Pic/LL-5211,1.webp"],
    'indoor/track-light/LL-5310': ["New Img/truck Light-Pic/LL-5310,1.webp","New Img/truck Light-Pic/LL-5310,3-clean.webp","New Img/truck Light-Pic/LL-5310,3.jpg"],
    'indoor/track-light/LL-5410': ["New Img/truck Light-Pic/LL-5410,1.webp","New Img/truck Light-Pic/LL-5410,2.webp","New Img/truck Light-Pic/LL-5410,3.webp"],
    'indoor/track-light/LL-0102-S': ["New Img/truck Light-Pic/LL-0102-S,1-clean.webp","New Img/truck Light-Pic/LL-0102-S,1.jpg"],
    'indoor/track-light/LL-0102': ["New Img/truck Light-Pic/LL-0102,1-D.jpg"],
    'indoor/track-light/LL-5001': ["New Img/truck Light-Pic/LL-5001,1.webp","New Img/truck Light-Pic/LL-5001,2.webp","New Img/truck Light-Pic/LL-5001,3.webp"],
    'indoor/chandelier-pendant/LL-310-1-SQ': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-1-SQ,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-1-SQ,2.webp"],
    'indoor/chandelier-pendant/LL-310-2-SQ': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ,2.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ,3.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ,4.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-SQ,5.webp"],
    'indoor/chandelier-pendant/LL-310-3-SQ': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-3-SQ,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-3-SQ,2.webp"],
    'indoor/chandelier-pendant/LL-2022': ["New Img/CHANDELIER & PENDANT-Pic/LL-2022,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-2022,2.webp","New Img/CHANDELIER & PENDANT-Pic/LL-2022,3.webp"],
    'indoor/chandelier-pendant/LL-310-1': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-1,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-1,2.webp"],
    'indoor/chandelier-pendant/LL-310-2-R': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-2-R,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-R,2.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-2-R,3.webp"],
    'indoor/chandelier-pendant/LL-310-3-R': ["New Img/CHANDELIER & PENDANT-Pic/LL-310-3-R,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-3-R,2.webp","New Img/CHANDELIER & PENDANT-Pic/LL-310-3-R,3.webp"],
    'indoor/chandelier-pendant/LL-313': ["New Img/CHANDELIER & PENDANT-Pic/LL-313,1.webp"],
    'indoor/chandelier-pendant/LL-4637': ["New Img/CHANDELIER & PENDANT-Pic/LL-4637,1.webp","New Img/CHANDELIER & PENDANT-Pic/LL-4637,2.webp"],
    'indoor/chandelier-pendant/LL-5565': ["New Img/CHANDELIER & PENDANT-Pic/LL-5565,1.webp"],
    'indoor/chandelier-pendant/LL-4586-3': ["New Img/CHANDELIER & PENDANT-Pic/LL-4586-3,1.webp"],
    'indoor/chandelier-pendant/LL-4596-3': ["New Img/CHANDELIER & PENDANT-Pic/LL-4596-3,1.webp"],
    'indoor/chandelier-pendant/LL-4597-3': ["New Img/CHANDELIER & PENDANT-Pic/LL-4597-3,1.webp"],
    'outdoor/industrial-light/LL-212': ["New Img/Industrial Light-Pic/LL-212,1.webp","New Img/Industrial Light-Pic/LL-212,2.webp","New Img/Industrial Light-Pic/LL-212,3.webp"],
    'outdoor/industrial-light/LL-222': ["New Img/Industrial Light-Pic/LL-222,1-clean.webp","New Img/Industrial Light-Pic/LL-222,1.webp"],
    'outdoor/industrial-light/LL-8003': ["New Img/Industrial Light-Pic/LL-8003,1.webp"],
    'outdoor/industrial-light/LL-BT-22': ["New Img/Industrial Light-Pic/LL-BT-22,1.webp","New Img/Industrial Light-Pic/LL-BT-22.webp"],
    'outdoor/external-light/LL-4503': ["New Img/External LIGHT-Pic/LL-4503,1.png","New Img/External LIGHT-Pic/LL-4503,2.png","New Img/External LIGHT-Pic/LL-4503.png"],
    'outdoor/external-light/LL-4506': ["New Img/External LIGHT-Pic/LL-4506,1.png","New Img/External LIGHT-Pic/LL-4506,1.webp","New Img/External LIGHT-Pic/LL-4506,2.png","New Img/External LIGHT-Pic/LL-4506,2.webp","New Img/External LIGHT-Pic/LL-4506,3.webp","New Img/External LIGHT-Pic/LL-4506,4.webp","New Img/External LIGHT-Pic/LL-4506.png"],
    'outdoor/external-light/LL-4581-R': ["New Img/External LIGHT-Pic/LL-4581-R,1.png","New Img/External LIGHT-Pic/LL-4581-R,1.webp","New Img/External LIGHT-Pic/LL-4581-R,2.png","New Img/External LIGHT-Pic/LL-4581-R,2.webp","New Img/External LIGHT-Pic/LL-4581-R,3.webp","New Img/External LIGHT-Pic/LL-4581-R,4.webp","New Img/External LIGHT-Pic/LL-4581-R.png"],
    'outdoor/external-light/LL-4581-S': ["New Img/External LIGHT-Pic/LL-4581-S,1.webp"],
    'outdoor/external-light/LL-4582-R': ["New Img/External LIGHT-Pic/LL-4582-R,1.webp","New Img/External LIGHT-Pic/LL-4582-R,2.png","New Img/External LIGHT-Pic/LL-4582-R,2.webp","New Img/External LIGHT-Pic/LL-4582-R,3.webp","New Img/External LIGHT-Pic/LL-4582-R,4.webp","New Img/External LIGHT-Pic/LL-4582-R,5.webp","New Img/External LIGHT-Pic/LL-4582-R.png"],
    'outdoor/external-light/LL-544': ["New Img/External LIGHT-Pic/LL-544,1.png","New Img/External LIGHT-Pic/LL-544,1.webp","New Img/External LIGHT-Pic/LL-544,2.png","New Img/External LIGHT-Pic/LL-544.png"],
    'outdoor/external-light/LL-663': ["New Img/External LIGHT-Pic/LL-663,1.png","New Img/External LIGHT-Pic/LL-663,2.png","New Img/External LIGHT-Pic/LL-663,2.webp","New Img/External LIGHT-Pic/LL-663,3.webp","New Img/External LIGHT-Pic/LL-663,4.webp"],
    'outdoor/external-light/LL-690': ["New Img/External LIGHT-Pic/LL-690,1.png","New Img/External LIGHT-Pic/LL-690,2.png","New Img/External LIGHT-Pic/LL-690.png"],
    'outdoor/external-light/LL-692': ["New Img/External LIGHT-Pic/LL-692,1.webp","New Img/External LIGHT-Pic/LL-692,2.webp"],
    'outdoor/external-light/LL-1621': ["New Img/External LIGHT-Pic/LL-1621,1.png","New Img/External LIGHT-Pic/LL-1621,2.png","New Img/External LIGHT-Pic/LL-1621.png"],
    'outdoor/external-light/LL-4582-S': ["New Img/External LIGHT-Pic/LL-4582-S,1.png","New Img/External LIGHT-Pic/LL-4582-S,1.webp","New Img/External LIGHT-Pic/LL-4582-S,2.png","New Img/External LIGHT-Pic/LL-4582-S,2.webp","New Img/External LIGHT-Pic/LL-4582-S,3.webp","New Img/External LIGHT-Pic/LL-4582-S.png"],
    'outdoor/external-light/LL-4583-2': ["New Img/External LIGHT-Pic/LL-4583-2,1.webp","New Img/External LIGHT-Pic/LL-4583-2,2.webp"],
    'outdoor/external-light/LL-4584-1': ["New Img/External LIGHT-Pic/LL-4584-1,2.webp","New Img/External LIGHT-Pic/LL-4584-1,4.webp","New Img/External LIGHT-Pic/LL-4584-1.webp"],
    'outdoor/external-light/LL-555': ["New Img/External LIGHT-Pic/LL-555,1.png","New Img/External LIGHT-Pic/LL-555,2.png","New Img/External LIGHT-Pic/LL-555.png"],
    'outdoor/external-light/LL-4507': ["New Img/External LIGHT-Pic/LL-4507,1.png","New Img/External LIGHT-Pic/LL-4507,1.webp","New Img/External LIGHT-Pic/LL-4507,2.png","New Img/External LIGHT-Pic/LL-4507.png"],
    'outdoor/external-light/LL-4585': ["New Img/External LIGHT-Pic/LL-4585-2,1.png","New Img/External LIGHT-Pic/LL-4585-2,2.png","New Img/External LIGHT-Pic/LL-4585-2.png","New Img/External LIGHT-Pic/LL-4585,2.webp","New Img/External LIGHT-Pic/LL-4585,3.webp","New Img/External LIGHT-Pic/LL-4585,4.webp"],
    'outdoor/external-light/LL-4489': ["New Img/External LIGHT-Pic/LL-4489,1.png","New Img/External LIGHT-Pic/LL-4489,1.webp","New Img/External LIGHT-Pic/LL-4489,2.png","New Img/External LIGHT-Pic/LL-4489,2.webp","New Img/External LIGHT-Pic/LL-4489,3.webp","New Img/External LIGHT-Pic/LL-4489.png"],
    'outdoor/external-light/LL-693': ["New Img/External LIGHT-Pic/LL-693,1.png","New Img/External LIGHT-Pic/LL-693,1.webp","New Img/External LIGHT-Pic/LL-693,2.png","New Img/External LIGHT-Pic/LL-693,2.webp","New Img/External LIGHT-Pic/LL-693,3.webp","New Img/External LIGHT-Pic/LL-693.png"],
    'outdoor/external-light/LL-4512': ["New Img/External LIGHT-Pic/LL-4512,1.png","New Img/External LIGHT-Pic/LL-4512,1.webp","New Img/External LIGHT-Pic/LL-4512.png"],
    'outdoor/pole-bollard-light/LL-4407': ["New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4407,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4407,2.webp"],
    'outdoor/pole-bollard-light/BL-LL-4408': ["New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4408,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/BL-LL-4408,2.webp"],
    'outdoor/pole-bollard-light/LL-4400': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4400,1.webp"],
    'outdoor/pole-bollard-light/LL-4403': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4403,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4403,2.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4403,3.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4403,4.webp"],
    'outdoor/pole-bollard-light/LL-4404': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4404,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4404,2.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4404,3.webp"],
    'outdoor/pole-bollard-light/LL-4405': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4405,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4405,3.webp"],
    'outdoor/pole-bollard-light/LL-4406': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4406,1.svg"],
    'outdoor/pole-bollard-light/LL-4405-2': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4405-2,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4405-2,2.webp"],
    'outdoor/pole-bollard-light/LL-4412': ["New Img/POLE & BOLLARD LIGHT-Pic/LL-4412,1.webp","New Img/POLE & BOLLARD LIGHT-Pic/LL-4412,2.webp"],
    'outdoor/up-light/LL-0720': ["New Img/UP-LIGHT-Pic/LL-0720,1.webp","New Img/UP-LIGHT-Pic/LL-0720,2.webp","New Img/UP-LIGHT-Pic/LL-0720,3.webp"],
    'outdoor/up-light/LL-0722': ["New Img/UP-LIGHT-Pic/LL-0722,1.webp","New Img/UP-LIGHT-Pic/LL-0722,2.webp"],
    'outdoor/up-light/LL-2133': ["New Img/UP-LIGHT-Pic/LL-2133,1.webp"],
    'outdoor/up-light/LL-9012': ["New Img/UP-LIGHT-Pic/LL-9012,1.webp","New Img/UP-LIGHT-Pic/LL-9012,2.webp"],
    'outdoor/up-light/LL-9013': ["New Img/UP-LIGHT-Pic/LL-9013,1.webp","New Img/UP-LIGHT-Pic/LL-9013,2.webp","New Img/UP-LIGHT-Pic/LL-9013,3.webp"],
    'outdoor/up-light/LL-0007': ["New Img/UP-LIGHT-Pic/LL-0007,1.webp","New Img/UP-LIGHT-Pic/LL-0007,2.webp"],
    'outdoor/ceiling-light/LL-1014': ["New Img/Ceiling light-Pic/LL-1014,1.webp","New Img/Ceiling light-Pic/LL-1014,2.webp","New Img/Ceiling light-Pic/LL-1014,3.webp"],
    'outdoor/ceiling-light/LL-1015': ["New Img/Ceiling light-Pic/LL-1015,1.webp","New Img/Ceiling light-Pic/LL-1015,2.webp"],
    'outdoor/ceiling-light/LL-1016': ["New Img/Ceiling light-Pic/LL-1016,1-clean.webp","New Img/Ceiling light-Pic/LL-1016,1.webp"],
    'outdoor/ceiling-light/LL-1017-S': ["New Img/Ceiling light-Pic/LL-1017-S,1.webp","New Img/Ceiling light-Pic/LL-1017-S,2.webp"],
    'outdoor/flood-light/LL-4407': ["New Img/Flood-Light-Pic/FD-LL-4407,1.webp","New Img/Flood-Light-Pic/FD-LL-4407,2.webp","New Img/Flood-Light-Pic/FD-LL-4407.webp","New Img/Flood-Light-Pic/LL-4407,1.webp","New Img/Flood-Light-Pic/LL-4407,2.webp"],
    'outdoor/flood-light/LL-4407-4': ["New Img/Flood-Light-Pic/LL-4407-4,1.webp"],
    'outdoor/flood-light/LL-4408': ["New Img/Flood-Light-Pic/FD-LL-4408,1.webp","New Img/Flood-Light-Pic/FD-LL-4408,2.webp"],
};

function getGalleryExtraThumbnails(category, type, productName) {
    const k = `${category}/${type}/${productName}`;
    return productGalleryExtras[k] || [];
}

function productAssetImgUrl(relPath) {
    if (!relPath) return '';
    const prefix = 'assets/Products Img/';
    return prefix + relPath.split('/').map(encodeURIComponent).join('/');
}

function encodeGalleryPathsForDataAttr(paths) {
    if (!paths || !paths.length) return '';
    try {
        const json = JSON.stringify(paths);
        if (typeof TextEncoder !== 'undefined') {
            const bytes = new TextEncoder().encode(json);
            let binary = '';
            bytes.forEach((b) => {
                binary += String.fromCharCode(b);
            });
            return btoa(binary);
        }
        return btoa(unescape(encodeURIComponent(json)));
    } catch (e) {
        return '';
    }
}

function parseGalleryPathsFromCard(card, baseAttrName) {
    const b64 = card.getAttribute(`data-${baseAttrName}-b64`);
    if (b64) {
        try {
            const binary = atob(b64);
            let json;
            if (typeof TextDecoder !== 'undefined') {
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) {
                    bytes[i] = binary.charCodeAt(i);
                }
                json = new TextDecoder().decode(bytes);
            } else {
                json = decodeURIComponent(escape(binary));
            }
            const arr = JSON.parse(json);
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            /* fall through */
        }
    }
    const raw = card.getAttribute(`data-${baseAttrName}`);
    if (raw) {
        try {
            const arr = JSON.parse(raw);
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            /* fall through */
        }
    }
    return [];
}

function buildGalleryProbePaths(productImg, productName, index) {
    const exts = ['webp', 'png', 'jpg', 'jpeg'];
    const paths = [];
    const dir = productImg.includes('/') ? productImg.slice(0, productImg.lastIndexOf('/') + 1) : '';
    const imgBase = productImg.replace(/\.(png|jpg|jpeg|webp)$/i, '');
    const baseName = productName.replace(/[^a-zA-Z0-9-]/g, '');
    for (const ext of exts) {
        paths.push(`${imgBase},${index}.${ext}`);
        paths.push(`${imgBase} ${index}.${ext}`);
        paths.push(`${baseName},${index}.${ext}`);
        paths.push(`${baseName} ${index}.${ext}`);
        if (dir && productName) {
            paths.push(`${dir}${productName},${index}.${ext}`);
            paths.push(`${dir}${productName} ${index}.${ext}`);
        }
    }
    return [...new Set(paths)];
}

function applyLunaOrderToGallery(category, type, productName, leadThumbnails, thumbnails) {
    const key = `${category}/${type}/${productName}`;
    if (typeof lunaGalleryOrder === 'undefined' || !lunaGalleryOrder[key] || !lunaGalleryOrder[key].length) {
        return { leadThumbnails, thumbnails };
    }
    const order = lunaGalleryOrder[key];
    function sortByOrder(arr) {
        return [...arr].sort((a, b) => {
            const ia = order.indexOf(a);
            const ib = order.indexOf(b);
            if (ia === -1 && ib === -1) return a.localeCompare(b);
            if (ia === -1) return 1;
            if (ib === -1) return -1;
            return ia - ib;
        });
    }
    return {
        leadThumbnails: sortByOrder(leadThumbnails),
        thumbnails: sortByOrder(thumbnails),
    };
}

function mergeGalleryFromProductCard(card, productName, productImg) {
    let leadThumbnails = parseGalleryPathsFromCard(card, 'lead-thumbnails');
    let thumbnails = parseGalleryPathsFromCard(card, 'thumbnails');
    const category = card.getAttribute('data-category') || '';
    const type = card.getAttribute('data-type') || '';
    if (category && type) {
        const extra = getGalleryExtraThumbnails(category, type, productName);
        const seen = new Set([productImg, ...leadThumbnails, ...thumbnails]);
        for (const rel of extra) {
            if (!seen.has(rel)) {
                thumbnails.push(rel);
                seen.add(rel);
            }
        }
    }
    const luna = applyLunaOrderToGallery(category, type, productName, leadThumbnails, thumbnails);
    return { leadThumbnails: luna.leadThumbnails, thumbnails: luna.thumbnails };
}

function buildCardGalleryData(category, type, product) {
    const extra = getGalleryExtraThumbnails(category, type, product.name);
    const leadThumbnails = product.leadThumbnails ? [...product.leadThumbnails] : [];
    const thumbnails = product.thumbnails ? [...product.thumbnails] : [];
    const seen = new Set([product.img, ...leadThumbnails, ...thumbnails]);
    for (const rel of extra) {
        if (!seen.has(rel)) {
            thumbnails.push(rel);
            seen.add(rel);
        }
    }
    return applyLunaOrderToGallery(category, type, product.name, leadThumbnails, thumbnails);
}

// --- Product code search (category pages + products.html) ---
function usesProductPageScript() {
    if (typeof document === 'undefined') return false;
    return Array.from(document.scripts || []).some((s) => (s.src || '').includes('product-page.js'));
}

function normalizeProductSearchInput(raw) {
    if (raw == null) return '';
    const arabic = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    const latin = '0123456789';
    let s = String(raw).trim().toLowerCase();
    for (let i = 0; i < 10; i++) {
        s = s.split(arabic[i]).join(latin[i]);
    }
    return s.replace(/\s+/g, '');
}

function productNameMatchesQuery(productName, queryNorm) {
    if (!queryNorm) return true;
    const nameNorm = (productName || '').toLowerCase().replace(/\s+/g, '');
    if (nameNorm.includes(queryNorm)) return true;
    const nameAlnum = nameNorm.replace(/[^a-z0-9]/g, '');
    const queryAlnum = queryNorm.replace(/[^a-z0-9]/g, '');
    if (queryAlnum && nameAlnum.includes(queryAlnum)) return true;
    return false;
}

function ensureProductSearchStyles() {
    if (document.getElementById('product-code-search-styles')) return;
    const style = document.createElement('style');
    style.id = 'product-code-search-styles';
    style.textContent = `
.product-code-search-wrap{margin-bottom:20px;padding:16px 20px;background:rgba(255,255,255,0.98);border-radius:10px;border:1px solid rgba(47,47,47,0.1);box-shadow:0 2px 10px rgba(0,0,0,0.05)}
.product-code-search-label{display:block;font-size:0.85rem;font-weight:600;color:#2F2F2F;margin-bottom:8px;letter-spacing:0.3px}
.product-code-search-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.product-code-search-input{flex:1;min-width:200px;padding:12px 16px;border:1px solid rgba(47,47,47,0.2);border-radius:8px;font-size:0.95rem;font-family:inherit;color:#2F2F2F;background:#fff;transition:border-color .2s,box-shadow .2s}
.product-code-search-input:focus{outline:none;border-color:#B22A1F;box-shadow:0 0 0 3px rgba(178,42,31,0.2)}
.product-code-search-input::placeholder{color:#888}
.product-code-search-clear{padding:10px 18px;font-size:0.9rem;font-weight:600;border-radius:8px;border:1px solid rgba(47,47,47,0.2);background:#fff;color:#2F2F2F;cursor:pointer;transition:all .2s}
.product-code-search-clear:hover{border-color:#B22A1F;color:#B22A1F;background:rgba(178,42,31,0.06)}
.product-code-search-hint{margin-top:10px;font-size:0.85rem;color:#B22A1F}
body.dark-theme .product-code-search-wrap{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.12)}
body.dark-theme .product-code-search-label{color:rgba(255,255,255,0.9)}
body.dark-theme .product-code-search-input{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.15);color:#fff}
body.dark-theme .product-code-search-input::placeholder{color:rgba(255,255,255,0.45)}
body.dark-theme .product-code-search-clear{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.2);color:#fff}
body.dark-theme .product-code-search-clear:hover{border-color:#B22A1F;color:#fff}
@media (max-width:480px){.product-code-search-wrap{padding:12px 14px}.product-code-search-input{min-width:0;width:100%}}
`;
    document.head.appendChild(style);
}

function applyProductGridSearch(gridId) {
    gridId = gridId || 'productsGrid';
    const grid = document.getElementById(gridId);
    const input = document.getElementById('productCodeSearchInput');
    const countEl = document.getElementById('productCount');
    const hint = document.getElementById('productCodeSearchHint');
    if (!grid || !input) return;

    const queryNorm = normalizeProductSearchInput(input.value);
    const cards = grid.querySelectorAll('.spotlight-product-card');
    const total = parseInt(grid.dataset.totalProductCount, 10) || cards.length;
    let visible = 0;

    if (!queryNorm) {
        cards.forEach((card) => {
            card.style.display = '';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
        });
        if (typeof initializeProductsFilter === 'function') {
            initializeProductsFilter();
        }
        if (countEl) countEl.textContent = String(total);
        if (hint) hint.hidden = true;
        return;
    }

    cards.forEach((card) => {
        const name = card.getAttribute('data-product-name') || '';
        const match = productNameMatchesQuery(name, queryNorm);
        if (match) {
            card.style.display = '';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
            visible++;
        } else {
            card.style.display = 'none';
        }
    });

    if (countEl) countEl.textContent = String(visible);
    if (hint) {
        if (visible === 0 && cards.length > 0) {
            hint.hidden = false;
            hint.textContent = 'No products match this code. Try e.g. LL-3012 or 3012.';
        } else {
            hint.hidden = true;
        }
    }
}

function setupProductGridSearch(gridId) {
    gridId = gridId || 'productsGrid';
    const grid = document.getElementById(gridId);
    if (!grid) return;

    ensureProductSearchStyles();

    let wrap = document.getElementById('productCodeSearchWrap');
    if (!wrap) {
        wrap = document.createElement('div');
        wrap.id = 'productCodeSearchWrap';
        wrap.className = 'product-code-search-wrap';
        wrap.setAttribute('role', 'search');
        wrap.innerHTML =
            '<label class="product-code-search-label" for="productCodeSearchInput">Search by product code</label>' +
            '<div class="product-code-search-row">' +
            '<input type="search" id="productCodeSearchInput" class="product-code-search-input" placeholder="e.g. LL-3012, 4583-1, T8" autocomplete="off" spellcheck="false" enterkeyhint="search" />' +
            '<button type="button" id="productCodeSearchClear" class="product-code-search-clear">Clear</button>' +
            '</div>' +
            '<p class="product-code-search-hint" id="productCodeSearchHint" hidden></p>';

        const countBar = document.querySelector('.products-count-bar');
        if (countBar && countBar.parentNode) {
            countBar.after(wrap);
        } else if (grid.parentNode) {
            grid.parentNode.insertBefore(wrap, grid);
        }

        const input = document.getElementById('productCodeSearchInput');
        const clearBtn = document.getElementById('productCodeSearchClear');
        const run = () => applyProductGridSearch(gridId);
        if (input) {
            input.addEventListener('input', run);
            input.addEventListener('search', run);
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (input) input.value = '';
                run();
                if (input) input.focus();
            });
        }
    }

    const n = grid.querySelectorAll('.spotlight-product-card').length;
    grid.dataset.totalProductCount = String(n);
    applyProductGridSearch(gridId);
}

// Function to generate product cards
function generateProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    if (typeof usesProductPageScript === 'function' && usesProductPageScript()) return;

    let html = '';

    // Generate Indoor Products
    Object.keys(productsData.indoor).forEach(type => {
        productsData.indoor[type].forEach(product => {
            const imgPath = `assets/Products Img/${product.img}`;
            const dataSheetPath = getDataSheetPath(product.name);
            const description = product.description || `Premium ${getCategoryName(type).toLowerCase()} solution designed for modern lighting applications.`;
            const gallery = buildCardGalleryData('indoor', type, product);
            const leadAttr = gallery.leadThumbnails.length > 0 ? ` data-lead-thumbnails-b64="${encodeGalleryPathsForDataAttr(gallery.leadThumbnails)}"` : '';
            const thumbAttr = gallery.thumbnails.length > 0 ? ` data-thumbnails-b64="${encodeGalleryPathsForDataAttr(gallery.thumbnails)}"` : '';
            
            // Get product title from mapping (for modal only)
            const productTitle = (typeof getProductTitle === 'function') ? getProductTitle(product.name) : null;
            
            html += `
                <div class="spotlight-product-card product-card" data-category="indoor" data-type="${type}" data-product-name="${product.name}" data-product-title="${productTitle ? productTitle.replace(/"/g, '&quot;') : ''}" data-product-datasheet="${dataSheetPath}" data-product-img="${product.img}" data-product-desc="${description.replace(/"/g, '&quot;')}"${leadAttr}${thumbAttr}>
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
            const gallery = buildCardGalleryData('outdoor', type, product);
            const leadAttr = gallery.leadThumbnails.length > 0 ? ` data-lead-thumbnails-b64="${encodeGalleryPathsForDataAttr(gallery.leadThumbnails)}"` : '';
            const thumbAttr = gallery.thumbnails.length > 0 ? ` data-thumbnails-b64="${encodeGalleryPathsForDataAttr(gallery.thumbnails)}"` : '';
            
            // Get product title from mapping (for modal only)
            const productTitle = (typeof getProductTitle === 'function') ? getProductTitle(product.name) : null;
            
            html += `
                <div class="spotlight-product-card product-card" data-category="outdoor" data-type="${type}" data-product-name="${product.name}" data-product-title="${productTitle ? productTitle.replace(/"/g, '&quot;') : ''}" data-product-datasheet="${dataSheetPath}" data-product-img="${product.img}" data-product-desc="${description.replace(/"/g, '&quot;')}"${leadAttr}${thumbAttr}>
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
    const n = productsGrid.querySelectorAll('.spotlight-product-card').length;
    productsGrid.dataset.totalProductCount = String(n);
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

// Initialize on page load (products.html only; category pages use product-page.js)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof usesProductPageScript === 'function' && usesProductPageScript()) return;
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
            if (!usesProductPageScript() && typeof setupProductGridSearch === 'function') {
                setupProductGridSearch('productsGrid');
            }
            if (typeof applyCategoryFilterFromUrl === 'function') {
                applyCategoryFilterFromUrl();
            }
        }, 100);
    });
} else if (typeof usesProductPageScript !== 'function' || !usesProductPageScript()) {
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
        if (!usesProductPageScript() && typeof setupProductGridSearch === 'function') {
            setupProductGridSearch('productsGrid');
        }
        if (typeof applyCategoryFilterFromUrl === 'function') {
            applyCategoryFilterFromUrl();
        }
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
        
        document.body.classList.remove('modal-open');
        modal.classList.remove('active');
        
        if (typeof gsap !== 'undefined') {
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
                        modal.style.visibility = 'hidden';
                    }
                });
            } else {
                // Old modal style (centered)
                gsap.to(modal, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        modal.style.display = 'none';
                        modal.style.visibility = 'hidden';
                    }
                });
            }
        } else {
            // Fallback without GSAP
            modal.style.display = 'none';
            modal.style.visibility = 'hidden';
            if (modalContent) {
                modalContent.style.transform = 'translateX(100%)';
                modalContent.style.opacity = '0';
            }
            if (overlay) {
                overlay.style.opacity = '0';
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
    
    // Open modal from new button style
    openButtons.forEach(button => {
        // Handler function for both click and touch
        const handleOpen = (e) => {
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
                // Get product title from mapping or data attribute
                const productTitle = card.getAttribute('data-product-title') || 
                                   (typeof getProductTitle === 'function' ? getProductTitle(productName) : null) ||
                                   productName;
                titleEl.innerHTML = productTitle;
                
                // Add attribution to Luna-Luce.eu
                let descText = productDesc;
                descText += '<br><br><small style="color: #666; font-style: italic;">Product from <a href="https://luna-luce.eu" target="_blank" rel="noopener" style="color: #B22A1F; text-decoration: underline;">Luna-Luce.eu</a></small>';
                descEl.innerHTML = descText;
                imgEl.src = typeof productAssetImgUrl === 'function' ? productAssetImgUrl(productImg) : `assets/Products Img/${productImg}`;
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
                // Update data sheet button to open modal
                if (pdfEl) {
                    pdfEl.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openDataSheetModal(productDataSheet, productName);
                    };
                }
                
                // Setup thumbnail gallery
                if (thumbnailGallery) {
                    thumbnailGallery.innerHTML = '';
                    const merged = mergeGalleryFromProductCard(card, productName, productImg);
                    const leadThumbnails = merged.leadThumbnails;
                    const thumbnails = merged.thumbnails;

                    const seenPaths = new Set();
                    const toImgSrc = (rel) =>
                        typeof productAssetImgUrl === 'function' ? productAssetImgUrl(rel) : `assets/Products Img/${rel}`;
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
                            imgEl.src = toImgSrc(relPath);
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
                
                // Ensure modal is visible immediately as fallback
                if (overlay) {
                    overlay.style.opacity = '1';
                }
                if (modalContent) {
                    modalContent.style.opacity = '1';
                    modalContent.style.transform = 'translateX(0)';
                }
                
                // Add GSAP animation if available
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(overlay,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.4 }
                    );
                    
                    gsap.fromTo(modalContent,
                        { x: '100%', opacity: 0 },
                        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
                    );
                }
            } else {
                // Old modal structure (fallback)
                const nameEl = document.getElementById('modalProductName');
                const categoryEl = document.getElementById('modalProductCategory');
                const mainImgEl = document.getElementById('modalMainImage');
                const viewPdfEl = document.getElementById('modalViewPDF');
                const downloadPdfEl = document.getElementById('modalDownloadPDF');
                
                // Get product title from mapping or data attribute
                const productTitle = card.getAttribute('data-product-title') || 
                                   (typeof getProductTitle === 'function' ? getProductTitle(productName) : null) ||
                                   productName;
                if (nameEl) nameEl.innerHTML = productTitle;
                if (categoryEl) categoryEl.textContent = card.querySelector('.product-category')?.textContent || '';
                if (mainImgEl) mainImgEl.src = `assets/Products Img/${productImg}`;
                const dataSheetPath = card.getAttribute('data-product-datasheet') || getDataSheetPath(productName);
                if (viewPdfEl) viewPdfEl.href = dataSheetPath;
                if (downloadPdfEl) downloadPdfEl.href = dataSheetPath;
                
                modal.classList.add('active');
                modal.style.display = 'flex';
                gsap.fromTo(modal, 
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3 }
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
            
            // Get product title from mapping
            const productTitle = (typeof getProductTitle === 'function') ? getProductTitle(productName) : null;
            if (nameEl) nameEl.innerHTML = productTitle || productName;
            if (mainImgEl) mainImgEl.src = `assets/Products Img/${productImg}`;
            if (pdfEl) {
                pdfEl.href = productDataSheet;
                pdfEl.target = '_blank';
            }
            
            modal.classList.add('active');
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
        modalImage.style.display = 'block';
        modalImage.removeAttribute('src');
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
