import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main.js';
import {QuestionProvider} from './context/QuestionContext';
import MapCreate from './MapCreate';
import SetItem from './SetItem';
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
    <Box sx={{ width: '100%', typography: 'body1', p: 0 }}>
      <TabContext value={tabIndex}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', p:0 }}>
              <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                  <Tab label="Thêm câu hỏi" value="main" />
                  <Tab label="Tạo bản đồ" value="mapcreate" />
                  <Tab label="Set item" value="set-item" />
              </TabList>
          </Box>
          <TabPanel value="main">
              <Main
              />
          </TabPanel>
          <TabPanel value="mapcreate" sx={{p:0}}>
              <MapCreate/>
          </TabPanel>
          <TabPanel value="set-item">
              <SetItem/>
          </TabPanel>
      </TabContext>
  </Box>
  );
}

export default App;
