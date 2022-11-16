import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import CasesSharpIcon from '@mui/icons-material/CasesSharp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
 
import {Link} from "react-router-dom"
const Sidebar = () => {
    const{dispatch} = useContext(DarkModeContext  )

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to ="/" style = {{textDecoration:"none"}}>
            <span className="logo">CanisAdmin</span>
            </Link>
            </div>
            <hr />
        <div className="centre">
           <ul>
            <p className="title">MAIN </p>
            <Link to ="/" style = {{textDecoration:"none"}}>
            <li>
                <DashboardIcon className ="icon"/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title"> LISTS</p>

            <Link to ="/users" style = {{textDecoration:"none"}}>

            <li>

                <Person2OutlinedIcon className ="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to ="/products" style = {{textDecoration:"none"}}>

            <li>
                <AddBusinessOutlinedIcon className ="icon"/>
                <span>Projects</span>
            </li>
            </Link>
            <li>
                <CasesSharpIcon className ="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className ="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>

            <li>
                <AssessmentIcon className ="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveIcon className ="icon"/>
                <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
                <SettingsSystemDaydreamIcon className ="icon"/>
                <span>Systems Health</span>
            </li>
            <li>
                <RoomPreferencesIcon className ="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsSuggestIcon className ="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>

            <li>
                <Person4Icon className ="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <SettingsPowerIcon className ="icon"/>
                <span>Logout</span>
            </li>
            </ul> 
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
            <div className="colorOption"onClick={()=> dispatch({type: "DARK"})}></div>
            
        </div>

    </div>
  )
}

export default Sidebar