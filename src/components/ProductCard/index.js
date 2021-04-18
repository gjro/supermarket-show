import './style.css'
import React , { useState, useEffect } from 'react' ;  
import api from '../../service/api'

function ProductCard() {

    const [product,setProduct] = useState([]);

    useEffect(() => {
    async function loadData(){
     const response = await api.get('/');
     setProduct(response.data.items)
    }
    loadData();
    }, []);

    return (
        <>
            {product.map(product => (
                <div key={product.id} className="ProductCard">
                    <div className="ProductImage">
                        <span className="Free">Frete Grátis</span>
                        <span className="Offer"> Oferta</span>
                        <span className="BuyXTakeY">Compre 3 leve 4</span>
                        <img src={product.image} alt={product.description}/>
                    </div>
                    <div className="ProductInfos">
                        <div className="Prices">
                            <p className="Original">{product.price}</p>
                            <p className="Offer">{product.offer}</p>
                        </div>
                        <p className="Description">{product.description}</p>
                        <div className="AddCart">
                            <button className="Decrement">-</button>
                            <p className="Quantity">0</p>
                            <button className="Increment">+</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default ProductCard;