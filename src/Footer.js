import React, { useState } from 'react';


export function Footer({ togglePrayerRequest, togglePlanToVisit }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const handleTogglePrayerRequest = () => {
    togglePrayerRequest();
    setOverlayVisible(true);
  };
  const handleTogglePlanToVisit = () => {
    togglePlanToVisit();
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };
  return (
    <>
        <div
        id="overlay"
        className={overlayVisible ? 'show' : ''}
        onClick={handleCloseOverlay}
      ></div>
    <div className="footer">
      <button id="request" onClick={handleTogglePrayerRequest}>Prayer Request</button>
      <button id="visit" onClick={handleTogglePlanToVisit}>Plan To Visit</button>
    </div>
  </>
  );
}
