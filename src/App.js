import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './Config/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
