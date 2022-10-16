import React, { useEffect } from 'react'
import './EmailList.css'
import PersonIcon from '@mui/icons-material/Person'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RedoIcon from '@mui/icons-material/Redo'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SettingsIcon from '@mui/icons-material/Settings'
import PeopleIcon from '@mui/icons-material/People'
import InboxIcon from '@mui/icons-material/Inbox'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
// import SidebarOption from './SidebarOption'
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Section from './Section'
import EmailRow from './EmailRow'
import {useState} from 'react'
import {db} from './firebase'



const EmailList = () => {
    const[emails, setEmails]=useState([])

    useEffect(()=>{
        db.collection('emails')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            console.log(snapshot)
            setEmails(
                snapshot.docs.map((doc)=>(
                    {
                    id:doc.id,
                    data:doc.data()}
                ))
            )
            console.log(emails)
        })
    },[])
    
  return (
    <div className='emailList'>
        <div className='emailList__settings'>
            <div className='emailList__settingsLeft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>         
                </IconButton>
                <IconButton>
                    <RedoIcon/>         
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>         
                </IconButton>
            </div>
            <div className='emailList__settingsRight'>
            <IconButton>
                    <ChevronLeftIcon/>         
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>         
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>         
                </IconButton>
                <IconButton>
                    <SettingsIcon/>         
                </IconButton>
            </div>
        </div>
        <div className='emailList__sections'>
            <Section Icon={InboxIcon} title='Primary' color='#198bdf' selected/>
            <Section Icon={PeopleIcon} title='All Mail' color='#198bdf' selected={false}/>
            <Section Icon={LocalOfferIcon} title='Socials' color='#198bdf' selected={false}/>
        </div>

        <div className='emailList__list'>
            {
                emails?.map(({id,data:{to,subject,message,timestamp}})=>{
                    return(
                    <EmailRow
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    description={message}
                    />)
                })
            }
        </div>
    </div>
  )
}

export default EmailList