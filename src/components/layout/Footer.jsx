import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container-lg py-16 md:py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-display text-brand-500">Pocket Gluca</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                            India's first portable glucose shot. Fast-acting liquid energy for diabetics,
                            athletes, and high-performers.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="mailto:hello@pocketgluca.in" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Shop</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/products/peach-mango-glucose-shots-set-of-6" className="text-gray-400 hover:text-white transition-colors">
                                    Peach Mango
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Lemon Mint
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Butterscotch
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Watermelon
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/pages/about-us" className="text-gray-400 hover:text-white transition-colors">
                                    Why we started
                                </Link>
                            </li>
                            <li>
                                <Link to="/pages/the-science" className="text-gray-400 hover:text-white transition-colors">
                                    The Science
                                </Link>
                            </li>
                            <li>
                                <Link to="/pages/community" className="text-gray-400 hover:text-white transition-colors">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                                    Returns
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-lg py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} PocketGluca. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>

            {/* Powered by strip - like original */}
            <div className="bg-brand-600 py-2 text-center">
                <p className="text-white/80 text-xs">
                    Made with ❤️ in India
                </p>
            </div>
        </footer>
    );
};

export default Footer;
