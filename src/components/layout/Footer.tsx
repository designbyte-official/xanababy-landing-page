import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="max-w-xs">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Xanababy</h3>
            <p className="text-text-body text-sm leading-relaxed">
              El método científico y respetuoso para el sueño infantil.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:gap-12">
            <a href="#methodology" className="text-sm font-medium text-muted hover:text-primary transition-colors">El Método</a>
            <a href="#pricing" className="text-sm font-medium text-muted hover:text-primary transition-colors">Taller Gratuito</a>
            <a href="#app" className="text-sm font-medium text-muted hover:text-primary transition-colors">App</a>
            <a href="#" className="text-sm font-medium text-muted hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="flex gap-4">
               {[
                 { Icon: Instagram, href: "#" },
                 { Icon: Facebook, href: "#" },
                 { Icon: Youtube, href: "#" }
               ].map(({ Icon, href }, i) => (
                 <motion.a 
                   key={i}
                   href={href}
                   className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-surface hover:bg-primary hover:border-primary transition-colors"
                   whileHover={{ scale: 1.15, y: -2 }}
                   whileTap={{ scale: 0.9 }}
                 >
                   <Icon size={18} />
                 </motion.a>
               ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <div className="flex gap-6 mb-4 md:mb-0">
             <a href="#" className="hover:text-text-main">Política de Privacidad</a>
             <a href="#" className="hover:text-text-main">Términos y Condiciones</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Xanababy. Todos los derechos reservados.</p>
          <div className="mt-2 md:mt-0">
            <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">
              Redesigned by <span className="font-bold">DesignByte Studio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;