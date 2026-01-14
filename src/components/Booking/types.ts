export interface BookingState {
    step: number;
    date: Date | null;
    passengers: number;
    totalPrice: number;
    name: string;
    email: string;
    hotel: string;
    notes: string;
}

export const PRICE_PER_PERSON = 149; // USD
export const MAX_CAPACITY = 20;

export type UpdateBookingFn = (updates: Partial<BookingState>) => void;
