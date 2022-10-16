import { IconButton,Checkbox } from '@mui/material'
import React from 'react'
import './EmailRow.css'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import {useHistory} from 'react-router-dom';


const EmailRow = ({title,subject,description,time}) => {
  const history=useHistory()
  
    return (
    <div className='emailRow'
    onClick={()=>history.push('/mail')}
    >
        <div className='emailRow__options'>
            <Checkbox/>
            <IconButton>
            <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
            <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>
        <div className='emailRow__title'>
            {title}
        </div>
        <div className='emailRow__message'>
            <h4>{subject}{" "}
            <span className='emailRow__description'>
                {description}
            </span>
            </h4>
        </div>
        <div className='emailRow__time'>
            {time}
        </div>
    </div>
  )
}

export default EmailRow