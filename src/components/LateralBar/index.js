import React , { useState, useEffect } from 'react' ;  


export default function LateralBar () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(show){
        return(
            
        <div className="LateralBar">
            <h1>Hello Modal</h1>
        </div>
        ) 
    }
}