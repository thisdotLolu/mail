import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import ErrorIcon from '@mui/icons-material/Error'
import DeleteIcon from '@mui/icons-material/Delete'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import EmailIcon from '@mui/icons-material/Email'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import PrintIcon from '@mui/icons-material/Print'
import { useHistory } from 'react-router-dom';
import './Mail.css'



const Mail = () => {
  const history=useHistory()
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={()=>history.push('/')}>
            <ArrowBackIcon/>
          </IconButton>
          <IconButton>
            <MoveToInboxIcon/>
          </IconButton>
          <IconButton>
            <ErrorIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <EmailIcon/>
          </IconButton>
          <IconButton>
            <WatchLaterIcon/>
          </IconButton>
          <IconButton>
            <CheckCircleIcon/>
          </IconButton>
          <IconButton>
            <LabelImportantIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMoreIcon/>
          </IconButton>
          <IconButton>
            <PrintIcon/>
          </IconButton>
          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>Subject</h2>
          <LabelImportantIcon className='mail__important'/>
          <p>title</p>
          <p>10pm</p>
        </div>
        <div className='mail__message'>
          <p>This is a message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail