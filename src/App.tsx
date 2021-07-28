import React from 'react';
import './App.css';
import 'rmwc/dist/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/home_page/HomePage';
import { NavBar } from './components/nav_bar/Navbar';
import { UserCV } from './pages/UserCV/UserCV';
import firebase from 'firebase';
import { config } from './firebase.config';
import { ViewExampleCV } from './pages/ViewExampleCV/ViewExampleCV'
import { CreateCV2 } from './pages/create_cv2/CreateCV2'
import {CreateCV} from './pages/create_cv/createCV'
firebase.initializeApp(config);

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path="/createcv" component={CreateCV} />
          <Route path="/createcv2" component={CreateCV2} />
          <Route path="/usercv" component={UserCV} />
          <Route path="/viewexcv" component={ViewExampleCV} />
        </Switch>
      </Router>


    </React.Fragment>
  );
}

export default App;
