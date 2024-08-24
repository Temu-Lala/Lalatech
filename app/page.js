"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "./components/typewriter";
import Product from './(page)/products/page'
import Services from "./(page)/service/page";
// Animated Text Component
const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50); // Speed up the typing effect

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold neon-text"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {displayedText}
    </motion.h1>
  );
};

// Particle Component for Animated Background with High Speed and Glowing Effect
const Particles = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        const xEnd = Math.random() * 100;
        const yEnd = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg"
            style={{
              top: `${yStart}%`,
              left: `${xStart}%`,
              boxShadow:
                "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.7)",
            }}
            animate={{
              x: `${xEnd - xStart}%`,
              y: `${yEnd - yStart}%`,
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.3, // Increased speed
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Particles */}
      <Particles />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center">
          <Typewriter />
        </div>
        <section className="relative flex flex-1 flex-col  items-center justify-center h-screen text-center">
          <motion.img
            src="/path-to-your-hero-image.png"
            alt="Hero Image"
            className="w-full max-w-md mx-auto transform hover:scale-110 transition-transform duration-500 z-10"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1, transition: { duration: 2 } }}
          />
          <AnimatedText text="Welcome to the Future" />
          <p className="mt-4 text-lg md:text-2xl text-neon z-10">
            Innovative solutions for a modern world.
          </p>
          <Link
            href="#features"
            className="mt-10 inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-300 hover:animate-pulse neon-button z-10"
          >
            Explore Features
          </Link>
        </section>
      </div>

      <Product/>
     <Services/>
      <section
        id="features"
        className="relative py-20 bg-opacity-70 backdrop-blur-lg bg-gray-800 glassmorphism z-10"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold neon-text">
              Our Features
            </h2>
            <p className="mt-4 text-lg text-neon">
              Explore the cutting-edge features that set us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered"
              description="Leverage the power of artificial intelligence to stay ahead of the curve."
              icon="🤖"
            />
            <FeatureCard
              title="Secure & Reliable"
              description="Your data is protected with top-tier security measures."
              icon="🔒"
            />
            <FeatureCard
              title="User-Friendly"
              description="Designed with simplicity and ease of use in mind."
              icon="👍"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 glassmorphism z-10">
    <div className="text-4xl neon-icon">{icon}</div>
    <h3 className="mt-4 text-xl font-bold neon-text">{title}</h3>
    <p className="mt-2 text-gray-300 text-neon">{description}</p>
  </div>
);

export default HomePage;
