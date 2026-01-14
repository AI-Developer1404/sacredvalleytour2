import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaUserTie, FaCamera } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Feature = ({ icon, title, text, delay }: { icon: React.ReactNode, title: string, text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="premium-shadow"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '3rem 2rem',
            backgroundColor: 'white',
            border: '1px solid rgba(197, 160, 89, 0.1)',
            borderRadius: '0'
        }}
    >
        <div style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{title}</h3>
        <p style={{ fontSize: '1rem', color: '#666', fontWeight: 300, lineHeight: 1.6 }}>{text}</p>
    </motion.div>
);

const Experience = () => {
    const { t } = useLanguage();
    return (
        <section id="experience" style={{ padding: 'var(--spacing-section) 1.5rem', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    marginBottom: 'clamp(4rem, 10vw, 8rem)'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontSize: '0.8rem',
                            color: 'var(--color-secondary)',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'block'
                        }}>
                            {t('experience.title')}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', color: 'var(--color-primary)', lineHeight: 1.2 }}>
                            {t('hero.tagline')}
                        </h2>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', marginBottom: '1.5rem', color: '#555', fontWeight: 300 }}>
                            {t('experience.description')}
                        </p>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', marginBottom: '2.5rem', color: '#555', fontWeight: 300 }}>
                            {t('experience.comfortDesc')}
                        </p>
                        <div style={{ height: '1px', width: '80px', backgroundColor: 'var(--color-secondary)' }}></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            height: 'clamp(300px, 50vh, 550px)',
                            position: 'relative',
                            boxShadow: '20px 20px 0px rgba(197, 160, 89, 0.1)'
                        }}
                    >
                        <img
                            src="/bus_interior_experience.png"
                            alt="Luxury Bus Interior"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    <Feature
                        icon={<FaBus />}
                        title={t('experience.comfortTitle')}
                        text={t('experience.comfortDesc')}
                        delay={0.2}
                    />
                    <Feature
                        icon={<FaUserTie />}
                        title={t('experience.safetyTitle')}
                        text={t('experience.safetyDesc')}
                        delay={0.4}
                    />
                    <Feature
                        icon={<FaCamera />}
                        title={t('experience.guideTitle')}
                        text={t('experience.guideDesc')}
                        delay={0.6}
                    />
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #experience { padding: var(--spacing-section-mobile) 1rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Experience;
