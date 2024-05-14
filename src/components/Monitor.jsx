import React from 'react'
import StreamBlock from './StreamBlock'
import EventsBlock from './EventsBlock'

export default function MonitorBlock() {
  return (
    <div className='monitor-block'>
        <StreamBlock/>
        <EventsBlock/>
    </div>
  )
}
