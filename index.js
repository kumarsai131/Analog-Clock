setInterval(setClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')

function setClock(){
    const currdate = new Date()
    const seconds = currdate.getSeconds() / 60
    const minutes = (seconds + currdate.getMinutes()) / 60
    const hours = (minutes + currdate.getHours()) / 12
    setRotation(secondhand, seconds)
    setRotation(minutehand, minutes)
    setRotation(hourhand,hours)
}

function setRotation(element, rotationratio){
    element.style.setProperty('--rotation',rotationratio*360)
}

setClock()