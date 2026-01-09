import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Star, Check, Truck, Shield, RefreshCw, ChevronDown, Heart, Share2, Zap, Clock, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedDiv = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedFlavor, setSelectedFlavor] = useState(0);

    const flavors = [
        {
            id: 'peach-mango',
            name: 'Peach Mango',
            tagline: 'Pause a little',
            color: 'bg-peach-bg text-peach-text',
            price: 399,
            originalPrice: 420
        },
        {
            id: 'lemon-mint',
            name: 'Lemon Mint',
            tagline: 'Lie down',
            color: 'bg-lemon-bg text-lemon-text',
            price: 399,
            originalPrice: 420
        },
        {
            id: 'butterscotch',
            name: 'Butterscotch',
            tagline: 'Be right back',
            color: 'bg-butterscotch-bg text-butterscotch-text',
            price: 399,
            originalPrice: 420
        },
        {
            id: 'watermelon',
            name: 'Watermelon',
            tagline: 'What a saviour',
            color: 'bg-watermelon-bg text-watermelon-text',
            price: 399,
            originalPrice: 420
        },
    ];

    const currentFlavor = flavors[selectedFlavor];
    const price = currentFlavor.price;
    const originalPrice = currentFlavor.originalPrice;
    const savings = originalPrice - price;

    const images = [
        { id: 0, label: 'Front View', src: '/images/product/bottle-front.png' },
        { id: 1, label: 'Pack & Lifestyle', src: '/images/product/pack-lifestyle.png' },
        { id: 2, label: 'Night Use', src: '/images/product/night-use.png' },
        { id: 3, label: 'Bottles Group', src: '/images/product/bottles-group.png' },
        { id: 4, label: 'Box Packaging', src: '/images/product/box-packaging.png' },
    ];

    const benefits = [
        { icon: Zap, title: 'Fast Acting', desc: 'Works in 10-15 minutes' },
        { icon: Clock, title: 'Long Shelf Life', desc: '12 months stability' },
        { icon: Package, title: 'Portable', desc: 'Fits in your pocket' },
    ];

    const accordionItems = [
        {
            title: 'Product Description',
            content: `Grab instant energy on the go with PocketGluca's glucose shots! This handy set of 6 delivers a delicious peach-mango punch in pocket-sized 60ml bottles—perfect for tossing in your bag, gym kit, or desk drawer.

Made with natural flavours, these quick-acting shots give you the boost you need, whenever you need it. Whether you're powering through a workout, beating the afternoon slump, or staying ready for life's surprises, PocketGluca keeps you energized and unstoppable.

Tiny size, mighty results!`
        },
        {
            title: 'Ingredients',
            content: `• Water
• Dextrose (Glucose) - 15g
• Natural Peach Flavouring
• Natural Mango Flavouring
• Citric Acid
• Potassium Sorbate (Preservative)

No artificial colours. No added fats. No palm oil. Vegan friendly.`
        },
        {
            title: 'How to Use',
            content: `1. Twist open the cap
2. Drink the entire contents (60ml)
3. Wait 15 minutes
4. Check your glucose levels
5. Repeat if necessary

Best consumed at room temperature. No mixing or preparation required.`
        },
        {
            title: 'Nutrition Facts',
            content: `Per 60ml serving:
• Energy: 60 kcal
• Carbohydrates: 15g
  - of which Sugars: 15g
• Protein: 0g
• Fat: 0g
• Sodium: 10mg`
        },
    ];

    const reviews = [
        { name: 'Priya K.', rating: 5, text: 'Finally something that works fast and tastes good!', verified: true },
        { name: 'Rahul M.', rating: 5, text: 'Perfect for my gym bag. No more messy juice boxes.', verified: true },
        { name: 'Anita S.', rating: 5, text: 'As a T1D mom, these are lifesavers for night lows.', verified: true },
    ];

    return (
        <div className="bg-cream-100 min-h-screen">

            {/* Sticky top bar */}
            <div className="bg-white border-b border-gray-100 sticky top-[6.75rem] z-30">
                <div className="container-lg py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-green-600 font-medium">972 in stock • Ships January 2026</span>
                    </div>
                    <span className="text-sm text-gray-500 hidden sm:block">We know the feeling ❤️</span>
                </div>
            </div>

            <div className="container-lg py-12 md:py-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* ========== LEFT: GALLERY ========== */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Main Image */}
                        <AnimatedDiv>
                            <div className="aspect-square bg-white rounded-[2rem] overflow-hidden relative group shadow-sm border border-gray-100">
                                {/* Badges */}
                                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                                    <span className="inline-block px-3 py-1.5 bg-brand-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        BESTSELLER
                                    </span>
                                    <span className="inline-block px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        SAVE ₹{savings}
                                    </span>
                                </div>

                                {/* Action buttons */}
                                <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500'
                                            }`}
                                    >
                                        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                                    </motion.button>
                                    <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-brand-500 shadow-lg transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Product Visual */}
                                <motion.div
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-full flex items-center justify-center p-4"
                                >
                                    <motion.img
                                        src={images[selectedImage]?.src}
                                        alt={images[selectedImage]?.label}
                                        className="max-w-full max-h-full object-contain"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    />
                                </motion.div>

                                {/* Image indicator dots */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${selectedImage === i ? 'bg-brand-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-5 gap-3">
                            {images.map((img, i) => (
                                <AnimatedDiv key={img.id} delay={i * 0.05}>
                                    <button
                                        onClick={() => setSelectedImage(i)}
                                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all bg-white ${selectedImage === i
                                            ? 'border-brand-500 shadow-lg shadow-brand-500/20'
                                            : 'border-gray-100 hover:border-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.label}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                </AnimatedDiv>
                            ))}
                        </div>

                        {/* Benefits strip */}
                        <AnimatedDiv delay={0.2}>
                            <div className="grid grid-cols-3 gap-4">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-4 text-center border border-gray-100">
                                        <benefit.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                                        <span className="font-semibold text-gray-900 text-sm block">{benefit.title}</span>
                                        <span className="text-xs text-gray-500">{benefit.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedDiv>
                    </div>

                    {/* ========== RIGHT: DETAILS ========== */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
                        <AnimatedDiv>
                            {/* Breadcrumb */}
                            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                                POCKETGLUCA / GLUCOSE SHOT
                            </p>

                            <h1 className="text-4xl md:text-5xl font-display text-gray-900 mb-2">
                                {currentFlavor.name}
                            </h1>
                            <p className="text-xl text-gray-500 mb-2">Glucose Shots • Set of 6</p>
                            <p className="text-sm text-brand-500 font-medium mb-6">"{currentFlavor.tagline}"</p>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-brand-400 text-brand-400" />
                                    ))}
                                </div>
                                <span className="font-semibold text-gray-900">4.9</span>
                                <button className="text-gray-500 hover:text-brand-500 underline underline-offset-4 text-sm">
                                    124 reviews
                                </button>
                            </div>
                        </AnimatedDiv>

                        {/* Price */}
                        <AnimatedDiv delay={0.1}>
                            <div className="bg-gradient-to-r from-brand-50 to-cream-100 rounded-2xl p-6 mb-6 border border-brand-100">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-4xl font-bold text-gray-900">₹{price}</span>
                                    <span className="text-xl text-gray-400 line-through">₹{originalPrice}</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-lg">
                                        {Math.round((savings / originalPrice) * 100)}% OFF
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Inclusive of all taxes • ₹{(price / 6).toFixed(0)} per shot</p>
                            </div>
                        </AnimatedDiv>

                        {/* Flavor selector */}
                        <AnimatedDiv delay={0.15}>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-3">Flavor</label>
                                <div className="flex flex-wrap gap-2">
                                    {flavors.map((flavor, i) => (
                                        <motion.button
                                            key={flavor.id}
                                            onClick={() => setSelectedFlavor(i)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${selectedFlavor === i
                                                    ? 'bg-gray-900 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {flavor.name}
                                        </motion.button>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    Selected: <span className="font-medium text-gray-600">{currentFlavor.tagline}, {currentFlavor.name}</span>
                                </p>
                            </div>
                        </AnimatedDiv>

                        {/* Quantity */}
                        <AnimatedDiv delay={0.2}>
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex items-center bg-gray-100 rounded-full">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-12 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-12 h-12 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <span className="text-gray-500 text-sm">= {quantity * 6} shots total</span>
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Buttons */}
                        <AnimatedDiv delay={0.25}>
                            <div className="space-y-3 mb-8">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 px-8 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-brand-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Add to Cart — ₹{price * quantity}
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 px-8 bg-brand-500 text-white rounded-full font-bold text-lg hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/30"
                                >
                                    Buy it now
                                </motion.button>
                            </div>
                        </AnimatedDiv>

                        {/* Trust badges */}
                        <AnimatedDiv delay={0.3}>
                            <div className="flex flex-wrap gap-4 mb-8 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Truck className="w-4 h-4 text-green-600" />
                                    <span>Free shipping on 2+</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    <span>Quality tested</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <RefreshCw className="w-4 h-4 text-green-600" />
                                    <span>30-day returns</span>
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Accordion */}
                        <div className="border-t border-gray-200">
                            {accordionItems.map((item, i) => (
                                <AnimatedDiv key={i} delay={0.35 + i * 0.05}>
                                    <div className="border-b border-gray-200">
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                                            className="w-full py-5 flex items-center justify-between text-left group"
                                        >
                                            <span className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
                                                {item.title}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''
                                                }`} />
                                        </button>
                                        <AnimatePresence>
                                            {activeAccordion === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-5 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                                        {item.content}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </AnimatedDiv>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ========== REVIEWS SECTION ========== */}
                <section className="mt-24">
                    <AnimatedDiv className="text-center mb-12">
                        <h2 className="heading-md text-gray-900 mb-4">What People Are Saying</h2>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-brand-400 text-brand-400" />
                                ))}
                            </div>
                            <span className="text-xl font-bold text-gray-900">4.9</span>
                            <span className="text-gray-500">(124 reviews)</span>
                        </div>
                    </AnimatedDiv>

                    <div className="grid md:grid-cols-3 gap-6">
                        {reviews.map((review, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1}>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(review.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-brand-400 text-brand-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">"{review.text}"</p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-gray-900">{review.name}</span>
                                        {review.verified && (
                                            <span className="flex items-center gap-1 text-xs text-green-600">
                                                <Check className="w-3 h-3" /> Verified
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProductPage;
