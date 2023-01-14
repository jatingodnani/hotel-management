import React from 'react'

function header({ setadd }) {
  return (
    <header>
        <h1>Employee management software</h1>
        <div>
            <button onClick={()=>setadd(true)} className='round-button'>Add employee</button>
        </div>
    </header>
  )
}

export default header