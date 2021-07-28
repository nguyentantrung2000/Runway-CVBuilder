import React from 'react';
import './App.css';
import 'rmwc/dist/styles';
import { HomePage } from './pages/home_page/HomePage';
import { NavBar } from './components/nav_bar/Navbar';
import firebase from 'firebase';
import {config} from './firebase.config';
import {CreateSkill} from './components/create_skill_popup/create_skill' 
firebase.initializeApp(config);

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <HomePage></HomePage> */}
      <CreateSkill></CreateSkill>
    </>
  );
}

export default App;
