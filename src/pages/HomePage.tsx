
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TourVideo from '../components/TourVideo';
import Route from '../components/Route';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Experience />
            <TourVideo />
            <Route />
            <Details />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
