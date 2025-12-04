import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marta & Javier",
    role: "Padres de mellizos",
    quote: "Pensábamos que con dos bebés no volveríamos a dormir. A la semana de aplicar el método, dormían 8 horas seguidas.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena S.",
    role: "Mamá de Lucas (8 meses)",
    quote: "Lo que más me gustó es que no tuve que dejarlo llorar. Todo fluyó de manera natural siguiendo sus ventanas de sueño.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Carolina R.",
    role: "Mamá de Emma (2 años)",
    quote: "Llevábamos 2 años despertando cada hora. Compramos el curso y en 10 días Emma dormía la noche entera. Magia no, ciencia.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sofía M.",
    role: "Madre primeriza",
    quote: "La app es mi salvación. Me avisa justo antes de que el bebé se pase de rosca. Dormimos todos mucho mejor.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Carlos D.",
    role: "Papá de Leo",
    quote: "Sencillo, lógico y sin lágrimas. No queríamos dejarle llorar y este método respeta al 100% al bebé.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
          Más de 20,000 familias descansadas
        </h2>
        <p className="text-text-body">Ellos ya recuperaron sus noches. Ahora te toca a ti.</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        
        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[400px] w-full max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              {/* Testimonial Card */}
              <div className="bg-surface p-8 md:p-12 rounded-[2.5rem] border border-border w-full h-full flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-primary/20 transition-colors">
                
                {/* Background Decoration */}
                <Quote className="absolute top-6 left-8 text-tertiary/20 w-24 h-24 rotate-180 -z-0 opacity-50" />
                
                <div className="relative z-10 max-w-2xl">
                    <div className="flex justify-center gap-1 mb-6 text-secondary">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="stroke-none" />)}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-text-main font-heading leading-relaxed italic mb-8">
                        "{testimonials[index].quote}"
                    </p>
                    
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-1 bg-surface border border-border rounded-full">
                            <img 
                            src={testimonials[index].image} 
                            alt={testimonials[index].name} 
                            className="w-16 h-16 rounded-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg">{testimonials[index].name}</h4>
                            <p className="text-sm text-muted font-medium uppercase tracking-wider">{testimonials[index].role}</p>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mt-6">
            <motion.button 
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-border bg-surface text-muted hover:text-primary hover:border-primary flex items-center justify-center"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex gap-2">
                {testimonials.map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                        className={`rounded-full transition-all duration-300 ${
                            i === index ? 'bg-primary w-6 h-2.5' : 'bg-border h-2.5 w-2.5 hover:bg-tertiary'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>

            <motion.button 
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-border bg-surface text-muted hover:text-primary hover:border-primary flex items-center justify-center"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight size={24} />
            </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;