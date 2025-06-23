import React from 'react';

const CarPage = () => {
  return (
    <div>
      <div className="wrap">
        <div className="content">
          <div className="content ser">
            <h3 className="details">"Стандартный кузов Седан"</h3>
            <div className="det-pic">
              <img src="/images/det-pic1.jpg" alt="Седан" />
            </div>
            <div className="det-para">
              <p>
                Любой автомобиль оснащен несущей системой для расположения элементов,
                оборудования салона, механизмов двигателя, трансмиссии. Большинство
                современного автотранспорта имеет несущий кузов. Основное назначение
                кузова: перевозка пассажиров и небольших грузов. Седан — самый
                распространённый тип кузова. Багажник структурно отделён от
                пассажирского салона, без подъёмной двери в задней стенке, с двумя
                или реже тремя рядами сидений.
              </p>
            </div>
            <div className="btn">
              <a href="#" className="link">
                <span><span>Читать далее</span></span>
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;