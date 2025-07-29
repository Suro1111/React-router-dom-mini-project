import React from 'react'

import "../../assets/global/global.css";

export function Container(props) {    
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}
