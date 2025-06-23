import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/services/")  // или полный адрес, если нет proxy
      .then((res) => res.json())
      .then(setServices)
      .catch((err) => console.error("Ошибка при загрузке услуг:", err));
  }, []);

  const staticImages = [
    "images/ser-pic1.jpg",
    "images/ser-pic2.jpg",
    "images/ser-pic3.jpg",
  ];

  const handleOrderClick = (serviceId) => {
    navigate(`/contacts?service=${serviceId}`);
  };

  return (
    <div className="wrap">
      <div className="content ser">
        {services.map((service, index) => (
          <div className="image group" key={service.id}>
            <div className="grid images_3_of_1">
              <img src={staticImages[index % staticImages.length]} alt={service.title} />
            </div>
            <div className="grid span_2_of_3">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p><strong>Цена:</strong> {service.price} ₽</p>
              <div className="btn">
                <button
                  onClick={() => handleOrderClick(service.id)}
                  type="button"
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;