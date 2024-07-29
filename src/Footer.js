export function Footer({ togglePrayerRequest, togglePlanToVisit }) {
  return (
    <div class="footer">
      <button id="request" onClick={togglePrayerRequest}>Prayer Request</button>
      <button id="visit" onClick={togglePlanToVisit}>Plan To Visit</button>
    </div>
  );
}
