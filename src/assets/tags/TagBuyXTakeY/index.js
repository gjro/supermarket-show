import React , { useState, useEffect } from 'react' ;  
import './style.css'

export default function BuyXTakeY () {

    const [Base,setBase] = useState(0);
    const [Value,setValue] = useState(0);
    
    
    return(
        <span className="Tag BuyXtakeY">
            Compre {Base} e leve {Value}
        </span>
    )
}