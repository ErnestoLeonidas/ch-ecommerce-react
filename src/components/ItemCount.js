import React, { useState } from 'react';


const ItemListContainer = (props) => {

    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter + 1);
    }

    const del = () => {
        setCounter(counter - 1);
    }

	return (
        <>

            <div className="card card-profile card-plain">
                <div className="card-avatar border-white">
                    <a href="#avatar">
                    </a>
                </div>
                <div className="card-body">
                </div>
                <div className="card-footer text-center">
                    
                    <h4 className="card-title"> {counter} </h4>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-border btn-round" onClick={ del }> - </button>
                        <button className="btn btn-sm btn-border btn-round" onClick={ add }> + </button>
                      </div>
                    
                </div>
            </div>

        </>
	);
};

export default ItemListContainer;
