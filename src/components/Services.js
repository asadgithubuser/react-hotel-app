import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component{

    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "which utilizes ES6 imports that",
                info:"Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows."
            },
            {
                icon: <FaHiking />,
                title: "which utilizes ES6 imports that",
                info:"Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows."
            },
            {
                icon: <FaShuttleVan />,
                title: "which utilizes ES6 imports that",
                info:"Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows."
            },
            {
                icon: <FaBeer />,
                title: "which utilizes ES6 imports that",
                info:"Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows."
            },
        ]
    }

    render(){
        return(
            <section className="services"> 
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
                            
        )
    }
}