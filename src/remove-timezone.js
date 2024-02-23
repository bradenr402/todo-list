export default function removeTimeZone(date) {
  if (!date) {
    console.error('Invalid date input:', date);
    return null; // or handle the error as appropriate for your application
  }

  try {
    date = new Date(date);
    return new Date(date.valueOf() + date.getTimezoneOffset() *  60 *  1000);
  } catch (error) {
    console.error('Error removing timezone:', error);
    return new Date(date); // or handle the error as appropriate for your application
  }
}
