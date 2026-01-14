import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BookingFlow from '../components/Booking/BookingFlow';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const BookingPage = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
            {/* Minimalist Header */}
            <header style={{
                padding: '2rem 4rem',
                backgroundColor: 'white',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 100
            }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-primary)',
                        cursor: 'pointer'
                    }}
                >
                    <FaArrowLeft style={{ fontSize: '0.8rem' }} /> {t('common.return')}
                </button>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                    Sacred<span style={{ color: 'var(--color-secondary)' }}>Valley</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
                        <FaShieldAlt /> {t('common.secureCheckout')}
                    </div>
                    <LanguageToggle color="var(--color-primary)" />
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', flex: 1 }}>

                {/* Left Side: Inspiration & Trust */}
                <div style={{
                    position: 'relative',
                    padding: '6rem 4rem',
                    backgroundColor: 'black',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.8,
                            zIndex: 0
                        }}
                    >
                        <source src="/background.mp4" type="video/mp4" />
                    </video>

                    {/* Vignette Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                        zIndex: 0
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span style={{ color: '#FFFFFF', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                            {t('booking.title')}
                        </span>
                        <h2 style={{ color: '#FFFFFF', fontSize: '3rem', margin: '1.5rem 0', fontStyle: 'italic', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                            {t('booking.subtitle')} <br /> {t('booking.subtitleBr')}
                        </h2>
                        <div style={{ height: '1px', width: '60px', backgroundColor: '#FFFFFF', margin: '2rem 0', boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFFFFF', fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}><FaStar /></div>
                                <div>
                                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{t('booking.smallGroups')}</h4>
                                    <p style={{ opacity: 1, fontWeight: 400, fontSize: '1rem', color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{t('booking.smallGroupsDesc')}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: '#FFFFFF', fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}><FaStar /></div>
                                <div>
                                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{t('booking.reliableService')}</h4>
                                    <p style={{ opacity: 1, fontWeight: 400, fontSize: '1rem', color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{t('booking.reliableServiceDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Booking Flow */}
                <div style={{ padding: '6rem 4rem', backgroundColor: '#F8F7F4' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <BookingFlow />
                    </div>
                </div>
            </div>

            <footer style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#999',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                borderTop: '1px solid #eee'
            }}>
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            </footer>
        </motion.div>
    );
};

export default BookingPage;
