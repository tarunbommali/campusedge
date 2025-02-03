import React from 'react'

import {createBrowserRouter, Outlet} from 'react-router-dom'
import Aboutus from './routes/Aboutus'
import Home from './routes/Home'
import Helpdesk from './components/about/Helpdesk'

import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Roadmaps from './routes/Roadmaps'
import Learnings from './routes/Learnings'
import InterviewPrep from './routes/InterviewPrep'
import InterviewApp from './routes/InterviewApp'
 

const AppLayout = () => {
  return (
    <div className='bg-[#f8f9fa]  '>
      <Header/>
      <div className='min-h-[100vh]'>
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
      {path:"/learnings", element:<Learnings/>},
      {path:"/interviewPrep", element:<InterviewPrep/>},
      {path:"/ai-interview" , element:<InterviewApp/>}

    ]
  }
])
