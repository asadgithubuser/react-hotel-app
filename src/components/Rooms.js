import React, { Component } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import RoomContainer from './RoomContainer';
export default class Rooms extends Component{

    render(){
        return(
            <div>
                <Hero class="roomsHero">
                    <Banner title="Our rooms">
                        <Link to="/" className="btn-primary" >
                            return home
                        </Link>
                    </Banner>
                </Hero>

            <RoomContainer />
            </div>
        )
    }
}