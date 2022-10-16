import React from 'react'
import './Section.css'

const Section = ({title, Icon, color, selected}) => {
  return (
    <div className={`section ${selected && 'section--selected'}`}
    style={{
        borderBottom:'3px solid',
        color:`${selected && color}`
    }}
    >
        <Icon/>
        <h4>{title}</h4>
    </div>
  )
}

export default Section