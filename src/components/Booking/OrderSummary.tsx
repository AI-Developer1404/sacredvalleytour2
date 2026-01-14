import type { BookingState } from './types';

const OrderSummary = ({ booking }: { booking: BookingState }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
        }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Review Your Journey</h4>

            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#666' }}>Date</span>
                    <span style={{ fontWeight: 500 }}>
                        {booking.date ? booking.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Select Date'}
                    </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#666' }}>Passengers</span>
                    <span style={{ fontWeight: 500 }}>{booking.passengers}</span>
                </div>
                {booking.hotel && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ color: '#666' }}>Pickup</span>
                        <span style={{ fontWeight: 500 }}>{booking.hotel}</span>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    ${booking.totalPrice}
                </span>
            </div>
        </div>
    );
};

export default OrderSummary;
