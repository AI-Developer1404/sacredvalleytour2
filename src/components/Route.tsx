import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stop = ({
    img,
    title,
    description,
    reversed = false
}: {
    img: string,
    title: string,
    description: string,
    reversed?: boolean
}) => {
    return (
        <div className={`route-stop ${reversed ? 'reversed' : ''}`} style={{
            display: 'flex',
            flexDirection: reversed ? 'row-reverse' : 'row',
            alignItems: 'center',
            gap: '4rem',
            marginBottom: '6rem'
        }}>
            <motion.div
                initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1, height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            >
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: 1 }}
            >
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{title}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>{description}</p>
            </motion.div>
        </div>
    );
};

const Route = () => {
    const { t } = useLanguage();
    return (
        <section id="route" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{t('route.title')}</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('experience.description')}</p>
                </motion.div>

                <Stop
                    img="/pisac_ruins.png"
                    title={t('route.cusco')}
                    description={t('experience.description')}
                />

                <Stop
                    img="/ollantaytambo_fortress.png"
                    title={t('route.ollantaytambo')}
                    description={t('experience.safetyDesc')}
                    reversed={true}
                />

                <Stop
                    img="/chincheros_weaving.png"
                    title={t('route.urubamba')}
                    description={t('experience.guideDesc')}
                />
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .route-stop {
                        flex-direction: column !important;
                        gap: 2rem !important;
                        text-align: center;
                    }
                    .route-stop.reversed {
                        flex-direction: column !important;
                    }
                    .route-stop > div {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Route;
