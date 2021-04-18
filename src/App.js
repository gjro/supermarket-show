import './App.css';
import NavBar from './components/Navbar'
import Teste from './Teste'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Products">
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
