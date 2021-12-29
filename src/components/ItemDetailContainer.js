import React from "react";
import { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail"

let initProduct = [
    {
    id:1,
    pictureUrl:'balmain_5',
    tite:'Green Velvet Dress',
    description:'This is a limited edition dress for the fall collection. Comes in 3 colours.',
    sale:'35.000',
    discount:'29.000',
    stock:'10'
    }
]


const ItemDetailContainer = () => {


    let [product, setProduct] = useState([])

    setProduct(initProduct)

    /*
    useEffect(() => {
        setTimeout(()=>{
            setProduct(initProduct)
        },2000)

    }, [])
    */


	return (
        <>
            <ItemDetail item={product} />
        </>
	);
};

export default ItemDetailContainer;