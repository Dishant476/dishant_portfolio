import React from 'react'
import './main.css'
import SideBar from '../components/SideBar'
import Routing  from './routing/Routing'
const Main = () => {
  return (
    <div>
      <section className="main-container w-100">
        <div className="main-inner w-100 flex ">
            <SideBar />
            <Routing />
        </div>
      </section>
    </div>
  )
}

export default Main
