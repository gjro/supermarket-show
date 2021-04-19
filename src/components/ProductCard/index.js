import './style.css'
import React from 'react' ;  
import Offer from '../../assets/tags/TagOffer'

function ProductCard({product,handleIncreaseProductAmount,handleDecreaseProductAmount}) {

    return (
        <>
            <div key={product.id} className="ProductCard">
                <div className="ProductImage">
                    <div className="Tags">
                        {product.offer && <Offer/>}
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
                    <button onClick={() => handleDecreaseProductAmount(product)} className="Decrement">-</button>
                    <p className="Quantity">{product.amount}</p>
                    <button onClick={() => handleIncreaseProductAmount(product)} className="Increment">+</button>
                </div>
            </div>
        </>
     );
}
 
export default ProductCard;









