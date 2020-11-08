import React from 'react';
import { Link } from 'react-router-dom';
import place from '../../FakeData/Place';
import Navigation from '../Nav/Navigation';
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <div className="banner_area">
        <div className="menu_area">
        </div>
        <div className="banner_wrapper">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4">
                            <div className='banner_info'>
                                <h1>Cox's bazar</h1>
                                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                <Button variant="outline-primary">Booking</Button>{' '}
                            </div>
                        </div>
                        
                        <div className="col-md-8 d-flex ">
                            {
                                place.map(place => 
                                <div className='banner_content'>
                                    <div className='banner_img'>
                          <Link to={`/booking/${place.id}`}><img src={place.img} alt=""/></Link>
                                        <div className='banner-text'>
                                        <h2>{place.name}</h2>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                </div>
            </div>
        </div>

    </div>
        </div>
    );
};

export default Home;