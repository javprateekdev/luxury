import React from 'react';
import Navbar from '../../components/global-components/navbar-v3';
import ShogGrid from './Sector150Shop';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';

import Banner from './Bannersector150';

const Sector150Rtm = () => {
    return <div>
        <Navbar />
        <Banner/>
        <ShogGrid />
        <CallToActionV1 />
       
    </div>
}

export default Sector150Rtm;
