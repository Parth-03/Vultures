import * as React from 'react';


export default class FoodMap extends React.Component{
  render(){
      return(
        <div className = 'background'>
            <center>
              <h1 className = 'MapHeader'>Food Map</h1> 
              <br></br>
              <p className = 'MapDesc'> Below is a visual representation of available locations for food. Click on a location to learn more about it! </p>
              <img src =  "https://i.imgur.com/vHhJIWv.png" width = "500" height = "400"/>
              </center>
                <p className = 'Looking'>I'm Looking for:</p>
                <div className = 'MapButtons'>
                  <button>Free Food</button>
                  <button>Reduced Food</button>
                  <button>Food Near Me</button>
                  <button>Vultures</button>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center><a href= 'http://umassdining.com/' className = 'diningLink'>Learn More about UMass Dining!</a></center>
        </div>
      );
  }
}