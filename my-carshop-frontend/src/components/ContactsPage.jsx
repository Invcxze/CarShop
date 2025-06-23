import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const preselectedCarId = queryParams.get("car") || "";
  const preselectedServiceId = queryParams.get("service") || "";

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    car: preselectedCarId,
    service: preselectedServiceId,
  });

  const [cars, setCars] = useState([]);
  const [services, setServices] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/cars/")
      .then((res) => res.json())
      .then(setCars);

    fetch("/api/services/")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  // Обновляем поля car и service, если в URL появились значения, а загрузка данных прошла
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      car: preselectedCarId || prev.car,
      service: preselectedServiceId || prev.service,
    }));
  }, [preselectedCarId, preselectedServiceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/applications/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          message: "",
          car: "",
          service: "",
        });
      } else {
        alert("Ошибка при отправке заявки");
      }
    });
  };

  return (
    <div className="wrap">
      <div className="content abt">
        <div className="section group">
          <div className="col span_1_of_3">
            <div className="contact_info">
              <h3>Найдите нас здесь</h3>
              <div className="map">
                <iframe
                  title="Company Location"
                  width="100%"
                  height="175"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456789!2d37.6219!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab5c1aadc7f3b%3A0x53b073d8d42e2d34!2z0J3QsNC70YzQvdC40YfQvdC40LrQsCwg0JrQsNGA0LXQutC-0YHRjNC60LDRjywgMjIsINCa0LjRhtC40Y8sINCy0L7QvdC-0LXRgNCw0YHRjNC60LDRjywg0J3QsNGG0LrQvtCz0LDQvdC40LU!5e0!3m2!1sru!2sru!4v1623456789012!5m2!1sru!2sru"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="company_address">
              <h3>Информация о компании :</h3>
              <ul>
                <li>142717, Москва, Внешняя сторона МКАД, 22 км</li>
                <li>Телефон: +7(495) 937-21-41</li>
                <li>
                  Email: <a href="mailto:info@mycompany.com">info@mycompany.com</a>
                </li>
              </ul>
              <p>
                Подписывайтесь на: <span>Facebook</span>, <span>Twitter</span>
              </p>
            </div>
          </div>

          <div className="col span_2_of_3">
            <div className="contact-form">
              <h3>Свяжитесь с нами</h3>
              {success && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Заявка отправлена!
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <span>
                    <label>ИМЯ</label>
                  </span>
                  <span>
                    <input
                      name="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <label>E-MAIL</label>
                  </span>
                  <span>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <label>МОБИЛЬНЫЙ</label>
                  </span>
                  <span>
                    <input
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <label>МАШИНА</label>
                  </span>
                  <span>
                    <select
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                    >
                      <option value="">Не выбрано</option>
                      {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.title}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div>
                  <span>
                    <label>УСЛУГА</label>
                  </span>
                  <span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Не выбрано</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div>
                  <span>
                    <label>СООБЩЕНИЕ</label>
                  </span>
                  <span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <input type="submit" value="Отправить заявку" />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;