import React from 'react';

function ListingPage(props) {
const id = props.match.params.id
console.log(props)

let seller = ''
  return (

    <div className='single-listing'>
      <h1>{props.state.searchData[id].title}</h1>
      <h3>{props.state.searchData[id].locationCountry}, {props.state.searchData[id].locationCity}</h3>
      <img width='400px' src={props.state.searchData[id].image} />
      <p>{props.state.searchData[id].listingPrice}</p>
      <p className='infotext'>{props.state.searchData[id].info}</p>
      <h3>Seller Info:</h3>
      <div className='seller-info'>
        <div>
            <p>Company:<br /> {props.state.searchData[id].seller.name}</p>
            <p>Contact Person:<br /> {props.state.searchData[id].seller.contactPerson}</p>
            <p>Phone:<br /> {props.state.searchData[id].seller.phone}</p>
            <p>Mail:<br /> {props.state.searchData[id].seller.mail}</p>
        </div>
        <div>
            <img className='seller-image' height='220px' src={props.state.searchData[id].seller.contactPersonImage} />
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
