"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-lg" style={{ color: '#F5C518' }}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Claudine Uwimana",
      location: "Kigali, Rwanda",
      quote: "Bikore has transformed how our community saves. We've built trust and grown our savings together.",
      rating: 5,
      initials: "CU"
    },
    {
      name: "Jean-Pierre Niyonzima",
      location: "Kigali, Rwanda", 
      quote: "The mobile money integration makes contributing so easy. I never miss a cycle anymore.",
      rating: 5,
      initials: "JN"
    },
    {
      name: "Grace Mukamana",
      location: "Kigali, Rwanda",
      quote: "Our group has saved over Rwf 500,000 in just 6 months. Bikore keeps everyone accountable.",
      rating: 5,
      initials: "GM"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Stories from our community
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="rounded-2xl p-7 transition-colors duration-300"
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                  style={{ background: '#F5C518' }}
                >
                  <span 
                    className="font-bold text-lg"
                    style={{ color: '#0D2B1A' }}
                  >
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#B8E08D' }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote 
                className="leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
