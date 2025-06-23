import React from 'react';

export default function Slider() {
  return (
    <div className="wrap">
      <div className="slider">
        <div className="slider-wrapper theme-default">
          <div id="slider" className="nivoSlider">
            <img src="images/slider1.jpg" data-thumb="images/slider1.jpg" alt="" />
            <a href="http://dev7studios.com">
              <img src="images/slider2.jpg" data-thumb="images/slider2.jpg" alt="" title="This is an example of a caption" />
            </a>
            <img src="images/slider3.jpg" data-thumb="images/slider3.jpg" alt="" data-transition="slideInLeft" />
            <img src="images/slider4.jpg" data-thumb="images/slider4.jpg" alt="" title="#htmlcaption" />
          </div>
          <div id="htmlcaption" className="nivo-html-caption">
            <strong>Различные</strong> типы <em>автомобилей</em><a href="#"></a>.
          </div>
        </div>
      </div>
    </div>
  );
}