import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import type { BookingState } from './types';
// import { MAX_CAPACITY } from './types';

interface CalendarStepProps {
    booking: BookingState;
    updateBooking: (updates: Partial<BookingState>) => void;
    onNext: () => void;
}

const CalendarStep = ({ booking, updateBooking, onNext }: CalendarStepProps) => {
    const { t } = useLanguage();

    const isDateDisabled = ({ date }: { date: Date }) => {
        if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true;
        return false;
    };

    const handleDateChange = (value: any) => {
        updateBooking({ date: value as Date });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="calendar-step-container"
        >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)', fontWeight: 600 }}>{t('booking.calendar.title')}</h3>

            <div className="custom-calendar-wrapper" style={{ marginBottom: '2.5rem' }}>
                <Calendar
                    onChange={handleDateChange}
                    value={booking.date}
                    minDate={new Date()}
                    tileDisabled={isDateDisabled}
                    prev2Label={null}
                    next2Label={null}
                />
            </div>

            {booking.date && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '2.5rem' }}
                >
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--color-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {t('booking.detailsForm.passengers')}
                    </label>
                    <div style={{ position: 'relative' }}>
                        <select
                            value={booking.passengers}
                            onChange={(e) => updateBooking({ passengers: parseInt(e.target.value) })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                fontSize: '1rem',
                                border: '1px solid #e0e0e0',
                                borderRadius: '0',
                                appearance: 'none',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                                fontWeight: 300,
                                color: '#333'
                            }}
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                                </option>
                            ))}
                        </select>
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-primary)' }}>
                            ▼
                        </div>
                    </div>
                </motion.div>
            )}

            <button
                onClick={onNext}
                disabled={!booking.date}
                className="premium-btn"
                style={{
                    width: '100%',
                    padding: '1.25rem',
                    backgroundColor: booking.date ? 'var(--color-primary)' : '#e0e0e0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0',
                    fontSize: '1rem',
                    cursor: booking.date ? 'pointer' : 'not-allowed',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease',
                    boxShadow: booking.date ? '0 10px 20px rgba(139, 69, 19, 0.15)' : 'none'
                }}
            >
                {booking.date ? t('common.next') : t('booking.calendar.selectDate')}
            </button>

            <style>{`
                .react-calendar {
                    width: 100% !important;
                    border: none !important;
                    font-family: var(--font-body) !important;
                    background: transparent !important;
                }
                .react-calendar__navigation {
                    margin-bottom: 1.5rem !important;
                }
                .react-calendar__navigation button {
                    color: var(--color-primary) !important;
                    font-size: 1.1rem !important;
                    font-weight: 600 !important;
                }
                .react-calendar__month-view__weekdays {
                    font-weight: 600 !important;
                    text-transform: uppercase !important;
                    font-size: 0.75rem !important;
                    color: var(--color-secondary) !important;
                    letter-spacing: 1px !important;
                }
                .react-calendar__tile {
                    padding: 1rem 0.5rem !important;
                    font-size: 0.9rem !important;
                    font-weight: 300 !important;
                    border-radius: 0 !important;
                    transition: all 0.2s ease !important;
                }
                .react-calendar__tile--now {
                    background: rgba(139, 69, 19, 0.05) !important;
                    color: var(--color-primary) !important;
                    font-weight: 600 !important;
                }
                .react-calendar__tile--active {
                    background: var(--color-primary) !important;
                    color: white !important;
                    font-weight: 600 !important;
                    box-shadow: 0 4px 10px rgba(139, 69, 19, 0.3) !important;
                }
                .react-calendar__tile:enabled:hover,
                .react-calendar__tile:enabled:focus {
                    background-color: #f8f8f8 !important;
                    color: var(--color-primary) !important;
                }
                .react-calendar__tile--active:enabled:hover,
                .react-calendar__tile--active:enabled:focus {
                    background: var(--color-primary) !important;
                    color: white !important;
                }
                .react-calendar__tile:disabled {
                    background-color: transparent !important;
                    color: #ccc !important;
                }
                .premium-btn:hover:not(:disabled) {
                    background-color: var(--color-secondary) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </motion.div>
    );
};

export default CalendarStep;
