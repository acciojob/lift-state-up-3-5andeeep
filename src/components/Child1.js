import React from 'react'
import './../styles/App.css';

const Child1 = ({setOption}) => {
  return (
    <div className='child1'>
        <h2>Child Component 1</h2>
        <button onClick={setOption}>Option 1</button>
    </div>
  )
}

export default Child1;