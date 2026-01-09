import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, MessageCircle, Star, ArrowUpRight, Users, Heart, Sparkles, Quote } from 'lucide-react';
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

const Community = () => {
    const testimonials = [
        {
            quote: "Finally a glucose shot that fits in my running shorts! The peach flavor is actually delicious.",
            author: "Alex R.",
            role: "Marathon Runner",
            rating: 5,
            avatar: "A"
        },
        {
            quote: "As a mom of a T1D kid, these are lifesavers for nighttime lows. Quick, easy, no mess.",
            author: "Sarah M.",
            role: "T1D Parent",
            rating: 5,
            avatar: "S"
        },
        {
            quote: "Keep one in my desk for the 3pm crash. Works in minutes and tastes great.",
            author: "Priya K.",
            role: "Fitness Coach",
            rating: 5,
            avatar: "P"
        },
        {
            quote: "No more chalky tablets! This actually feels like a treat, not medicine.",
            author: "Rohan D.",
            role: "Living with T1D",
            rating: 5,
            avatar: "R"
        },
        {
            quote: "I've tried everything - juice boxes, candy, tablets. Nothing works as fast as PocketGluca.",
            author: "Neha S.",
            role: "Type 1 Diabetic",
            rating: 5,
            avatar: "N"
        },
        {
            quote: "Love how compact it is. I keep one in my car, gym bag, and office desk.",
            author: "Vikram P.",
            role: "Athlete",
            rating: 5,
            avatar: "V"
        },
    ];

    const posts = [
        { type: 'image', user: '@runwithme', likes: '2.3k' },
        { type: 'image', user: '@diabeticfitness', likes: '1.8k' },
        { type: 'video', user: '@healthysnacks', likes: '4.1k' },
        { type: 'image', user: '@gymlife', likes: '989' },
        { type: 'image', user: '@t1dwarrior', likes: '3.2k' },
        { type: 'image', user: '@morningrun', likes: '1.5k' },
    ];

    const stats = [
        { number: '1000+', label: 'Happy Customers' },
        { number: '15k+', label: 'Instagram Followers' },
        { number: '500+', label: 'Community Members' },
        { number: '4.9', label: 'Average Rating' },
    ];

    return (
        <div className="bg-cream-50 min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-brand-100 rounded-full blur-[100px] opacity-40" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-cream-200 rounded-full blur-[100px] opacity-50" />

                {/* Floating hearts */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: `${20 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                        transition={{ duration: 4 + i, repeat: Infinity }}
                    >
                        <Heart className={`w-6 h-6 ${i % 2 === 0 ? 'text-brand-300' : 'text-rose-300'} opacity-30`} />
                    </motion.div>
                ))}

                <div className="container-lg relative z-10 text-center">
                    <AnimatedDiv>
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-6"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                        >
                            <Users className="w-4 h-4" />
                            #PocketGlucaGang
                        </motion.span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-gray-900 mb-6">
                            Join Our <span className="text-brand-500">Community</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Join thousands of people who've made PocketGluca part of their daily routine.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-full font-semibold hover:bg-brand-600 transition-colors shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Join WhatsApp Group
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-500 text-brand-600 rounded-full font-semibold hover:bg-brand-50 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                                Follow on Instagram
                            </a>
                        </div>
                    </AnimatedDiv>
                </div>
            </section>

            {/* ========== STATS ========== */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="container-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1} className="text-center">
                                <motion.span
                                    className="text-3xl md:text-4xl font-display text-brand-500 block"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: 'spring', delay: i * 0.1 }}
                                >
                                    {stat.number}
                                </motion.span>
                                <span className="text-sm text-gray-500">{stat.label}</span>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== UGC GRID ========== */}
            <section className="py-16 md:py-20 bg-cream-50">
                <div className="container-lg">
                    <AnimatedDiv className="text-center mb-10">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            User Generated Content
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900">#PocketGlucaGang</h2>
                    </AnimatedDiv>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {posts.map((post, i) => (
                            <AnimatedDiv key={i} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="aspect-square bg-gradient-to-br from-cream-200 to-cream-300 rounded-2xl overflow-hidden relative group cursor-pointer"
                                >
                                    {/* Placeholder pattern */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <Instagram className="w-12 h-12 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/60 transition-colors flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                                            <Instagram className="w-8 h-8 mx-auto mb-2" />
                                            <p className="font-medium">{post.user}</p>
                                            <p className="text-sm text-white/70">❤️ {post.likes}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedDiv>
                        ))}
                    </div>

                    <AnimatedDiv className="text-center mt-8">
                        <a href="#" className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:gap-3 transition-all">
                            View more on Instagram
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </AnimatedDiv>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container-lg">
                    <AnimatedDiv className="text-center mb-12">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">What people are saying</h2>
                        <p className="text-gray-600 max-w-lg mx-auto">Real reviews from real customers who've made the switch.</p>
                    </AnimatedDiv>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <AnimatedDiv key={i} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-cream-50 p-6 rounded-2xl h-full border border-cream-100 hover:shadow-lg transition-all relative"
                                >
                                    <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-100" />

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        "{t.quote}"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                                            <p className="text-brand-500 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== JOIN COMMUNITY ========== */}
            <section className="py-16 md:py-20 bg-gray-900 text-white overflow-hidden relative">
                {/* Animated background */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-0 left-1/4 w-80 h-80 bg-brand-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-400/20 rounded-full blur-[100px]"
                />

                <div className="container-lg relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedDiv>
                            <Sparkles className="w-10 h-10 text-brand-400 mx-auto mb-4" />
                            <h2 className="text-3xl md:text-4xl font-display mb-4">Join the Conversation</h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Connect with fellow PocketGluca users, share tips, get support, and stay updated on new flavors and products.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-600 rounded-full font-semibold hover:bg-cream-100 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Community
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                    @pocketgluca
                                </a>
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
                <div className="container-lg text-center">
                    <AnimatedDiv>
                        <h2 className="text-3xl md:text-4xl font-display mb-4">Ready to join?</h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                            Get your PocketGluca starter kit and become part of the gang.
                        </p>
                        <Link to="/products/peach-mango-glucose-shots-set-of-6" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-600 rounded-full font-semibold hover:bg-cream-100 transition-colors shadow-lg">
                            Shop Now - ₹399
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </AnimatedDiv>
                </div>
            </section>

        </div>
    );
};

export default Community;
