import * as React from 'react';

export default class Food extends React.Component{
helpme(){
    console.log("clicked");
}
  render(){
      return(
        <div>
            Food Page
            <button className="btn btn-primary" onClick={this.helpme}>help me</button>
            
        </div>
      );
  }
}
