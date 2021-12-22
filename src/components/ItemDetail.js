import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = (props) => {

    const item = props.item

    console.log(item)

	return (
        <>
        <div className="section">
            <div className="container">
                <div className="row title-row">
                    <div className="col-md-2">
                        <h4 className="shop">Shop</h4>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div id="carousel" className="ml-auto mr-auto">
                            <div className="card page-carousel">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={require(`../img/balmain_3.jpg`).default} alt="Awesome Item" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Somewhere</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={require(`../img/balmain_3.jpg`).default} alt="Awesome Item" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Somewhere else</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={require(`../img/balmain_3.jpg`).default} alt="Awesome Item" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Here it is</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src={require(`../img/balmain_3.jpg`).default} alt="Awesome Item" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <p>Here it is</p>
                                        </div>
                                    </div>
                                </div>
                                <Link className="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="fa fa-angle-left"></span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                                <Link className="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="fa fa-angle-right"></span>
                                    <span className="sr-only">Next</span>
                                </Link>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <h2>{props.title}</h2>
                        <h4 className="price"><strong>{props.discount}</strong></h4>
                        <hr />
                        <p>{props.description}</p>
                        <span className="label label-default shipping">Free shipping to Europe </span>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <label>Select color</label>
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select">
                                        <select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block btn-round" data-menu-style="" tabindex="-98">
                                            <option value="1">Black </option>
                                            <option value="2">Gray</option>
                                            <option value="3">White</option>
                                        </select>
                                        <button type="button" className="dropdown-toggle btn btn-outline-default btn-block btn-round" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="White">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">White
                                                    </div>
                                                </div> 
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-2">
                                                <ul className="dropdown-menu inner show mt-0 mb-0" role="presentation">
                                                    <li className="">
                                                        <Link role="option" className="dropdown-item" id="bs-select-1-0" tabindex="0" aria-setsize="3" aria-posinset="1">
                                                            <span className="text">Black </span>
                                                        </Link>
                                                    </li>
                                                    <li className="selected active">
                                                        <Link role="option" className="dropdown-item active selected" id="bs-select-1-1" tabindex="0" aria-setsize="3" aria-posinset="2" aria-selected="true">
                                                            <span className="text">Gray</span>
                                                        </Link>
                                                    </li>
                                                    <li className="selected active">
                                                        <Link role="option" className="dropdown-item active selected" id="bs-select-1-2" tabindex="0" aria-setsize="3" aria-posinset="3" aria-selected="true">
                                                            <span className="text">White</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <label>Select size</label>
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select"><select name="huge" className="selectpicker" data-style="btn btn-outline-default btn-block btn-round" data-menu-style="" tabindex="-98">
                                        <option value="1">Small </option>
                                        <option value="2">Medium</option>
                                        <option value="3">Large</option>
                                    </select>
                                        <button type="button" className="dropdown-toggle btn btn-outline-default btn-block btn-round" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Large">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Large</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-activedescendant="bs-select-2-2">
                                                <ul className="dropdown-menu inner show my-0" role="presentation">
                                                    <li className="">
                                                        <Link role="option" className="dropdown-item" id="bs-select-2-0" tabindex="0" aria-setsize="3" aria-posinset="1">
                                                            <span className="text">Small </span>
                                                        </Link>
                                                    </li>
                                                    <li className="selected active">
                                                        <Link role="option" className="dropdown-item active selected" id="bs-select-2-1" tabindex="0" aria-setsize="3" aria-posinset="2" aria-selected="true">
                                                            <span className="text">Medium</span>
                                                        </Link>
                                                    </li>
                                                    <li className="selected active">
                                                        <Link role="option" className="dropdown-item active selected" id="bs-select-2-2" tabindex="0" aria-setsize="3" aria-posinset="3" aria-selected="true">
                                                            <span className="text">Large</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-7 offset-md-5 col-sm-8">
                                <button className="btn btn-danger btn-block btn-round">Add to Cart <i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default ItemDetail;