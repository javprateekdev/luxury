import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import {data} from './data';


const Extensionrtm = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div>
	
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Ready To Move</h6>
              <h1 className="section-title"> Noida Extension Properties</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1">
          {/* ltn__product-item */}
          {data.map((data) => (
          <div className="col-lg-12">
            <div className="ltn__product-item ltn__product-item-4 text-center---">
              <div className="product-img go-top">
              <Link to={`detailview/${data.id}`}><img src={data.img} alt="#" /></Link>
                <div className="product-badge">
                  <ul>
                    <li className="sale-badge ">For Sale</li>
                  </ul>
                </div>
                <div className="product-img-location-gallery">
                  <div className="product-img-location">
                    <ul>
                      <li>
                      <Link to={`detailview/${data.id}`}><i className="flaticon-pin" /> {data.address1}</Link>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="product-info">
                <div className="product-price">
                  <span>₹ {data.price}<label></label></span>
                </div>
                <h2 className="product-title go-top"><Link to={`detailview/${data.id}`}> {data.propertyname}</Link></h2>
                
                
              </div>
              <div >
               
                <div className="product-hover-action">
                <div className="btn-wrapper animated go-top">
                <Link to={`detailview/${data.id}`}  className="theme-btn-1 btn btn-effect-1 btnview">View Project Details</Link>
                      </div>
                </div>
              </div>
            </div>
          </div>
          ))}
       
        </div>
      </div>
    </div>

    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                    <div className="row">
                        <div className="col-12">
                        <div className="modal-product-img">
                            <img src={publicUrl+"assets/img/product/7.png"} alt="#" />
                        </div>
                        <div className="modal-product-info go-top">
                            <h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
                            <p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
                            <div className="btn-wrapper">
                            <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
                            </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                            <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                            <div className="payment-method">
                            <img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
            <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    {/* <i class="fas fa-times"></i> */}
                </button>
                </div>
                <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                        <div className="modal-product-img">
                            <img src={publicUrl+"assets/img/product/4.png"} alt="#" />
                        </div>
                        </div>
                        <div className="col-lg-6 col-12">
                        <div className="modal-product-info">
                            <div className="product-ratting">
                            <ul>
                                <li><a href="#"><i className="fas fa-star" /></a></li>
                                <li><a href="#"><i className="fas fa-star" /></a></li>
                                <li><a href="#"><i className="fas fa-star" /></a></li>
                                <li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
                                <li><a href="#"><i className="far fa-star" /></a></li>
                                <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                            </ul>
                            </div>
                            <h3>Brake Conversion Kit</h3>
                            <div className="product-price">
                            <span>$149.00</span>
                            <del>$165.00</del>
                            </div>
                            <div className="modal-product-meta ltn__product-details-menu-1">
                            <ul>
                                <li>
                                <strong>Categories:</strong> 
                                <span className="go-top">
                                    <Link to="/blog">Parts</Link>
                                    <Link to="/blog">Car</Link>
                                    <Link to="/blog">Seat</Link>
                                    <Link to="/blog">Cover</Link>
                                </span>
                                </li>
                            </ul>
                            </div>
                            <div className="ltn__product-details-menu-2">
                            <ul>
                                <li>
                                <div className="cart-plus-minus">
                                    <input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
                                </div>
                                </li>
                                <li>
                                <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                    <i className="fas fa-shopping-cart" />
                                    <span>ADD TO CART</span>
                                </a>
                                </li>
                            </ul>
                            </div>
                            <hr />
                            <div className="ltn__social-media">
                            <ul>
                                <li>Share:</li>
                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                    <div className="row">
                        <div className="col-12">
                        <div className="modal-product-img">
                            <img src={publicUrl+"assets/img/product/1.png"} alt="#" />
                        </div>
                        <div className="modal-product-info go-top">
                            <h5 className="go-top"><Link to="/product-details">Brake Conversion Kit</Link></h5>
                            <p className="added-cart"><i className="fa fa-check-circle" />Successfully added to your Cart</p>
                            <div className="btn-wrapper">
                            <Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                            <Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                            </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                            <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                            <div className="payment-method">
                            <img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Extensionrtm;