import React, {Component} from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import { RoomConsumer } from './context';
// import { render } from '@testing-library/react';

export default class Room extends Component {

    render(){
        const {id, name, slug, images, price} = this.props.room;
        return (
            <article className="room">

                <div className="img-container">
                    <img src={images[0]} alt="featured room" />
            
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                <RoomConsumer>
                    { value => (
                            <div onClick={ () => value.roomDetails(slug) } className="room-link btn-primary" >
                                <Link to={`/rooms/${slug}`} >
                                    features
                                </Link>
                            </div>
                        )
                    }
                </RoomConsumer>
                </div>
                <p className="room-info">{name}</p>
            </article>
        )
        
    }

}












// import React, {Component} from 'react';
// import Hero from './Hero';
// import Banner from './Banner';
// import {Link} from 'react-router-dom';
// import { RoomCosumer } from './context';

// export default function Room ({room}) {
//        const { name, slug, images, price} = room;
        
//     return (
//         <article className="room">

//         {/* <RoomCosumer>
//             { value => {
//                 console.log(value)
//             }}
//         </RoomCosumer> */}

//             <div className="img-container">
//                 <img src={images[0]} alt="featured room" />
           
//                 <div className="price-top">
//                     <h6>${price}</h6>
//                     <p>per night</p>
//                 </div>
//                 <Link to={`/rooms/${slug}`} className="room-link btn-primary">
//                     features
//                 </Link>
//             </div>
//           <p className="room-info">{name}</p>
//         </article>
//     )
    
// }

