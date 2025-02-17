import React from 'react'
import {Routes , Route} from "react-router-dom"

import Dashboard from './Dashboard'
import Error from './Error'
import Login from './Login'
import Laptops from './Laptops'
import Mobiles from './Mobiles'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Login></Login>} ></Route>
            <Route path='/dashboard' element={ <Dashboard></Dashboard> } >
            <Route path='dashboard/mobiles' element={<Mobiles></Mobiles>}></Route>
            <Route path='dashboard/laptops' element={<Laptops></Laptops>}></Route>
            
            
            
            </Route>
            <Route path='/error' element={<Error></Error>}></Route>
        </Routes>
    </div>
  )
}

export default Master