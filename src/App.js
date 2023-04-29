import './App.css';
import { Routes } from './routes/';
import { cryptocurrencies } from './data';
import { Footer, Nav } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
