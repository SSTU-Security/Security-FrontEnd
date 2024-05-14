import React from 'react'
import ExportStatus from '../assets/icons/ExportStatus'
import ImportStatus from '../assets/icons/ImportStatus'

export default function VisitEventStatus({status}) {
    switch(status){
        case "Вошел":
            return (
                <div className='event-status radius-10'>
                    <ImportStatus/>
                    Вошел
                </div>
            )
        case "Вышел":
            return (
                
                <div className='event-status radius-10'>
                    <ExportStatus/>
                    Вышел
                </div>
        )
    }
}