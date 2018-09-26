import * as React from 'react';

const space = {
  margin: "50px"
}

export default class PostFood extends React.Component{

  render(){
      return(
        <center>
        <div style={space}>
            <h1>Post Location</h1><br></br>
            <p>Use the form below to submit information about an event.</p>
            <div style={space}>
              <form>
                  <div style={space}>
                  Location: <br></br>
                  <input type="text" name="location"></input>
                  <br></br>
                  Time: <br></br>
                  <input type="text" name="time"></input>
                  <br></br>
                  Description: <br></br>
                  <input type="text" name="description"></input>
                  </div>
                <br></br>
                <button>Submit</button>
              </form>
            </div>
        </div>
        </center>
        
      );
  }
}
