'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission from Bikore Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:bikore@gmail.com?subject=${subject}&body=${body}`
    
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000) // Reset after 5 seconds
  }

  const contactCards = [
    {
      icon: '📞',
      iconBg: 'rgba(45,106,63,0.12)',
      title: 'Call us',
      lines: ['+250 782 722 112', '+250 782 526 295'],
      href: 'tel:+250782722112',
      color: '#2D6A3F'
    },
    {
      icon: '✉️',
      iconBg: 'rgba(201,168,76,0.12)',
      title: 'Email us',
      lines: ['bikore@gmail.com', 'Reply within 24 hours'],
      href: 'mailto:bikore@gmail.com',
      color: '#2D6A3F'
    },
    {
      icon: 'whatsapp',
      iconBg: 'rgba(37,211,102,0.15)',
      title: 'WhatsApp',
      lines: ['Chat with our team', 'Usually replies in minutes'],
      href: 'https://wa.me/250782722112',
      color: '#2D6A3F'
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-20"
      style={{ background: '#FFFFFF' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text and Contact Cards */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p 
                className="text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ color: '#2D6A3F', letterSpacing: '0.1em' }}
              >
                {t('contact.label')}
              </p>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 
                className="font-serif text-5xl md:text-6xl font-black text-forest-darkest leading-tight mb-6"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {t('contact.heading')}<br />
                {t('contact.headingHighlight')}{' '}
                <span className="italic" style={{ color: '#C9A84C' }}>
                  {t('contact.headingEnd')}
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg mb-8"
              style={{ 
                color: '#3D5A47',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {t('contact.subtitle')}
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactCards.map((card, index) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.title === 'WhatsApp' ? '_blank' : undefined}
                  rel={card.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    background: 'rgba(26,61,43,0.06)',
                    borderColor: 'rgba(26,61,43,0.25)',
                    transform: 'translateX(4px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                  }}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer"
                  style={{
                    background: '#F4F0E6',
                    borderColor: 'rgba(26,61,43,0.1)'
                  }}
                >
                  {/* Icon Circle */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: card.iconBg }}
                  >
                    {card.icon === 'whatsapp' ? (
                      <svg viewBox="0 0 24 24" fill="#25D366" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
                          -.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 
                          1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
                          -2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173
                          -.297-.018-.458.13-.606.134-.133.298-.347.446-.52
                          .149-.174.198-.298.298-.497.099-.198.05-.371-.025
                          -.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487
                          -.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52
                          .074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462
                          1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487
                          .709.306 1.262.489 1.694.625.712.227 1.36.195 1.871
                          .118.571-.085 1.758-.719 2.006-1.413.248-.694.248
                          -1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 
                          7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214
                          -3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51
                          -5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122
                          1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 
                          5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 
                          11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 
                          2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a
                          11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89
                          -5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    ) : (
                      <span className="text-xl">{card.icon}</span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="text-forest-darkest font-semibold text-sm mb-1">
                      {card.title}
                    </div>
                    <div className="text-sm" style={{ color: card.color }}>
                      {card.lines[0]}
                    </div>
                    <div 
                      className="text-xs italic mt-0.5"
                      style={{ color: 'rgba(26,61,43,0.4)' }}
                    >
                      {card.lines[1]}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="rounded-3xl p-8"
              style={{
                background: '#F4F0E6',
                border: '1px solid rgba(26,61,43,0.1)',
                borderRadius: '24px'
              }}
            >
              {!isSubmitted ? (
                <>
                  <h2 
                    className="text-xl mb-6"
                    style={{ 
                      fontFamily: 'Playfair Display',
                      color: 'white'
                    }}
                  >
                    Send a message
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                      <label 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: '#1A3D2B', fontWeight: 500 }}
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Amina Uwimana"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(26,61,43,0.15)',
                          color: '#0F2419'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2D6A3F'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = '0 0 0 3px rgba(45,106,63,0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(26,61,43,0.15)'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                      <label 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: '#1A3D2B', fontWeight: 500 }}
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+250 7XX XXX XXX"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(26,61,43,0.15)',
                          color: '#0F2419'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2D6A3F'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = '0 0 0 3px rgba(45,106,63,0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(26,61,43,0.15)'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: '#1A3D2B', fontWeight: 500 }}
                      >
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(26,61,43,0.15)',
                          color: '#0F2419'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2D6A3F'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = '0 0 0 3px rgba(45,106,63,0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(26,61,43,0.15)'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: '#1A3D2B', fontWeight: 500 }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="I have a question about..."
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none resize-none"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(26,61,43,0.15)',
                          color: '#0F2419'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2D6A3F'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = '0 0 0 3px rgba(45,106,63,0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(26,61,43,0.15)'
                          e.target.style.background = '#FFFFFF'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer"
                      style={{
                        background: '#2D6A3F',
                        color: 'white',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1A3D2B'
                        e.currentTarget.style.transform = 'scale(1.01)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#2D6A3F'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'scale(0.99)'
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'scale(1.01)'
                      }}
                    >
                      Send message →
                    </button>
                  </form>
                </>
              ) : (
                // Success State
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 
                    className="text-2xl mb-3"
                    style={{ 
                      fontFamily: 'Playfair Display',
                      color: 'white'
                    }}
                  >
                    Message sent!
                  </h3>
                  <p style={{ color: '#2D6A3F' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
