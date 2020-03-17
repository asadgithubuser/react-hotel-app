import React, {Component} from 'react';
import { RoomConsumer } from './context';
import Banner from './Banner';
import Hero from './Hero';
import { Link } from 'react-router-dom';

class SingleRoom extends Component{

    render(){
        return(
            <div>
                <RoomConsumer>
                    {
                        value => {
                           const{id, name, slug, price, size, capacity, pets,extras, breakfast, description, images} = value.singleRoom;
                            console.log(value.singleRoom)
                           return(
                            <>
                               <Hero>
                                    <Banner title={`${name} room`}>
                                        <Link to="/rooms" className="btn-primary">
                                            beck to room
                                        </Link>
                                    </Banner>
                                </Hero>  

                                <section className="single-room">
                                    <div className="single-room-images">
                                        {
                                            images.map( (item, index) =>{
                                                return <img key={index} src={item} alt={name} />
                                            })
                                        }
                                    </div>
                                    <div className="single-room-info">
                                        <article className="desc">
                                            <h3>details</h3>
                                            <p>{ description }</p>
                                        </article>
                                        <article className="info">
                                     <h3>info</h3>
                                    <h6>Price: {price}</h6>
                                    <h6>Size: {size}</h6>
                                    <h6>max capacity : {capacity > 1 ? `${capacity} people`: `${capacity} person`}</h6>
                                    <h6>pets allowed: {pets ? "Pets allowed": "no pets allowed"}</h6>
                                    <h6>{ breakfast && "free breakfast included"}</h6>
                                        </article>
                                    </div>
                                </section>  
                                <section>
                                    <div className="room-extras">
                                        <h6>extras</h6>
                                        <ul className="extras">
                                            {
                                                extras.map( (item, index) => {
                                                return <li key={index}> - {item}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </section>
                            </>
                           )

                        }
                    }
                </RoomConsumer>
            </div>
        )
    }
}

export default SingleRoom;