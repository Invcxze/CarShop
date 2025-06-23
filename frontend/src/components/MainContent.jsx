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
        <div className="slider-wrapper theme-default" style={{ marginBottom: '30px' }}>
          <Slider {...sliderSettings}>
            <div>
              <img
                src="/images/slider1.jpg"
                alt="Слайд 1"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <a href="http://dev7studios.com" target="_blank" rel="noreferrer">
                <img
                  src="/images/slider2.jpg"
                  alt="Слайд 2"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </a>
            </div>
            <div>
              <img
                src="/images/slider3.jpg"
                alt="Слайд 3"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <img
                src="/images/slider4.jpg"
                alt="Слайд 4"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div className="caption">
                <strong>Различные</strong> типы <em>автомобилей</em>
              </div>
            </div>
          </Slider>
        </div>

        {/* Основной контент с двумя колонками */}
        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Левая колонка - Машины и контакты */}
          <div style={{ flex: 3 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '25px',
              marginBottom: '30px'
            }}>
              {cars.slice(0, 3).map(car => (
                <div key={car.id} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #eaeaea',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                  height: '100%',
                  background: '#fff'
                }}>
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ marginTop: '0', marginBottom: '15px', fontSize: '1.2em' }}>
                      Модель {car.title}
                    </h3>

                    <Link to={`/cars/${car.id}`} style={{ display: 'block', marginBottom: '15px' }}>
                      <img
                        src={car.image}
                        alt={car.title}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '6px'
                        }}
                      />
                    </Link>

                    <p style={{
                      flexGrow: 1,
                      marginBottom: '15px',
                      color: '#555',
                      lineHeight: '1.5'
                    }}>
                      {car.description.slice(0, 200)}...
                    </p>
                  </div>

                  <div style={{
                    padding: '15px',
                    background: '#f9f9f9',
                    marginTop: 'auto'
                  }}>
                    <div className="btn">
                      <Link
                        to={`/cars/${car.id}`}
                        className="link"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '10px 15px',
                          background: '#4a6da7',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '5px',
                          fontWeight: '500'
                        }}
                      >
                        Читать далее
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Блок контактов */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #eaeaea',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                height: '100%',
                background: '#fff',
                padding: '20px'
              }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0' }}>
                  <img src="/images/call.png" alt="Позвоните нам" style={{ width: '24px' }} />
                  Позвоните нам
                </h4>
                <h5 style={{ fontSize: '1.4em', margin: '10px 0' }}>+7 (495) 937-21-41</h5>
                <p style={{ flexGrow: 1, color: '#555', lineHeight: '1.6' }}>
                  Поможем подобрать машину, подходящую по цене и параметрам. Если хотите продать машину —
                  купим сами или найдём покупателя, подготовим объявление, представим авто клиенту и оформим сделку.
                </p>
              </div>
            </div>
          </div>

          {/* Правая колонка - Категории */}
          <div style={{ flex: 1 }}>
            <div style={{
              background: '#fff',
              border: '1px solid #eaeaea',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ marginTop: '0', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                Категории
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {categories.map(cat => (
                  <div
                    key={cat.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      ':hover': {
                        background: '#f5f5f5',
                        transform: 'translateX(5px)'
                      }
                    }}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <img
                      src="/images/art-pic1.jpg"
                      alt=""
                      style={{
                        width: '30px',
                        height: '30px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        marginRight: '15px'
                      }}
                    />
                    <span style={{ fontWeight: '500' }}>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}