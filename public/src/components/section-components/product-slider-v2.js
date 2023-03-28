import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductSliderV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 " data-bs-bg={publicUrl+"assets/img/bg/20.jpg"} style={{marginTop:"-125px"}}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Properties By Locality</h6>
			          <h1 className="section-title">Locate high-end luxury residences <br />
					  in your vicinity</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ">
			      <div className="col-lg-3"  >
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/Central"><img src={publicUrl+"assets/img/Centralnoida.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			              {/*  <li>2 Properties</li>*/}
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/Central">15 MIN From DND</Link></h6>
			            <h4><Link to="/Central">Central Noida</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/Central">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3"  >
			        <div className="ltn__search-by-place-item"  >
			          <div className="search-by-place-img"  >
			            <Link to="/expressway"><img src={publicUrl+"assets/img/expressway.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
						{/*<li>5 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/expressway">20 MIN From DND</Link></h6>
			            <h4><Link to="/expressway">Noida Expressway</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/expressway">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/extension"><img src={publicUrl+"assets/img/Extension.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			               {/* <li>9 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/extension">25 MIN From DND</Link></h6>
			            <h4><Link to="/extension">Noida Extension</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/extension">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/sector150"><img src={publicUrl+"assets/img/Sector150.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			               {/*<li>5 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6> <Link to="/sector150">30 MIN From DND</Link></h6>
			            <h4> <Link to="/sector150">Noida Sector-150</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/sector150">View Properties <i className="flaticon-right-arrow" /></Link>
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

export default ProductSliderV2