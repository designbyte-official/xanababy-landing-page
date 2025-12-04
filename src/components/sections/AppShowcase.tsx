import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const AppShowcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="app" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-border">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
           
           <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-light border border-primary/10 mb-8">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 <span className="text-xs font-bold tracking-widest uppercase text-primary">Disponible Ahora</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6 leading-tight text-primary">
                Tu coach de sueño,<br/> <span className="text-tertiary italic font-light">en tu bolsillo.</span>
              </h2>
              
              <p className="text-text-body text-lg mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Olvídate de calcular horas en un papel. La App de Xanababy aprende de los patrones de tu bebé y predice la ventana de sueño perfecta con precisión matemática.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 mb-12">
                {[
                  "Algoritmo predictivo inteligente",
                  "Registro de siestas en 1 clic",
                  "Notificaciones personalizadas",
                  "Estadísticas de evolución"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <motion.a 
                    href="#" 
                    className="group flex items-center gap-3 bg-stone-900 text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors w-full sm:w-auto min-w-[180px]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 30.8 0 38.5-16.8 61.4-16.8 24 0 35.7 16.8 60.4 16.8 29.6 0 63.1-99 89.5-127.2-11.2-5.6-35-23.3-35-43.2zM229.5 7.4c-15.9-8.4-43.5-11.7-54.5-9.6-1.8 13.2 5.5 25.8 13.4 39.6 7.6 13.5 22.8 31 36.8 35.4 3.9 1.2 8.3 2 12.3 2 3.3 0 16.8-2.6 22-19.2 4.4-14.1 2.9-29.2-9.6-43.2z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Download on the</div>
                      <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="#" 
                    className="group flex items-center gap-3 bg-stone-900 text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors w-full sm:w-auto min-w-[180px]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-7 h-7">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Get it on</div>
                      <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                  </motion.a>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted">
                 <div className="flex gap-1 text-secondary">
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                   <Star size={14} fill="currentColor" />
                 </div>
                 <span>4.9/5 en App Store</span>
              </div>
           </div>

           <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              {/* Phone Mockup */}
              <motion.div 
                style={{ y }}
                className="relative z-20 w-[300px] md:w-[340px] border-[8px] border-border rounded-[3.5rem] bg-white"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-stone-100 rounded-b-2xl z-30"></div>
                
                <div className="h-[600px] md:h-[650px] bg-white rounded-[3rem] overflow-hidden relative flex flex-col">
                  {/* App Screen Content */}
                  <div className="flex-1 bg-background overflow-hidden relative">
                     {/* Header UI */}
                     <div className="bg-white p-6 pt-12 pb-4 border-b border-border sticky top-0 z-10">
                        <div className="flex justify-between items-center">
                           <div className="flex flex-col">
                             <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Buenos días</span>
                             <span className="text-xl font-heading text-primary font-bold">Bebé Lucas</span>
                           </div>
                           <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold">L</div>
                        </div>
                     </div>

                     {/* Main Widget */}
                     <div className="p-6">
                        <div className="bg-primary text-white p-6 rounded-3xl relative overflow-hidden mb-6">
                           <div className="relative z-10">
                              <span className="text-white/70 text-sm font-medium">Próxima ventana de sueño</span>
                              <div className="text-5xl font-heading font-bold mt-2 mb-1">10:30</div>
                              <div className="text-sm bg-white/20 backdrop-blur inline-block px-3 py-1 rounded-full text-white">En 45 minutos</div>
                           </div>
                           <div className="absolute -right-4 -bottom-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"></div>
                        </div>

                        {/* Secondary Widgets */}
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white p-4 rounded-2xl border border-border">
                              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                              </div>
                              <div className="text-xs text-stone-400 font-bold uppercase">Ánimo</div>
                              <div className="text-lg font-bold text-stone-700">Contento</div>
                           </div>
                           <div className="bg-white p-4 rounded-2xl border border-border">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                              </div>
                              <div className="text-xs text-stone-400 font-bold uppercase">Noche</div>
                              <div className="text-lg font-bold text-stone-700">10h 30m</div>
                           </div>
                        </div>

                        {/* List */}
                        <div className="mt-6">
                           <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Cronograma</h4>
                           {[1,2,3].map((_,i) => (
                             <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-border mb-3">
                                <div className="text-xs font-bold text-stone-300">0{8+i}:00</div>
                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                <div className="text-sm font-medium text-stone-600">Alimentación</div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;