import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {DarkModeContext} from "../../context/darkModeContext"

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:'none'}}>
          <span className='logo'>Kirti_Kalmegh</span>
        </Link>
      </div><hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li><DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{textDecoration:'none'}}>
          <li><PersonOutlinedIcon className="icon"/>
            <span className='logo'>Users</span>
          </li>
          </Link>
          
          <Link to='/products' style={{textDecoration:'none'}}>
            <li><Inventory2Icon className="icon"/>
              <span className='logo'>Products</span>
            </li>
          </Link>
          <li><BorderStyleIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li><LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li><BarChartOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li><NotificationsNoneOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICES</p>
          <li><SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System health</span>
          </li>
          <li><PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li><SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li><AccountBoxOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li><LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className='colorOption' onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar