// Menu burger----

// show menu
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId)
  let nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
      document.body.classList.toggle('_lock')
      toggle.classList.toggle('burger-active')
    })
  }

    // remove menu mobile
  const navLink = document.querySelectorAll('.menu__link')

  function linkAction(){
    //const navMenu = document.getElementById('nav-menu')
    nav.classList.remove('show-menu')
    toggle.classList.remove('burger-active')
    document.body.classList.remove('_lock')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
}

showMenu('menu-toggle','nav-menu')


function scrollActive(){
  // == scroll sections active link
  const sections = document.querySelectorAll('section[id]')
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')
    const linksM = document.querySelector('.menu__item a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      linksM.classList.add('active-link')
    } else {
      linksM.classList.remove('active-link')
    }
  })

  // === change background header
  const header = document.getElementById('header')
  const linkM = document.querySelector('.menu__link')

  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') + linkM.classList.add('active-link')

  // === show scroll top
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll') ; else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollActive)


let lastScroll = 0;
const defaultOffset = 500;

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', ()=>{
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()){
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
})


////--------------------------------------------------------------------------------------------------------

function tabS(tabSelector, contentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabSelector);
  const allContent = document.querySelectorAll(contentSelector)

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab =>{tab.classList.remove(activeClass)});
      tab.classList.add(activeClass);

      allContent.forEach(content => {content.classList.remove(activeClass)});
      allContent[index].classList.add(activeClass);
    })

  });
}

function tabS2(tabSelector, contentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabSelector);
  const allContent = document.querySelectorAll(contentSelector)

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab =>{tab.classList.remove(activeClass)});
      tab.classList.add(activeClass);

      allContent.forEach(content => {content.classList.remove(activeClass)});
      allContent[index].classList.add(activeClass);
    })

  });
}

// Перый аргумент - класс конкретного элемента при клике на который будет переключатся таб
// Второй аргумент - класс того блока который будет переключатся
// Третий аргумент - класс ативности который будет добавлятся для таба который активный

tabS('.header-tabs__item', '.content-tabs__item', 'tabs-active')
tabS2('.tabs-getstarted__item', '.getstarted-content__item', 'getstarted-active')

////------------------------------------------------------------------------------------------------

function switchFun($inputClass, $blockOne, $blockTwo, $blockTree){
  const btnCheck = document.querySelector($inputClass);
  const standartBlock = document.querySelector($blockOne);
  const basicBlock = document.querySelector($blockTwo);
  const premiumBlock = document.querySelector($blockTree);

  btnCheck.addEventListener('click', ()=> {
    btnCheck.classList.toggle('switch-active');

    if (btnCheck.classList.contains('switch-active')){
      standartBlock.innerHTML = `$10.00 <span>One year</span>`;
      basicBlock.innerHTML = `$14.00 <span>One year</span>`;
      premiumBlock.innerHTML = `$24.00 <span>One year</span>`;
    } else {
      standartBlock.innerHTML = `$2.80 <span>Per month</span>`;
      basicBlock.innerHTML = `$4.20 <span>Per month</span>`;
      premiumBlock.innerHTML = `$7.00 <span>Per month</span>`;
    }
  });
}

switchFun('.switch__input', '.block-standart', '.block-basic', '.block-premium');

////------------------------------------------------------------------------------------------------


function tabFooter(tabSelector, contentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabSelector);
  const allContent = document.querySelectorAll(contentSelector)

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab =>{tab.classList.remove(activeClass)});
      tab.classList.add(activeClass);

      allContent.forEach(content => {content.classList.remove(activeClass)});
      allContent[index].classList.add(activeClass);
    })

  });
}

// Перый аргумент - класс конкретного элемента при клике на который будет переключатся таб
// Второй аргумент - класс того блока который будет переключатся
// Третий аргумент - класс ативности который будет добавлятся для таба который активный

tabFooter('.spoller-footer__btn', '.spoller-footer__menu', 'accordion-open')


////------------------------------------------------------------------------------------------------
