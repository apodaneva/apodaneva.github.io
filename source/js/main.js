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

  // up button
  let backToTop = document.querySelector('[data-upbtn]');
  backToTop.style.bottom = '-100px';

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.style.bottom = '100px';
      backToTop.style.display = 'block';
    } else {
      backToTop.style.bottom = '-100px';
    }
  });

  backToTop.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
