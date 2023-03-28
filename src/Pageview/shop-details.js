import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { data } from "./data";
import ShowMore from 'react-show-more-button';
import Dialog from './Schedule'
import Slider from './product-slider-v1'
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
  <h1 style={{color:"white",fontWeight:"600"}}>
  {data.propertyname}
  </h1>
  <p style={{color:"white",fontWeight:"600"}}>
  {data.address1}
  </p>
  <div class="banner-configurations-site-visit">
	<div class="banner-configurations">
	  <div class="configuration-item configurations-size">
		<h4>
		  Price
		</h4>
		<p style={{color:"white",fontWeight:"600"}}>
		₹{data.price}
		</p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
		  Sizes
		</h4>
		<p style={{color:"white",fontWeight:"600"}}>
		  {data.sizes}
		  </p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
	   Configurations
		</h4>
		<p style={{color:"white",fontWeight:"600"}}>
		  {data.configurations}
		</p>
	  </div>
	  <div class="configuration-item configurations-size">
		<h4>
		  Status
		</h4>
		<p style={{color:"white",fontWeight:"600"}}>
		{data.status}
		</p>
	  </div>
	  <div class="configuration-item">
		<h4>
		  Rera No.
		</h4>
		<p style={{color:"white",fontWeight:"600"}}>
		{data.RERANO}
		</p>
	  </div>
	</div>
	
	  
	  <div class="project-site-visit btn">
		<Dialog/>
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
					{/* 	<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Status:</label> <span style={{fontWeight:"300"}}>{data.status}</span></li>
							<li><label>Launch Date: </label> <span style={{fontWeight:"300"}}>{data.launchDate}</span></li>
							<li><label>Possession Date:</label> <span style={{fontWeight:"300"}}>{data.possessionDate}</span></li>
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
						</div>*/}
						<div style={{width:"100%",display:"flex"}} className="services">
							
                             <div style={{width:"50%",borderRight:"10px solid white"}}>
							 <table>
 
 <tbody>
   <tr>
	 
	 <th style={{fontWeight:"500"}}>Status:</th>
	 <td style={{color:"#b48811"}}>{data.status}</td>
	 
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Launch Date:</th>
	 <td style={{color:"#b48811"}}>{data.launchDate}</td>
	 
	
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Possession Date:</th>
	 <td style={{color:"#b48811"}}>{data.possessionDate}</td>
	 
 
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>RERA ID</th>
	 <td style={{color:"#b48811"}}>{data.RERANO}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Project Plot Area</th>
	 <td style={{color:"#b48811"}}>{data.projectArea}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Green Area</th>
	 <td style={{color:"#b48811"}}>{data.greenArea}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Lift Per Tower</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Floor vs Flats</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Podium/Non Podium</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Club House Size</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
 </tbody>
</table>
						
							  
							
							</div>

							<div style={{width:"50%"}}>
                         
<table>
 
 <tbody>
   <tr>
	 
	 <th style={{fontWeight:"500"}}>Price:</th>
	 <td style={{color:"#b48811"}}>{data.status}</td>
	 
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Property Status:</th>
	 <td style={{color:"#b48811"}}>{data.launchDate}</td>
	 
	
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Construction Type:</th>
	 <td style={{color:"#b48811"}}>{data.possessionDate}</td>
	 
 
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Total Towers</th>
	 <td style={{color:"#b48811"}}>{data.totalTowers}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Total Flats</th>
	 <td style={{color:"#b48811"}}>{data.totalFlats}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Parking Level</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>No of Parking</th>
	 <td style={{color:"#b48811"}}>16 kg</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Total Floors</th>
	 <td style={{color:"#b48811"}}>{data.totalFloors}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Ceiling Height</th>
	 <td style={{color:"#b48811"}}>{data.ceilingHeight}</td>
   </tr>
   <tr>
	 <th style={{fontWeight:"500"}}>Main Door Height</th>
	 <td style={{color:"#b48811"}}>{data.mainDoorHeight}</td>
   </tr>
 </tbody>
</table>
							</div>
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
					</div>*/}
				
						
			{/*			<div className="property-details-amenities mb-60">
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
		*/}
						<h4 className="title-2 mb-30">Amenities</h4>
						<div class="services lazyloaded snipcss-eFVVK">
  <div class="row lazyloaded">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-1.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-1.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-1.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Open Badminton Court
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-2.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-2.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-2.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Beauty Salon
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-3.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-3.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-3.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Rain Water Harvesting
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-4.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-4.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-4.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Customer Care Centre
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-5.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-5.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-5.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Internet
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-6.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-6.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-6.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Jogging Track
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-7.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-7.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-7.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Immaculate Landscaping
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-8.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-8.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-8.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Play Pan for Kids
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-9.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-9.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-9.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Securities
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-10.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-10.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-10.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Swimming Pool
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-11.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-11.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-11.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        Dedicated Lift Lobby
      </p>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-6 lazyloaded">
      <figure>
        <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-12.png" class="img-thumbnail lazyloaded" data-src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-12.png"/>
        <noscript>
          <img src="https://www.gulshanhomz.com/wp-content/uploads/2019/10/sf-12.png" class="img-thumbnail" data-eio="l"/>
        </noscript>
      </figure>
      <p>
        AC Gymnasium
      </p>
    </div>
  </div>
</div>

						<h4 className="title-2">Floor Plans</h4>
						<Slider/>
					{/*
						<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
						<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
							<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_3_1">First Floor</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Second Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_3" >Third Floor</a>
							<a data-bs-toggle="tab" href="#liton_tab_3_4" >Top Garden</a>
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
											<li><label>Super Area :</label> <span>{data.superArea}</span></li>
											<li><label>Carpet Area :</label> <span>{data.carpetArea}</span></li>
											</ul>
										</div>
										</div>
										
									</div>
					
								
								
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade active show" id="liton_tab_3_2">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={data.floorPlan2} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Second Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_3">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={data.floorPlan3} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Third Floor</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="tab-pane fade" id="liton_tab_3_4">
							<div className="ltn__product-tab-content-inner">
								<div className="row">
								<div className="col-lg-7">
									<div className="apartments-plan-img">
									<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
									<h2>Top Garden</h2>
									<p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
										Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
										eiusmod tempor.Incididunt labore et dolore magna aliqua.
										sed ayd minim veniam.</p>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="product-details-apartments-info-list  section-bg-1">
									<div className="row">
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
											<li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
											</ul>
										</div>
										</div>
										<div className="col-lg-6">
										<div className="apartments-info-list apartments-info-list-color mt-40---">
											<ul>
											<li><label>Belcony/Pets</label> <span>Allowed</span></li>
											<li><label>Lounge</label> <span>650 Sq. Ft</span></li>
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
						{/* APARTMENTS PLAN AREA END */}

								<h4 className="title-2">From Our Gallery</h4>
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-6">
							<a href={data.pic1} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.pic1} alt="Image" />
							</a>
							<a href={data.pic2} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.pic2} alt="Image" />
							</a>
							</div>
							<div className="col-md-6">
							<a href={data.pic3} data-rel="lightcase:myCollection">
								<img className="mb-30" src={data.pic3} alt="Image" />
							</a>
							</div>
						</div>
		</div>    
		<h4 className="title-2">{data.propertyname} Master Plan</h4>
		<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-lg-6">
							<a href={data.siteplan}>
								<img className="mb-30" src={data.siteplan} alt="Image" />
							</a>
							</div>
						</div>
		</div>    
						<h4 className="title-2">Property Video</h4>
						<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
						<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href={data.video} data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
						</a>
						</div>
						<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
						
						
						<hr />
						
						{/* comment-reply */}
						<h4 className="title-2">KNOW ABOUT {data.propertyname}</h4>
					
          <ShowMore styleButtonDiv ={{opacity:"0.6"}}maxHeight={200} opacity={0.6} styleButton={{color:"rgb(180 136 17)",maxWidth:"180px",borderRadius:"0px",padding:"6px 5px",background:"white"}}>
          <div>
            <div style={{display:"block",marginBottom:"25px"}}>
                {data.para1}
			</div>
			<div style={{display:"block",marginBottom:"25px"}}>
			{data.para2}
			</div>
			<div style={{display:"block",marginBottom:"25px"}}>
			{data.para3}
			</div>
			<div style={{display:"block",marginBottom:"25px"}}>
			{data.para4}
			</div>
			<div style={{display:"block",marginBottom:"25px"}}>
			{data.para5}
			</div>
            </div>
          </ShowMore>
						</div>
						<h4 className="title-2">Related Properties</h4>
						<div className="row">
						{/* ltn__product-item */}
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
						{/* ltn__product-item */}
						<div className="col-xl-6 col-sm-6 col-12 go-top">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img">
								<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
								<div className="real-estate-agent">
								<div className="agent-img">
									<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
								</div>
							</div>
							<div className="product-info">
								<div className="product-badge">
								<ul>
									<li className="sale-badg">For Sale</li>
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
									<a href="portfolio-details.html" title="Compare">
										<i className="flaticon-add" />
									</a>
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
						{/* Author Widget */}
					
						{/* Search Widget */}
						
						{/* Form Widget */}
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
						{featured.map((data) => (
							<div className="col-12">
							<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
								<div className="product-img go-top">
								<Link to="/shop"><img src={data.img} alt="#" /></Link>
								<div className="real-estate-agent">
									
								</div>
								</div>
								<div className="product-info">
								<div className="product-price">
									<span> ₹ {data.price}<label></label></span>
								</div>
								<h2 className="product-title"><Link to="/shop">{data.propertyname}</Link></h2>
								<div className="product-img-location" style={{border:"1px solid #black"}}>
									<ul>
									<li>
										<Link to="/shop"><i className="flaticon-pin" /> {data.address1}</Link>
									</li>
									</ul>
								</div>
								<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								{data.configurations}
								</ul>
								</div>
								<div className='btnnormal' style={{marginLeft:"34px !important"}}>
			                <Dialog/>
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