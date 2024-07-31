import './App.css';
import Logo from "./image/Logo.png";
import { Information } from './Information';
import { Body } from "./Body";
import {About} from "./About";
import { PrayerRequest } from './PrayerRequest';
import { Programs } from './Programs';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [showPrayerRequest, setshowPrayerRequest] = useState(false);
  const [showPlanToVist, setshowPlanToVist] = useState(false);
  const prayerRequestRef = useRef(null);
  const planToAttendRef = useRef(null);



  const togglePrayerRequest = () => {
    setshowPrayerRequest(!showPrayerRequest);
  };

  const togglePlanToVisit = () => {
    setshowPlanToVist(!showPlanToVist);
  };

  const clickOutSide = (e) => {
    if (prayerRequestRef.current && !prayerRequestRef.current.contains(e.target)) {
    setshowPrayerRequest(false);

    }
  }
  const clickOutSideToAttend = (e) => {
    if ( planToAttendRef.current && !planToAttendRef.current.contains(e.target)) {
      setshowPlanToVist(false);

    }
  }

  useEffect(() => {
    if (showPrayerRequest) {
      document.addEventListener('mousedown',clickOutSide);
    } else {
      document.removeEventListener('mousedown', clickOutSide);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [showPrayerRequest]);

  useEffect(() => {
    if (showPlanToVist) {
      document.addEventListener('mousedown',clickOutSideToAttend);
    } else {
      document.removeEventListener('mousedown', clickOutSideToAttend);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutSideToAttend);
    };
  }, [showPlanToVist]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer togglePrayerRequest={togglePrayerRequest}
          togglePlanToVisit={togglePlanToVisit}/>
        {showPrayerRequest && <PrayerRequest ref={prayerRequestRef}/>}
        {showPlanToVist && <Information ref={planToAttendRef}/>}
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
