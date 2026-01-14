import { motion } from 'framer-motion';
import type { BookingState } from './types';
import { FaCheckCircle, FaCalendarPlus } from 'react-icons/fa';

const SuccessStep = ({ booking }: { booking: BookingState }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', padding: '2rem 1rem' }}
        >
            <div style={{ fontSize: '4rem', color: '#2ecc71', marginBottom: '1rem' }}>
                <FaCheckCircle />
            </div>

            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>
                Your Journey is Confirmed!
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
                Thank you, <strong>{booking.name}</strong>. We have sent a confirmation email to <strong>{booking.email}</strong>.<br />
                We will pick you up at <strong>{booking.hotel}</strong> on <strong>{booking.date?.toLocaleDateString()}</strong>.
            </p>

            <button
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                    backgroundColor: 'var(--color-secondary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: 600
                }}
            >
                <FaCalendarPlus style={{ marginRight: '0.5rem' }} /> Add to Calendar
            </button>
        </motion.div>
    );
};

export default SuccessStep;
