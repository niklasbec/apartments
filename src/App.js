import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import SearchForm from './components/searchForm'
import Listings from './components/Listing'
import { data } from './data/data';
import ListingPage from './components/listingPage'


function App() {

  const [state, setState] = useState({
    form: {
      location: '',
    },
    searchData: data,
    returnData: data
  })

  return (
    <div className="App">
    <NavBar />
      <div className='container'>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/listings' component={Listings} />
      <Route path="/listing/:id" render={(props) => (<ListingPage state={state} {...props}/> )}/>
      <Route exact path="/" render={props => (<SearchForm {...props} setState={setState} state={state}/>)}/>
      </div>
      <Footer />
      </div>
  );
}

export default App;
