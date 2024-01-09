import { ThemeProvider } from '@emotion/react';
import './App.css';
import theme from './HomlyTheme';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Dashboard from './PrimaryAdminMainPages/Dashboard';
import Manage from './PrimaryAdminMainPages/Manage';
import Complaints from './PrimaryAdminMainPages/Complaints';
import History from './PrimaryAdminMainPages/History';
import HolidayHomes from './PrimaryAdminMainPages/HolidayHome';
import Reservations from './PrimaryAdminMainPages/Reservations';
import Report from './PrimaryAdminMainPages/Report';
import Layout from './Layout';
import SideNav from './Complonents/SideNav';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <BrowserRouter>
       {/* <Layout> */}
      <Routes>
       
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/complaints' element={<Complaints/>}/>
        <Route path='/holidayhomes' element={<HolidayHomes/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
        <Route path='/report' element={<Report/>}/>
       
      </Routes>
      {/* </Layout> */}
       </BrowserRouter>

      </ThemeProvider>
      
      
    </div>
  );
}

export default App;
