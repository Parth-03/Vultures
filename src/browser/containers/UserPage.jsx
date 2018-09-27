import * as React from 'react';
import '../../style/custom.css';

export default class UserPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Random User',
        biography: {
          affiliation: 'Student',
          year: 'Junior',
          department: 'Isenberg',
        }
      },
      image: 'http://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/01/400x400-vulture.png',
      quote: {
        content: 'Favorite Food are Tacos',
        score: '+54'
      } 
      
    };
  }
  render() {
    return(
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
        
      </div>
      
    );
  }
}

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <div className="Bio">
          <p className="affiliation">{props.person.biography.affiliation}</p>
          <p className="year">{"Year: "+props.person.biography.year}</p>
          <p className="department">{"Department: "+props.person.biography.department}</p>
        </div>
        <div className="Quote">
          <blockquote>&ldquo; {"Score: "+props.quote.score} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.content}</div>
        </div>
        
      </div>
    );
}

function Button(){
  return (
    <button className="Btn-update">Update</button>
  );
}
  
