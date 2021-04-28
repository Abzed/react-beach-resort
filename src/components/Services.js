import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services : [
            {
            icon:<FaCocktail />,
            title:'free cocktail',
            info:' Dolor at lorem sit takimata lorem et. Dolore stet sadipscing.',
        },
        {
            icon:<FaHiking />,
            title:'Endless Hiking',
            info:' Dolor at lorem sit takimata lorem et. Dolore stet sadipscing.',
        },
        {
            icon:<FaShuttleVan />,
            title:'free shuttle',
            info:' Dolor at lorem sit takimata lorem et. Dolore stet sadipscing.',
        },
        {
            icon:<FaBeer />,
            title:'strongest beer',
            info:' Dolor at lorem sit takimata lorem et. Dolore stet sadipscing.',
        }

    ]
        
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />

                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6> {item.title} </h6>
                        <p> {item.info}</p>
                        </article>
                    })}
                </div>
               
            </section>
        )
    }
}
