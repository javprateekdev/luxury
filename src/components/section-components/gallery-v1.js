import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area" style={{position:"relative",top:"-80px",zIndex:"8",marginBottom:"-20px"}}>
				<div className="container-fluid">
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						
						<Link to="/detailview/HT9"><img src={publicUrl+"assets/img/img-slide/21.png"} alt="Image" /></Link>
						
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Heart of Sector 107</h6>
							<h1>County 107</h1>
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						
						<Link to="/detailview/HT3"><img src={publicUrl+"assets/img/img-slide/13.png"} alt="Image" /></Link>
						
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The luxury Crib, Sector 43</h6>
							<h1>Godrej Woods</h1>
						</div>
						
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
					
						<Link to="/detailview/HT12"><img src={publicUrl+"assets/img/img-slide/23.jpg"} alt="Image" /></Link>
						
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Central City Gem, Sector 75</h6>
							<h1>Burj Noida</h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						
					<img src={publicUrl+"assets/img/img-slide/24.jpg"} alt="Image" />
					
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Paradise Towards your Joy, Sector 94</h6>
							<h1><Link to="/portfolio-details">M3M</Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						
						<Link to="/detailview/HT16">		<img src={publicUrl+"assets/img/img-slide/22.png"} alt="Image" /></Link>
					
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Dynasty Living, Sector 144</h6>
							<h1>Gulshan Dynasty</h1>
						</div>
					
						</div>
						
					</div>
					
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						
					<Link to="/detailview/HT7">		<img src={publicUrl+"assets/img/img-slide/28.jpg"} alt="Image" /></Link>
				
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Friendly neighborhood, Sector 108</h6>
							<h1>Park laureate</h1>
						</div>
						
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Gallery