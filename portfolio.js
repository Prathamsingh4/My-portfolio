gsap.from("#main #img",{
    y:-70,
    delay:0.5,
    duration:1,
opacity:0,
})
gsap.from("#main h1",{
    y:50,
    delay:1,
    duration:1,
opacity:0,
})
gsap.from("#main h2",{
    x:100,
    delay:1.5,
    duration:1,
opacity:0,
})
gsap.from("#main #j",{
   duration:2,
   delay:1.8,
opacity:0,
})
gsap.from("#new h5",{
    x:-20,
    duration:2,
    delay:1.8,
 opacity:0,
 })
 

 var btn = document.querySelector("#nav3 :nth-child(1)")
 btn.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/pratham-singh-529239257/")
 })
 var btn2 = document.querySelector("#nav3 :nth-child(2)")
 btn2.addEventListener("click",function(){
    window.open("")
 })
 var btn3 = document.querySelector("#nav3 :nth-child(3)")
 btn3.addEventListener("click",function(){
    window.open("https://www.instagram.com/pratham_044/?igshid=MWZjMTM2ODFkZg%3D%3D")
 })
 var btn4 = document.querySelector("#nav3 :nth-child(4)")
 btn4.addEventListener("click",function(){
    window.open("")
 })