import React from "react";

import Item from './Item';

const ItemList = (props) => {

    const items = props.products

    console.log(items)

	return (
        <>
            {!!items &&
                items.length > 0 &&
                items.map((item, index) => {

                    return (
                        <div key={index} class="col-md-4">
                            <Item 
                                pictureUrl={item.pictureUrl}
                                tite={item.title}
                                description={item.description}
                                sale={item.sale}
                                discount={item.discount}
                                stock={item.stock}
                            />
                        </div>
                    );
                })
            }
        </>
	);
};

export default ItemList;