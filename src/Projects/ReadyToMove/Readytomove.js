import React from 'react';
import Navbar from '../../components/global-components/navbar-v3';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Banner from './Bannerextension';
import  ProductSliderV2 from './ProductSliderV2';

const ShopGrid_V1 = () => {
    return <div>
        <Navbar />
        <Banner/>
        <ProductSliderV2/>
        <CallToActionV1 />
     
    </div>
}

export default ShopGrid_V1;