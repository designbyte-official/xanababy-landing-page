import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-surface rounded-[3rem] p-12 lg:p-24 flex flex-col md:flex-row items-center gap-16 border border-border">
          
          <div className="md:w-1/2">
             <span className="text-xs font-bold tracking-widest uppercase text-muted mb-6 block">Nuestra Misión</span>
             <h2 className="text-3xl md:text-5xl font-heading text-primary mb-8 leading-tight">
               "Nadie te enseña a dormir a tu bebé. Nosotras sí."
             </h2>
             <div className="space-y-6 text-text-body font-light leading-relaxed mb-10 text-lg">
               <p>
                 Hola, soy <strong className="font-medium text-text-main">Mar López</strong>. Cuando nació mi primera hija, me di cuenta de que el "instinto" no bastaba para dormir bien.
               </p>
               <p>
                 Investigué, estudié la biología del sueño infantil y desarrollé un método que ha ayudado a miles de familias a recuperar su vida. Xanababy es el resultado.
               </p>
             </div>
             
             <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-tertiary"></span>
                <span className="font-heading italic text-muted">Fundadora de Xanababy</span>
             </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
             <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-surface border border-border p-8 rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-primary/5">
                <img 
                  src="/logos/logo.webp" 
                  alt="Xanababy Logo" 
                  className="w-full h-full object-contain"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;