import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Details from './Details';

function Health(){
  return (
    <div className="sidebar">
     <Navbar/>
     <Search/>
    <Details/>
    </div>
  )
}

export default Health
