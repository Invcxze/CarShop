import React from 'react';

export default function AboutPage() {
  return (
    <>
      <div className="wrap">
        <div className="content abt">
          <div className="section group">
            <div className="cont span_2_of_3">
              <h3>О нас</h3>
              <img src="/images/pic6.jpg" alt="" />
              <p>
                Компания «Cars» создана в 1998 году. Основные виды деятельности – реализация, техническое обслуживание и ремонт новых автомобилей и авто с пробегом. «Cars» – региональный дилер №1 в России – входит в ТОП-10 крупнейших автомобильных компаний России.
              </p>
              <p className="top">
                В структуру компании «Cars» входит 81 автосалон, реализующий новые автомобили и 10 салонов автомобилей с пробегом. Холдинг является официальным дилером 23 автомобильного бренда: Audi, BMW, Lada, Kia, Hyundai, Ford, MINI, Renault, Skoda, Mitsubishi, Toyota, Volkswagen, Mazda, Haval, Chery, Exeed, Subaru, Land Rover, Jaguar, Lexus и Porsche, OMODA. Портфель брендов ТТС – один из самых широких в автомобильной отрасли страны. В сервисных центрах проводится техобслуживание не только представляемых брендов. Сертифицированное обслуживание, соответствующее стандартам производителей, на правах официального дилера по сервисному обслуживанию, доступно также по маркам Opel, Chevrolet, Geely и Ssang Yong.
              </p>
            </div>
            <div className="rsidebar span_1_of_3">
              <h3>Категории</h3>
              <p className="top">
                <a href="#"><img src="/images/art-pic1.jpg" alt="" />Седан. Наиболее распространенные типы кузовов автомобилей</a>
              </p><br />
              <p className="top">
                <a href="#"><img src="/images/art-pic4.jpg" alt="" />Универсал — семейный автомобиль с большими возможностями.</a>
              </p><br />
              <p className="top">
                <a href="#"><img src="/images/art-pic3.jpg" alt="" />Лифтбек — комбинация универсала и седана.</a>
              </p><br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}