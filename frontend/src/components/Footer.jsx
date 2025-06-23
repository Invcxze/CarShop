import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="wrap">
          <div className="footer">
            <div className="section group">
              <div className="col_1_of_4 span_1_of_4">
                <h3>ОТЗЫВЫ</h3>
                <h4 className="nav1">Современные модели автомобилей</h4>
                <p className="nav1">Наши адреса доступны в нижней части страницы и в разделе “Контакты”. Там же — телефон, по которому с нами можно связаться.</p>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h3>Информация</h3>
                <ul className="nav1">
                  <li><a href="#">Уникальные модели для продажи</a></li>
                  <li><a href="#">с нами можно связаться по телефону</a></li>
                  <li><a href="#">у нас существует система обмена</a></li>
                  <li><a href="#">страховка автомобилей на месте</a></li>
                </ul>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h3>Наши контакты</h3>
                <ul className="nav1">
                  <li>142717,Москва,Внешняя сторона МКАД,22 км</li>
                  <li>РФ</li>
                  <li>Телефон:+7(495) 937-21-41 </li>
                  <li>Email:<a href="mailto:example@mail.com"> <span>info@mycompany.com</span></a></li>
                </ul>
              </div>
              <div className="col_1_of_4 span_1_of_4">
                <h3>Подписывайтесь на нас</h3>
                <div className="social-icons">
                  <ul>
                    <li className="facebook"><a href="#" target="_blank" rel="noreferrer"> </a></li>
                    <li className="twitter"><a href="#" target="_blank" rel="noreferrer"> </a></li>
                    <li className="googleplus"><a href="#" target="_blank" rel="noreferrer"> </a></li>
                    <li className="contact"><a href="#" target="_blank" rel="noreferrer"> </a></li>
                    <div className="clear"></div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1-bg">
        <div className="wrap">
          <div className="footer1">
            <p className="w3-link">© 2023 Автомобили. Все права защищены | Дизайнер&nbsp; <a href="http://w3layouts.com/" target="_blank" rel="noreferrer"></a></p>
          </div>
        </div>
      </div>
    </>
  );
}