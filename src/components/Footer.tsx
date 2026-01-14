import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer id="book" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: 'clamp(4rem, 10vw, 6rem) 1.5rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'clamp(3rem, 8vw, 4rem)' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>{t('booking.subtitle')}</h2>
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', marginBottom: '2.5rem', opacity: 0.9 }}>
                        {t('hero.description')}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/booking'}
                        style={{
                            padding: '1.2rem clamp(2rem, 5vw, 3rem)',
                            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                            backgroundColor: 'var(--color-accent)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            cursor: 'pointer'
                        }}
                    >
                        {t('common.bookNow').toUpperCase()}
                    </motion.button>
                </motion.div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '1.5rem' }}>
                        <a href="#" style={{ opacity: 0.8 }}><FaWhatsapp /></a>
                        <a href="#" style={{ opacity: 0.8 }}><FaEnvelope /></a>
                        <a href="#" style={{ opacity: 0.8 }}><FaInstagram /></a>
                        <a href="#" style={{ opacity: 0.8 }}><FaFacebook /></a>
                    </div>

                    <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
