import React from 'react'

import {createBrowserRouter, Outlet} from 'react-router-dom'
import Aboutus from './routes/Aboutus'
import Home from './routes/Home'
import Helpdesk from './routes/Helpdesk'
import Jobs from './routes/Jobs'

import Header from './components/Header'
import Footer from './components/Footer'
import Roadmaps from './routes/Roadmaps'
import Learnings from './routes/Learnings'
import Companies from './routes/Companies'

const AppLayout = () => {
  return (
    <div className='bg-[#f8f9fa]  '>
      <Header/>
      <div className='min-h-[100vh] px-48 my-10 '>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about-us", element: <Aboutus/>},
      {path:"/roadmaps", element:<Roadmaps/>},
      {path:"/helpdesk", element: <Helpdesk/>},
      {path:"/jobs", element:<Jobs/>},
      {path:"/companies", element:<Companies/>},
      {path:"/learnings", element:<Learnings/>}

    ]
  }
])