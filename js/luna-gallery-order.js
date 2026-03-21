/**
 * Optional display order for product gallery thumbnails (matches luna-luce.eu).
 * Keys: "category/type/productName" e.g. "indoor/spot-light/LL-3012"
 * Values: array of relative paths under assets/Products Img/ in desired order.
 * Paths listed first sort before paths not listed (those keep stable order at end).
 */
var lunaGalleryOrder = {
    // Example:
    // 'indoor/lamps-tubes/T8': [
    //     'New Img/Lamp&Tubes-Pic/T8.webp',
    //     'New Img/Lamp&Tubes-Pic/T8,1.webp',
    // ],
};
