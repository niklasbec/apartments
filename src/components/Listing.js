import React from 'react';
import { data } from '../data/data'
import { Link } from 'react-router-dom'

function Listings() {
    return (
    <div>
    <h1>All Listings</h1>
    <div className='listing-grid'>
    {data.map((curr) => {
        return(
            <div className="listing-item">
            <div className='listing-item-header'>
            <p>{curr.locationCity},</p>
            <p>{curr.locationCountry}</p>
            </div>
            <img className='listing-main-image' src={curr.image} />
            <p className='title'>{curr.title}</p>
            <p>{curr.listingPrice}</p>
            <Link to={`/listing/${curr.id}`}><a className='see-more'>See more info</a></Link>
            </div> 
            )
        })}
        </div>
        </div>
    );
  }
  
  export default Listings;
