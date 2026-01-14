import { motion } from 'framer-motion';


const TourVideo = () => {
    return (
        <section id="tour-video" style={{ padding: '6rem 2rem', backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'white' }}>
                        Relive the Journey
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem' }}>
                        Get a glimpse of the breathtaking landscapes and cultural encounters that await you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        backgroundColor: '#000'
                    }}
                >
                    <video
                        controls
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        <source src="/peruu.mov" type="video/quicktime" />
                        <source src="/peruu.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default TourVideo;
