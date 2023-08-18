const scroll = new LocomotiveScroll({
    el: document.querySelector('#About'),
    smooth: true
});

const cursor = document.querySelector('.cursor');


//preloader animation
let currentvalue = 0;
const logo = document.getElementById('#logo');
const isdesktop = window.matchMedia('(min-width: 769px)').matches;

if(!isdesktop){
  cursor.setAttribute('style','display: none;')
}

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


//nav bar
const hamburger = document.querySelector('.linecontainer');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.links');
const navbar = document.querySelector('.navcontainer');
const west = document.querySelector('.navcontainer nav .text h5');
const lines = document.querySelectorAll('.line')


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







const curentskill = document.querySelector('.skill_name');
const curentskill_container = document.querySelector('.currentskill_container')
const workingon = document.querySelector('.workingskill_name');
const workingskill_container = document.querySelector('.workingskill_container');
const softskill = document.querySelector('.softskill_name');
const soft_container = document.querySelector('.soft_container');

curentskill.addEventListener('click', ()=>{
    curentskill_container.classList.toggle('active');
})

workingon.addEventListener('click', ()=>{
    workingskill_container.classList.toggle('active');
})

softskill.addEventListener('click', ()=>{
    soft_container.classList.toggle('active');
})

var tl = gsap.timeline()

tl.to("#container",{
        y:"0vh",
        scale: 1
}) 


//drag cards

const card = document.querySelector('.workcards');

let isdragging = false;

const dragging = (e) => {
    if(!isdragging) return;
    card.scrollLeft -= e.movementX;
}

const dragstop = () => {
    isdragging =false;
}

card.addEventListener('mousedown',() => isdragging = true);
card.addEventListener('mousemove',dragging);
document.addEventListener('mouseup',dragstop);



//custom cursor
const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverables');
const images = document.querySelectorAll('img');

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

