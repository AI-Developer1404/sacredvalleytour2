import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
    color?: string;
    scrolled?: boolean;
}

const LanguageToggle = ({ color = 'white', scrolled = false }: LanguageToggleProps) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            style={{
                background: 'none',
                border: `1px solid ${color}`,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.8rem',
                padding: 0,
                marginLeft: '1rem',
                transition: 'all 0.4s ease',
                backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.1)'
            }}
            aria-label="Toggle Language"
        >
            {language === 'en' ? 'ES' : 'EN'}
        </motion.button>
    );
};

export default LanguageToggle;
