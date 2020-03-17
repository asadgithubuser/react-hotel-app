import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from './Banner';
import Hero from './Hero';

class Error extends Component{

    render(){
        return(
            <Hero>
            <Banner title="404 NOT FOUND PAGE" subtitle="your search not matched in our content.">
                <Link to='/' className="btn-primary">
                        go to home
                </Link>
            </Banner>
            </Hero>
        )
    }
}

export default Error;