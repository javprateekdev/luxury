import React from 'react';
import Navbar from '../../components/global-components/navbar-v3';
import ShogGrid from './CentralNoidaShop';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';

import Banner from './Banner';

const CentralNoidauc = () => {
    return <div>
        <Navbar />
        <Banner/>
        <ShogGrid />
        <CallToActionV1 />
       
    </div>
}

export default CentralNoidauc;
