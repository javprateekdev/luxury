import React from 'react';
import Navbar from './global-components/navbar-v3';
import ProductSlider from '../Pageview/product-slider-v1';
import ProductDetails from '../Pageview/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Product_Details = () => {
    return <div>
        <Navbar />
        <ProductSlider />
        <ProductDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

