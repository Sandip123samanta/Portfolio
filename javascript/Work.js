const scroll = new LocomotiveScroll({
    el: document.querySelector('#Work'),
    smooth: true
});


//preloader animation
let currentvalue = 0;
const logo = document.getElementById('#logo');
function startloader(){
    
    function updatevalue(){
        if(currentvalue === 100){
            return;
        }

        currentvalue+= Math.floor(Math.random() * 10) + 1;

        if(currentvalue > 100)
            currentvalue = 100;
    
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updatevalue,delay);
    }
    updatevalue(); 
}
startloader();
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


//project slider

const projects_container = document.querySelector('.project_container');
const projects = document.querySelectorAll('.project');

const leftarrow = document.querySelector('.leftarrow');
const rightarrow = document.querySelector('.rightarrow');

let counter = 1;
const size = projects[0].clientWidth;



rightarrow.addEventListener('click', ()=>{
  if(counter >= projects.length - 1) return;
  projects_container.style.transition = "transform 0.4s ease-in-out";
  counter++;
  projects_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

leftarrow.addEventListener('click', ()=>{
  if(counter <= 0) return;
  projects_container.style.transition = "transform 0.4s ease-in-out";
  counter--;
  projects_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

projects_container.addEventListener('transitionend', ()=>{
  if(projects[counter].id === 'lastproject_clone'){
    projects_container.style.transition ="none" ;
    counter = projects.length -2;
    projects_container.style.transform ='translateX(-' + (-size*counter)+'px)';
  }
  if(projects[counter].id === 'firstproject_clone'){
    projects_container.style.transition ="none" ;
    counter = projects.length - counter;
    projects_container.style.transform ='translateX(-' + (-size*counter)+'px)';
  }
});