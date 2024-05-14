import React from 'react'
import VisitorsList from './VisitorsList'
import ViolatorsList from './ViolatorsList'
import '../styles/events-styles.css'

export default function EventsBlock() {
  return (
    <div className='events-block'>
        <VisitorsList />
        <ViolatorsList />
    </div>
  )
}
