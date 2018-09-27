import * as React from 'react';
//import 'App.css'


export default class FoodMap extends React.Component{
  render(){
      return(
        <div>
            <center>
              <h1>Food Map</h1> 
              <br></br>
              <p> Below is a visual representation of available locations for food </p>
              <img src =  "https://i.imgur.com/vHhJIWv.png" width = "1000" height = "800"/>
              </center>
                <p>I'm Looking for:</p>
                <button className="Free Button">Free Food</button>
                <button className="Reduced Button">Reduced Food</button>
                <button className="Near Button">Food Near Me</button>
                <button className="Vultures Button" href = "location.href='https://github.com/Ab-hay/s_sasquatch5'">Vultures</button>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a href= 'http://umassdining.com/'>Learn More about UMass Dining!</a>
        </div>
      );
  }
}