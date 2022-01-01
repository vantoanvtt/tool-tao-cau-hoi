import React from 'react';
import './App.css';
import Main from './pages/Main.js';
import MapCreate from './MapCreate';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {


  const [tabIndex, setTabIndex] = React.useState("main");
  const handleChangeTab = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
};

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/mapcreate' element={<MapCreate/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
