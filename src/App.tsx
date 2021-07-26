import React from 'react';
import './App.css';
import 'rmwc/dist/styles';
import { HomePage } from './pages/home_page/HomePage';
import { NavBar } from './components/nav_bar/Navbar';
import {Personaldetail} from './components/personal_detail/Personaldetail'
import firebase from 'firebase';
import { config } from './firebase.config';

firebase.initializeApp(config);

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Personaldetail/>
    </div>
  );
}

export default App;
