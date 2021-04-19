import React from 'react' ;  
import './style.css'
import Offer from '../../assets/tags/TagOffer'
import CartIcon from '../../assets/icons/Cart.png';


export default function LateralBar ({closeModal, products, handleIncreaseProductAmount, handleDecreaseProductAmount}) {
    return(
        
    <div className="LateralBar">
        <div onClick={closeModal} className="CloseArea"/>
        <div className="Cart">
            <div className="CartHeader">
                <h1>Carrinho</h1>
            </div>
            {products.map( product => (
                <>
                    {product.amount>0 && (
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
                    </div>)
                }
                </>
            ))}
                <div className="EndCart">
                    <p>Taxa de entrega: Grátis</p>
                    <p>Taxa de serviço: R$2,00</p>
                    <h1>Total: R$ 0,00</h1>
                    <div style={{cursor: 'pointer'}} className="EndButton">
                        <img src={CartIcon} alt="Cart Icon"/>
                        <button>Finalizar compra</button>
                    </div>
                </div>
        </div>
    </div>      
    ) 
}