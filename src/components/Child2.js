import React from 'react'
import './../styles/App.css';

const Child2 = ({setOption}) => {
  return (
    <div className='child2'>
        <h2>Child Component 2</h2>
        <button onClick={setOption}>Option 2</button>
    </div>
  )
}

export default Child2;