import React, { Component } from 'react';
import { useContext } from 'react';
import { RoomContext } from './context';
import Title from './Title';
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({rooms}){

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    //map to jsx
    types = types.map( (item, index) => {
        return (
            <option key={index} value={item} >
                { item }
            </option>
        )
    }); 

    // guest filter 
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return(
            <option key={index} value={item} >
                { item }
            </option>
        )
    })
    return(
        <section className="filter-container">
            <Title title="search room" />

            <form className="filter-form">
                {/* select type */}
                <div className="from-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                        { types }
                    </select>
                </div>
                {/* end select type  */}

                {/* filter guest */}
                <div className="from-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        { people }
                    </select>
                </div>
                {/* end filter guest */}

                {/* filter price */}
                <div className="from-group">
                    <label htmlFor="price">Room Price ${ price }</label>
                    <input type="range" name="price" id="price" value={price} className="form-control" 
                    min={minPrice} max={maxPrice} onChange={handleChange} />
                </div>
                {/* end filter price */}

                {/* room size */}
                <div className="from-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange}
                        className="size-input" />
                        <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange}
                        className="size-input" />
                    </div>
                </div>
                {/*end room size */}

                {/* extra filter  */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} 
                        onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label> 
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets} 
                        onChange={handleChange} />
                        <label htmlFor="pets">Pets</label> 
                    </div>
                </div>
                {/* end extra filter  */}

            </form>
        </section>
    )
}