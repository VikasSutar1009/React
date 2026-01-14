import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/common/Button";

const Hero = () => {
  //  Correct hook usage
  const { scrollY } = useScroll();

  //  Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="/assets/services/hero-main.jpg"
          className="w-full h-full object-cover opacity-60 scale-110"
          alt="Fixify Work"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
      </motion.div>

      {/* Hero Content */}
      <motion.div style={{ y: y2 }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Premium Home Maintenance
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            FIXIFY YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              LIFESTYLE
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From industrial fabrication to artistic wall paintings.
            We don't just fix; we transform your space with surgical precision.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
