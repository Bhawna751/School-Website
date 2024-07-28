import Carousel from "react-bootstrap/Carousel";
import swimmmingImage from '../assets/hero/swimming.jpg';
import scienceImage from '../assets/hero/scienceExh.jpg';
import festImage from '../assets/hero/cultfest.jpg';

export default function CarouselSlider() {
  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: `url(${swimmmingImage})`,
            backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh',
            fontSize: '21px'
          }}>
            <h1><b>Annual Sports Day</b></h1>
            <p><b>Celebrating Excellence in Sports</b></p>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: `url(${scienceImage})`,
            backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh',
            fontSize: '21px'
          }}>
            <h1><b>Science Exhibition</b></h1>
            <p><b>Showcasing Student Innovations</b></p>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: `url(${festImage})`,
            backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh',
            fontSize: '21px', textShadow: '0 0 5px #000'
          }}>
            <h1><b>Cultural Fest</b></h1>
            <p><b>Embracing Diversity and Creativity</b></p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
