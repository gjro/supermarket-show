import './App.css';
import React , { useState, useEffect } from 'react' ;  
import NavBar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import LateralBar from './components/LateralBar'
import api from './service/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [showLateralBar,setShowLateralBar] = useState(false);
  const [products,setProducts] = useState([]);

  useEffect(() => {
  async function loadData(){
   const response = await api.get('/');
   const reponseProducts = response.data.items;
   const productsWithAmount = reponseProducts.map(product => {
     return {
       ...product,
       amount: 0,
     }
   })
   console.log(productsWithAmount)
   setProducts(productsWithAmount)
  }
  loadData();
  }, []);

  function handleIncreaseProductAmount(product){
    const isIncrementable = (product.amount+1) <= product.stock;
    if(isIncrementable){
      const newProducts = products.map(currentProduct => {
        if(currentProduct.id === product.id){
          return{
            ...currentProduct,
            amount: currentProduct.amount+1,
          }
        }
        else{
          return currentProduct
        }
      })
      setProducts(newProducts);
    }
    else
      toast.error('Atenção! - Quantidade máxima de itens atingido')
  }

  function handleDecreaseProductAmount(product){
    const isDecrementable = (product.amount-1) >= 0;
    if(isDecrementable){
      const newProducts = products.map(currentProduct => {
        if(currentProduct.id === product.id){
          return{
            ...currentProduct,
            amount: currentProduct.amount-1,
          }
        }
        else{
          return currentProduct
        }
      })
      setProducts(newProducts);
    }
  }
//Configurando o Vercel
  return (
    <>
      <div className="App">
        <NavBar openModal={()=> {setShowLateralBar(true)}}/>
        <h1>Todos os produtos</h1>
        <div className="Products">
          {products && products.map(
            product => <ProductCard product={product} 
            handleIncreaseProductAmount={handleIncreaseProductAmount}
            handleDecreaseProductAmount={handleDecreaseProductAmount}
            />)}
        </div>
          <Footer/>
      </div>
        {showLateralBar && <LateralBar 
          closeModal={()=> {setShowLateralBar(false)}} 
          products={products}
          handleIncreaseProductAmount={handleIncreaseProductAmount}
          handleDecreaseProductAmount={handleDecreaseProductAmount}
            />}
        <ToastContainer position='top-center' autoClose={3000}/>
    </>
  );
}

export default App;
