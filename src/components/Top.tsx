import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../images/slide1.webp';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.webp';

const Top = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2000,
    fade: true,
    pauseOnHover: false,
  };
  const images = [
    { id: 1, url: slide1 },
    { id: 2, url: slide2 },
    { id: 3, url: slide3 },
  ];

  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div className="w-full" key={img.id}>
          <img src={img.url} alt="スライダー" className="w-full" />
        </div>
      ))}
    </Slider>
  );
};

export default Top;
