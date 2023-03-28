import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './datasector150';




const ShopGridV1 = () => {
	let publicUrl=""
	

  return (
	<div>
			<div className="ltn__product-area ltn__product-gutter mb-100">
				<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<div className="ltn__shop-options">
								<ul>
								<li>
									<div className="ltn__grid-list-tab-menu ">
									<div className="nav">
										<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
										<a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
									</div>
									</div>
								</li>
							
								</ul>
							</div>
							<div className="tab-content ">
								<div className="tab-pane fade active show" id="liton_product_grid">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view">
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
										
									
              </div>
            

									{/* ltn__product-item */}
								
									{data.map((property) => (
											<div className="col-lg-4 col-sm-6 col-12" style={{zIndex:"0",position:"relative",marginTop:"30px"}}>
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img">
                                        <Link to={`detailview/${property.id}`} ><img src={property.img} alt="#" /></Link>
											<div className="real-estate-agent">
											<div className="agent-img">
                                            <Link to={`detailview/${property.id}`} ></Link>
											</div>
											</div>
										</div>
										<div className="product-info">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Sale</li>
											</ul>
											</div>
											<h2 className="product-title go-top"><Link to={`detailview/${property.id}`} >{property.propertyname}</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
												<Link to={`detailview/${property.id}`} ><i className="flaticon-pin" /> {property.address1}</Link>
												</li>
											</ul>
											</div>
											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>{property.Configurations} </span>
												
											</li>
											
											</ul>
											
										</div>
										<div className="product-info-bottom">
											<div className="product-price">
											<span>₹ {property.price}<label>/Sq.Ft.</label></span>
										
											</div>
											<div className="special-link" style={{position:"absolute",right:"10%",bottom: "24px"}}>
											<Link to={`detailview/${property.id}`} >View Details</Link>
											
											</div>
										</div>
										</div>
											
									</div>

))}


									
									</div>
								</div>
								</div>



								<div className="tab-pane fade" id="liton_product_list">
								<div className="ltn__product-tab-content-inner ltn__product-list-view">
									<div className="row">
								
										{/* Search Widget */}
										
									{/* ltn__product-item */}
									{data.map((property) => (
									<div className="col-lg-12">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img">
                                        <Link to={`detailview/${property.id}`} ><img src={property.img} alt="#" /></Link>
										</div>
										<div className="product-info">
											<div className="product-badge-price">
											<div className="product-badge">
												<ul>
												<li className="sale-badg">For Sale</li>
												</ul>
											</div>
											<div className="product-price">
												<span>₹ {property.price}<label>/Sq.Ft.</label></span>
											</div>
											</div>
											<h2 className="product-title go-top"> <Link to={`detailview/${property.id}`} >{property.propertyname}</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
                                                <Link to={`detailview/${property.id}`} ><i className="flaticon-pin" />{property.address1}</Link>
												</li>
											</ul>
											</div>
											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>{property.Configurations} </span></li>
											</ul>
										</div>
										<div className="product-info-bottom">
											<div className="real-estate-agent">
											<div className="special-link" style={{position:"absolute",right:"10%",bottom: "24px"}}>
											<Link to={`detailview/${property.id}`} >View Details</Link>
											
											</div>

											</div>
										</div>
										</div>
									</div>
									))}
									{/* ltn__product-item */}
									
									{/* ltn__product-item */}
									
									{/*  */}
									</div>
								</div>
								</div>
							</div>
							
							</div>
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
								
								{/* additional-info */}
								
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

export default ShopGridV1;