import './SendMail.css'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import {useForm} from 'react-hook-form'
import { closeSendMessage } from './features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import firebase from 'firebase'

const SendMail = () => {
    const dispatch=useDispatch()
    const{register,handleSubmit,watch,formState:{errors}}=useForm()
    const onSubmit=(formData)=>{
        db.collection('emails').add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
    }
  return (
    <div className='sendMail'
    >
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <CloseIcon 
            onClick={()=>dispatch(closeSendMessage())}
            className='sendMail__close'/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            name='to'
            type='email'
            placeholder='to'
            {...register("to", {required:true})}
            aria-invalid={errors.to ? "true" : "false"}
            />
            {errors.to && <p className='sendEmail__error'>This Field is required</p>}

            <input 
            name='subject'
            type='text'
            placeholder='Subject'
            {...register("subject")}
            />
            <input 
            name='message'
            type='text'
            placeholder='Message'
            {...register("message")}
            className='sendMail__message'
            />
            <div className='sendMail__options'>
                <Button
                type='submit'
                className='sendMail__send'
                >Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail