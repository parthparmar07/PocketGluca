import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Package, ChevronDown, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated section wrapper
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start']
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const flavors = [
        { name: 'Peach Mango', tagline: 'Pause a little', bg: 'bg-peach-bg', text: 'text-peach-text' },
        { name: 'Lemon Mint', tagline: 'Lie down', bg: 'bg-lemon-bg', text: 'text-lemon-text' },
        { name: 'Butterscotch', tagline: 'Be right back', bg: 'bg-butterscotch-bg', text: 'text-butterscotch-text' },
        { name: 'Watermelon', tagline: 'What a saviour', bg: 'bg-watermelon-bg', text: 'text-watermelon-text' },
    ];

    const features = [
        {
            word: 'INSTANT.',
            description: 'Fast acting glucose formula that works within minutes. When you need energy, you need it now.',
            icon: Zap
        },
        {
            word: 'MEASURED.',
            description: 'Precisely 15g of carbohydrates per shot. The exact amount recommended by doctors.',
            icon: Target
        },
        {
            word: 'PORTABLE.',
            description: 'Fits in your pocket, purse, or gym bag. No refrigeration needed. Ready when you are.',
            icon: Package
        },
    ];

    return (
        <div className="bg-cream-100 overflow-hidden">

            {/* ========== HERO SECTION - LIFESTYLE ========== */}
            <section ref={heroRef} className="relative min-h-[calc(100vh-80px)] md:min-h-screen overflow-hidden flex flex-col md:block">

                {/* Mobile Image - Bottom Half */}
                <div className="md:hidden w-full h-[50vh] relative order-2 overflow-hidden">
                    <img
                        src="/images/hero-lifestyle.png"
                        alt="PocketGluca bottle in jeans pocket"
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient overlay for smooth blend if needed */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cream-100 to-transparent" />
                </div>

                {/* Desktop Background - Full Screen */}
                <motion.div
                    style={{ y: heroY, scale: heroScale }}
                    className="hidden md:block absolute inset-0 z-0 bg-cream-100"
                >
                    <img
                        src="/images/hero-lifestyle.png"
                        alt="PocketGluca bottle in jeans pocket"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Content - Stacked on Mobile, Right-aligned on Desktop */}
                <div className="container-lg relative z-10 flex-1 flex items-center md:items-center py-10 md:py-20 order-1 md:order-none bg-cream-100 md:bg-transparent">
                    <div className="w-full flex justify-center md:justify-end pr-0 md:pr-16">
                        {/* RIGHT SIDE - Headline and CTA */}
                        <motion.div
                            className="text-center md:text-right max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:mx-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-gray-900 leading-[0.95] mb-8 relative z-30">
                                We're making<br />
                                glucose{' '}
                                <motion.span
                                    className="text-brand-500 inline-block"
                                    animate={{ opacity: [1, 0.6, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    cool
                                </motion.span><br />
                                again
                            </h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-end"
                            >
                                <Link
                                    to="/products/peach-mango-glucose-shots-set-of-6"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-brand-500 text-brand-500 rounded-full font-bold text-lg hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
                                >
                                    BUY NOW
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* Trust badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="relative z-30"
                            >
                                <p className="text-gray-600 font-medium mb-4">Supported by</p>
                                <div className="flex items-center gap-4 justify-center md:justify-end">
                                    {['BETIC', 'PIIDS', 'IDEC'].map((badge, i) => (
                                        <motion.div
                                            key={badge}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-gray-700 border border-gray-100"
                                        >
                                            {badge}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator - Only Desktop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600 z-20"
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>

                {/* Floating particles (retained) */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-brand-400 rounded-full opacity-40 z-20"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </section>

            {/* ========== FLAVORS SECTION - REIMAGINED ========== */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-cream-50">
                <div className="container-lg relative z-10">
                    <AnimatedSection className="text-center mb-16 md:mb-24">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Our Collection
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 mb-6">
                            Life saving doesn't<br />have to taste bad.
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Four delicious flavors designed to bring you back. No chalky texture. No medicinal aftertaste. Just pure, fast-acting relief.
                        </p>
                    </AnimatedSection>

                    {/* 3D Circular Gallery - Refined */}
                    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible" style={{ perspective: "1000px" }}>
                        <motion.div
                            className="relative w-[260px] h-[380px]"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{ rotateY: 360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        >
                            {[
                                { name: "Peach Mango", sub: "Pause a little", color: "orange", gradient: "from-orange-50 to-orange-100", border: "border-orange-100", hue: "0deg" },
                                { name: "Lemon Mint", sub: "Lie down", color: "lime", gradient: "from-yellow-50 to-lime-50", border: "border-lime-100", hue: "45deg" },
                                { name: "Butterscotch", sub: "Be right back", color: "amber", gradient: "from-amber-50 to-orange-50", border: "border-amber-100", hue: "15deg" },
                                { name: "Watermelon", sub: "What a saviour", color: "red", gradient: "from-red-50 to-pink-50", border: "border-red-100", hue: "320deg" },
                            ].map((flavor, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0"
                                    style={{
                                        transform: `rotateY(${index * 90}deg) translateZ(350px)`,
                                    }}
                                >
                                    <Link to="/products/peach-mango-glucose-shots-set-of-6" className="group block h-full w-full">
                                        <div className={`h-full w-full rounded-[2rem] bg-gradient-to-b ${flavor.gradient} p-6 relative overflow-hidden border ${flavor.border} shadow-lg backdrop-blur-md opacity-90 hover:opacity-100 transition-all hover:-translate-y-2`}>

                                            {/* Glow */}
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${flavor.color}-400/20 rounded-full blur-[40px] -mr-8 -mt-8`} />

                                            {/* Bottle - Slightly smaller */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-auto z-10">
                                                <img
                                                    src="/images/product/bottle-front.png"
                                                    alt={flavor.name}
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                    style={{ filter: `hue-rotate(${flavor.hue})` }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="h-full flex flex-col justify-between relative z-20">
                                                <div className="flex justify-between items-start">
                                                    <span className={`text-${flavor.color}-900/60 font-medium text-xs tracking-widest uppercase`}>0{index + 1}</span>
                                                </div>
                                                <div>
                                                    <span className={`text-3xl font-display text-${flavor.color}-900 leading-none mb-1 block`}>
                                                        {flavor.name.split(' ').map((line, i) => <span key={i} className="block">{line}</span>)}
                                                    </span>
                                                    <span className={`text-${flavor.color}-800/70 text-xs font-medium`}>"{flavor.sub}"</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </motion.div>

                        {/* Floor Shadow */}
                        <div className="absolute top-[80%] w-[400px] h-[100px] bg-black/5 rounded-[100%] blur-[60px] transform rotateX(60deg) z-0 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ========== FEATURES SECTION ========== */}
            <section className="py-20 md:py-28 bg-white overflow-hidden">
                <div className="container-lg">
                    {/* Section Header */}
                    <AnimatedSection className="text-center mb-16 md:mb-24">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Why PocketGluca
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-gray-900">
                            The Clinical Standard<br />for Hypoglycemia
                        </h2>
                    </AnimatedSection>

                    {/* Feature 1: INSTANT */}
                    <AnimatedSection className="mb-20 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left - Visual */}
                            <div className="relative">
                                <div className="aspect-square bg-white rounded-[3rem] relative overflow-hidden border border-cream-100 shadow-xl shadow-brand-500/5 flex flex-col items-center justify-center p-8">
                                    {/* Header */}
                                    <div className="w-full flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                                            <span className="text-brand-900 font-bold text-sm tracking-wide uppercase">Efficiency Comparison</span>
                                        </div>
                                    </div>

                                    {/* New 'Speed Bar' Comparison Visual */}
                                    <div className="w-full flex-1 relative flex flex-col justify-center gap-8">

                                        {/* PocketGluca Bar */}
                                        <div className="relative">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="font-bold text-gray-900 flex items-center gap-2">
                                                    <span className="p-1 bg-brand-100 rounded text-brand-600"><Zap className="w-4 h-4" fill="currentColor" /></span>
                                                    PocketGluca
                                                </span>
                                                <span className="text-brand-600 font-bold text-sm">10 mins</span>
                                            </div>
                                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "95%" }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
                                                />
                                            </div>
                                            <div className="mt-2 text-xs text-brand-600 font-medium ml-1">Fast Acting Formula</div>
                                        </div>

                                        {/* Traditional Tabs Bar */}
                                        <div className="relative opacity-60">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="font-medium text-gray-600 flex items-center gap-2">
                                                    <span className="p-1 bg-gray-100 rounded text-gray-400"><Clock className="w-4 h-4" /></span>
                                                    Traditional Methods
                                                </span>
                                                <span className="text-gray-500 font-medium text-sm">30-45 mins</span>
                                            </div>
                                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "30%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="absolute inset-y-0 left-0 bg-gray-400 rounded-full"
                                                />
                                            </div>
                                            <div className="mt-2 text-xs text-gray-400 ml-1">Digestion Required</div>
                                        </div>

                                        {/* Winner Badge */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 1.2, type: "spring" }}
                                            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white shadow-xl p-3 rounded-2xl border border-green-100 hidden md:block"
                                        >
                                            <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                                                <Activity className="w-5 h-5" />
                                                3x Faster
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div>
                                <h3 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                                    Starts working<br />
                                    <span className="text-brand-500">instantly.</span>
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    When your blood sugar drops, speed is safety. Tablets need time to chew and dissolve.
                                    PocketGluca's <strong className="text-gray-900">precision liquid formula</strong> absorbs immediately through the mucous membranes in your mouth.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-2xl border border-cream-100">
                                        <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-brand-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block">Fast Absorption</span>
                                            <span className="text-sm text-gray-500">Bypasses digestion for rapid effect</span>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/pages/the-science" className="text-brand-600 font-bold hover:text-brand-700 inline-flex items-center gap-2">
                                    See absorption data <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Feature 2: MEASURED */}
                    <AnimatedSection className="mb-20 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left - Content */}
                            <div className="order-2 lg:order-1">
                                <h3 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                                    <span className="text-brand-500">15g</span> for complete control.
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    The exact amount recommended by the <strong className="text-gray-900">American Diabetes Association</strong> to treat hypoglycemia.
                                    No guessing. No over-treating. Just precise, clinical-grade recovery.
                                </p>

                                {/* Clinical Badge - FIXED (Orange now) */}
                                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Target className="w-5 h-5 text-brand-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block text-lg">Recommended by Endocrinologists</span>
                                            <span className="text-brand-700/80 text-sm">The gold standard for low blood sugar treatment.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Visual */}
                            <div className="relative order-1 lg:order-2">
                                <div className="aspect-square bg-white rounded-[3rem] relative overflow-hidden border border-cream-100 shadow-xl shadow-brand-500/5 flex flex-col items-center justify-center p-8">
                                    <div className="absolute top-8 right-8">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-[10px] font-bold uppercase tracking-wide">Optimal</span>
                                        </div>
                                    </div>

                                    {/* Smart Gauge Container */}
                                    <div className="relative w-64 h-64 flex items-center justify-center">
                                        {/* Outer tick marks */}
                                        <div className="absolute inset-0">
                                            {[...Array(12)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-2 h-1 bg-gray-200 top-0 left-1/2 -translate-x-1/2 origin-bottom"
                                                    style={{
                                                        transform: `rotate(${i * 30}deg) translateY(0px)`,
                                                        height: '100%',
                                                        width: '2px'
                                                    }}
                                                >
                                                    <div className="w-full h-3 bg-gray-200" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Rings (SVG) */}
                                        <svg className="w-full h-full -rotate-90 transform relative z-10">
                                            {/* Background Track */}
                                            <circle
                                                cx="128" cy="128" r="100"
                                                fill="none"
                                                stroke="#F3F4F6"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                            />
                                            {/* Active Progress */}
                                            <motion.circle
                                                cx="128" cy="128" r="100"
                                                fill="none"
                                                stroke="#FF5C28"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                strokeDasharray={2 * Math.PI * 100}
                                                strokeDashoffset={2 * Math.PI * 100}
                                                whileInView={{ strokeDashoffset: 0 }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </svg>

                                        {/* Center Data */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                            <div className="flex items-baseline leading-none">
                                                <motion.span
                                                    className="text-7xl font-display text-gray-900 tracking-tighter"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5, type: "spring" }}
                                                >
                                                    15
                                                </motion.span>
                                                <span className="text-3xl font-display text-brand-500 ml-1">g</span>
                                            </div>
                                            <span className="text-gray-400 font-medium text-sm tracking-widest uppercase mt-2">Carbohydrates</span>

                                            {/* Success Check */}
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 1.5, type: "spring" }}
                                                className="absolute -bottom-12 flex items-center gap-2 text-brand-600 font-bold bg-brand-50 px-4 py-2 rounded-full border border-brand-100 shadow-sm"
                                            >
                                                <Target className="w-4 h-4" /> Exact Dose
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Footer Label */}
                                    <div className="absolute bottom-8 text-center px-6">
                                        <p className="text-xs text-gray-400 max-w-[200px] mx-auto leading-relaxed">
                                            Following ADA & AHA clinical guidelines for hypoglycemia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Feature 3: PORTABLE */}
                    <AnimatedSection>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left - Visual */}
                            <div className="relative">
                                <div className="aspect-square bg-cream-50 rounded-[3rem] relative overflow-hidden border border-cream-100 flex items-center justify-center p-12">
                                    <img
                                        src="/images/product/bottle-front.png"
                                        alt="PocketGluca Bottle"
                                        className="w-full h-full object-contain drop-shadow-2xl opacity-90"
                                    />
                                    <div className="absolute bottom-8 left-8 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100">
                                        <span className="text-xs font-bold text-gray-900 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-brand-500 rounded-full"></span> 65ml Pocket Size
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div>
                                <h3 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                                    Medical grade.<br />
                                    <span className="text-brand-500">Life ready.</span>
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Designed to fit seamlessly into your life. Leak-proof, pressure-tested, and ready for your pocket, gym bag, or purse.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {['TSA Friendly (Under 100ml)', 'Pressure Tested (Leak Proof)', 'Shelf-stable for 12 months'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xs">✓</div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/products/peach-mango-glucose-shots-set-of-6" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 text-white rounded-full font-bold text-lg hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Shop Now
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ========== CTA SECTION - FINAL CLEAN SPLIT ========== */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-cream-50">
                <div className="container-lg relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <AnimatedSection className="text-center lg:text-left order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full text-brand-600 text-sm font-semibold mb-8 border border-brand-100"
                            >
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                Join 1000+ happy customers
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 mb-6 leading-tight">
                                Ready for{' '}
                                <span className="text-brand-500">
                                    instant energy?
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Join thousands who've made PocketGluca their go-to for quick glucose recovery.
                                <span className="text-gray-900 font-medium"> No more chalky tablets.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link
                                    to="/products/peach-mango-glucose-shots-set-of-6"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-full font-bold text-lg hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/20 group"
                                >
                                    Get Started - ₹399
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/pages/the-science"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all"
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* Trust indicators - Simple Row */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-gray-500 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    Free shipping on 2+ packs
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    30-day money back
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    Made in India
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Right Visual */}
                        <AnimatedSection delay={0.2} className="relative order-1 lg:order-2">
                            <div className="relative">
                                {/* Decorative Blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10"
                                >
                                    <img
                                        src="/images/product/bottles-group.png"
                                        alt="PocketGluca Bottles"
                                        className="w-full h-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500"
                                    />
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
