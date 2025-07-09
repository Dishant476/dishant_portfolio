import React, { useState } from 'react'
import './sidebar.css'
import * as Unicons from '@iconscout/react-unicons';
import SideList from './SideList';

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  }

  return (
    <div className='sidebar-container w-3 h-100p '>
      <div className='sidebar-inner h-100p w-3 flex-column-space'>
          <div className='toggle-button h-5p w-100 flex-centered'>
              {
                (sideBar === false) ?
                <Unicons.UilBars onClick={handleSideBar} color = 'var(--pale-blue)' size = '26'/> :
                <Unicons.UilTimes onClick={handleSideBar} color = 'var(--pale-blue)' size = '30'/>
              }
          </div>
          <div className={`w-100 h-90p ${
            (sideBar === true) 
            ? 'visible' : 'hidden'
          }`}>
            <SideList />
          </div>
      </div>
    </div>
  )
}

export default SideBar
