import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingProductV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg={publicUrl+"assets/img/pagebg.jpg"} style={{backgroundSize:"Cover"}}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6>
			          <h1 className="section-title  white-color">Dream Living Space <br />
			            Setting New Standards</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/Upcoming1.png"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="section-subtitle ltn__secondary-color mb-0">About Projects</h6>
			                <h1 className="mb-30">Upcoming Projects</h1>
			                <ul className="mt">
			                  <li>1. Project Name: <span>L&T</span></li>
			                  <li>2. Project Type: <span>Residential</span></li>
			                  <li>3. Project Location: <span> SECTOR 128</span></li>
			                  <li>4. Configurations: <span>2 BHK, 3 BHK and 4 BHK </span></li>
			                  
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Download Brochure</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/Upcoming2.jpg"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="ltn__secondary-color">About Projects</h6>
			                <h1>Upcoming Projects</h1>
			                <ul>
			                  <li>1. Project Name: <span>M3M</span></li>
			                  <li>2. Project Type: <span>Residential</span></li>
			                  <li>3. Project Location: <span>Sector 94</span></li>
			                  <li>4. Configurations: <span>3 BHK,4 BHK,5 BHK</span></li>
			                  
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Download Brochure</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/Upcoming3.png"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                <h6 className="ltn__secondary-color">About Projects</h6>
			                <h1>Upcoming Projects</h1>
			                <ul>
			                  <li>1. Project Name: <span>Max Estate</span></li>
			                  <li>2. Project Type: <span>Residential</span></li>
			                  <li>3. Project Location: <span>Sector 128</span></li>
			                  <li>4. Configurations: <span> 3 BHK,4 BHK and Duplexes.</span></li>
			                
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1 ">Download Brochure</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>
        }
}

export default UpcomingProductV1