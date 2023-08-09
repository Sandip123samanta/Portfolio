const scroll = new LocomotiveScroll({
    el: document.querySelector('.page1'),
    smooth: true
});

const text = document.querySelector('#website .myimage .circle .text p');
text.innerHTML = text.innerHTML.split("").map(
   (char, i) =>
   `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
).join("");

var tl = gsap.timeline()

tl.to(".pagecontainer",{
    y:"100vh",
    scale:0.3,
    duration:0
})
tl.to(".pagecontainer",{
    y:"-220vh",
    duration:2,
    delay:1,
    scale: .4
})
tl.to(".pagecontainer",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:1.5
})

