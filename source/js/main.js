window.addEventListener('DOMContentLoaded', () => {

  // mobile-menu
  let html = document.querySelector('[data-html]');
  let header = document.querySelector('[data-header]');
  let menuToggle = document.querySelector('[data-header-toggle]');
  let headerList = document.querySelector('[data-header-list]');

  header.classList.add('is-js');
  html.style.setProperty('overflow-y', 'auto');

  const menuChanger = () => {
    header.classList.toggle('is-open');
    if (html.style.getPropertyValue('overflow-y') === 'auto') {
      html.style.setProperty('overflow-y', 'hidden');
    } else {
      html.style.setProperty('overflow-y', 'auto');
    }
  };

  menuToggle.onclick = () => {
    menuChanger();
  };

  header.addEventListener('click', (e) => {
    if (e.target === header && header.classList.contains('is-open')) {
      menuChanger();
    }
  });

  headerList.onclick = () => {
    header.classList.remove('is-open');
    html.style.setProperty('overflow-y', 'auto');
  };
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
