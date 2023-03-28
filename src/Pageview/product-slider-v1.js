import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from "./data";
import { useParams } from "react-router-dom";
import Dialog from './Schedule'

const Slider = () => {

  let publicUrl = process.env.PUBLIC_URL + "/";
  const { id } = useParams();

  console.log(id);

  const filteredData = data.filter((item) => {
    return Object.values(item).includes(id);
  });
  var size1 = filteredData.map(function (obj) {
    return obj.floorPlan1;
  });
  var superarea1 = filteredData.map(function (obj) {
    return obj.superarea1;
  });
  var type1 = filteredData.map(function (obj) {
    return obj.type1;
  });
  var size2= filteredData.map(function (obj) {
    return obj.floorPlan2;
  });
  var superarea2 = filteredData.map(function (obj) {
    return obj.superarea2;
  });
  var type2 = filteredData.map(function (obj) {
    return obj.type2;
  });
  var size3= filteredData.map(function (obj) {
    return obj.floorPlan3;
  });
  var superarea3 = filteredData.map(function (obj) {
    return obj.superarea3;
  });
  var type3 = filteredData.map(function (obj) {
    return obj.type3;
  });


  console.log(size1,size2,size3);

  return (
    <div>
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
      <div className="container">
        <div style={{display:"flex",flexWrap:"wrap"}}>
        
          {size1.length>0?
        <div className="col-xl-4 col-sm-6 col-12" style={{minWidth:"320px"}}>
          <div className="ltn__product-item ltn__product-item-4 text-center---">
          <div className="product-img go-top">
          <a href={size1[0]} data-rel="lightcase:myCollection">
            <Link><img src={size1[0]} alt="#" /></Link>
            </a>
          
            
          </div>
          <div className="product-info">
            
              
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Type : </div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {type1[0] }</div>
              </div>
              </div>
          
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Super Area :</div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {superarea1[0]}</div>
              </div>
              
           </div>
          </div>
         
          </div>
        </div>
       

       :<></>   }
       {size2.length>0?
        <div className="col-xl-4 col-sm-6 col-12" style={{minWidth:"320px"}}>
          <div className="ltn__product-item ltn__product-item-4 text-center---">
          <div className="product-img go-top">
          <a href={size2[0]} data-rel="lightcase:myCollection">
            <Link><img src={size2[0]} alt="#" /></Link>
            </a>
          
            
          </div>
          <div className="product-info">
            
              
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Type : </div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {type2[0] }</div>
              </div>
              </div>
          
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Super Area :</div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {superarea2[0]}</div>
              </div>
              
           </div>
          </div>
          
          </div>
        </div>
       

       :<></>   }
       {size3.length>0?
        <div className="col-xl-4 col-sm-6 col-12" style={{minWidth:"320px"}}>
          <div className="ltn__product-item ltn__product-item-4 text-center---">
          <div className="product-img go-top">
          <a href={size3[0]} data-rel="lightcase:myCollection">
            <Link><img src={size3[0]} alt="#" /></Link>
            </a>
          
            
          </div>
          <div className="product-info">
            
              
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Type : </div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {type3[0] }</div>
              </div>
              </div>
          
           <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
              <div style={{width:"50%",padding:"3px",textalign:"left",fontWeight:"600"}}>Super Area :</div>
              <div style={{width:"50%",textalign:"left",padding:"3px",color:"#b48811"}}> {superarea1[0]}</div>
              </div>
              
           </div>
          </div>
         
          </div>
        </div>
       

       :<></>   }
       
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

export default Slider;