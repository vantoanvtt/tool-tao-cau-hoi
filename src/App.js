import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main.js';
import {QuestionProvider} from './context/QuestionContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapCreate from './MapCreate';
import {   
  Box, 
  Tab, 
  } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
function App() {


  const [tabIndex, setTabIndex] = React.useState("main");
  const handleChangeTab = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
};

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabIndex}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                  <Tab label="Thêm câu hỏi" value="main" />
                  <Tab label="Tạo bản đồ" value="mapcreate" />
              </TabList>
          </Box>
          <TabPanel value="main">
              <Main
              />
          </TabPanel>
          <TabPanel value="mapcreate">
              <MapCreate/>
          </TabPanel>
      </TabContext>
  </Box>
  );
}

export default App;
