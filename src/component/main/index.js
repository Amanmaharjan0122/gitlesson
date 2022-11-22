import React from 'react'
import Btn from '../bttn'
import { GiHamburgerMenu } from "react-icons/gi";

 const Index = () => {
    const anything = " . connect"
    const secbtn = ". Upload your pitch"
  return (
    <>   
  <div className='main-div'>
  <div className='nav-bar'>
  <div className='logo'>
  <img src="logo1.png" className="" alt="logo" />
  </div>
  <div className='side-div'>
  <Btn buttonlabel={anything} />
  <GiHamburgerMenu className='hambagumenu'></GiHamburgerMenu>
  </div>
  </div>

  <div className='section-two'>
  <div className='heading'>
  <h1>Curated investments. <br/>
  <strong className='headcolor'>Foresee the unseen.
  </strong>
  </h1> 
  <br></br>
  <br></br>
  <br></br>
  <p>We are <strong> QBIT Capital </strong>, an early stage venture capital firm focused on founders in Switzerland.</p>
  <br></br>
  <br></br>
    <p><strong>We actively support founders from incorporation to exit.

</strong></p>
  <br></br>
  <br></br>
  <br></br>
<div className='forbtn'>
<Btn buttonlabel={secbtn}/>
</div>

    </div>
  
  </div>
  </div>
    </>

  )
}
export default Index
