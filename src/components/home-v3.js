import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import SearchForm from './section-components/search-form';
import Features from './section-components/features-v1';
import ProductSlider from './section-components/product-slider-v3';
import FeaturedItem from './section-components/featured-item-v1';
import Video from './section-components/video-v1';
import Sponsor from './section-components/sponsor-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import UpComingProduct from './section-components/upcoming-product-v1';
import Testimonial from './section-components/testimonial-v2';
import ProductSlider2 from './section-components/product-slider-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Gallery from './section-components/gallery-v1';
const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Gallery/>
        <ProductSlider2 />
        <UpComingProduct />
       <ProSlider/>
        <UpComingProduct />
        
        <Testimonial />
        
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V3

