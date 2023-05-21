let myCircle1 = document.getElementById("circle1")
let myCircle2 = document.getElementById("circle2")
let myCircle3 = document.getElementById("circle3")
let myH3 = document.getElementById("myh3")


myCircle1.addEventListener('click', () =>{

myH3.innerText = 'Josh Philips'
myCircle1.style.backgroundColor = 'white'
myCircle2.style.backgroundColor = 'rgba(187,121,254,255)'
myCircle3.style.backgroundColor = 'rgba(187,121,254,255)'


})
myCircle2.addEventListener('click', () =>{
myH3.innerText = 'Gabriella Spring'
myCircle2.style.backgroundColor = 'white'
myCircle1.style.backgroundColor = 'rgba(187,121,254,255)'
myCircle3.style.backgroundColor = 'rgba(187,121,254,255)'


})
myCircle3.addEventListener('click', () =>{
myH3.innerText = 'Louise Maxwell'
myCircle3.style.backgroundColor = 'white'
myCircle2.style.backgroundColor = 'rgba(187,121,254,255)'
myCircle1.style.backgroundColor = 'rgba(187,121,254,255)'

})

 

