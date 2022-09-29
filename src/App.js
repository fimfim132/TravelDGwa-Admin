import './Assets/Styles/App.css';

import React from 'react';

import Login from './Pages/LogIn/LogIn';
import AppLayout from './Layouts/AppLayout';
import Dashboard from './Pages/Dashboard/Dashboard';

import Customers from './Pages/Customers/Customer';
import { CustomerInfo } from './Pages/Customers/Info/CustomerInfo';

import ConfirmAccommodation from './Pages/Confirm/Confirm-accommodation/ConfirmAccommodation'
import ConfirmRentcar from './Pages/Confirm/Confirm-rentcar/ConfirmRentcar'
import ConfirmShuttle from './Pages/Confirm/Confirm-shuttle/ConfirmShuttle'
import ConfirmActivity from './Pages/Confirm/Confirm-activity/ConfirmActivity'

import Accommodation from './Pages/Accommodation/Accommodation';
import { AccommodationInfo_1 } from './Pages/Accommodation/AccommodationInfo_1';
import { AccommodationInfo_2 } from './Pages/Accommodation/AccommodationInfo_2';
import { AccommodationInfo_3 } from './Pages/Accommodation/AccommodationInfo_3';

import Rentcar from './Pages/Rentcar/Rentcar';
import { RentcarInfo_1 } from './Pages/Rentcar/RentcarInfo_1'

import Shuttle from './Pages/Shuttle/Shuttle';
import { ShuttleInfo_1 } from './Pages/Shuttle/ShuttleInfo_1'

import Activity from './Pages/Activity/Activity';
import { ActivityInfo_1 } from './Pages/Activity/ActivityInfo_1'

import Receipt from './Pages/Receipt/Receipt';
import Manage from './Pages/Manage/Manage';

import { BrowserRouter , Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<AppLayout/>}>
            <Route path='/dashboard' element = {<Dashboard/>} />

            <Route path='/customer' element={<Customers />} />
            <Route path='/customer/info/:id' element={<CustomerInfo />} />

            <Route path='/confirm-partner/accommodation' element={<ConfirmAccommodation />} />
            <Route path='/confirm-partner/rentcar' element={<ConfirmRentcar />} />
            <Route path='/confirm-partner/shuttle' element={<ConfirmShuttle />} />
            <Route path='/confirm-partner/activity' element={<ConfirmActivity />} />

            <Route path='/accommodation-partner' element={<Accommodation />} />
            <Route path='/accommodation-partner/info-1/:id' element={<AccommodationInfo_1 />} />
            <Route path='/accommodation-partner/info-2/:id' element={<AccommodationInfo_2 />} />
            <Route path='/accommodation-partner/info-3/:id' element={<AccommodationInfo_3 />} />


            <Route path='/rentcar-partner' element={<Rentcar />} />
            <Route path='/rentcar-partner/info-1/:id' element={<RentcarInfo_1 />} />

            <Route path='/shuttle-partner' element={<Shuttle />} />
            <Route path='/shuttle-partner/info-1/:id' element={<ShuttleInfo_1 />} />


            <Route path='/activity-partner' element={<Activity />} />
            <Route path='/activity-partner/info-1/:id' element={<ActivityInfo_1 />} />

            <Route path='/receipt-information' element={<Receipt />} />
            
            <Route path='/manage-information' element={<Manage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
