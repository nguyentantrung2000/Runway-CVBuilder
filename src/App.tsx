import React from 'react';
import './App.css';
import 'rmwc/dist/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/home_page/HomePage';
import { NavBar } from './components/nav_bar/Navbar';
import { UserCV } from './pages/UserCV/UserCV';
import {ChooseLanguage} from './components/choose_language/choose_language'
import firebase from 'firebase';
import { config } from './firebase.config';
import { ViewExampleCV } from './pages/ViewExampleCV/ViewExampleCV'
import { CreateCV2 } from './pages/create_cv2/CreateCV2'
import {CreateCV} from './pages/create_cv/createCV'
import { LandingPage } from './pages/landing_page/LandingPage';
import { CV2 } from './pages/CV_Template/CV2/CV2';
firebase.initializeApp(config);

function App() {
  return (
    <>
     <React.Fragment>
       <NavBar></NavBar>
       <Router>
         <Switch>
           <Route path="/" exact component={LandingPage}/>
           <Route path="/createcv" component={CreateCV} />
           <Route path="/cv2" component={CV2} />
           <Route path="/createcv2" component={CreateCV2} />
           <Route path="/usercv" component={UserCV} />
           <Route path="/viewexcv" component={ViewExampleCV} />
         </Switch>
       </Router>
     </React.Fragment>
</>

  );
}
export default App;
