import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Button from '../ui/Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-heading text-primary mb-6">Empieza hoy mismo</h2>
          <p className="text-lg text-text-body font-light">
            Tienes dos caminos para recuperar tu descanso. Ambos son respetuosos, científicos y probados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Free Card */}
          <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border flex flex-col hover:border-primary/30 transition-colors">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-muted text-xs font-bold tracking-wider uppercase mb-4">Primer Paso</span>
              <h3 className="text-3xl font-heading text-primary mb-4">Taller Gratuito</h3>
              <p className="text-text-body text-sm leading-relaxed">
                Descubre por qué tu bebé se despierta y las 3 claves biológicas para evitarlo. Sin coste.
              </p>
            </div>

            <div className="space-y-4 mb-10 flex-grow border-t border-border pt-8">
              {[
                "Clase 1: La biología del sueño",
                "Clase 2: Errores comunes",
                "Clase 3: Rutinas que funcionan",
                "Acceso inmediato por email"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-primary mt-0.5" />
                  <span className="text-muted text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline"
              className="w-full border-border hover:bg-primary-light"
            >
              Ver Taller Ahora
            </Button>
          </div>

          {/* Paid Card - Purple and Gold touches */}
          <div className="bg-secondary-light rounded-3xl p-8 md:p-12 border border-secondary relative flex flex-col">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold tracking-wider uppercase mb-4">Recomendado</span>
              <h3 className="text-3xl font-heading text-primary mb-4">Método Completo</h3>
              <p className="text-text-body text-sm leading-relaxed">
                El programa paso a paso para enseñar a tu bebé a dormir toda la noche, con soporte real.
              </p>
            </div>

            <div className="space-y-4 mb-10 flex-grow border-t border-secondary/20 pt-8">
              {[
                "Curso completo en video (0-5 años)",
                "App Xanababy Premium incluida",
                "Soporte directo por WhatsApp",
                "Planes personalizados semana a semana",
                "Garantía de sueño en 21 días"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-primary rounded-full p-0.5">
                     <Check size={12} className="text-surface" />
                  </div>
                  <span className="text-text-main font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
               <Button 
                 variant="primary"
                 className="w-full shadow-none"
               >
                  Comprar Curso - 67€
               </Button>
               <p className="text-center text-xs text-muted">Pago único. Acceso de por vida.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;