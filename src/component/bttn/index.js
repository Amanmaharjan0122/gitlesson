import React from 'react'

const Btn = (props) => {
    console.log(props, 'props')
    return (
    <button style={{border:'50', padding:'15px', color:'white'  }}> 
    {props.buttonlabel}
    </button>
  )
}

export default Btn