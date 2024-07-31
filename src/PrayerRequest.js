import React from 'react';
import axios from 'axios';

export const PrayerRequest = React.forwardRef((props, ref) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      user_email: formData.get('user_email'),
      prayer_request: formData.get('prayer_request'),
    };

    try {
      const response = await axios.post('/api/prayer-request', data);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert('Error submitting prayer request');
    }
  };

  return (
    <form id="form" className="hidden" method="post" onSubmit={handleSubmit} ref={ref}>
      <input type="email" placeholder="Your Email" name="user_email" required />
      <textarea rows="6" placeholder="Your Request" name="prayer_request" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
});
