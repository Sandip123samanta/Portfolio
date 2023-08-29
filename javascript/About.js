const scroll = new LocomotiveScroll({
    el: document.querySelector('#About'),
    smooth: true
});

const cursor = document.querySelector('.cursor');


//preloader animation
let currentvalue = 0;
const logo = document.getElementById('#logo');
const isdesktop = window.matchMedia('(min-width: 501px)').matches;

if ('ontouchstart' in window || navigator.maxTouchPoints) {
  cursor.setAttribute('style','display: none;');
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
const navlander1 = document.querySelector('.nav_lander1');
const navlander2 = document.querySelector('.nav_lander2');


hamburger.addEventListener('click', () => {
    navlander1.classList.toggle('open');
    navlander2.classList.toggle('open');
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

//skill dropdown
const currentskill_name = document.querySelector('.skill_name');
const currentskill_container = document.querySelector('.currentskill_container');
const working_skill = document.querySelector('.workingskill_name');
const working_container = document.querySelector('.workingskill_container');
const softskill = document.querySelector('.softskill_name');
const softskill_container = document.querySelector('.soft_container');

function skillactive(skillname,skillcontainer,vw,vh){
  skillname.addEventListener('click',()=>{
    if( parseInt(skillcontainer.style.height) === 0){
      if(isdesktop){
        let viewportwidth = window.innerWidth || document.documentElement.clientWidth;
        skillcontainer.style.height = (viewportwidth * vw) / 100 + 'px';
      }
      else{
        let viewportheight = window.innerHeight || document.documentElement.clientHeight;
        skillcontainer.style.height = (viewportheight * vh) / 100 + 'px';
      }
    }
  
    else{
      skillcontainer.style.height = '0px';
    }
  })
}

skillactive(currentskill_name,currentskill_container,40,96.5);
skillactive(working_skill,working_container,40,60);
skillactive(softskill,softskill_container,30,45);



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
