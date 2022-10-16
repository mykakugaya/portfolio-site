import React from 'react';
import LandingTitle from "../components/LandingTitle";
import LandingMenu from "../components/LandingMenu";
import './landingStyle.css';

export default function LandingPage() {
    return (
        <div className="landingPage">
            <LandingTitle />
            <LandingMenu />
        </div>
    );
}