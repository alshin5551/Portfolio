import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, Github, Phone, Mail, MessageCircle, X } from 'lucide-react';
import profilepic from "../assets/hero/pic120kb.png";

const Hero = () => {
    const [contactOpen, setContactOpen] = useState(false);
    const [showCallAlert, setShowCallAlert] = useState(false);

    const handlePhoneClick = () => {
        setContactOpen(false);
        setShowCallAlert(true);
    };

    return (
        <>
            <section id="home" className="flex items-center relative overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '16px' }}>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <span className="text-primary font-bold tracking-wider text-sm uppercase">Available for work</span> */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl mt-2 mb-2">
                            Hi,<br></br>
                            <span>I'm</span>
                            <span className="gradient-text"> Alshin D coutho</span>

                        </h1>
                        <p className="text-lg text-muted mb-3 max-w-lg">
                            A passionate Software Developer and recent MCA graduate specializing in Python, JavaScript, and building scalable web applications.
                        </p>
                        <div className=" py-5 flex flex-col sm:flex-row gap-4 w-full" style={{ maxWidth: '35rem' }}>
                            <a href="/resume.pdf" download="Alshin_Resume.pdf" className="btn-primary" style={{ flex: 1, width: '100%', maxWidth: '100%' }}>
                                Resume <Download size={20} />
                            </a>

                            <div className="relative" style={{ flex: 1, width: '100%' }}>
                                <button
                                    onClick={() => setContactOpen(!contactOpen)}
                                    className="btn-primary w-full"
                                    style={{ width: '100%', maxWidth: '100%' }}
                                >
                                    Contact  <Phone size={20} />
                                </button>

                                <AnimatePresence>
                                    {contactOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 right-0 mt-2 p-2 glass rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col gap-2"
                                        >
                                            <a href="https://wa.me/919946035199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white">
                                                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                                                    <MessageCircle size={18} />
                                                </div>
                                                <span className="font-medium">WhatsApp</span>
                                            </a>

                                            <a href="mailto:alshindcoutho@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white">
                                                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                                                    <Mail size={18} />
                                                </div>
                                                <span className="font-medium">Email</span>
                                            </a>

                                            <button onClick={handlePhoneClick} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white w-full text-left">
                                                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
                                                    <Phone size={18} />
                                                </div>
                                                <span className="font-medium">Phone Call</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all font-semibold ">
                            <Download size={20} /> Download CV
                        </a> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center mt-8 md:mt-0 order-first md:order-last"
                    >
                        <div className="w-48 h-48 md:w-50 md:h-50 relative">
                            {/* Abstract Shape Background */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>

                            <div className="w-full h-full rounded-full glass profile-img-container relative z-10 border-2 border-white/5">
                                <img
                                    src={profilepic}
                                    alt="profilepic"
                                    className="w-full h-full object-cover rounded-full border-2 border-white/30 shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call Confirmation Alert Modal */}
            <AnimatePresence>
                {showCallAlert && (
                    <div
                        className="fixed flex items-center justify-center p-4"
                        style={{ inset: 0, zIndex: 100 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCallAlert(false)}
                            className="absolute"
                            style={{ inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(4px)' }}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative glass border border-white/10 rounded-3xl p-6 md:p-8 w-full flex flex-col items-center text-center overflow-hidden"
                            style={{ maxWidth: '24rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                        >
                            <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-primary to-secondary" style={{ height: '4px' }}></div>

                            <button
                                onClick={() => setShowCallAlert(false)}
                                className="absolute text-muted hover:text-white transition-colors"
                                style={{ top: '1rem', right: '1rem' }}
                            >
                                <X size={20} />
                            </button>

                            <div
                                className="rounded-full flex items-center justify-center relative"
                                style={{
                                    width: '4rem', height: '4rem',
                                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                    marginBottom: '1.5rem'
                                }}
                            >
                                <div className="absolute rounded-full animate-ping" style={{ inset: 0, border: '1px solid rgba(99, 102, 241, 0.5)' }}></div>
                                <Phone size={28} style={{ color: '#818cf8' }} className="animate-pulse" />
                            </div>

                            <h3 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Initialize Call?</h3>
                            <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                Are you sure you want to call <br /><span className="text-white font-medium">+91 99460 35199</span>?
                            </p>

                            <div className="flex gap-3 w-full">
                                <button
                                    onClick={() => setShowCallAlert(false)}
                                    className="py-3 rounded-xl border hover:bg-white/5 transition-all font-medium text-white"
                                    style={{ flex: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                >
                                    Cancel
                                </button>
                                <a
                                    href="tel:+919946035199"
                                    onClick={() => setShowCallAlert(false)}
                                    className="py-3 rounded-xl text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
                                    style={{
                                        flex: 1,
                                        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                                        boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
                                    }}
                                >
                                    Call Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;
