import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setAboutOpen(false);
    }, [location]);

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-brand-600 text-white py-2.5 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-8 text-sm font-medium">
                            PRE-ORDERS WILL BE DELIVERED IN JANUARY 2026
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Nav */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-100/95 backdrop-blur-md shadow-sm' : 'bg-cream-100'}`}>
                <nav className="container-lg">
                    <div className="flex items-center justify-between h-20">
                        {/* Left Side: Mobile Menu + Desktop Links */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 hover:bg-cream-200 rounded-full transition-colors"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>

                            {/* Desktop Nav Links */}
                            <div className="hidden md:flex items-center gap-8">
                                <Link to="/" className="text-gray-800 hover:text-brand-600 font-medium transition-colors">
                                    Home
                                </Link>
                                <Link to="/products/peach-mango-glucose-shots-set-of-6" className="text-gray-800 hover:text-brand-600 font-medium transition-colors underline underline-offset-4">
                                    Shop
                                </Link>
                                <div className="relative">
                                    <button
                                        onClick={() => setAboutOpen(!aboutOpen)}
                                        className="flex items-center gap-1 text-gray-800 hover:text-brand-600 font-medium transition-colors border border-gray-300 px-3 py-1 rounded"
                                    >
                                        About us <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {aboutOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px]"
                                            >
                                                <Link to="/pages/about-us" className="block px-4 py-2 hover:bg-cream-100 text-gray-700">
                                                    Why we started
                                                </Link>
                                                <Link to="/pages/the-science" className="block px-4 py-2 hover:bg-cream-100 text-gray-700">
                                                    The Science
                                                </Link>
                                                <Link to="/pages/community" className="block px-4 py-2 hover:bg-cream-100 text-gray-700">
                                                    Community
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Logo - Centered */}
                        <Link to="/" className="absolute left-1/2 -translate-x-1/2 transform">
                            <span className="text-2xl md:text-4xl font-display text-brand-600 tracking-tight whitespace-nowrap">
                                Pocket Gluca
                            </span>
                        </Link>

                        {/* Right Nav: Cart */}
                        <div className="flex items-center gap-4">
                            <Link to="/cart" className="relative p-2 hover:bg-cream-200 rounded-full transition-colors">
                                <ShoppingBag className="w-6 h-6 text-gray-800" />
                                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[calc(2.5rem+5rem)] z-40 bg-cream-100 border-b border-gray-200 md:hidden overflow-hidden"
                    >
                        <div className="container-lg py-6 space-y-4">
                            <Link to="/" className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100">
                                Home
                            </Link>
                            <Link to="/products/peach-mango-glucose-shots-set-of-6" className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100">
                                Shop
                            </Link>
                            <Link to="/pages/about-us" className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100">
                                Why we started
                            </Link>
                            <Link to="/pages/the-science" className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100">
                                The Science
                            </Link>
                            <Link to="/pages/community" className="block py-3 text-lg font-medium text-gray-800">
                                Community
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
