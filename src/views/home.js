import React from 'react';
import AppAbout from '../components/home/about';
import AppContact from '../components/home/contact';
import AppFaq from '../components/home/faq';
import AppFeature from '../components/home/feature';
import AppHero from '../components/home/hero';
import AppPricing from '../components/home/pricing';

function AppHome () {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    )
}

export default AppHome;