import React, { useEffect, useState } from 'react'
import '../styles/frames-styles.css'
import SavedFrame from './SavedFrame'
import { loadEventsFromStorage, removeEventFromStorage } from '../handles/storage/stored-events-handler'

export default function SavedFrames() {
  const [frames, setFrames] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const deleteHandler = (id) => {
    removeEventFromStorage(id);
    setTrigger(!trigger);
  }

  useEffect(() => {   
    const loadedFrames = loadEventsFromStorage();
    setFrames(loadedFrames);
  }, [trigger]);

  return (
    <div className='saved-frames'>
        <h1>Сохранённые кадры</h1>
        <div className='saved-frames-list'>
          <SavedFrame frameData={{
            "id": 1,
            "image": "https://avatars.dzeninfra.ru/get-zen_doc/8291287/pub_6493dd5c86f0b87a4aae6eeb_649ad346063a8d01ae1e976d/scale_1200"
          }} deleteHandle={deleteHandler}/>

          {
            frames.map(frame => (
              <SavedFrame frameData={frame} deleteHandle={deleteHandler}/>
            ))
          }
        </div>
    </div>
  )
}
