const onOffButton = document.querySelector('.on-off')
const channel1 = document.querySelector('.channel1')
const channel2 = document.querySelector('.channel2')
const channel3 = document.querySelector('.channel3')
const offScreen = document.querySelector('.off-screen')

const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

onOffButton.addEventListener('click', onOff)
next.addEventListener('click', nextButton)
previous.addEventListener('click', previousButton)

function onOff(){
    channel1.classList.toggle('click-on')
    if(channel2.classList.contains('click-on')){
        channel1.classList.remove('click-on')
        channel2.classList.remove('click-on')
    }
    else if(channel3.classList.contains('click-on')){
        channel1.classList.remove('click-on')
        channel3.classList.remove('click-on')
    }


}

function nextButton(){
    if (channel1.classList.contains("click-on")){
        channel1.classList.remove('click-on')
        channel2.classList.add('click-on')
    }
    else if (channel2.classList.contains('click-on')){
        channel2.classList.remove('click-on')
        channel3.classList.add('click-on')
    }
    else if (channel3.classList.contains('click-on')){
        channel3.classList.remove('click-on')
        channel1.classList.add('click-on')
    }
}

function previousButton(){
    if (channel1.classList.contains("click-on")){
        channel1.classList.remove('click-on')
        channel3.classList.add('click-on')
    }
    else if (channel2.classList.contains('click-on')){
        channel2.classList.remove('click-on')
        channel1.classList.add('click-on')
    }
    else if (channel3.classList.contains('click-on')){
        channel3.classList.remove('click-on')
        channel2.classList.add('click-on')
    }
}