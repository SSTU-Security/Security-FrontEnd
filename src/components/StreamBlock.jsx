import React, { useState } from 'react'
import CameraStreamElement from './CameraStreamElement'

import '../styles/camera-styles.css'
import image from '../assets/images/camera-test.jpg';

export default function StreamBlock() {
    const [streamInfo, setSteamInfo] = useState(null)



    return(
        <div className='cameras-list radius-20'>
            <CameraStreamElement streamImage={image}/>
        </div>
    )
}
