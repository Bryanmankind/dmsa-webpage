import React, { forwardRef } from 'react';
import axios from 'axios';

const Information = forwardRef((props, ref) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      user: formData.get('user'),
      time: formData.get('time'),
      contact: formData.get('contact'),
      alone: formData.get('alone'),
      location: formData.get('location')
    };

    try {
      const response = await axios.post('/form-visit', data);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert('Error submitting plan to visit');
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} ref={ref}>
      <input type="text" placeholder="Your Name" name="user" required />
      <input type="text" placeholder="When do you plan to worship with us?" name="time" required />
      <input type="number" placeholder="Please give us your phone number" name="contact" required />
      <input type="text" placeholder="Are you coming alone?" name="alone" required />
      <input type="text" placeholder="Tell us your location?" name="location" required />
      <button type="submit">Submit</button>
    </form>
  );
});

export { Information };
