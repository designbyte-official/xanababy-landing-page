import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Battery, AlertCircle } from 'lucide-react';

const Problem: React.FC = () => {
  const cards = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Despertares cada hora",
      desc: "Cuando un bebé despierta cada 45-60 minutos, no es hambre ni mimo. Es un ciclo de sueño roto que no sabe enlazar.",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Agotamiento Familiar",
      desc: "Dormir mal afecta tu salud, tu humor y tu relación de pareja. Necesitas energía para criar con paciencia.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Información Confusa",
      desc: "Libros que se contradicen, consejos de la abuela... Necesitas un método claro basado en la biología, no en opiniones.",
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sabemos que estás agotada. <br/>
            <span className="text-tertiary text-2xl md:text-3xl font-light italic">Y sabemos por qué.</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-body font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            La privación de sueño no es un "rito de paso" de la maternidad. Es un problema biológico con solución científica.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-10 rounded-2xl bg-surface border border-border text-center hover:bg-background hover:border-primary/30 transition-colors duration-300 group cursor-default"
            >
              <motion.div 
                className="w-14 h-14 bg-background rounded-full border border-border flex items-center justify-center mx-auto mb-6 text-muted group-hover:text-primary group-hover:border-primary transition-colors"
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-heading font-medium text-primary mb-4">{card.title}</h3>
              <p className="text-text-body leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;