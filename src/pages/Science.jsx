import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Droplets, Clock, Check, ArrowUpRight, Beaker, Activity, Shield } from 'lucide-react';
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

const AnimatedBar = ({ width, delay = 0, highlight = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width } : { width: 0 }}
                transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
                className={`h-full rounded-full ${highlight ? 'bg-brand-500' : 'bg-gray-300'}`}
            />
        </div>
    );
};

const Science = () => {
    const comparisons = [
        { name: 'Glucose Tablets', time: '20-30 min', width: '30%' },
        { name: 'Candy / Chocolates', time: '25-35 min', width: '25%' },
        { name: 'Juice / Soda', time: '15-25 min', width: '45%' },
        { name: 'PocketGluca', time: '10-15 min', width: '85%', highlight: true },
    ];

    const sciencePoints = [
        {
            icon: Beaker,
            title: '99% Pure Glucose',
            desc: 'Pharma-grade dextrose that your body can use immediately without any conversion process.'
        },
        {
            icon: Droplets,
            title: 'Liquid Formula',
            desc: 'No chewing, no dissolving. Liquid bypasses mechanical breakdown for faster absorption.'
        },
        {
            icon: Activity,
            title: '15g Precision',
            desc: 'Exactly what the American Diabetes Association recommends for treating hypoglycemia.'
        },
        {
            icon: Shield,
            title: 'Safe & Natural',
            desc: 'No artificial colors, no preservatives. Just glucose, water, and natural flavors.'
        }
    ];

    const faqs = [
        {
            question: 'How fast does it work?',
            answer: 'PocketGluca is formulated using dextrose (glucose), which is known to be rapidly available to the body compared to more complex sugars. Individual experiences may vary.'
        },
        {
            question: 'Why liquid over tablets?',
            answer: 'Liquid glucose bypasses the need for chewing and mechanical breakdown. It begins absorbing immediately through the mucous membranes and moves quickly through the digestive system.'
        },
        {
            question: 'What makes 15g the right amount?',
            answer: 'The American Diabetes Association recommends treating hypoglycemia with 15-20 grams of fast-acting carbohydrates. We chose 15g as it provides effective treatment while minimizing the risk of overcorrection.'
        },
        {
            question: 'Is it safe for children?',
            answer: 'PocketGluca is safe for anyone who needs fast-acting glucose. However, we always recommend consulting with your healthcare provider for personalized advice.'
        },
    ];

    return (
        <div className="bg-cream-50 min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-brand-50" />
                <div className="absolute top-20 right-20 w-72 h-72 bg-brand-100 rounded-full blur-[100px] opacity-50" />

                <div className="container-lg relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedDiv>
                            <motion.span
                                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-6"
                            >
                                <Beaker className="w-4 h-4" />
                                Research-Backed
                            </motion.span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-gray-900 mb-6">
                                The Science
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Why liquid glucose is the gold standard for rapid blood sugar recovery.
                            </p>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* ========== KEY SCIENCE POINTS ========== */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container-lg">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sciencePoints.map((point, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-cream-50 p-6 rounded-2xl h-full border border-cream-100 hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-4">
                                        <point.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                                </motion.div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== COMPARISON SECTION ========== */}
            <section className="py-16 md:py-20 bg-cream-50">
                <div className="container-lg">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <div>
                            <AnimatedDiv>
                                <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                                    Speed Comparison
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
                                    Speed Matters
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    When blood sugar drops, every minute counts. Solid glucose sources require chewing,
                                    dissolution, and mechanical breakdown before absorption can begin. PocketGluca is
                                    essentially pre-digested — ready to enter your bloodstream immediately.
                                </p>
                            </AnimatedDiv>

                            <AnimatedDiv delay={0.1}>
                                <ul className="space-y-3">
                                    {['No chewing required - critical during severe lows',
                                        '99% pharma grade glucose for rapid absorption',
                                        '15g precision dose - the clinical standard'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                    <Check className="w-4 h-4 text-brand-600" />
                                                </div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                </ul>
                            </AnimatedDiv>
                        </div>

                        {/* Chart */}
                        <AnimatedDiv delay={0.2}>
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-6 text-lg">Time to Bloodstream</h3>
                                <div className="space-y-5">
                                    {comparisons.map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`font-medium text-sm ${item.highlight ? 'text-brand-600' : 'text-gray-600'}`}>
                                                    {item.name}
                                                </span>
                                                <span className={`text-sm ${item.highlight ? 'text-brand-600 font-bold' : 'text-gray-400'}`}>
                                                    {item.time}
                                                </span>
                                            </div>
                                            <AnimatedBar width={item.width} delay={i * 0.15} highlight={item.highlight} />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 text-center">
                                        *Based on general absorption rates. Individual results may vary.
                                    </p>
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            {/* ========== HOW IT WORKS ========== */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container-lg">
                    <AnimatedDiv className="text-center mb-12">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            Simple Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">How It Works</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            From the moment you drink PocketGluca to full recovery.
                        </p>
                    </AnimatedDiv>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Droplets, step: '01', title: 'Drink', desc: 'Twist cap and drink the entire contents.' },
                            { icon: Zap, step: '02', title: 'Absorb', desc: 'Liquid glucose begins absorbing immediately.' },
                            { icon: Clock, step: '03', title: 'Wait', desc: 'Give it 15 minutes to enter bloodstream.' },
                            { icon: Check, step: '04', title: 'Recover', desc: 'Check levels. Repeat if necessary.' },
                        ].map((item, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="text-center p-6 rounded-2xl bg-cream-50 border border-cream-100"
                                >
                                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-brand-500 font-bold text-xs">{item.step}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </motion.div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="py-16 md:py-20 bg-cream-50">
                <div className="container-lg max-w-3xl">
                    <AnimatedDiv className="text-center mb-12">
                        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-3 block">
                            FAQs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display text-gray-900">
                            Common Questions
                        </h2>
                    </AnimatedDiv>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AnimatedDiv key={i} delay={i * 0.1}>
                                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                    <summary className="flex justify-between items-center cursor-pointer p-5 list-none">
                                        <span className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-500 group-open:rotate-45 transition-transform flex-shrink-0">
                                            +
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-5">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="py-16 md:py-20 bg-brand-500 text-white">
                <div className="container-lg text-center">
                    <AnimatedDiv>
                        <h2 className="text-3xl md:text-4xl font-display mb-4">Ready to try?</h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                            Experience the fastest glucose recovery on the market.
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

export default Science;
