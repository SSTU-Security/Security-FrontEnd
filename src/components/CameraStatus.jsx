import React from 'react'

export default function CameraStatusWidget({status}) {
  return (
    status ? <div className='online radius-10'>Прямой эфир</div> : <div className='offline radius-10'>Отключено</div>
  )
}
