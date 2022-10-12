export default (elem, ...events) => {
    events.forEach(event => {
        const newEvent = new Event(event)
        elem.dispatchEvent(newEvent)
    })
}