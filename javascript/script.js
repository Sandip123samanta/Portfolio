const scroll = new LocomotiveScroll({
    el: document.querySelector('#page'),
    smooth: true
});

//all selector


const preloader = document.querySelector('.loader');
const hamburger = document.querySelector('.linecontainer');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.links');
const navbar = document.querySelector('.navcontainer');
const west = document.querySelector('.navcontainer nav .text h5');
const lines = document.querySelectorAll('.line');

//custom cursor
const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverables');
const images = document.querySelectorAll('img');
const cursor = document.querySelector('.cursor');

//loader
var tl = gsap.timeline()

const isdesktop = window.matchMedia('(min-width: 769px)').matches;

if(isdesktop){
    preloader.setAttribute('style','display:none; pointer-events:none;')
    tl.to(".pagecontainer",{
        y:"100vh",
        scale: .3,
        duration:0
    })
    tl.to(".pagecontainer",{
        y:"-150vh",
        duration:2,
        delay:1,
        scale: .5
    })
    tl.to(".pagecontainer",{
        y:"0vh",
        rotate:-360,
        scale:1,
        duration:1.5
    })
}
else{
    tl.to(".pagecontainer",{
        y:"0vh",
        scale: 1
    })

    cursor.setAttribute('style','display: none;')

    let currentvalue = 0;
    const logo = document.getElementById('#logo');

    window.addEventListener('load',()=>{
    gsap.to('#logo', 0.25, {
        delay: 3.5,
        opacity: 0
    })

    gsap.to(".blundler", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: "power4.inOut"
    })    
})
}

const text = document.querySelector('#website .myimage .circle .text p');
text.innerHTML = text.innerHTML.split("").map(
   (char, i) =>
   `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
).join("");



// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

//image hover

images.forEach(e => {
    e.addEventListener('mouseover', onMouseHover);
    e.addEventListener('mouseleave', onMouseHoverOut);
})

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to(smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to(bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  })
}




hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    links.forEach(e => {
        e.classList.toggle('fade');
    })
    lines.forEach(e => {
        e.classList.toggle('linecolor');
    })
    navbar.classList.toggle('bg_color');
    west.classList.toggle('colorchange');
});

