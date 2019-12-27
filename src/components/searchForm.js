import React from 'react';
import { Link } from 'react-router-dom'

function SearchForm(props) {

    const handleSubmit = event => {
        event.preventDefault()
        
        props.setState({...props.state, returnData: props.state.searchData.filter(curr => {
            return curr.locationCity.toLowerCase() === props.state.form.location.toLowerCase()
        })})  
    }

        const handleChange = event => {
            props.setState({...props.state, form: {
                location: event.target.value
            }})
            console.log(props.state)
    }

  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <h1>Show me Houses in:</h1>
        <input onChange={handleChange} name='location' type='text' value={props.state.form.location} placeholder='Location' />
        <input type='submit' id='submit'/>
      </form>
      <div className='listing-grid'>
        {props.state.returnData.map((curr) => {
            return(
                <div>
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
                </div> 
            )
        })}
      </div>
    </div>
  );
}

export default SearchForm;
