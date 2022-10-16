import React from 'react'
import './Header.css'
// import MenuIcon from 'material-ui/icons/Menu
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img
            src='https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png'
            alt='mail icon'
            />
        </div>
        <div className='header__middle'>
            <SearchIcon/>
            <input placeholder='Search mail'
            type='text'
            />
            <ArrowDropDownIcon
            className='header__inputCaret'
            />
        </div>
        <div className='header__right'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <Avatar/>
        </div>
    </div>
  )
}

export default Header