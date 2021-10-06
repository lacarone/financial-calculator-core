import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideListOfComponenets from './components/SideListOfComponents/SideListOfComponents';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import SideMenu from './components/SideMenu/SideMenu';
import MainAppDisplay from './components/MainAppDisplay/MainAppDisplay';
import MainApp from './components/MainApp/MainApp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <SideListOfComponenets /> */}

      <NavbarHeader />
      <MainApp />
      


      {/* 

        Header
        SideMenu
        MainApp


      
      */}

    </div>
  );
}

export default App;
