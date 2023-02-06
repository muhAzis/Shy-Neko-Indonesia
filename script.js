// Navigation Bar ------------------------------------------------------------------
const navbar = document.querySelector('nav');
const hambMenu = document.querySelector('nav .menu-toggle');
const ul = document.querySelector('nav ul');
const a = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
  if (window.pageYOffset > 0 && window.pageYOffset <= 700) {
    navbar.classList.add('bg-color-half');
    navbar.classList.remove('bg-color-full');
  } else if (window.pageYOffset > 700) {
    navbar.classList.remove('bg-color-half');
    navbar.classList.add('bg-color-full');
  } else {
    navbar.classList.remove('bg-color-half');
    navbar.classList.remove('bg-color-full');
  }
};

hambMenu.addEventListener('click', () => {
  ul.classList.toggle('clicked');
  hambMenu.classList.toggle('menu-toggle-clicked');
});

if (window.innerWidth < 1024) {
  a.forEach((item) => {
    item.addEventListener('click', () => {
      ul.classList.remove('clicked');
    });
  });
}

// News Cards Slider ---------------------------------------------------------------
const card = document.querySelectorAll('article.news .news-filter .news-col2 .row1 .cards-wrapper .cards');
const arrowLeft = document.querySelector('article.news .news-filter .news-col2 .row1 .arrow-left');
const arrowRight = document.querySelector('article.news .news-filter .news-col2 .row1 .arrow-right');

const active = document.querySelectorAll('.news-col2 .row2 span');

let counter = 0;
// set default card
card[0].scrollIntoView({ inline: 'start', block: 'start' });
window.scroll(0, 0);

active.forEach((item, i) => {
  // slider dots event listener
  item.addEventListener('click', () => {
    active.forEach((e) => {
      e.classList.remove('active');
    });
    item.classList.add('active');
    card[i].scrollIntoView({ inline: 'start', block: 'nearest' });
    counter = i;
  });
});

// next button event listener
arrowRight.addEventListener('click', () => {
  active[counter].classList.remove('active');

  counter++;
  if (counter == card.length) counter = card.length - 1;
  card[counter].scrollIntoView({ inline: 'start', block: 'nearest' });

  active[counter].classList.add('active');
});

// prev button event listener
arrowLeft.addEventListener('click', () => {
  active[counter].classList.remove('active');

  counter--;
  if (counter < 0) counter = 0;
  card[counter].scrollIntoView({ inline: 'start', block: 'nearest' });

  active[counter].classList.add('active');
});

// dropdown button ----------------------------------------------------------------
const specs1 = document.querySelector('article.products .products-row2 .col1 p.specs');
const specs2 = document.querySelector('article.products .products-row2 .col2 p.specs');
const dropdown1 = document.querySelector('article.products .products-row2 .col1 .dropdown i');
const dropdown2 = document.querySelector('article.products .products-row2 .col2 .dropdown i');

dropdown1.addEventListener('click', () => {
  specs1.classList.toggle('height');
});

dropdown2.addEventListener('click', () => {
  specs2.classList.toggle('height');
});

// copyright year ------------------------------------------------------------------
const yearText = document.querySelectorAll('footer .copyright p i')[1];

const date = new Date();
let year = date.getFullYear();

yearText.innerHTML = year;

// Biography Card Slider -----------------------------------------------------------
const bioCard = document.querySelectorAll('aside .biography .content .cards-wrapper .cards .card-wrapper');
const bioArrowRight = document.querySelector('aside .biography .content .right-arrow i');
const bioArrowLeft = document.querySelector('aside .biography .content .left-arrow i');
const bioContainer = document.querySelector('aside .biography');
const btnShow = document.querySelector('aside .sidebar .group p');
const btnClose = document.querySelector('aside .biography i.close-button');
const btnDropright = document.querySelector('aside .sidebar .group .dropright');
const btnContainer = document.querySelector('aside .sidebar .group');

let counter2 = 0;
// set default card
bioCard[0].scrollIntoView({ inline: 'start', block: 'start' });
window.scroll(0, 0);

// next button event listener
bioArrowRight.addEventListener('click', () => {
  counter2++;
  if (counter2 == bioCard.length) counter2 = bioCard.length - 1;
  bioCard[counter2].scrollIntoView({ inline: 'start', block: 'nearest' });
});

// prev button event listener
bioArrowLeft.addEventListener('click', () => {
  counter2--;
  if (counter2 < 0) counter2 = 0;
  bioCard[counter2].scrollIntoView({ inline: 'start', block: 'nearest' });
});

// show biography button event listener
btnShow.addEventListener('click', () => {
  bioContainer.classList.add('showBio');
});

// close biography button event listener
btnClose.addEventListener('click', () => {
  bioContainer.classList.remove('showBio');
});

// show button touchscreen
if (window.innerWidth < 1024) {
  btnDropright.addEventListener('click', () => {
    btnContainer.classList.toggle('group-touchscreen');
  });
}
