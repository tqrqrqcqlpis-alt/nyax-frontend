export default function FlashMessage({ message }) {
  if (!message) return null;

  return (
    <p className="flash-message">
      {message}
    </p>
  );
}