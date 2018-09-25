import * as React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import history from './history';
import './style/custom.css';

import Food from './browser/containers/Food';
import PostFood from './browser/containers/PostFood';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div>
              <a className="navbar-brand" href="/">
                <small className="text-muted"> Dashboard</small>
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav ml-auto">
                <div className="collapse navbar-collapse">
                  <li className="nav-item">
                    <Link to="/food" className="nav-link">
                      Find Food
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/postfood" className="nav-link">
                      Post Food
                    </Link>
                  </li>
                </div>
                <li className="nav-item">
                  <a
                    target="_blank"
                    href="https://github.com/Ab-hay/s_sasquatch5/issues"
                    className="nav-link"
                  >
                    <i className="fa fa-question-circle" /> Help
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div id="router-div">
            <Switch>
              <Route
                exact={true}
                path="/food"
                component={Food}
                key="foodRoute"
              />
              <Route
                exact={true}
                path="/postfood"
                component={PostFood}
                key="postfood"
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;