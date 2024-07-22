export function PrayerRequest() {
  return (
    <form id="form" class="hidden" method="post" action="/form">
      <input type="email" placeholder="Your Email" name="user_email" required />
      <textarea rows="6" placeholder="Your Request" name="prayer_request" required></textarea>
      <button type="submit">Submit</button>
    </form>

  );
}
