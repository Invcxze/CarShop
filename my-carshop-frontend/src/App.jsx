import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Slider from './components/Slider';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import NotFound404 from './components/NotFound404';
import AboutPage from './components/AboutPage';
import CarPage from './components/CarPage';
import ServicesPage from './components/ServicesPage';
import ContactsPage from './components/ContactsPage';
import CarDetail from './components/CarDetail';
import CarsPage from './components/CarsPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<><MainContent /> <Footer /> </>}/>
            <Route path="/about" element={<><AboutPage /> <Footer /> </>}/>
            <Route path="/car" element={<><CarPage /> <Footer /> </>}/>
            <Route path="/service" element={<><ServicesPage /> <Footer /> </>}/>
            <Route path="/contacts" element={<><ContactsPage /> <Footer /> </>}/>
            <Route path="/cars/:id" element={<><CarDetail /> <Footer /> </>}/>
            <Route path="/cars" element={<><CarsPage /> <Footer /> </>}/>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;