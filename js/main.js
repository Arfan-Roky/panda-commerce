
function darkMode() {

  document.body.classList.toggle('dark-mode');

//   nav
const navToggle = document.querySelector('.nav_toggle');
navToggle.classList.toggle('nav-bg-color');

//   carousel
  const bannerPart1 = document.querySelector('.banner1');
  bannerPart1.classList.toggle('banner-part1');

  const bannerPart2 = document.querySelector('.banner2');
  bannerPart2.classList.toggle('banner-part2');

  const bannerPart3 = document.querySelector('.banner3');
  bannerPart3.classList.toggle('banner-part3');

//   item
const watch = document.querySelector('.watch');
watch.classList.toggle('watch-bg-color');
 
const bag = document.querySelector('.bag');
bag.classList.toggle('bag-bg-color');

const shoe = document.querySelector('.shoe');
shoe.classList.toggle('shoe-bg-color');

// shoes 
const item1 = document.querySelector('.item1');
item1.classList.toggle('item-bg-color')

const item2 = document.querySelector('.item2');
item2.classList.toggle('item-bg-color')

const item3 = document.querySelector('.item3');
item3.classList.toggle('item-bg-color')

const item4 = document.querySelector('.item4');
item4.classList.toggle('item-bg-color')

const item5 = document.querySelector('.item5');
item5.classList.toggle('item-bg-color')

const item6 = document.querySelector('.item6');
item6.classList.toggle('item-bg-color')

// subscribe
const panda = document.querySelector('.panda');
panda.classList.toggle('panda-bg-color')
  
}
