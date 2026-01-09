import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Target, Users, Award, ArrowUpRight, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedDiv = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Precision',
            desc: 'Exactly 15g per shot. The amount doctors recommend.',
            color: 'from-brand-500 to-brand-600'
        },
        {
            icon: Heart,
            title: 'Empathy',
            desc: 'Built by people who live with diabetes every day.',
            color: 'from-brand-500 to-brand-600'
        },
        {
            icon: Award,
            title: 'Quality',
            desc: 'Food safety tested. Proudly made in India.',
            color: 'from-brand-500 to-brand-600'
        },
        {
            icon: Users,
            title: 'Community',
            desc: 'More than a product — a support system.',
            color: 'from-brand-500 to-brand-600'
        },
    ];

    const timeline = [
        { year: '2020', title: 'The First Low', desc: 'Our founder experienced a severe hypoglycemic episode during a meeting. No good solution in sight.' },
        { year: '2021', title: 'Research Begins', desc: 'Deep dive into glucose science, working with endocrinologists and nutritionists.' },
        { year: '2022', title: 'First Prototype', desc: 'Initial formula developed. Testing begins with the T1D community.' },
        { year: '2023', title: 'PocketGluca Launches', desc: 'India\'s first pocket-sized glucose shot hits the market.' },
    ];

    return (
        <div className="bg-cream-50 min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream-200 rounded-full blur-[100px] opacity-60" />

                <div className="container-lg relative z-10">
                    <div className="max-w-4xl">
                        <AnimatedDiv>
                            <motion.span
                                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-6"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                Our Story
                            </motion.span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-gray-900 mb-6 leading-tight">
                                Why we<br />
                                <span className="text-brand-500">started</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                                We didn't start a company. We solved a problem we lived with every single day.
                            </p>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* ========== STORY ========== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-lg">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <AnimatedDiv>
                            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative group">
                                <img
                                    src="/images/hero-lifestyle.png"
                                    alt="The Founders"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-white text-3xl font-display mb-2">The Founders</p>
                                        <p className="text-white/80 font-medium">Living with T1D since 2010</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Story */}
                        <div className="space-y-6">
                            <AnimatedDiv>
                                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                                    It starts with the shaking. Then the sweat. Then the confusion.
                                </p>
                            </AnimatedDiv>

                            <AnimatedDiv delay={0.1}>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    <strong className="text-gray-900">Hypoglycemia is terrifying.</strong> As Type 1 Diabetics,
                                    we found ourselves carrying around bags of candy, juice boxes that leaked in our bags,
                                    or chalky tablets that were impossible to chew during a bad low.
                                </p>
                            </AnimatedDiv>

                            <AnimatedDiv delay={0.2}>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We wanted something different. Something that looked like it belonged in a gym bag,
                                    not a pharmacy. Something that worked <em className="text-brand-600 pl-1">instantly</em>.
                                </p>
                            </AnimatedDiv>

                            <AnimatedDiv delay={0.3}>
                                <div className="relative p-8 bg-brand-50 rounded-2xl border border-brand-100 mt-6">
                                    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white bg-brand-500 rounded-full p-2 shadow-lg" />
                                    <p className="text-brand-800 font-medium italic text-lg leading-relaxed">
                                        "Because we know the shakiness. We know the late nights. We know the feeling. We built this for us, and for you."
                                    </p>
                                </div>
                            </AnimatedDiv>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TIMELINE ========== */}
            <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5"
                    style={{ backgroundImage: 'radial-gradient(#EA580C 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />

                <div className="container-lg relative z-10">
                    <AnimatedDiv className="text-center mb-16">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900">From Problem to Solution</h2>
                    </AnimatedDiv>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-0.5 bg-brand-200 -translate-x-1/2 md:block hidden" />
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-brand-200 -translate-x-1/2 md:hidden block" />

                            {timeline.map((item, i) => (
                                <AnimatedDiv key={i} delay={i * 0.1}>
                                    <div className={`relative flex items-start gap-8 mb-12 md:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-center`}>

                                        {/* Content */}
                                        <div className="md:w-1/2 flex-1 pt-3">
                                            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} ml-12 md:ml-0`}>
                                                {/* Arrow */}
                                                <div className={`absolute top-6 w-4 h-4 bg-white border-b border-l border-gray-100 rotate-45 hidden md:block
                                                    ${i % 2 === 0 ? '-left-2' : '-right-2 border-r border-t border-b-0 border-l-0'}
                                                `} />

                                                {/* Mobile Arrow */}
                                                <div className="absolute top-6 -left-2 w-4 h-4 bg-white border-b border-l border-gray-100 rotate-45 md:hidden block" />

                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Year Bubble */}
                                        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-3 z-10">
                                            <div className="w-14 h-14 bg-brand-500 rounded-full border-4 border-cream-50 flex items-center justify-center text-white font-bold shadow-lg">
                                                {item.year.substring(2)}
                                            </div>
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-500 font-bold text-sm bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedDiv>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== VALUES ========== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-lg">
                    <AnimatedDiv className="text-center mb-12">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900">What we stand for</h2>
                    </AnimatedDiv>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-cream-50 p-6 rounded-2xl h-full border border-cream-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-600 text-sm">{value.desc}</p>
                                </motion.div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== QUALITY ========== */}
            <section className="py-16 md:py-24 bg-gray-900 text-white">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedDiv>
                            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-brand-300 text-sm font-semibold mb-6">
                                Quality Assured
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display mb-6">
                                Is PocketGluca tested for quality?
                            </h2>
                            <div className="text-gray-300 space-y-4 text-left md:text-center">
                                <p>
                                    Yes. PocketGluca is developed and manufactured following <strong className="text-white">food safety
                                        and quality protocols — proudly in India</strong>, with clearly defined ingredients
                                    and lab-tested formulations.
                                </p>
                                <p>
                                    We use <strong className="text-white">pharma grade 99% glucose</strong>, water, and natural flavours.
                                    No artificial colours, no added fats, no palm oil. Just clean, fast-acting energy.
                                </p>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv delay={0.2}>
                            <div className="flex flex-wrap justify-center gap-4 mt-10">
                                {['Lab Tested', 'Made in India', 'FSSAI Approved', 'No Preservatives'].map((badge, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                                        ✓ {badge}
                                    </span>
                                ))}
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
                <div className="container-lg text-center">
                    <AnimatedDiv>
                        <h2 className="text-3xl md:text-4xl font-display mb-4">Join the mission</h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                            Whether you're a customer, partner, or just curious — we'd love to connect.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/products/peach-mango-glucose-shots-set-of-6" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 rounded-full font-semibold hover:bg-cream-100 transition-colors">
                                Shop Now
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link to="/pages/community" className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                                Join Community
                            </Link>
                        </div>
                    </AnimatedDiv>
                </div>
            </section>

        </div>
    );
};

export default About;
