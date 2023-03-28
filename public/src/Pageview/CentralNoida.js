import React from 'react';
import Navbar from '../components/global-components/navbar-v3';
import PageHeader from '../components/global-components/page-header';
import ShogGrid from './CentralNoidashop';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';
import Banner from './Banner';

const ShopGrid_V1 = () => {
    return <div>
        <Navbar />
        <Banner/>
        <ShogGrid />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ShopGrid_V1;