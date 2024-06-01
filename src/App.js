// import logo from './logo.svg';
import React from 'react'
import './App.css';
import NavaBar from './Components/NavBar/NavaBar';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';




function App() {
  return (
    <div className="App">
      
      <NavaBar/>
      <Banner/>
      <RowPoster/>
      
    </div>
  );
}

export default App;
