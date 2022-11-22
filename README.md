import React from 'react'
import Test from '../src/component/test'
function App()  {
  const anything = 'hello there'
  return (
<div>
<h1>hello from branchtwo</h1>
<Test buttonlabel={anything} something='one'/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div>



<Test buttonlabel='5'/>
</div>
</div>  )
}

export default App;





...//////.....
import React from 'react'

const Test = (props) => {
    console.log(props, 'props')
    return (
    <button style={{border:'none', padding:'15px', background:'#000', color:'#fff'  }}> 
    {props.buttonlabel}
    </button>
  )
}

export default Test