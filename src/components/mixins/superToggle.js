export default (elem, ...array) => {
    array.forEach(className => {
        elem.classList.toggle(className)
    })
}