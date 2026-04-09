import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMobileOpen, setContactMobileOpen] = useState(false);
  const [showCallAlert, setShowCallAlert] = useState(false);

  const handlePhoneClick = () => {
    setContactOpen(false);
    setContactMobileOpen(false);
    setIsOpen(false);
    setShowCallAlert(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-8' : 'bg-transparent py-12'}`}>
        <div className="container flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text">AD</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}

            <div className="relative">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="bg-transparent text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              >
                Contact <ChevronDown size={16} className={`transition-transform ${contactOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 p-2 glass rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col gap-2 w-48"
                  >
                    <a
                      href="https://wa.me/919946035199"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}
                      >
                        <MessageCircle size={16} />
                      </div>
                      <span className="font-medium text-sm">WhatsApp</span>
                    </a>

                    <a
                      href="mailto:alshindcoutho@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}
                      >
                        <Mail size={16} />
                      </div>
                      <span className="font-medium text-sm">Email</span>
                    </a>

                    <button
                      onClick={handlePhoneClick}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-white w-full text-left"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}
                      >
                        <Phone size={16} />
                      </div>
                      <span className="font-medium text-sm">Phone Call</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/alshin5551" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/alshin-d-coutho/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden bg-transparent text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setContactMobileOpen(!contactMobileOpen)}
                className="bg-transparent text-lg font-medium flex items-center justify-between w-full text-white"
              >
                Contact <ChevronDown size={20} className={`transition-transform ${contactMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {contactMobileOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col gap-2 pl-4 overflow-hidden border-l border-white/10 ml-2 mt-2"
                  >
                    <a href="https://wa.me/919946035199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-white">
                      <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                        <MessageCircle size={16} />
                      </div>
                      <span className="font-medium text-base">WhatsApp</span>
                    </a>
                    <a href="mailto:alshindcoutho@gmail.com" className="flex items-center gap-3 py-2 text-white">
                      <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                        <Mail size={16} />
                      </div>
                      <span className="font-medium text-base">Email</span>
                    </a>
                    <button onClick={handlePhoneClick} className=" flex items-center gap-3 py-2 text-white w-full text-left">
                      <div className="p-1.5 rounded-lg" style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
                        <Phone size={16} />
                      </div>
                      <span className="font-medium text-base">Phone Call</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/alshin23mca" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/alshin-d-coutho/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
            </div>
          </div>
        )}
      </nav>

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
              className="relative glass border border-white/10 rounded-3xl p-8 w-full flex flex-col items-center text-center overflow-hidden"
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

export default Navbar;
