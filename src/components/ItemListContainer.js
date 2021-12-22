import React from "react";
import { useState, useEffect } from "react";


import ItemList from './ItemList';


let products = [
    {
    pictureUrl:'balmain_5',
    tite:'Green Velvet Dress',
    description:'This is a limited edition dress for the fall collection. Comes in 3 colours.',
    sale:'35.000',
    discount:'29.000',
    stock:'10'
    },
    {
    pictureUrl:'balmain_3',
    tite:'Crepe and Organza Dress',
    description:'This is a limited edition dress for the fall collection. Comes in 3 colours.',
    sale:'32.000',
    discount:'28.000',
    stock:'7'
    },
    {
    pictureUrl:'balmain_4',
    tite:'Lace Mini Dress',
    description:'This is a limited edition dress for the fall collection. Comes in 3 colours.',
    sale:'55.000',
    discount:'35.000',
    stock:'4'
    },
]


const ItemListContainer = () => {

    let [list, setList] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            setList(products)
        },2000)
        /*
        const i = setInterval(() => {
            console.log("interval")
        }, 1000);

        return () => {
            clearInterval(i)
        }
        */
    }, [])

	return (
        <>
            <div className="section latest-offers">
                <div className="container">
                    <h3 className="section-title">Latest Offers</h3>
                    <div className="row">
                        <ItemList products={list}/>
                    </div>
                </div>
            </div>
        </>
	);
};

export default ItemListContainer;
