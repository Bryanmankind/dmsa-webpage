import './App.css';
import Logo from "./image/Logo.png";
import { Information } from './Information';
import { Body } from "./Body";
import { PrayerRequest } from './PrayerRequest';
import { Programs } from './Programs';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showPrayerRequest, setshowPrayerRequest] = useState(false);
  const [showPlanToVist, setshowPlanToVist] = useState(false);

  const togglePrayerRequest = () => {
    setshowPrayerRequest(!showPrayerRequest);
  };

  const togglePlanToVisit = () => {
    setshowPlanToVist(!showPlanToVist);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<Information />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer togglePrayerRequest={togglePrayerRequest}
          togglePlanToVisit={togglePlanToVisit}/>
        {showPrayerRequest && <PrayerRequest />}
        {showPlanToVist && <Information />}
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <img src={Logo} alt='Logo' />
        </div>
        <div className="header">
          <ul><li><Link to="/">HOME</Link></li></ul>
          <ul><li><Link to="/programs">PROGRAMS</Link></li></ul>
          <ul><li><Link to="/about">ABOUT US</Link></li></ul>
          <ul><li><Link to="/give">GIVE</Link></li></ul>
          <ul><li><Link to="/blog">BLOG</Link></li></ul>
        </div>
        <div>
          <button id="nav-but">MEMBERSHIP</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
