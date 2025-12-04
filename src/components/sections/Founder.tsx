import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-stone-50 rounded-[3rem] p-12 lg:p-24 flex flex-col md:flex-row items-center gap-16 border border-border">
          
          <div className="md:w-1/2">
             <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-6 block">Nuestra Misión</span>
             <h2 className="text-3xl md:text-5xl font-heading text-primary mb-8 leading-tight">
               "Nadie te enseña a dormir a tu bebé. Nosotras sí."
             </h2>
             <div className="space-y-6 text-text-body font-light leading-relaxed mb-10 text-lg">
               <p>
                 Hola, soy <strong className="font-medium text-stone-900">Mar López</strong>. Cuando nació mi primera hija, me di cuenta de que el "instinto" no bastaba para dormir bien.
               </p>
               <p>
                 Investigué, estudié la biología del sueño infantil y desarrollé un método que ha ayudado a miles de familias a recuperar su vida. Xanababy es el resultado.
               </p>
             </div>
             
             <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-stone-300"></span>
                <span className="font-heading italic text-stone-500">Fundadora de Xanababy</span>
             </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
             <div className="relative w-72 h-80 rounded-full overflow-hidden bg-white border border-border p-2 rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;