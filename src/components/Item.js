import React from "react";
import { Link } from "react-router-dom";

import ItemCount from './ItemCount';

const Item = (props) => {
	return (
        <>
            <div className="card card-product card-plain">
              <div className="card-image">
                <Link to="/ItemDetail">
                    <img src={require(`../img/${props.pictureUrl}.jpg`).default} alt="Rounded Image" className="img-rounded img-responsive" />
				</Link>
                <div className="card-body">
                  <div className="card-description">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-description">{props.description}</p>
                  </div>
                  <div className="price">
                    <s>{props.sale}</s> <span className="text-danger">{props.discount}</span>
                    <ItemCount stock_value={props.stock}/>
                  </div>
                </div>
              </div>
            </div>
        </>
	);
};

export default Item;
