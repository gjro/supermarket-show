import './App.css';
import NavBar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Todos os produtos</h1>
      <div className="Products">
        <ProductCard />
      </div>
        <Footer/>
    </div>
  );
}

export default App;
