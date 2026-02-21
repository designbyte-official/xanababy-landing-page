import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Star } from 'lucide-react';
import Button from '../ui/Button';

const heroImages = [
  { src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop", isLogo: false }, // Sleeping baby
  { src: "/logos/logo.webp", isLogo: true }, // Brand Logo
  // { src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop", isLogo: false }, // Happy family
];

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Text Content - Order 1 on Mobile now for better UX */}
        <div className="order-1 text-center lg:text-left pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-secondary/30 rounded-full bg-secondary-light mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">Ciencia del Sueño Infantil</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl  2xl:text-7xl text-primary font-heading leading-[1.05] mb-6 md:mb-8 font-medium">
              El sueño de tu bebé <br />
              <span className="text-muted italic font-light">no es cuestión de suerte.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-body max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 font-light leading-relaxed">
              Dormir es una función biológica. En Xanababy te enseñamos a sincronizar el reloj interno de tu bebé. Sin dejarle llorar.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Primary Button */}
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="w-full max-w-xs sm:w-auto"
              >
                Ver Taller Gratuito
              </Button>

              {/* Secondary Button */}
              <Button
                onClick={() => setIsVideoOpen(true)}
                variant="outline"
                size="lg"
                className="w-full max-w-xs sm:w-auto bg-surface group border-primary/10 hover:border-primary pl-2 pr-6 !py-2.5"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform mr-3">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </div>
                Cómo funciona
              </Button>
            </div>

            <div className="mt-10 md:mt-12 border-t border-border pt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img key={i} src={src} alt="Parent" className="w-12 h-12 rounded-full border-[3px] border-surface object-cover" />
                ))}
              </div>
              <div className="text-sm text-muted pl-2 text-left">
                <div className="flex items-center gap-1 text-secondary mb-0.5">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="font-bold text-primary">20,000+ familias</span> descansadas
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Content - Carousel with Shape */}
        <motion.div
          className="order-2 relative px-6 md:px-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {/* Decorative circle - Purple Tint */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-light/40 rounded-full blur-3xl -z-10"></div>

            <div className="rounded-t-[10rem] rounded-b-[4rem] overflow-hidden border-[8px] border-surface relative z-10 h-[400px] md:h-[650px] bg-surface">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  className={`absolute inset-0 w-full h-full ${heroImages[currentImageIndex].isLogo ? 'bg-surface flex items-center justify-center p-12' : ''}`}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <img
                    src={heroImages[currentImageIndex].src}
                    alt="Hero Showcase"
                    className={`w-full h-full ${heroImages[currentImageIndex].isLogo ? 'object-contain' : 'object-cover'}`}
                  />
                </motion.div>
              </AnimatePresence>
              {/* Gradient Overlay for visual softness */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-8 md:bottom-12 -left-2 md:-left-8 z-20 bg-surface/95 backdrop-blur border border-border py-3 px-6 md:py-4 md:px-8 rounded-2xl cursor-default"
            >
              <p className="text-xs text-secondary uppercase tracking-widest mb-1 font-bold">Resultado Real</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-heading text-primary">10-12h</span>
                <span className="text-xs md:text-sm text-muted font-medium leading-tight">de sueño<br />nocturno</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Video Modal Overlay - Functional YouTube Embed */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HKVPOpnyY5o?autoplay=1&rel=0&modestbranding=1"
                title="Xanababy Method Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;