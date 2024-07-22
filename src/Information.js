export function Information() {
  return (
    <form id="form-visit" class="hidden" method="post" action="/form-visit">
      <input type="text" placeholder="Your Name" name="name" required />
      <input type="text" placeholder="when do you plan to worship with us?" name="time" required />
      <input type="number" placeholder="Please give us your phone number" name="contact" required />
      <input type="text" placeholder="Are you coming alone?" name="NotAlone" required />
      <input type="text" placeholder="Tell us your location?" name="location" required />
      <button type="submit">Submit</button>
    </form>
  );
}
