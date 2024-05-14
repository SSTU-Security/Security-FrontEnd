import React from 'react'
import Header from '../components/Header'
import SavedFrames from '../components/SavedFrames'

import '../styles/page-style.css'
import MonitorBlock from '../components/Monitor'

export default function MainPage() {
  return (
    <div className='app'>
        <Header/>
        <div className='app-content'>
            <SavedFrames/>
            <MonitorBlock/>
        </div>
    </div>
  )
}
