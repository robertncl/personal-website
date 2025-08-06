'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Hi, I'm Robert Ngo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Developer & Creator
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <Link 
              href="#gallery"
              className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors mr-4"
            >
              View Gallery
            </Link>
            <Link 
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 rounded-full hover:bg-blue-600 transition-colors mr-4"
            >
              View Projects
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 rounded-full hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate developer and creator with a love for building beautiful, functional web experiences. 
            I'm constantly learning and exploring new technologies to create innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for Instagram images - replace with your actual images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Image {item}</span>
                  {/* Replace with: <Image src={`/images/photo-${item}.jpg`} alt={`Photo ${item}`} fill className="object-cover" /> */}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            Add your Instagram photos to the /public/images folder and update the Image components above
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-700 text-white h-32"
              />
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
