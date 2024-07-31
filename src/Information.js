import React, { forwardRef } from 'react';
import axios from 'axios';

const Information = forwardRef((props, ref) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      user_name: formData.get('name'),
      plan_time: formData.get('time'),
      contact: formData.get('contact'),
      not_alone: formData.get('NotAlone'),
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
    <form id="form-visit" method="post" onSubmit={handleSubmit} ref={ref}>
      <input type="text" placeholder="Your Name" name="name" required />
      <input type="text" placeholder="When do you plan to worship with us?" name="time" required />
      <input type="number" placeholder="Please give us your phone number" name="contact" required />
      <input type="text" placeholder="Are you coming alone?" name="NotAlone" required />
      <input type="text" placeholder="Tell us your location?" name="location" required />
      <button type="submit">Submit</button>
    </form>
  );
});

export { Information };
