import React from 'react';
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const DetailCard = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
    <div
        className="premium-shadow"
        style={{
            padding: '3rem 2.5rem',
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <div style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{title}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', color: '#555', fontSize: '0.95rem', fontWeight: 300 }}>
                        <span style={{ marginRight: '1rem', color: 'var(--color-secondary)' }}>—</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Details = () => {
    const { t } = useLanguage();
    return (
        <section id="details" style={{ padding: 'var(--spacing-section) 1.5rem', backgroundColor: '#FBFBFB', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 600 }}>{t('details.included')}</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '1rem', color: 'var(--color-primary)', lineHeight: 1.2 }}>{t('details.title')}</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    <DetailCard
                        icon={<FaCheckCircle />}
                        title={t('details.included')}
                        items={[
                            t('details.wifi'),
                            t('details.refreshments'),
                            t('experience.safetyTitle'),
                            t('experience.guideTitle')
                        ]}
                    />

                    <DetailCard
                        icon={<FaClock />}
                        title={t('details.departure')}
                        items={[
                            "07:30 — " + t('route.cusco'),
                            "09:30 — " + t('route.ollantaytambo'),
                            "13:00 — " + t('route.urubamba'),
                            "18:30 — " + t('common.return')
                        ]}
                    />

                    <DetailCard
                        icon={<FaMapMarkerAlt />}
                        title={t('details.luggage')}
                        items={[
                            t('details.luggageDesc'),
                            t('details.wifiDesc'),
                            t('details.refreshmentsDesc')
                        ]}
                    />
                </div>

                <div style={{
                    marginTop: '4rem',
                    padding: '2.5rem 1.5rem',
                    border: '1px solid var(--color-secondary)',
                    textAlign: 'center',
                    color: 'var(--color-primary)',
                    maxWidth: '800px',
                    margin: '4rem auto 0',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                    lineHeight: 1.6
                }}>
                    "A journey of a thousand miles begins with a single, perfectly coordinated step."
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #details { padding: var(--spacing-section-mobile) 1rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Details;
