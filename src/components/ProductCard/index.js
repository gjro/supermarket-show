import './style.css'
import React , { useState, useEffect } from 'react' ;  
import api from '../../service/api'
import Offer from '../../assets/tags/TagOffer'
import BuyXTakeY from '../../assets/tags/TagBuyXTakeY'

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
                        <div className="Tags">
                            {product.offer ? <Offer/> : ''}
                            {product.promotion ? <span className="BuyXtakeY">Compre {product.promotion.base} e leve {product.promotion.value}</span> : ''}
                        </div>
                        <img src={product.image} alt={product.description}/>
                    </div>
                    <div className="ProductInfos">
                        <div className="Prices">
                            <p className="Offer"><s>{product.offer ? 'R$'+product.offer : ''}</s></p>
                            <p className="Original">R${ product.price}</p>
                        </div>
                        <p className="Description">{product.description}</p>
                    </div>
                    <div className="AddCart">
                        <button className="Decrement">-</button>
                        <p className="Quantity">0</p>
                        <button className="Increment">+</button>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default ProductCard;