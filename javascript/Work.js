const scroll = new LocomotiveScroll({
    el: document.querySelector('#Work'),
    smooth: true
});


//preloader animation
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


//fit background

var tl = gsap.timeline()

tl.to("#container",{
        y:"0vh",
        scale: 1
}) 


//nav bar
const hamburger = document.querySelector('.linecontainer');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.links');
const navbar = document.querySelector('.navcontainer');
const west = document.querySelector('.navcontainer nav .text h5');
const lines = document.querySelectorAll('.line')
const cursor = document.querySelector('.cursor');


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

//web-projects section

const link = document.querySelectorAll("#web-projects ul li .link");

const document_container = document.querySelectorAll('.document-container');

const linkHoverReveal = document.querySelectorAll("#web-projects ul li .link .hover-reveal");
const linkImage = document.querySelectorAll("#web-projects ul li .link .hover-reveal .hidden-img");


//custom cursor

const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverables');
const images = document.querySelectorAll('img');

const isdesktop = window.matchMedia('(min-width: 769px)').matches;

if ('ontouchstart' in window || navigator.maxTouchPoints) {
  cursor.setAttribute('style','display: none;');

  for(let i =0 ; i<link.length;i++){
    link[i].addEventListener('click',()=>{
      const viewportwidth = window.innerWidth || document.documentElement.clientWidth;
      if( parseInt(document_container[i].style.height) === 0){
        document_container[i].style.height = (viewportwidth * 30) /100 + 'px';
      }
      else{
        document_container[i].style.height = '0px';
      }

      for(let j=0;j<document_container.length;j++){
        if(i!=j){
          document_container[j].style.height = '0px';
        }
      }
    })
  }
  
}
else{
  for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
      linkImage[i].style.transform = 'scale(1, 1)';
      linkHoverReveal[i].style.left = e.clientX + "px";
    })
    
    link[i].addEventListener('mouseleave', (e) => {
      linkHoverReveal[i].style.opacity = 0;
      linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      linkImage[i].style.transform = 'scale(0.8, 0.8)';
    })
  }

  link[0].addEventListener('click',()=>{
    location.href = 'https://github.com/Sandip123samanta/Portfolio';
  })
  link[1].addEventListener('click',()=>{
    location.href = 'https://github.com/Sandip123samanta/Portfolio';
  })
  link[2].addEventListener('click',()=>{
    location.href = 'https://github.com/Sandip123samanta/Portfolio';
  })
  link[3].addEventListener('click',()=>{
    location.href = 'https://github.com/Sandip123samanta/Portfolio';
  })
  link[4].addEventListener('click',()=>{
    location.href = 'https://github.com/Sandip123samanta/Portfolio';
  })
}


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