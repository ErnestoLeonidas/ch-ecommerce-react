import React from "react";

import ItemList from './ItemList';

const ItemListContainer = (props) => {
	return (
        <>
            <div class="section latest-offers">
                <div class="container">
                    <h3 class="section-title">Latest Offers</h3>
                    <div class="row">
                        <ItemList />
                    </div>
                </div>
            </div>
        </>
	);
};

export default ItemListContainer;
