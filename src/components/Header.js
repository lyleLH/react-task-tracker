import React from 'react'
import { PropTypes } from 'prop-types'
import Button from './Button'
import { click } from '@testing-library/user-event/dist/click'

const Header
 = ({title} ) => {
     const onClick = ()=>{
         console.log('Click')
     }
  return (
    <div>  
        <header className='header'>
             <h1 style={HeadingStyle}>  {title} </h1>
             <Button color= 'green' text = 'Add' onClick = {onClick}></Button>
        </header>
    </div>
  )
}

const HeadingStyle = {
    color:'red',
    backgoundColor :'black'
}

Header.defaultProps = {
  title : 'Task Tracker'
}

Header.prototypes = {
    title:PropTypes.string.isRequired
}

export default Header
