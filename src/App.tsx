import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlatformList from './platform/PlatformList';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/platform/list">Liste des plateformes</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/platform/list">
            <PlatformList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
