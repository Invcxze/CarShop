import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MainContent() {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/cars/')
      .then((res) => res.json())
      .then(setCars);

    fetch('/api/categories/')
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const handleCategoryClick = (catId) => {
    navigate(`/cars?category=${catId}`);
  };

  return (
    <div className="wrap">
      <div className="content">
        <div className="section group">
          {cars.slice(0, 3).map((car) => (
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

        <div className="section group">
          <div className="rsidebar span_1_of_3">
            <h3>Категории</h3>
            {categories.map((cat) => (
              <p
                className="top"
                key={cat.id}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <span style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
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