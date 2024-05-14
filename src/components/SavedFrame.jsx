import React from 'react'
import CloseIcon from '../assets/icons/CloseIcon'

export default function SavedFrame({frameData, deleteHandle}) {
  return (
    <div className='frame-container'>
        <div className='frame-info'>
            <img src={frameData.image}></img>
            {frameData.date}
        </div>
        <button onClick={()=>{deleteHandle(frameData.id)}} className='close attended'>
            <CloseIcon/>
        </button>
    </div>
  )
}
