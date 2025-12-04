import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Brain } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface skew-x-12 translate-x-1/3 -z-0 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Content - Mother and Baby Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
             <div className="relative rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 border-[1px] border-primary/5 rounded-[2rem] z-20 pointer-events-none"></div>
                {/* Empathetic Mom & Baby Image */}
                <img 
                  src="/images/family-methodology.png" 
                  alt="Familia feliz con su bebé" 
                  className="w-full h-[400px] lg:h-[600px] object-cover rounded-[2rem]"
                />
                
                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-surface/90 backdrop-blur-md p-6 rounded-xl border border-white/50 z-30 shadow-lg">
                  <p className="font-heading text-lg md:text-xl text-primary font-medium italic text-center leading-relaxed">
                    "Entender el sueño de tu hijo es el acto de amor más grande que puedes darle."
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2 pl-0 lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold tracking-wider uppercase mb-6">El Método Xanababy</span>
            
            <h2 className="text-4xl lg:text-6xl font-heading text-primary mb-8 leading-[1.1]">
              Biología. Rutina.<br/> <span className="text-tertiary font-light italic">Sin lágrimas.</span>
            </h2>

            <p className="text-lg text-text-body mb-12 leading-relaxed font-light border-l-4 border-secondary pl-6">
              Nuestro enfoque es único: no "entrenamos" al bebé, le damos a su cuerpo lo que necesita biológicamente en el momento exacto.
            </p>

            <div className="space-y-10">
              {[
                {
                  title: "Ritmos Circadianos",
                  desc: "Aprovechamos los picos naturales de melatonina. Acostar al bebé cuando su cuerpo pide dormir hace que se duerma rápido y sin llanto.",
                  icon: <Sun size={24} className="stroke-1" />
                },
                {
                  title: "Apego Seguro",
                  desc: "El sueño es un proceso evolutivo. Tu bebé necesita sentirse seguro para 'desconectarse'. Fomentamos el vínculo, no la separación.",
                  icon: <Heart size={24} className="stroke-1" />
                },
                {
                  title: "Neurodesarrollo",
                  desc: "Cada mes el cerebro de tu bebé cambia. Nuestro método evoluciona semana a semana adaptándose a sus nuevas capacidades.",
                  icon: <Brain size={24} className="stroke-1" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-border bg-surface flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-surface group-hover:border-primary transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-primary mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;