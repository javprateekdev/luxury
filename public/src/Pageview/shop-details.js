import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { data } from "./data";
import ShowMore from 'react-show-more-button';
import Dialog from './Schedule';
import { featured } from './Featured';

const ShopDetails = () => {

 
		let publicUrl = process.env.PUBLIC_URL + "/";
		const { id } = useParams();

		console.log(id);

		const filteredData = data.filter((item) => {
		  return Object.values(item).includes(id);
		});

		console.log(filteredData);
  

    

    return <>
	<div className="ltn__img-slider-area">

	{filteredData.map((data) => (
<section class="home-banner snipcss-Mpn2F style-hntv7" id="home" >
<div class="home-banner-img">

</div>
<div class="banner-cnt">
<div style={{position: "relative",top:"178px"}}>
<img src={data.img} style={{position:"static",height:"100%"}}/>
</div>

<div class="container" style={{zIndex:"10000",position:"relative"}}>
<div class="project-configurations">
  <h1 style={{color:"#c08831"}}>
  {data.propertyname}
  </h1>
  <p>
  {data.address1}
  </p>
  <div class="banner-configurations-site-visit">
	<div class="banner-configurations">
	  <div class="configuration-item configurations-size">
		<h4>
		  Price
		</h4>
		<p>
		₹{data.price}
		</p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
		  Sizes
		</h4>
		<p>
		  {data.sizes}
		  </p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
	   Configurations
		</h4>
		<p>
		  {data.configurations}
		</p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
		  Status
		</h4>
		<p style={{color:"white"}}>
		{data.status}
		</p>
	  </div>
	  <div class="configuration-item">
		<h4>
		  Rera No.
		</h4>
		<p>
		{data.RERANO}
		</p>
	  </div>
	</div>
	<div class="project-site-visit">
	  <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
		<Dialog/>
	  </a>
	</div>
  </div>
</div>
</div>
</div>
</section>
))}
	  </div>
	
	
	
	
	<div className="ltn__shop-details-area pt-0">

		{filteredData.map((data) => (
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner " >
						
						<h4 className="title-2">Description</h4>
						<p>{data.text1}</p>
						<h4 className="title-2">Property Detail</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Status:</label> <span style={{fontWeight:"300"}}>{data.status}</span></li>
							<li><label>Launch Date: </label> <span style={{fontWeight:"300"}}>{data.launchDate}</span></li>
							<li><label>Possession Date:</label> <span style={{fontWeight:"300"}}></span></li>
							<li><label>Project Area:</label> <span style={{fontWeight:"300"}}>{data.projectArea}</span></li>
							<li><label>Sizes:</label> <span style={{fontWeight:"300"}}>{data.sizes}</span></li>
							<li><label>Total Towers:</label> <span style={{fontWeight:"300"}}>{data.totalTowers}</span></li>
							
						</ul>
						<ul>
						<li><label>Total Floors:</label> <span style={{fontWeight:"300"}}>{data.totalFloors}</span></li>
							<li><label>Total Flats:</label> <span style={{fontWeight:"300"}}>{data.totalFlats}</span></li>
							<li><label>Green Area:</label> <span style={{fontWeight:"300"}}> {data.greenArea} </span></li>
							<li><label>Ceiling Height:</label> <span style={{fontWeight:"300"}}>{data.ceilingHeight}</span></li>
							<li><label>Main Door Height:</label> <span style={{fontWeight:"300"}}>{data.mainDoorHeight}</span></li>
							<li><label>Internal Door Height:</label> <span style={{fontWeight:"300"}}>{data.internalDoorHeight}</span></li>
						</ul>
						</div>
						{/*<h4 className="title-2">Facts and Features</h4>
						<div className="property-detail-feature-list clearfix mb-45">                            
						<ul>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Living Room</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garage</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Dining Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bedroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Bathroom</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Gym Area</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Garden</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
							<li>
							<div className="property-detail-feature-list-item">
								<i className="flaticon-double-bed" />
								<div>
								<h6>Parking</h6>
								<small>20 x 16 sq feet</small>
								</div>
							</div>
							</li>
						</ul>
						</div>
						
						*/}
						<div style={{display:"flex",height:"650px",background:"#f2f6f7"}}>
							<div style={{width:'50%',display:"flex"}}>

                              <div style={{width:"100%",background:"",textAlign:"left",padding:"20px",display:"block"}}> 
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> HT Property ID :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> Ace Divino</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Launch Date:</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.launchDate}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Possession Date :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.possessionDate}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> RERA ID :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.RERANO}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#000000",textAlign:"left"}}> Project Plot Area :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.projectArea}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Green Area :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.greenArea}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Lift Per Tower :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> Ace Divino</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Floor vs Flats :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> </div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Podium/Non Podium :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}></div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Club House Size :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> </div>
							 </div>
							  </div>
							 
							</div>
							<div style={{width:'50%',background:"",display:"flex"}}>
							<div style={{width:"100%",background:"",textAlign:"center",padding:"20px"}}>
							<div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Price :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.price}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Property Status :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.status}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Construction Type :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}></div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Total Towers :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.totalTowers}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Total Flats:</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.totalFlats}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Parking Level :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}></div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> No of Parking :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}></div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Total Floors :</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.totalFloors} </div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#000000",textAlign:"left"}}> Ceiling Height:</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}> {data.ceilingHeight}</div>
							 </div>
							 <div style={{display:"block"}}>
							 <div style={{padding:"5px",height:"25px",color:"#00000",textAlign:"left"}}> Main Door Height:</div>
							 <div style={{padding:"5px",height:"25px",color:"#b48811",textAlign:"left",marginBottom:"10px",fontWeight:"700"}}>{data.mainDoorHeight}</div>
							 </div>
							</div>
						
							</div>
							</div>

						<h4 className="title-2">From Our Gallery</h4>

						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-6">
							<a href={data.gallery1} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.gallery1} alt="Image" />
							</a>
							<a href={data.gallery2} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.gallery2} alt="Image" />
							</a>
							
							</div>
							<div className="col-md-6">
							<a href={data.gallery3} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.gallery3} alt="Image" />
							</a>
							</div>
						</div>
		</div>
						<h4 className="title-2 mb-10">Amenities</h4>
						<div className="property-details-amenities mb-60">
						<div className="row">
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Swimming Pool
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">High Speed Elevators
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Cctv Surveliance
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">24x7 Security
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Kids play Area
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__menu-widget">
								<ul>
								<li>
									<label className="checkbox-item">Earthquake Resistance
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Gym
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Firefighting Equipment
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">Clubhouse
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								<li>
									<label className="checkbox-item">LandScape Garden
									<input type="checkbox" defaultChecked="checked" />
									<span className="checkmark" />
									</label>
								</li>
								</ul>
							</div>
							</div>
							
							
						</div>
						</div>
						
						<h4 className="title-2">Floor Plans</h4>
						{/* APARTMENTS PLAN AREA START */}
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_3_1">2 BHK</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">3 BHK</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >4 BHK</a>
							
							</div>
						</div>
						
						
						<div className="tab-content">
						
							<div className="tab-pane fade" id="liton_tab_3_1">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">

									<div className="apartments-plan-img">
									<img src={data.floorPlan1} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
								<div className="row">
										<div className="col-lg-12">
										<div>
											<ul>
											<li><label>Super Area :</label> <span>{data.superArea1}</span></li>
											<li><label>Carpet Area :</label> <span>{data.carpetArea1}</span></li>
											</ul>
										</div>
										</div>
									</div>
								</div>
								</div>
							</div>
							</div>
						
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">

									<div className="apartments-plan-img">
									<img src={data.floorPlan2} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
								<div className="row">
										<div className="col-lg-12">
										<div>
											<ul>
											<li><label>Super Area :</label> <span>{data.superArea1}</span></li>
											<li><label>Carpet Area :</label> <span>{data.carpetArea1}</span></li>
											</ul>
										</div>
										</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__apartments-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">

									<div className="apartments-plan-img">
									<img src={data.floorPlan3} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
								<div className="row">
										<div className="col-lg-12">
										<div>
											<ul>
											<li><label>Super Area :</label> <span>{data.superArea3}</span></li>
											<li><label>Carpet Area :</label> <span>{data.carpetArea3}</span></li>
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
						{/* APARTMENTS PLAN AREA END */}
						<h4 className="title-2">Property Video</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href={data.video} data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
						</a>
						</div>
						<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
						
						
						<hr />
						
						
						<h4 className="title-2">KNOW ABOUT {data.propertyname}</h4>
					
          <ShowMore maxHeight={200} styleButton={{backgroundColor:"rgb(180 136 17)",maxWidth:"180px",borderRadius:"0px",padding:"12px 30px"}}>
          <div>
            {data.text}
            </div>
          </ShowMore>
						</div>
						<h4 className="title-2">Related Properties</h4>
						<div className="row">
						
						
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Rent</li>
								</ul>
								</div>
								<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
								<div className="product-img-location">
								<ul>
									<li>
									<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
									</li>
								</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
									Bedrooms
								</li>
								<li><span>2 </span>
									Bathrooms
								</li>
								<li><span>3450 </span>
									square Ft
								</li>
								</ul>
								<div className="product-hover-action">
								<ul>
									<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
										<i className="flaticon-expand" />
									</a>
									</li>
									<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
										<i className="flaticon-heart-1" /></a>
									</li>
									<li>
									<Link to="/shop" title="Compare">
										<i className="flaticon-add" />
									</Link>
									</li>
								</ul>
								</div>
							</div>
							<div className="product-info-bottom">
								<div className="product-price">
								<span>$349,00<label>/Month</label></span>
								</div>
							</div>
							</div>
						</div>
					
						</div>
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						
						<div class="container2 snipcss-r95te">
  <div class="brand-title">
    Booking Open Now!
  </div>
  <div style={{color:"azure",
    textAlign: "center",
    textTransform:"uppercase",
    letterSpacing: "2px"}}>
    To Get The Best Offers, Schedule A Visit Now
  </div>
  <div class="inputs">
    <input type="email" placeholder="Enter Your Name"/>
    <input type="password" placeholder="Enter Your Contact No."/>
    <button type="submit" class="btn-1">
      Register Now
    </button>
	
  </div>
</div>
						{/* Top Rated Product Widget */}
						
						{/* Menu Widget (Category) */}
						<h4 className="title-2" style={{marginTop:"30px"}}>Location</h4>
						<div className="property-details-google-map mb-60">
						<iframe src={data.location} width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
						</div>
						{/* Popular Product Widget */}
						<div className="widget ltn__popular-product-widget">       
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>                     
						<div className="row ltn__popular-product-widget-active slick-arrow-1">
						{ featured.map((data) => (
							
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to={`detailview/${data.id}`}><img src={data.img} alt="#" /></Link>
								<div className="real-estate-agent">
									
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span>₹ {data.price}<label></label></span>
								</div>
								<h2 className="product-title"><Link to={`detailview/${data.id}`}>{data.propertyname}</Link></h2>
								<div className="product-img-location">
									<ul>
									<li>
									<Link to={`detailview/${data.id}`}><i className="flaticon-pin" />{data.address1}</Link>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
									{data.configurations}
								</ul>
								</div>
								
							</div>
							</div>
						))}
						

						</div>	
						</div>
						
						{/* Popular Post Widget */}
						
						{/* Social Media Widget */}
						
						{/* Tagcloud Widget */}
						
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
				))}
			</div>
			</>
        }


export default  ShopDetails;