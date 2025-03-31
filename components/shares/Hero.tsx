"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  link: string;
  title: string;
  backgroundImage: string; // ✅ Ajout d'une propriété pour l'image de fond
}

const Hero = ({ link, title, backgroundImage }: HeroProps) => {
  return (
    <div
      className="relative h-[40vh] w-full flex justify-center bg-cover bg-center items-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ✅ Overlay noir semi-transparent avec animation d'apparition */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
        style={{ opacity: 0.6 }}
      ></div>

      {/* ✅ Contenu en avant-plan avec animation d'apparition */}
      <motion.div
        initial="hidden"
        animate="visible" // Animation dès le début
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2, // Légère temporisation avant d'afficher
        }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative z-10 px-4"
      >
        <h1 className="text-2xl capitalize font-bold">{link}</h1>
        <h2 className="text-xl mt-2">{title}</h2>
      </motion.div>
    </div>
  );
};

export default Hero;
