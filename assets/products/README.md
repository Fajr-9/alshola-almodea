# هيكل مجلدات المنتجات

## تنظيم الصور وملفات PDF

### الهيكل الحالي:

```
assets/products/
├── indoor/
│   ├── spot-light/
│   │   └── spot-light-1.jpg (وضع الصور هنا)
│   ├── down-light/
│   │   └── down-light-1.jpg
│   ├── lamps-tubes/
│   │   └── led-tube-1.jpg
│   ├── strip-light/
│   │   └── led-strip-1.jpg
│   ├── mirror-light/
│   │   └── mirror-light-1.jpg
│   ├── track-light/
│   │   └── track-light-1.jpg
│   └── chandelier-pendant/
│       └── chandelier-1.jpg
│
├── outdoor/
│   ├── industrial-light/
│   │   └── industrial-light-1.jpg
│   ├── external-light/
│   │   └── external-light-1.jpg
│   ├── pole-bollard-light/
│   │   └── pole-light-1.jpg
│   ├── up-light/
│   │   └── up-light-1.jpg
│   ├── ceiling-light/
│   │   └── ceiling-light-1.jpg
│   └── flood-light/
│       └── flood-light-1.jpg
│
└── pdf/
    ├── indoor/
    │   ├── spot-light/
    │   │   └── spot-light-1.pdf (وضع ملفات PDF هنا)
    │   ├── down-light/
    │   │   └── down-light-1.pdf
    │   ├── lamps-tubes/
    │   │   └── led-tube-1.pdf
    │   ├── strip-light/
    │   │   └── led-strip-1.pdf
    │   ├── mirror-light/
    │   │   └── mirror-light-1.pdf
    │   ├── track-light/
    │   │   └── track-light-1.pdf
    │   └── chandelier-pendant/
    │       └── chandelier-1.pdf
    │
    └── outdoor/
        ├── industrial-light/
        │   └── industrial-light-1.pdf
        ├── external-light/
        │   └── external-light-1.pdf
        ├── pole-bollard-light/
        │   └── pole-light-1.pdf
        ├── up-light/
        │   └── up-light-1.pdf
        ├── ceiling-light/
        │   └── ceiling-light-1.pdf
        └── flood-light/
            └── flood-light-1.pdf
```

## أسماء المنتجات الحالية:

### Indoor Lighting (الإضاءة الداخلية):
1. **Spot Light**: LED Spot Light
2. **Down Light**: Recessed Down Light
3. **Lamps & Tubes**: LED Tube Light
4. **Strip Light**: LED Strip Light
5. **Mirror Light**: Mirror LED Light
6. **Track Light**: Track Lighting System
7. **Chandelier & Pendant**: Modern Chandelier

### Outdoor Lighting (الإضاءة الخارجية):
1. **Industrial Light**: Industrial LED Light
2. **External Light**: External Wall Light
3. **Pole & Bollard Light**: LED Pole Light
4. **Up Light**: Ground Up Light
5. **Ceiling Light**: Outdoor Ceiling Light
6. **Flood Light**: LED Flood Light

## كيفية إضافة منتجات جديدة:

1. ضع الصورة في المجلد المناسب: `assets/products/[indoor/outdoor]/[نوع-المنتج]/[اسم-المنتج].jpg`
2. ضع ملف PDF في: `assets/products/pdf/[indoor/outdoor]/[نوع-المنتج]/[اسم-المنتج].pdf`
3. أضف بطاقة منتج جديدة في `products.html` بنفس الهيكل

## ملاحظات:
- استخدم أسماء ملفات واضحة ومتسقة
- تأكد من أن أسماء الملفات تطابق الأسماء في HTML
- الصور الموصى بها: JPG, PNG, WebP
- ملفات PDF: يجب أن تكون بصيغة PDF


