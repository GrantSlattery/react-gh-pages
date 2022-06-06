import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Clock from 'react-digital-clock';




function App() {

{/* https://www.npmjs.com/package/react-digital-clock */}


  return (

    <div className="App">
      <header className="App-header">

	   <h1>GS: React App</h1>
<div className="DigitalClock">
<Clock />
</div>
        <img src={logo} className="App-logo" alt="logo" />



		{/* Edit <code>src/App.js</code> and save to reload. */}
	 


	  
	   <div className="footer"> 
		
        
	   	<a className="App-link"
		href="https://grantslattery.github.io/"
          target="_blank"
          rel="noopener noreferrer">Portfolio</a>

		<p>GS</p>

      


	   </div>



      </header>
    </div>
  );
}



export default App;






