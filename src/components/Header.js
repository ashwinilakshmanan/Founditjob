import React from 'react'

function Header({keywords}) {
  return (
    <>
      <div className='header-container'>
        {
          keywords.map((key,id)=>{
            return <button key={id}>{key}</button>
          })
        }
      </div>
    </>
  )
}

export default Header
