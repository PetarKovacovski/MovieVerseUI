import './App.css';
import { API_BASE_URL } from './config/config';
import ErrorScreen from './pages/ErrorScreen';

function App() {
  if (!API_BASE_URL) {
    return <ErrorScreen />;
  }

  return <>{API_BASE_URL}</>;
}

export default App;
