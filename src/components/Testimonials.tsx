import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Review = ({ text, author, location, delay }: { text: string, author: string, location: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}
    >
        <div style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>
            <FaQuoteLeft />
        </div>
        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#555' }}>"{text}"</p>
        <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.5rem', color: '#FFD700' }}>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <h4 style={{ fontWeight: 700, fontSize: '0.9rem' }}>{author}</h4>
        <span style={{ fontSize: '0.8rem', color: '#999' }}>{location}</span>
    </motion.div>
);

const Testimonials = () => {
    const { t } = useLanguage();
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{t('testimonials.title')}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Review
                        text={t('testimonials.t1')}
                        author={t('testimonials.t1Author')}
                        location="Verified Guest"
                        delay={0}
                    />
                    <Review
                        text={t('testimonials.t2')}
                        author={t('testimonials.t2Author')}
                        location="Verified Guest"
                        delay={0.2}
                    />
                    <Review
                        text="Professional service from start to finish. Highly recommend for anyone looking for a stress-free experience."
                        author="Elena Rodriguez"
                        location="Spain"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
