import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sendMessageIsOpen:true
}

const mailSlice=createSlice({
    name:'mail',
    initialState,
    reducers:{
        openSendMessage:state=>{
        state.sendMessageIsOpen=true
    },
        closeSendMessage:state=>{
        state.sendMessageIsOpen=false
    },
}
})


export const {openSendMessage,closeSendMessage}=mailSlice.actions;

export const selectSendMessage=(state)=>state.mail.sendMessageIsOpen;

export default mailSlice.reducer