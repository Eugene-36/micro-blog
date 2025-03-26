// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

const btnElement = [...document.querySelectorAll('.toggleDarkMode')];

btnElement.forEach((element) => {
  element.addEventListener('click', () => {
    return document.body.classList.toggle('dark')
      ? (element.innerText = '☀️')
      : (element.innerText = '🌘');
  });
});
