import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
// import './SidebarOption'
// import AddIcon from '@mui/icons-material/'
import AddIcon from '@mui/icons-material/Add'
import InboxIcon from '@mui/icons-material/Inbox'
import StarIcon from '@mui/icons-material/Star'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import NearMeIcon from '@mui/icons-material/NearMe'
import DuoIcon from '@mui/icons-material/Duo'
import PhoneIcon from '@mui/icons-material/Phone'
import NoteIcon from '@mui/icons-material/Note'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PersonIcon from '@mui/icons-material/Person'
import SidebarOption from './SidebarOption'
import IconButton from '@mui/material/IconButton';
import {useDispatch} from 'react-redux'
import { openSendMessage } from './features/mailSlice'





const Sidebar = () => {
    const dispatch= useDispatch()
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'/>}
        className='sidebar__compose'
        onClick={()=>dispatch(openSendMessage())}
        >
            Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title='Starred Mails' number={54}/>
        <SidebarOption Icon={LabelImportantIcon} title='inbox' number={54}/>
        <SidebarOption Icon={NearMeIcon} title='inbox' number={54}/>
        <SidebarOption Icon={NoteIcon} title='inbox' number={54}/>
        <SidebarOption Icon={ExpandMoreIcon} title='inbox' number={54}/>
        <div className='sidebar__footer'>
            <div className='sidebar__footerIcons'>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                   <DuoIcon/>
                </IconButton>
                <IconButton>
                   <PhoneIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;