import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import type { BookingState } from './types';

interface PaymentStepProps {
    booking: BookingState;
    onSuccess: () => void;
    onBack: () => void;
}

const PaymentStep = ({ booking, onSuccess, onBack }: PaymentStepProps) => {
    const { t } = useLanguage();
    // Mock payment processing
    const handlePayment = async () => {
        const btn = document.getElementById('pay-btn');
        if (btn) {
            btn.innerText = t('booking.payment.processing');
            btn.style.opacity = "0.7";
            btn.style.cursor = "wait";
        }

        setTimeout(() => {
            onSuccess();
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)', fontWeight: 600 }}>{t('booking.payment.title')}</h3>

            <div style={{
                padding: '2rem',
                border: '1px solid #eee',
                backgroundColor: '#fcfcfc',
                marginBottom: '2rem',
                position: 'relative',
                boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Credit or Debit Card</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div style={{ width: '35px', height: '22px', backgroundColor: '#eee', borderRadius: '3px' }}></div>
                        <div style={{ width: '35px', height: '22px', backgroundColor: '#eee', borderRadius: '3px' }}></div>
                        <div style={{ width: '35px', height: '22px', backgroundColor: '#eee', borderRadius: '3px' }}></div>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#333',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span style={{ color: '#ccc', fontSize: '1.2rem' }}>💳</span>
                        <input
                            type="text"
                            placeholder="Card Number"
                            readOnly
                            value="4242 4242 4242 4242"
                            style={{ border: 'none', width: '100%', outline: 'none', fontSize: '1rem', color: '#555' }}
                        />
                    </div>
                    <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '0 -1rem' }}></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ color: '#ccc', fontSize: '1.2rem', opacity: 0 }}>📅</span>
                            <input
                                type="text"
                                placeholder="MM / YY"
                                readOnly
                                value="12 / 26"
                                style={{ border: 'none', width: '100%', outline: 'none', fontSize: '1rem', color: '#555' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '1px solid #f0f0f0', paddingLeft: '1rem' }}>
                            <input
                                type="text"
                                placeholder="CVC"
                                readOnly
                                value="***"
                                style={{ border: 'none', width: '100%', outline: 'none', fontSize: '1rem', color: '#555' }}
                            />
                        </div>
                    </div>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#999', lineHeight: 1.4 }}>
                    Your payment information is processed securely by Stripe. We do not store your card details.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button
                    id="pay-btn"
                    onClick={handlePayment}
                    style={{
                        padding: '1.25rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 15px 30px rgba(139, 69, 19, 0.2)'
                    }}
                >
                    {t('booking.payment.pay')} ${booking.totalPrice}
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
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.5 }}>
                <div style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🔒</span> SECURE SSL
                </div>
                <div style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🛡️</span> FRAUD PROTECTION
                </div>
            </div>
        </motion.div>
    );
};

export default PaymentStep;
