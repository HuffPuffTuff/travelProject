const menu = document.querySelector( '.header__menu' );
const burger = document.querySelector( '.header__burger' );
const close = document.querySelector( '.menu__close-button' );
const menuList = document.querySelectorAll( '.header__list li');
const shading = document.querySelector( '.shading' );
import {screenWidth} from './anotherSlider.js';
console.log(screenWidth);

const toggleMenu = () => {
  menu.classList.toggle( 'menu__open' );
  shading.classList.toggle( 'active' );
}

close.addEventListener( 'click', toggleMenu );
burger.addEventListener( 'click', toggleMenu );

menuList.forEach( function( button, index ) {
  if (index === 4) {
    button.addEventListener('click', (e) => {
      popUp.classList.add('popup-visible');
      menu.classList.toggle( 'menu__open' );
    });
  }
  else {
    button.addEventListener( 'click', toggleMenu );
  }
});


const popUp = document.querySelector( '.login__popup' );
const loginButton = document.querySelector( '.login__button' );


document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(shading);
  if (click) {
    menu.classList.remove( 'menu__open' );
    shading.classList.remove( 'active' );
    popUp.classList.remove('popup-visible');
  }
});

loginButton.addEventListener( 'click', (e) => {
  shading.classList.add( 'active' );
  // popUp.classList.remove('hidden');
  popUp.classList.add('popup-visible')
});



const changePopUp = () => {
  const popUpForm = document.querySelector('.popup-form');
  const register = popUpForm.querySelector('.register');
  const logIn = popUpForm.querySelector('.login');
  const popUpSignins = popUpForm.querySelectorAll('.popup__signin');
  const popUpRegisters = popUpForm.querySelectorAll('.popup__register')

  register.addEventListener('click', (e) => {
    register.classList.add('hidden');
    logIn.classList.remove('hidden');

    popUpSignins.forEach( (element) => {
      element.classList.add('hidden');
    });

    popUpRegisters.forEach( (element) => {
      element.classList.remove('hidden');
    })
  });

  logIn.addEventListener('click', (e) => {
    register.classList.remove('hidden');
    logIn.classList.add('hidden');

    popUpSignins.forEach( (element) => {
      element.classList.remove('hidden');
    });

    popUpRegisters.forEach( (element) => {
      element.classList.add('hidden');
    })
  });

  const enterButton = popUpForm.querySelector('.button-enter')
  
  enterButton.addEventListener('click', (event) => {
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    alert(`E-mail: ${emailValue}\nPassword: ${passwordValue}`)
  })
}

changePopUp();





