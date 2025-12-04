import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'El Método', href: '#methodology' },
    { name: 'Historias', href: '#testimonials' },
    { name: 'App', href: '#app' },
    { name: 'Taller Gratuito', href: '#pricing' },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border h-20 flex items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
          <a href="#" className="flex items-center gap-2 group">
            <motion.span 
              className="text-2xl font-bold tracking-tight font-heading text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Xanababy
            </motion.span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-body hover:text-primary transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#pricing"
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-white"
              whileHover={{ scale: 1.05, backgroundColor: '#4c1d95' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Empezar
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading text-primary border-b border-border pb-4"
                  whileTap={{ scale: 0.98, x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
               <motion.button 
                 onClick={() => { setIsOpen(false); document.getElementById('pricing')?.scrollIntoView(); }}
                 className="w-full px-5 py-4 mt-4 rounded-lg bg-primary text-white font-bold text-lg"
                 whileTap={{ scale: 0.95 }}
                >
                Empezar Gratis
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;