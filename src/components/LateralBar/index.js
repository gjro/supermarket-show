import React from 'react' ;  
import './style.css'

export default function LateralBar ({closeModal, products}) {
    return(
        
    <div className="LateralBar">
        <div onClick={closeModal} className="CloseArea"/>
        <div className="Cart">
            <h1>Hello World</h1>
            {products.map( product => (
                <>
                    {product.amount>0 && (<p>{product.description}</p>)}
                </>
            ))}
        </div>
    </div>      
    ) 
}