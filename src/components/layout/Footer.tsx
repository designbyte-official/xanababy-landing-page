import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-24 pb-12 relative overflow-hidden">
      {/* Decorative top gradient/line if needed, or just clean bg-surface */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <span className="text-3xl font-heading font-bold text-primary tracking-tight">Xanababy</span>
            </a>
            <p className="text-text-body text-base leading-relaxed max-w-sm">
              El método científico y respetuoso para el sueño infantil. Ayudamos a familias a descansar mejor con amor y ciencia.
            </p>
            <div className="flex gap-4 pt-4">
               {[
                 { Icon: Instagram, href: "#" },
                 { Icon: Facebook, href: "#" },
                 { Icon: Youtube, href: "#" }
               ].map(({ Icon, href }, i) => (
                 <motion.a 
                   key={i}
                   href={href}
                   className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-main hover:bg-primary hover:text-surface transition-all duration-300"
                   whileHover={{ y: -3 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Icon size={18} />
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 md:col-start-7 space-y-6">
            <h4 className="text-lg font-bold font-heading text-primary">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#methodology" className="text-text-body hover:text-primary transition-colors">El Método</a></li>
              <li><a href="#testimonials" className="text-text-body hover:text-primary transition-colors">Historias de Éxito</a></li>
              <li><a href="#app" className="text-text-body hover:text-primary transition-colors">Nuestra App</a></li>
              <li><a href="#pricing" className="text-text-body hover:text-primary transition-colors">Taller Gratuito</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-lg font-bold font-heading text-primary">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-body">
                <Mail size={20} className="mt-1 text-primary shrink-0" />
                <a href="mailto:hola@xanababy.com" className="hover:text-primary transition-colors">hola@xanababy.com</a>
              </li>
              <li className="flex items-start gap-3 text-text-body">
                <MapPin size={20} className="mt-1 text-primary shrink-0" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
             <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
             <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; {currentYear} Xanababy. Todos los derechos reservados.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
             <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted/60 hover:text-primary transition-colors">
              <span>Redesigned by</span>
              <span className="font-bold">DesignByte Studio</span>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;