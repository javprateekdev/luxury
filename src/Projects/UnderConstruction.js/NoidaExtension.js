import React from 'react';
import Navbar from '../../components/global-components/navbar-v3';
import ShogGrid from './NoidaExtensionShop';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';

import Banner from './Bannerextension';

const NoidaExtensionRtm = () => {
    return <div>
        <Navbar />
        <Banner/>
        <ShogGrid />
        <CallToActionV1 />
       
    </div>
}

export default NoidaExtensionRtm;
