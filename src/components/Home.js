import React, {Component} from 'react';
import Hero from './Hero';
import {Link} from 'react-router-dom';
import Banner from './Banner';
import Services from './Services';
import FeaturedRooms from './FeaturedRooms';

export default function Home (){

    return <div>
        <Hero>
            <Banner title="Luxurious Home" subtitle="deluxe rooms starting at $500">
                <Link to='/' className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
    </div>
}

