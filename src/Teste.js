import React, { useEffect, useState } from 'react';
import api from './service/api';

function Product() {

    const [products,setProducts] = useState([]);

    useEffect(() => {
    async function loadData(){
     const response = await api.get('/');
     setProducts(response.data.items)
    }
    loadData();
    }, []);

    return(
        <>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image}/>
                    <div>
                        <p>{products.offer}</p>
                        <p>
                            <span>R$</span>
                            {product.price}
                        </p>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        
                    </div>
                    <button>Adicionar ao carrinho</button>
                </div>
            ))}
        </>
    )
}

export default Product;