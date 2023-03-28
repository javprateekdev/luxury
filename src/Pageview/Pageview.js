import React from 'react';
import Navbar from '../components/global-components/navbar-v3';
import ProductSlider from './product-slider-v1';
import ProductDetails from './shop-details';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const Product_Details = () => {
    return <div>
        <Navbar />
        <ProductDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

