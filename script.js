setInterval(setClock, 1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock(){
	const currentDate=new Date()
	const secondRatio=currentDate.getSeconds()/60
	const minutesRatio=(secondRatio+currentDate.getMinutes())/60
	const hourRatio=(minutesRatio+5+currentDate.getHours())/60

	setrotation(secondHand, secondRatio)
	setrotation(minuteHand, minutesRatio)
	setrotation(hourHand, hourRatio)
}

function setrotation(element, rotationRatio){
	element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()