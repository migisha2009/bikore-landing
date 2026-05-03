'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'kin'

interface Translations {
  [key: string]: {
    en: string
    kin: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.screens': { en: 'Screens', kin: 'Mugaragaro' },
  'nav.howItWorks': { en: 'How it works', kin: 'Ibikorwa byose' },
  'nav.features': { en: 'Features', kin: 'Ibirango' },
  'nav.stories': { en: 'Stories', kin: 'Inkuru' },
  'nav.download': { en: 'Download', kin: 'Ikarura' },
  'nav.contact': { en: 'Contact', kin: 'Twandikire' },
  'nav.getApp': { en: 'Get the app', kin: 'Funga app' },

  // Hero Section
  'hero.title': { 
    en: 'Save Together. Grow Together.',
    kin: 'Tubikore hamwe. Tuvuke hamwe.'
  },
  'hero.subtitle': {
    en: 'Bringing Rwanda\'s trusted Ikimina tradition to your smartphone. Join thousands saving smarter every day.',
    kin: 'Kuzana umuco w\'Ikimina wihangir ku telephone. Ihangane n\'ibihumbi batabikora buri munsi.'
  },
  'hero.cta': { en: 'Start saving', kin: 'Tangira ikimina' },

  // CTA Section
  'cta.headline': { en: 'Start your', kin: 'Tangira' },
  'cta.headlineHighlight': { en: 'savings circle', kin: 'ikimina ryawe' },
  'cta.headlineEnd': { en: 'today', kin: 'uyu munsi' },
  'cta.subtitle': {
    en: 'Join thousands of Rwandans already saving smarter. Free to download, free to start.',
    kin: 'Ihangane n\'Abanyarwanda ibihumbi batabikora. Ikarura buri wese, gutangira ntibishura umushahara.'
  },
  'cta.downloadAppStore': { en: 'DOWNLOAD ON THE', kin: 'IKARURE KURI' },
  'cta.appStore': { en: 'App Store', kin: 'App Store' },
  'cta.getItOn': { en: 'GET IT ON', kin: 'IBONE KURI' },
  'cta.googlePlay': { en: 'Google Play', kin: 'Google Play' },

  // Contact Section
  'contact.label': { en: 'CONTACT', kin: 'TWANDIKIRE' },
  'contact.heading': { en: 'Have questions?', kin: 'Ubufasha ufite?' },
  'contact.headingHighlight': { en: 'We\'re here', kin: 'Turi hano' },
  'contact.headingEnd': { en: 'to help.', kin: 'gufasha.' },
  'contact.subtitle': {
    en: 'Whether you\'re starting your first Ikimina group or need help with your account — reach out. Our team speaks Kinyarwanda and English.',
    kin: 'Waba utangira itsinda rya mbere rya Ikimina cyangwa ufasha ku konti yawe — twandikire. Itsinda rihuga Kinyarwanda n\'Icyongereza.'
  },
  'contact.callUs': { en: 'Call us', kin: 'Duhagarare' },
  'contact.emailUs': { en: 'Email us', kin: 'Tutumire email' },
  'contact.whatsapp': { en: 'WhatsApp', kin: 'WhatsApp' },
  'contact.whatsappText': { en: 'Chat with our team', kin: 'Somye n\'itsinda ryacu' },
  'contact.whatsappSubtext': { en: 'Usually replies in minutes', kin: 'Igisubizo mu minota yimwe' },
  'contact.sendEmailSubtext': { en: 'Reply within 24 hours', kin: 'Igisubizo munsi 24' },
  'contact.formTitle': { en: 'Send a message', kin: 'Tunga ubutumwa' },
  'contact.formName': { en: 'Full name', kin: 'Amazina yose' },
  'contact.formPhone': { en: 'Phone number', kin: 'Nomero ya telephone' },
  'contact.formEmail': { en: 'Email (optional)', kin: 'Email (bitari ngombwa)' },
  'contact.formMessage': { en: 'Message', kin: 'Ubutumwa' },
  'contact.formSubmit': { en: 'Send message →', kin: 'Tunga ubutumwa →' },
  'contact.successTitle': { en: 'Message sent!', kin: 'Ubutumwa bwatumwe!' },
  'contact.successSubtitle': { en: 'We\'ll get back to you within 24 hours.', kin: 'Tuzakubwira icyo ukora munsi 24.' },

  // QR Widget
  'qr.scanToDownload': { en: 'Scan to download', kin: 'Scanne kuri ikarura' },
  'qr.freeOnMobile': { en: 'Free on iOS & Android', kin: 'Buri wese kuri iOS & Android' },
  'qr.downloadBikore': { en: 'Download Bikore', kin: 'Ikarura Bikore' },
  'qr.scanCamera': { en: 'Scan with your phone camera', kin: 'Scanne na camera yawe' },
  'qr.freeNoCard': { en: 'Free to download · No credit card', kin: 'Ikarura buri wese · Nta kadi' },

  // Footer
  'footer.getInTouch': { en: 'Get in touch', kin: 'Twandikire' },
  'footer.officeHours': { en: 'Mon – Fri · 8:00am – 6:00pm (CAT)', kin: 'Kuwa mbere na gatanu · 8:00 za nimugorora – 6:00 z\'amanywa (SAA)' }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.en || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
