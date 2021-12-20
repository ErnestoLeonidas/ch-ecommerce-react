import React, { useState } from 'react';

const ItemCount = (props) => {

    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(props.stock_value);


    const onAdd = () => {
        if ( stock > 0 ){
            setCounter(counter + 1);
            setStock(stock -1);
        }
    }

    const onDelete = () => {
        if ( counter > 0 ){
            setCounter(counter - 1);
            setStock(stock + 1);
        }
    }

	return (
        <>
            <div className="row p-0 m-0">
                <div className="col-12 text-center">
                    <h4 className="card-title"> Stock {stock} </h4>
                </div>
                <div className="col-12 mt-2">
                    <div className="row justify-content-center">
                        <h4 className="card-title mr-2"> {counter} </h4>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-border btn-round btn-info" onClick={ onDelete }> - </button>
                            <button className="btn btn-sm btn-border btn-round btn-info" onClick={ onAdd }> + </button>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
	);
};

export default ItemCount;
