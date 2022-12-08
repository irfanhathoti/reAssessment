const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const text2 = document.querySelector('.totalWater')
console.log(text2)

const text = document.querySelector('.waterPer')


const bottle = () => {
    const water = document.querySelector('.water')
    btn.setAttribute('class', 'waterLevel')
    water.style.height = '16.66%'
    text.innerHTML = '16.66%'
    console.log(btn)
}

const bottle1 = () => {
    const water = document.querySelector('.water')
    btn.style.background = 'white'
    btn.removeEventListener('onclick',bottle)
    btn1.setAttribute('class', 'waterLevel')
    text.innerHTML = '33.33%'
    water.style.height = '33.333%'
    text.style.bottom = '40px'
    console.log(btn)
}
btn2.addEventListener('click', () => {
    const water = document.querySelector('.water')
    btn2.setAttribute('class', 'waterLevel')
    btn.style.background = 'white'
    btn1.style.background = 'white'
    text.innerHTML = '50%'
    text.style.bottom = '80px'
    text.style.left = '70px'
    water.style.height = '50%'
    console.log(btn)
})

btn3.addEventListener('click', () => {
    const water = document.querySelector('.water')
    btn3.setAttribute('class', 'waterLevel')
    btn.style.background = 'white'
    btn1.style.background = 'white'
    btn2.style.background = 'white'
    btn3.style.background = 'white'
    water.style.height = '66.666%'
    text.style.bottom = '100px'
    text.style.left = '50px'
    text.innerHTML = '66.66%'
    console.log(btn)
})

btn4.addEventListener('click', () => {
    const water = document.querySelector('.water')
    btn4.setAttribute('class', 'waterLevel')
    water.style.height = '83.333%'
    btn.style.background = 'white'
    btn1.style.background = 'white'
    btn2.style.background = 'white'
    btn3.style.background = 'white'
    btn4.style.background = 'white'
    text.style.bottom = '140px'
    text.innerHTML = '83.33%'
    console.log(btn)
})

btn5.addEventListener('click', () => {
    const water = document.querySelector('.water')
    btn.style.background = 'white'
    btn1.style.background = 'white'
    btn2.style.background = 'white'
    btn3.style.background = 'white'
    btn4.style.background = 'white'
    btn5.setAttribute('class', 'waterLevel')
    water.style.height = '100%'
    text.style.bottom = '160px'
    text.style.left = '70px'
    text.innerHTML = '100%'
    text2.style.color ='white'
})

