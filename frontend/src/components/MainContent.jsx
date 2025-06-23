import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainContent() {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/cars/')
      .then(res => res.json())
      .then(setCars);

    fetch('/api/categories/')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const handleCategoryClick = (catId) => {
    navigate(`/cars?category=${catId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  };

  return (
    <div className="wrap">
      <div className="content">

        {/* Слайдер */}
        <div className="slider-wrapper theme-default">
          <Slider {...sliderSettings}>
            <div>
              <img src="/images/slider1.jpg" alt="Слайд 1" />
            </div>
            <div>
              <a href="http://dev7studios.com" target="_blank" rel="noreferrer">
                <img src="/images/slider2.jpg" alt="Слайд 2" />
              </a>
            </div>
            <div>
              <img src="/images/slider3.jpg" alt="Слайд 3" />
            </div>
            <div>
              <img src="/images/slider4.jpg" alt="Слайд 4" />
              <div className="caption">
                <strong>Различные</strong> типы <em>автомобилей</em>
              </div>
            </div>
          </Slider>
        </div>

        {/* Машины */}
        <div className="section group">
          {cars.slice(0, 3).map(car => (
            <div className="grid_1_of_4 images_1_of_4" key={car.id}>
              <h3>Модель {car.title}</h3>
              <Link to={`/cars/${car.id}`}>
                <img src={car.image} alt={car.title} />
              </Link>
              <p>{car.description.slice(0, 200)}...</p>
              <div className="btn">
                <Link to={`/cars/${car.id}`} className="link">
                  <span><span>Читать далее</span></span>
                </Link>
              </div>
            </div>
          ))}

          <div className="grid_1_of_4 images_1_of_4">
            <h4><img src="/images/call.png" alt="Позвоните нам" /> Позвоните нам</h4>
            <h5>+7 (495) 937-21-41</h5>
            <p>
              Поможем подобрать машину, подходящую по цене и параметрам. Если хотите продать машину —
              купим сами или найдём покупателя, подготовим объявление, представим авто клиенту и оформим сделку.
            </p>
          </div>
        </div>

        {/* Категории */}
        <div className="section group">
          <div className="rsidebar span_1_of_3">
            <h3>Категории</h3>
            {categories.map(cat => (
              <p
                className="top"
                key={cat.id}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <span style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                  <img src="/images/art-pic1.jpg" alt="" style={{ marginRight: '10px', width: '25px' }} />
                  {cat.name}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}