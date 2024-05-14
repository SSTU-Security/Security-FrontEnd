import React from 'react'
import EventLog from '../components/EventLog'

export default function ViolatorsList() {
  return (
    <div className='violators-block radius-20'>
        <h1>Нарушители</h1>
        <div className='violators-list'>
        <EventLog id="1" isViolator={true} date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} initials={{"lastname": "Zhugan", "firstname":"bebrik", "secondname": "checen"}}/>
            <EventLog id="1" isViolator={true} date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
            <EventLog id="1" isViolator={true} date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
            <EventLog id="1" isViolator={true} date="23-01-23" image={"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663248692_62-mykaleidoscope-ru-p-ustavshii-yezhik-krasivo-67.jpg"} />
        </div>
    </div>
  )
}
