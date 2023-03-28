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
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Ready To Move Properties</h6>
			          <h1 className="section-title">Locate high-end luxury residences <br />
					  in your vicinity</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ">
			      <div className="col-lg-3"  >
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/rtmCentral"><img src={publicUrl+"assets/img/Centralnoida.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			              {/*  <li>2 Properties</li>*/}
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/rtmCentral">15 MIN From DND</Link></h6>
			            <h4><Link to="/rtmCentral">Central Noida</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/rtmCentral">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3"  >
			        <div className="ltn__search-by-place-item"  >
			          <div className="search-by-place-img"  >
			            <Link to="/rtmexpressway"><img src={publicUrl+"assets/img/expressway.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
						{/*<li>5 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/rtmexpressway">20 MIN From DND</Link></h6>
			            <h4><Link to="/rtmexpressway">Noida Expressway</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/rtmexpressway">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/rtmextension"><img src={publicUrl+"assets/img/Extension.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			               {/* <li>9 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/rtmextension">25 MIN From DND</Link></h6>
			            <h4><Link to="/rtmextension">Noida Extension</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/rtmextension">View Properties <i className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/rtmsector150"><img src={publicUrl+"assets/img/Sector150.png"} alt="#" /></Link>
			            <div className="search-by-place-badge">
			              <ul>
			               {/*<li>5 Properties</li>*/} 
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6> <Link to="/rtmsector150">30 MIN From DND</Link></h6>
			            <h4> <Link to="/rtmsector150">Noida Sector-150</Link></h4>
			            <div className="search-by-place-btn">
						<Link to="/rtmsector150">View Properties <i className="flaticon-right-arrow" /></Link>
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