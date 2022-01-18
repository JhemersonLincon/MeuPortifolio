//menu mobile

//Functions utility
let nome = document.querySelector("#name")

function maquina(){
    let separado =nome.innerHTML.split("");
    nome.innerHTML = " "
    separado.forEach((letra, i)=>{
        setTimeout(()=>nome.innerHTML +=letra,90 * i)
})
}
maquina()




//FUNCTION UTILITY
function addclass(element, classe){
    element.classList.toggle(classe)
}

function forHelp(func, callback, moreOne=false){
    if(moreOne){
        func.forEach(element=>{
           element.addEventListener("click",callback);
    })
    }
    else{
        func.addEventListener("click", callback);
    }
}

//BUTÃO DO TEMA DO LAYOUT
//VARIAVEIS 






// MENU DE NAVEGAÇÃO
//variaveis
var btn_mobile  = document.getElementById("btn-mobile");
//functions
function ToggleMenu(){
    document.querySelector(".nav").classList.toggle("active")
}
//evento
btn_mobile.addEventListener("click",ToggleMenu)

/*SCROLL*/
const btn = document.querySelectorAll(".menu-list a");

forHelp(btn, (event)=>{event.preventDefault()}, true)
    


const btn_scroll = document.querySelectorAll("ul.menu-list a[href^='#']");

forHelp(btn_scroll, ScrollOnClick,true)

function ScrollOnClick(event){
    event.preventDefault()
    const to = getScrollhref(event.target) -140;

    scrolltoPosition(to)
}
function scrolltoPosition(to, position=true){
    if(position)smoothScrollTo(0, to)
    
    else smoothScrollTo(to, 0)
}

function getScrollhref(element){
  const id = element.getAttribute("href");
  let el = document.querySelector(id)

  if(el.id == "game"){
    return el.offsetTop + 170;
  }
  else{
    return el.offsetTop
  }
}


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};
//debounce
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
//scroll aside

const target = document.querySelectorAll("[data-anime]");

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight *3)/4)
    target.forEach(element=>{
        if((windowTop) > element.offsetTop){
            element.classList.add("animate")
        }
        else{element.classList.remove("animate")}
    })
}

if(target.length){
    window.addEventListener("scroll", debounce(animeScroll, 150));
    animeScroll()
}


const btnStartGame = document.querySelector(".btn-start button");
const containerGamer = document.querySelector(".container-game");
const body = document.querySelector("body")
btnStartGame.onclick = (e)=>{
  if(containerGamer.classList.contains("active")){
    
    containerGamer.classList.remove("active")
    btnStartGame.innerHTML = "START"
    body.style.overflow = "auto"
  }
  else{
    containerGamer.classList.add("active")
    btnStartGame.innerHTML = "STOP"
    body.style.overflow = "hidden"
  }   
}

//PROJETOS 

const collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach((element)=>{
  element.addEventListener('click',function(){
    
    if(this.classList.contains("active")){
      this.classList.remove('active')
      const content = this.nextElementSibling;
      content.classList.remove("active");
    }
    
    else{
      clearCollaps();
      this.classList.toggle('active')
      const content = this.nextElementSibling;
      content.classList.toggle("active");
    }
  })
})
function clearCollaps(){
  for(let i = 0;i < collapsible.length; i++){
    collapsible[i].classList.remove('active')
    collapsible[i].nextElementSibling.classList.remove('active')
  }
}