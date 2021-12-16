import React from "react";

import Item from './Item';

const ItemList = (props) => {

	return (
        <>
            <div class="col-md-4">
                <Item 
                    image='balmain_5'
                    tite='Green Velvet Dress'
                    description='This is a limited edition dress for the fall collection. Comes in 3 colours.'
                    sale='35.000'
                    discount='29.000'
                    stock='10'
                />
            </div>
            <div class="col-md-4">
                <Item 
                    image='balmain_3'
                    tite='Crepe and Organza Dress'
                    description='This is a limited edition dress for the fall collection. Comes in 3 colours.'
                    sale='32.000'
                    discount='28.000'
                    stock='7'
                />
            </div>
            <div class="col-md-4">
                <Item 
                    image='balmain_4'
                    tite='Lace Mini Dress'
                    description='This is a limited edition dress for the fall collection. Comes in 3 colours.'
                    sale='55.000'
                    discount='35.000'
                    stock='4'
                />
            </div>
        </>
	);
};

export default ItemList;