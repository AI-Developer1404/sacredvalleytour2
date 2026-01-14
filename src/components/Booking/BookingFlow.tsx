import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CalendarStep from './CalendarStep';
import DetailsForm from './DetailsForm';
import OrderSummary from './OrderSummary';
import PaymentStep from './PaymentStep';
import SuccessStep from './SuccessStep';
import { PRICE_PER_PERSON } from './types';
import type { BookingState } from './types';
import { useLanguage } from '../../context/LanguageContext';

const BookingFlow = () => {
    const { t } = useLanguage();
    const [booking, setBooking] = useState<BookingState>({
        step: 0, // 0: Calendar, 1: Details, 2: Review/Payment, 3: Success
        date: null,
        passengers: 1,
        totalPrice: PRICE_PER_PERSON,
        name: '',
        email: '',
        hotel: '',
        notes: ''
    });

    const updateBooking = (updates: Partial<BookingState>) => {
        setBooking(prev => {
            const newState = { ...prev, ...updates };
            if (updates.passengers) {
                newState.totalPrice = newState.passengers * PRICE_PER_PERSON;
            }
            return newState;
        });
    };

    const nextStep = () => updateBooking({ step: booking.step + 1 });
    const prevStep = () => updateBooking({ step: booking.step - 1 });

    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    marginBottom: '1rem'
                }}>
                    {t('booking.flowTitle')}
                </h2>
                <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-secondary)', marginBottom: '1rem' }}></div>
                <p style={{ color: '#666', fontWeight: 300 }}>{t('booking.flowSubtitle')}</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: booking.step === 3 ? '1fr' : '1fr',
                gap: '2rem',
                alignItems: 'start'
            }}>
                {/* Main Content Area */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.02)'
                }}>
                    <AnimatePresence mode='wait'>
                        {booking.step === 0 && (
                            <CalendarStep
                                key="calendar"
                                booking={booking}
                                updateBooking={updateBooking}
                                onNext={nextStep}
                            />
                        )}
                        {booking.step === 1 && (
                            <DetailsForm
                                key="details"
                                booking={booking}
                                updateBooking={updateBooking}
                                onNext={nextStep}
                                onBack={prevStep}
                            />
                        )}
                        {booking.step === 2 && (
                            <PaymentStep
                                key="payment"
                                booking={booking}
                                onSuccess={nextStep}
                                onBack={prevStep}
                            />
                        )}
                        {booking.step === 3 && (
                            <SuccessStep key="success" booking={booking} />
                        )}
                    </AnimatePresence>
                </div>

                {/* Summary Panel below or sidebar */}
                {booking.step !== 3 && (
                    <div style={{ marginTop: '2rem' }}>
                        <OrderSummary booking={booking} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingFlow;
