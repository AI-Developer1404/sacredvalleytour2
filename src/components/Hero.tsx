import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
        }}>
            {/* Background Video */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)'
                }}></div>
            </div>

            {/* Header Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                padding: isScrolled ? '1rem 2rem' : '2rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.4s ease',
                boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none'
            }}>
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    letterSpacing: '1px',
                    color: isScrolled ? 'var(--color-primary)' : 'white',
                    textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Sacred<span style={{ fontWeight: 600 }}>Valley</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: 500,
                    alignItems: 'center'
                }}>
                    <a href="#experience" style={{ color: isScrolled ? 'var(--color-text)' : 'white' }}>{t('nav.experience')}</a>
                    <a href="#route" style={{ color: isScrolled ? 'var(--color-text)' : 'white' }}>{t('nav.route')}</a>
                    <a href="#details" style={{ color: isScrolled ? 'var(--color-text)' : 'white' }}>{t('nav.details')}</a>
                    <div
                        onClick={() => navigate('/booking')}
                        style={{
                            color: isScrolled ? 'var(--color-primary)' : 'white',
                            fontWeight: 700,
                            borderBottom: `1px solid ${isScrolled ? 'var(--color-primary)' : 'white'}`,
                            cursor: 'pointer'
                        }}
                    >
                        {t('common.bookNow')}
                    </div>
                    <LanguageToggle color={isScrolled ? 'var(--color-text)' : 'white'} scrolled={isScrolled} />
                </div>

                {/* Mobile Menu Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="mobile-toggle" style={{ display: 'none' }}>
                        <LanguageToggle color={isScrolled ? 'var(--color-text)' : 'white'} scrolled={isScrolled} />
                    </div>

                    <div
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            fontSize: '1.8rem',
                            cursor: 'pointer',
                            color: isScrolled ? 'var(--color-text)' : 'white'
                        }}
                    >
                        {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </div>
                </div>

                <style>{`
                    @media (max-width: 1024px) {
                        .desktop-menu { display: none !important; }
                        .mobile-toggle { display: block !important; }
                    }
                `}</style>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'white',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{t('nav.experience')}</a>
                        <a href="#route" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{t('nav.route')}</a>
                        <a href="#details" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{t('nav.details')}</a>
                        <div
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate('/booking');
                            }}
                            style={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                padding: '1rem 3rem',
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            {t('common.bookNow')}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Content */}
            <div style={{ padding: '2rem', maxWidth: '100%', width: '100%' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: 'clamp(2px, 1vw, 4px)',
                            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                            color: '#FFFFFF',
                            marginBottom: '1rem',
                            display: 'block',
                            fontWeight: 600,
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}>
                            {t('hero.tagline')}
                        </span>
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                                marginBottom: '1.5rem',
                                color: 'white',
                                lineHeight: 1.1,
                                fontStyle: 'italic',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                            }}
                        >
                            {t('hero.title')} <br /> {t('hero.titleBr')}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(0.9rem, 4vw, 1.25rem)',
                            marginBottom: '3rem',
                            fontWeight: 300,
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            opacity: 0.9,
                            letterSpacing: '0.5px',
                            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                            padding: '0 1rem'
                        }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: 'var(--color-primary)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/booking')}
                        style={{
                            padding: '1.25rem clamp(2rem, 5vw, 3.5rem)',
                            fontSize: 'clamp(0.8rem, 3vw, 1rem)',
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            border: '1.5px solid #FFFFFF',
                            borderRadius: '0',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                        }}
                    >
                        {t('hero.cta')}
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
