import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rawpost from './Components/Rawpost/Rawpost';
import {action,originals,trending,comedy,romance,horror} from './url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rawpost url={originals} title='Netflix Originals'/>
      <Rawpost url={trending} title='Trending' isSmall />
      <Rawpost url={action} title='Action' isSmall />
      <Rawpost url={horror} title='Horror' isSmall />
      <Rawpost url={romance} title='Romance' isSmall />
      <Rawpost url={comedy} title='Comedy' isSmall /> 
    </div>
  );
}

export default App;
