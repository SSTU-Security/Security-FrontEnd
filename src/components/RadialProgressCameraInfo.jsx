import React from 'react'
import RadialProgressBar from './RadialProgressBar'

export default function RadialProgressCameraInfo({miniLabel, measure, icon, value, maxValue}) {
  return (
    <div>
        <RadialProgressBar icon={icon} value={value} maxValue={maxValue}/>
        <div className='radial-labels'>
            <h6>{miniLabel}</h6>
            <h3>{value} {measure}</h3>
        </div>
    </div>
  )
}
