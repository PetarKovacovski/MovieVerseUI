
function ErrorScreen() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="text-danger">⚠️ Configuration Error</h1>
      <p>The app is missing the required <code>VITE_API_URL</code> environment variable.</p>
      <p>Please check your <code>.env</code> file and restart the app.</p>
    </div>
  );
}

export default ErrorScreen;
