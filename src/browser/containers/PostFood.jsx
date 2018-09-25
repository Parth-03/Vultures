import * as React from 'react';


export default class PostFood extends React.Component{
  render(){
      return(
        <div>
            Post Location <br></br>

            <form>
              Location: <br></br>
              <input type="text" name="location"></input>
              <br></br>
              Time: <br></br>
              <input type="text" name="time"></input>
              <br></br>
              Description: <br></br>
              <input type="text" name="description"></input>
              <br></br>
              <button>Submit</button>
            </form>
        </div>
      );
  }
}
