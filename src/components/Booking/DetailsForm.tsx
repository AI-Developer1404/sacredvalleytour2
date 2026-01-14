import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import type { BookingState } from './types';

interface DetailsFormProps {
    booking: BookingState;
    updateBooking: (updates: Partial<BookingState>) => void;
    onNext: () => void;
    onBack: () => void;
}

const DetailsForm = ({ booking, updateBooking, onNext, onBack }: DetailsFormProps) => {
    const { t } = useLanguage();
    const isValid = booking.name && booking.email && booking.hotel;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>{t('booking.detailsForm.title')}</h3>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('booking.detailsForm.firstName')} & {t('booking.detailsForm.lastName')}</label>
                    <input
                        type="text"
                        value={booking.name}
                        onChange={(e) => updateBooking({ name: e.target.value })}
                        placeholder="John Doe"
                        style={{ width: '100%', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '0', fontSize: '1rem', transition: 'border-color 0.3s' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('booking.detailsForm.email')}</label>
                    <input
                        type="email"
                        value={booking.email}
                        onChange={(e) => updateBooking({ email: e.target.value })}
                        placeholder="john@example.com"
                        style={{ width: '100%', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '0', fontSize: '1rem', transition: 'border-color 0.3s' }}
                    />
                    <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>Your tickets will be sent here.</p>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('booking.detailsForm.pickup')}</label>
                    <input
                        type="text"
                        value={booking.hotel}
                        onChange={(e) => updateBooking({ hotel: e.target.value })}
                        placeholder="Hotel Monasterio, Cusco"
                        style={{ width: '100%', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '0', fontSize: '1rem', transition: 'border-color 0.3s' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Special Requests (Optional)</label>
                    <textarea
                        value={booking.notes}
                        onChange={(e) => updateBooking({ notes: e.target.value })}
                        placeholder="Dietary restrictions, accessibility needs, etc."
                        rows={3}
                        style={{ width: '100%', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '0', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.3s' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button
                    onClick={onNext}
                    disabled={!isValid}
                    style={{
                        padding: '1.25rem',
                        backgroundColor: isValid ? 'var(--color-primary)' : '#e0e0e0',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0',
                        fontSize: '1rem',
                        cursor: isValid ? 'pointer' : 'not-allowed',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {t('booking.detailsForm.continue')}
                </button>
                <button
                    onClick={onBack}
                    style={{
                        padding: '1rem',
                        backgroundColor: 'transparent',
                        color: '#888',
                        border: 'none',
                        borderRadius: '0',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        fontWeight: 500,
                        textDecoration: 'underline'
                    }}
                >
                    {t('common.back')}
                </button>
            </div>
            <style>{`
                input:focus, textarea:focus {
                    outline: none !important;
                    border-color: var(--color-primary) !important;
                    background-color: #fcfcfc !important;
                }
            `}</style>
        </motion.div>
    );
};

export default DetailsForm;
