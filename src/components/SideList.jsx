import React from 'react'
import './sidelist.css'
import { Link } from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons';

const SideList = () => {
  return (
    <div>
      <div className="side-list-container w-100 h-90p">
        <ul className='side-list h-90 w-100 flex-column-even'>
            <li className='flex-centered'><Link to='/' className='flex'><Unicons.UilEstate color ='var(--pale-blue)' size ='18' />&nbsp;Home</Link></li>
            <li className='flex-centered'><Link to='/about' className='flex'><Unicons.UilUserExclamation color ='var(--pale-blue)' size ='20'/>&nbsp;About</Link></li>
            <li className='flex-centered'><Link to='/experience' className='flex'><Unicons.UilTrophy color ='var(--pale-blue)' size ='18'/>&nbsp;Experience</Link></li>
            <li className='flex-centered'><Link to='/contact' className='flex'><Unicons.UilPhoneAlt color ='var(--pale-blue)' size ='18'/>&nbsp;Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideList
