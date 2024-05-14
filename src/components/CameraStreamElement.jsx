import React from 'react'
import RadialProgressCameraInfo from './RadialProgressCameraInfo'

import CameraStatusIcon from '../assets/icons/CameraStatus';
import ExportStatusIcon from '../assets/icons/ExportStatus';
import ImportStatusIcon from '../assets/icons/ImportStatus';
import GuardStatusIcon from '../assets/icons/GuardStatus';
import CameraStatusWidget from './CameraStatus';
import PrimaryButton from './PrimaryButton';
import SaveIcon from '../assets/icons/SaveIcon';

export default function CameraStreamElement({streamImage, cameraInfo, cameraEvents}) {
 return (
    <div className='camera-stream-card radius-20'>
        <div className='stream-picture'>
            <img src={streamImage}/>
        </div>
        <div className='camera-info'>
            <div className='camera-meta'>
                <CameraStatusWidget status={true}/>
                <h2>{cameraInfo ? cameraInfo.name : "Камера"}</h2>
            </div>
            <div className='events-info'>
                <RadialProgressCameraInfo icon={ <CameraStatusIcon/> } value={10} maxValue={100} miniLabel="Под камерой" measure='человек'/>
                <RadialProgressCameraInfo icon={ <ExportStatusIcon/> } value={40} maxValue={100} miniLabel="За час вышло" measure='человек'/>
                <RadialProgressCameraInfo icon={ <ImportStatusIcon/> } value={70} maxValue={100} miniLabel="За час вошло" measure='человек'/>
                <RadialProgressCameraInfo icon={ <GuardStatusIcon/> } value={45} maxValue={100} miniLabel="За час нарушили" measure='человек'/>
            </div>
            <div className='people-counter radius-10'>
                1000000 человек в университете
            </div>
            <PrimaryButton icon={ <SaveIcon/> } text="Сохранить"/>
        </div>
    </div>
  )
}
