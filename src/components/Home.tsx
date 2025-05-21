
import Hero from '../components/Hero';
import HomeGallery from './HomeGallery';
import Review from '../components/Review';
import AboutProducts from '../components/AboutProducts';
import Contact from '../components/Contact';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeGallery />
            <Review />
            <AboutProducts />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.894734384602!2d17.736824612240365!3d45.16898145296651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475d945ac5fbc00d%3A0xc9fe9e3500809455!2sKujnik%2021%2C%2035250%2C%20Kujnik!5e0!3m2!1sen!2shr!4v1708549923329!5m2!1sen!2shr" className='w-full h-80' ></iframe>
            <Contact />
            <About />
            <Footer />
        </div>
    )
};

export default Home;