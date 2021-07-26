import React from 'react';
import './App.css';
import 'rmwc/dist/styles';
import { HomePage } from './pages/home_page/HomePage';
import {CreateCV} from './pages/create_cv/CreateCV'
import { NavBar } from './components/nav_bar/Navbar';

import firebase from 'firebase';
import { config } from './firebase.config';
import {ViewExampleCV} from './pages/ViewExampleCV/ViewExampleCV'

firebase.initializeApp(config);

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <CreateCV/>
      {/* <ViewExampleCV></ViewExampleCV> */}
    </div>
  );
}

export default App;
