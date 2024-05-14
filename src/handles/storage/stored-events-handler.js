const storedEventsKey = 'storedEvents'

export const addEventToStorage = (data) => {
    const storedData = localStorage.getItem(storedEventsKey);
    const events = storedData ? JSON.parse(storedData) : [];
    events.push(data);
    localStorage.setItem(storedEventsKey, JSON.stringify(events));
};

export const removeEventFromStorage = (id) => {
    const storedData = localStorage.getItem(storedEventsKey);
    const events = storedData ? JSON.parse(storedData) : [];
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events.splice(index, 1);
    }
    localStorage.setItem(storedEventsKey, JSON.stringify(events));
};

export const loadEventsFromStorage = () => {
    const storedData = localStorage.getItem(storedEventsKey);
    return storedData ? JSON.parse(storedData) : [];
};

class CameraEvent{
    constructor(id, initials, image, date){
        this.id = id;
        this.initials = initials;
        this.image = image;
        this.date = date;
    }
}