import React from 'react'
import EventLog from './EventLog'

export default function VisitorsList() {
  return (
    <div className='visitors-block radius-20'>
        <h1>События посещений</h1>
        <div className='visitors-list'>
            <EventLog id="1" date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} initials={{"lastname": "Zhugan", "firstname":"bebrik", "secondname": "checen"}}/>
            <EventLog id="1" date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
            <EventLog id="1" date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
            <EventLog id="1" date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
        </div>
    </div>
  )
}
