import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`/api/cars/${id}/`)
      .then(res => res.json())
      .then(data => setCar(data))
      .catch(err => console.error('Ошибка загрузки данных машины:', err));
  }, [id]);

  if (!car) {
    return (
      <div style={{
        backgroundColor: '#121212',
        color: '#bbb',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        fontFamily: 'Arial, sans-serif'
      }}>
        Загрузка...
      </div>
    );
  }

  const handleOrderClick = () => {
    navigate(`/contacts?car=${car.id}`);
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#ddd',
      minHeight: '80vh',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: 900,
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#5dade2' }}>{car.title}</h2>
      <img
        src={car.image}
        alt={car.title}
        style={{
          maxWidth: '100%',
          borderRadius: '8px',
          marginBottom: '25px',
          boxShadow: '0 0 10px rgba(0,0,0,0.8)'
        }}
      />
      <p><strong>Категория:</strong> {car.category.name}</p>
      <p style={{ marginTop: '15px', lineHeight: '1.5' }}><strong>Описание:</strong> {car.description}</p>
      <p style={{ marginTop: '15px' }}><strong>Лошадиные силы:</strong> {car.horsepower}</p>
      <p style={{ marginTop: '10px' }}><strong>Максимальная скорость:</strong> {car.max_speed} км/ч</p>

      <button
        onClick={handleOrderClick}
        style={{
          marginTop: '30px',
          padding: '12px 25px',
          backgroundColor: '#5dade2',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
      >
        Заказать
      </button>
    </div>
  );
};

export default CarDetail;