import React from 'react';
import { RoomContext } from '../Context';
import { useContext } from 'react';
import Title from './Title';

const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice,
        minSize, maxSize, breakfast,pets
    } = context;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types]

    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let guests = getUnique(rooms, 'capacity');
    guests = guests.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
        <section className='filter-container'>
        <Title title='search rooms' />

        <form className='filter-form'>

        <div className='form-group'>
            <label htmlFor="type">room type</label>
            <select name='type' id='type' value={type} 
            className='form-control' onChange={handleChange}>
            {types}
            </select>
        </div>

        <div className='form-group'>
            <label htmlFor="capacity">guests</label>
            <select name='capacity' id='capacity' value={capacity} 
            className='form-control' onChange={handleChange}>
            {guests}
            </select>
        </div>

        <div className='form-group'>
            <label htmlFor="price">room price ${price}</label>
            <input id='price' type="range" name="price"
             min={minPrice} max={maxPrice} value={price} onChange={handleChange} className='form-control' />
        </div>

        <div className='form-group'>
            <label htmlFor="size">room size</label>
          <div className='size-inputs'>
              <input type="number" id='size' name="minSize" value={minSize} 
              onChange={handleChange} className='size-input' />

              <input type="number" id='size' name="maxSize" value={maxSize} 
              onChange={handleChange} className='size-input' />
          </div>
        </div>  
        
        <div className='form-group'>
        <div className='single-extra'>
        <input type="checkbox" name="breakfast" id='breakfast' checked={breakfast} onChange={handleChange} />
        <label htmlFor="breakfast">breakfast</label>
        </div>            

        <div className='single-extra'>
        <input type="checkbox" name="pets" id='pets' checked={pets} onChange={handleChange} />
        <label htmlFor="pets">pets</label>
        </div>            
        </div>

        </form>

        </section>
    )
}
