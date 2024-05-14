import React from 'react'
import VisitEventStatus from './VisitEventStatus'
import PrimaryButton from './PrimaryButton'

export default function EventLog({id, image, initials, date, isViolator}) {
  return (
    <div className='log-item'>
        <div className='log-id-img'>
            <h3>{id}</h3>
            <img src={image} className='radius-10'/>
        </div>
        <div className='log-info'>
            <div className='log-meta-outer'>
                {initials && <h3>{initials.lastname} {initials.firstname} {initials.secondname}</h3>}
                <div className='log-meta-inner'>
                    <VisitEventStatus status={"Вошел"} />
                    <h4>{date}</h4>
                </div>
            </div>
            {
                !isViolator && <PrimaryButton text="Сохранить"/>
            }
            {
                isViolator &&<>
                    <PrimaryButton text="Сохранить"/>
                    <PrimaryButton text="Сообщить" isAttentded={true}/>
                </>
            }
        </div>
    </div>
  )
}
