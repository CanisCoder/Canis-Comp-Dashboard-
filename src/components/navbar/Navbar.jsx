import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const{dispatch} = useContext(DarkModeContext);
 
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="items">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="items">
            <DarkModeOutlinedIcon className="iconmoon" onClick={()=> dispatch({type: "TOGGLE"})}/>
            
          </div>
          <div className="items">
            <FullscreenExitOutlinedIcon className="icon"/>
            
          </div>
          <div className="items">
            <NotificationsOutlinedIcon className="icon"/>
            <div className="counter">1</div>
            
          </div>
          <div className="items">
            <ModeCommentOutlinedIcon className="icon"/>
            <div className="counter">2</div>
            
          </div>
          <div className="items">
            <ListOutlinedIcon className="icon"/>
            
          </div>
          <div className="items">
            <img
            src="https://avatars.githubusercontent.com/u/75834445?v=4"
            alt=""
            className="avatar"
            />
          </div>
        </div>

      </div> 

    </div>
  )
}


export default Navbar