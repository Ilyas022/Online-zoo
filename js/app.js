const buttonBurger = document?.querySelector('.header__burger');
const menuBurger = document?.querySelector('.header__links');
const headerContainer = document.querySelector('.header__container');

buttonBurger?.addEventListener('click', (e) => {
  menuBurger.classList.toggle('header__links_visible');
  headerContainer.firstElementChild.classList.toggle('header__logo_visible');
  headerContainer.classList.toggle('header__container_active');
  document.body.classList.toggle('_lock');
})

window.addEventListener('click', e => { // при клике в любом месте окна браузера
  console.log('works')
  if (document.querySelector('.header__links_visible')) {
    const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.header__container') && !target.closest('.header__burger')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    menuBurger.classList.remove('header__links_visible') // то закрываем окно навигации, удаляя активный класс
    headerContainer.firstElementChild.classList.remove('header__logo_visible') // то закрываем окно навигации, удаляя активный класс
    headerContainer.classList.remove('header__container_active') // то закрываем окно навигации, удаляя активный класс
    document.body.classList.remove('_lock') // то закрываем окно навигации, удаляя активный класс
  }
  } else if(document.querySelector('.pop-up_visible')){
    if (!e.target.closest('.commentsCard')) {
    document.querySelector('.pop-up').classList.remove('pop-up_visible')
    document.querySelector('.commentsCard').remove()
    popUpIsWaiting = false;
    }
  }
  
})

if (!window.location.href.split('/').includes('donate.html')) {
  // Pets carousel

const cards = [
  {
    img: 'img/bigPanda.jpg',
    kind: 'panda',
    title: 'giant Pandas',
    location: 'Native to Southwest China',
    dish: 'vegetables'
  },
  {
    img: 'img/bigEagle.jpg',
    kind: 'eagle',
    title: 'Eagles',
    location: 'Native to South America',
    dish: 'meet'
  },
  {
    img: 'img/bigCheetah.jpg',
    kind: 'cheetah',
    title: 'cheetahs',
    location: 'Native to Africa',
    dish: 'meet'
  },
  {
    img: 'img/bigGorilla.jpg',
    kind: 'gorilla',
    title: 'Gorillas',
    location: 'Native to Congo',
    dish: 'vegetables'
  },
  {
    img: 'img/bigPenguin.jpg',
    kind: 'penguin',
    title: 'Penguins',
    location: 'Native to Antarctica',
    dish: 'meet'
  },
  {
    img: 'img/aligator.jpg',
    kind: 'aligator',
    title: 'Alligators',
    location: 'Native to Southeastern U. S.',
    dish: 'meet'
  },
  {
    img: 'img/bigSloth.jpg',
    kind: 'sloth',
    title: 'Two-toed Sloth',
    location: 'Mesoamerica, South America',
    dish: 'vegetables'
  }
]

function random(min, max) {
  const arr = [...cards]
  let mi = min;
  let ma = max;
  let result = []
  for (let i = 0; i < cards.length; i++) {
    let rand = Math.round(mi - 0.5 + Math.random() * (ma - mi + 1));
    result.push(arr[rand]);
    arr.splice(rand, 1)
    ma -= 1;
  }
  return result;
}

let choiceCard = [];

const choiceProc = () => {
  const result = random(0, 6)
  choiceCard.push(...result)
}

// left choice button

let isWaiting = false;
document.querySelector('.choice__controlButton_left').addEventListener('click', () => {
  if (!isWaiting) {
    isWaiting = true;
    choiceCard.splice(0, choiceCard.length);
    choiceProc()
    const additionalChoiceCardsRight = `
<div class="choice__cards from-left">
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[0].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[0].title}</div>
      <div class="animalCard__location">${choiceCard[0].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
      <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[1].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[1].title}</div>
      <div class="animalCard__location">${choiceCard[1].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
      <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[2].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[2].title}</div>
      <div class="animalCard__location">${choiceCard[2].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
      <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[3].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[3].title}</div>
      <div class="animalCard__location">${choiceCard[3].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
      <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[4].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[4].title}</div>
      <div class="animalCard__location">${choiceCard[4].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
      <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[5].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[5].title}</div>
      <div class="animalCard__location">${choiceCard[5].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
      <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
    </div>
  </div>
</div>
</div>`
    const choiceCards = document.querySelector('.choice__cards')
    //
    choiceCards.classList.add('to-right')
    choiceCards.addEventListener('animationend', (e) => {
      e.currentTarget.remove();
      document.querySelector('.from-left').classList.remove('from-left')
    })
    //
    choiceCards.insertAdjacentHTML('afterend', additionalChoiceCardsRight)
    choiceCards.addEventListener('animationend', (e) => isWaiting = false)
  }

})

// right choise button

document.querySelector('.choice__controlButton_right').addEventListener('click', () => {
  if (!isWaiting) {
    isWaiting = true;
    choiceCard.splice(0, choiceCard.length);
    choiceProc()
    const additionalChoiceCardsLeft = `
<div class="choice__cards from-right">
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[0].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[0].title}</div>
      <div class="animalCard__location">${choiceCard[0].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
      <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[1].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[1].title}</div>
      <div class="animalCard__location">${choiceCard[1].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
      <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[2].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[2].title}</div>
      <div class="animalCard__location">${choiceCard[2].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
      <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[3].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[3].title}</div>
      <div class="animalCard__location">${choiceCard[3].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
      <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[4].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[4].title}</div>
      <div class="animalCard__location">${choiceCard[4].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
      <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[5].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[5].title}</div>
      <div class="animalCard__location">${choiceCard[5].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
      <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
    </div>
  </div>
</div>
</div>`
    const choiceCards = document.querySelector('.choice__cards')
    choiceCards.classList.add('to-left')
    choiceCards.addEventListener('animationend', (e) => {
      e.currentTarget.remove();
      document.querySelector('.from-right').classList.remove('from-right')
    })
    choiceCards.insertAdjacentHTML('beforeBegin', additionalChoiceCardsLeft)
    choiceCards.addEventListener('animationend', (e) => isWaiting = false)
  }

})

const swipedetect = (el) => {

  let surface = el,
    startX = 0,
    startY = 0,
    distX = 0,
    distY = 0,
    dist = 0,

    startTime = 0,
    elapsedTime = 0,

    threashold = 150,
    restraint = 100,
    allowedTime = 300;

  surface.addEventListener('mousedown', (e) => {
    dist = 0;
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('mouseup', (e) => {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threashold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (!isWaiting) {
            isWaiting = true;
            choiceCard.splice(0, choiceCard.length);
            choiceProc()
            const additionalChoiceCardsLeft = `
<div class="choice__cards from-left">
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[0].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[0].title}</div>
      <div class="animalCard__location">${choiceCard[0].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
      <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[1].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[1].title}</div>
      <div class="animalCard__location">${choiceCard[1].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
      <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[2].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[2].title}</div>
      <div class="animalCard__location">${choiceCard[2].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
      <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[3].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[3].title}</div>
      <div class="animalCard__location">${choiceCard[3].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
      <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[4].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[4].title}</div>
      <div class="animalCard__location">${choiceCard[4].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
      <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[5].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[5].title}</div>
      <div class="animalCard__location">${choiceCard[5].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
      <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
    </div>
  </div>
</div>
</div>`
            const choiceCards = document.querySelector('.choice__cards')
            choiceCards.classList.add('to-right')
            choiceCards.addEventListener('animationend', (e) => {
              e.currentTarget.remove();
              document.querySelector('.from-left').classList.remove('from-left')
            })
            choiceCards.insertAdjacentHTML('beforeBegin', additionalChoiceCardsLeft)
            choiceCards.addEventListener('animationend', (e) => isWaiting = false)
          }
        } else if (!isWaiting) {
          isWaiting = true;
          choiceCard.splice(0, choiceCard.length);
          choiceProc()
          const additionalChoiceCardsLeft = `
<div class="choice__cards from-right">
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[0].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[0].title}</div>
    <div class="animalCard__location">${choiceCard[0].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
    <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[1].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[1].title}</div>
    <div class="animalCard__location">${choiceCard[1].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
    <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[2].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[2].title}</div>
    <div class="animalCard__location">${choiceCard[2].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
    <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[3].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[3].title}</div>
    <div class="animalCard__location">${choiceCard[3].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
    <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[4].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[4].title}</div>
    <div class="animalCard__location">${choiceCard[4].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
    <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[5].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[5].title}</div>
    <div class="animalCard__location">${choiceCard[5].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
    <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
  </div>
</div>
</div>
</div>`
          const choiceCards = document.querySelector('.choice__cards')
          choiceCards.classList.add('to-left')
          choiceCards.addEventListener('animationend', (e) => {
            e.currentTarget.remove();
            document.querySelector('.from-right').classList.remove('from-right')
          })
          choiceCards.insertAdjacentHTML('beforeBegin', additionalChoiceCardsLeft)
          choiceCards.addEventListener('animationend', (e) => isWaiting = false)
        }
      }
    }
  })
  surface.addEventListener('touchstart', (e) => {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('touchend', (e) => {
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threashold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (!isWaiting) {
            isWaiting = true;
            choiceCard.splice(0, choiceCard.length);
            choiceProc()
            const additionalChoiceCardsLeft = `
<div class="choice__cards from-left">
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[0].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[0].title}</div>
      <div class="animalCard__location">${choiceCard[0].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
      <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[1].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[1].title}</div>
      <div class="animalCard__location">${choiceCard[1].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
      <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[2].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[2].title}</div>
      <div class="animalCard__location">${choiceCard[2].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
      <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[3].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[3].title}</div>
      <div class="animalCard__location">${choiceCard[3].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
      <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[4].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[4].title}</div>
      <div class="animalCard__location">${choiceCard[4].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
      <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
    </div>
  </div>
</div>
<div class="choice__card animalCard">
  <div class="animalCard__image">
    <img src="${choiceCard[5].img}" alt="">
  </div>
  <div class="animalCard__info">
    <span class="animalCard__wrapper">
      <div class="animalCard__kind">${choiceCard[5].title}</div>
      <div class="animalCard__location">${choiceCard[5].location}</div>
    </span>
      <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
      <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
    </div>
  </div>
</div>
</div>`
            const choiceCards = document.querySelector('.choice__cards')
            choiceCards.classList.add('to-right')
            choiceCards.addEventListener('animationend', (e) => {
              e.currentTarget.remove();
              document.querySelector('.from-left').classList.remove('from-left')
            })
            choiceCards.insertAdjacentHTML('beforeBegin', additionalChoiceCardsLeft)
            choiceCards.addEventListener('animationend', (e) => isWaiting = false)
          }
        } else if (!isWaiting) {
          isWaiting = true;
          choiceCard.splice(0, choiceCard.length);
          choiceProc()
          const additionalChoiceCardsLeft = `
<div class="choice__cards from-right">
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[0].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[0].title}</div>
    <div class="animalCard__location">${choiceCard[0].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[0].dish}">
    <img src="img/icons/icons.svg#${choiceCard[0].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[1].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[1].title}</div>
    <div class="animalCard__location">${choiceCard[1].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[1].dish}">
    <img src="img/icons/icons.svg#${choiceCard[1].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[2].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[2].title}</div>
    <div class="animalCard__location">${choiceCard[2].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[2].dish}">
    <img src="img/icons/icons.svg#${choiceCard[2].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[3].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[3].title}</div>
    <div class="animalCard__location">${choiceCard[3].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[3].dish}">
    <img src="img/icons/icons.svg#${choiceCard[3].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[4].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[4].title}</div>
    <div class="animalCard__location">${choiceCard[4].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[4].dish}">
    <img src="img/icons/icons.svg#${choiceCard[4].dish}" alt="">
  </div>
</div>
</div>
<div class="choice__card animalCard">
<div class="animalCard__image">
  <img src="${choiceCard[5].img}" alt="">
</div>
<div class="animalCard__info">
  <span class="animalCard__wrapper">
    <div class="animalCard__kind">${choiceCard[5].title}</div>
    <div class="animalCard__location">${choiceCard[5].location}</div>
  </span>
    <div class="animalCard__kindOfDish_${choiceCard[5].dish}">
    <img src="img/icons/icons.svg#${choiceCard[5].dish}" alt="">
  </div>
</div>
</div>
</div>`
          const choiceCards = document.querySelector('.choice__cards')
          choiceCards.classList.add('to-left')
          choiceCards.addEventListener('animationend', (e) => {
            e.currentTarget.remove();
            document.querySelector('.from-right').classList.remove('from-right')
          })
          choiceCards.insertAdjacentHTML('beforeBegin', additionalChoiceCardsLeft)
          choiceCards.addEventListener('animationend', (e) => isWaiting = false)
        }
      }
    }
  })
}

let el = document.querySelector('.choice-wrapper')
swipedetect(el)

// testemonials carousel

const comments = [

  {
    img: 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
    name: 'Walter White',
    location: 'USA',
    text: 'Нельзя пускать на самотёк, надо жить на своих условиях.',
    postTime: 'today'
  },
  {
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fslate.com%2Fhuman-interest%2F2012%2F07%2Fskyler-white-and-breaking-bad-stop-hating-tv-wives.html&psig=AOvVaw3zUJioH27zb8wHXBiUqsdN&ust=1665665270006000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjiwufc2voCFQAAAAAdAAAAABAE',
    name: 'Skyler White',
    location: 'Canada',
    text: 'Кто-то должен защитить эту семью от человека, который защищает эту семью.',
    postTime: '3 days ago'
  },
  {
    img: 'https://static.wikia.nocookie.net/breakingbad/images/e/e7/WaltJrS5.jpg/revision/latest?cb=20120620015209',
    name: 'Walter White Jr.',
    location: 'Russia',
    text: 'На Марсе воду нашли — не знают, что делать с этой информацией, но слава богу, нашли.',
    postTime: 'yesterday'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png',
    name: 'Jesse Pinkman',
    location: 'England',
    text: 'Какой смысл быть вне закона, если у тебя есть при этом обязанности?',
    postTime: 'now'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXPFHauCy5yZpMoT2uBHSHjGAwfKjtyfMqDD2jrvLuBF9VAA8hV4C7UuxW-k2T7sK_Jk&usqp=CAU',
    name: 'Gustavo Fring',
    location: 'Norway',
    text: 'Никогда не повторяйте ошибок!',
    postTime: '5 hours ago'
  },
  {
    img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/6/60/Jane_Margolis.jpg',
    name: 'Jane Margolis',
    location: 'Japan',
    text: 'Нет, мы не будем варить здесь. Это мой дом. А я не гажу там, где ем.',
    postTime: '30 minutes ago'
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/September/130911/8C8952203-130911-ent-saulgoodman-hmed.jpg',
    name: 'Saul Goodman',
    location: 'China',
    text: 'У меня есть знакомый, у которого есть знакомый, который знает нужного вам человека.',
    postTime: 'today'
  }]

for (let i = 0; i <= 6; i++) {
  const comment = `<div class="comments__card commentsCard">
<div class="cardComments__head">
  <div class="commentsCard__profileImg">
    <img src="../img/icons/icons.svg#userIcon" alt="">
  </div>
  <div class="commentsCard__userInfo">
    <div class="commentsCard__name">${comments[0].name}</div>
    <div class="commentsCard__commentInfo">
      Local ${comments[0].location} <span class="commentsCard__dot"></span> ${comments[0].postTime}
    </div>
  </div>
</div>
<p class="commentsCard__commentText">
${comments[0].text}
</p>
</div>`
  document.querySelector('.testimonials-wrapper').insertAdjacentHTML('beforeend', comment);
  comments.shift()
}

let scrollbarValue = 0
document.querySelector('.testimonials-wrapper').style.left = '0'
const testmonialsInput = document.querySelector('.comments__scrollBar')
if (window.innerWidth <= 1240) {
  testmonialsInput.setAttribute('max', '8')
}
testmonialsInput.addEventListener('input', (e) => {

  if (e.target.value > scrollbarValue) {
    scrollbarValue += 1;
    let testemonialsWrapper = document.querySelector('.testimonials-wrapper')
    if (window.innerWidth > 1240) {
      testemonialsWrapper.style.left = `${scrollbarValue * (-297.49)}px`
    } else {
      testemonialsWrapper.style.left = `${scrollbarValue * (-323)}px`
    }
    
  } else {
    scrollbarValue -= 1;
    let testemonialsWrapper = document.querySelector('.testimonials-wrapper')
    if (window.innerWidth > 1240) {
      testemonialsWrapper.style.left = `${scrollbarValue * (-297.49)}px`
    } else {
      testemonialsWrapper.style.left = `${scrollbarValue * (-323)}px`
    }
    
  }
})

// testimonials pop-up
popUpIsWaiting = false;
const tistimonialsComments = document.querySelector('.testimonials-wrapper').children
for (let comment of tistimonialsComments) {
  comment.addEventListener('click', (e) => {
    if (!popUpIsWaiting) {
      popUpIsWaiting = true
      const popUpInner = document.querySelector('.pop-up__inner')
      const testimonialsCard = e.currentTarget.cloneNode(true)
      testimonialsCard.classList.add('tall')
      testimonialsCard.style.cursor = 'auto'
       popUpInner.prepend(testimonialsCard)
      document.querySelector('.pop-up').classList.add('pop-up_visible')
    }
    
  })
}
}


// donate

if (window.location.href.slice('/').includes('donate.html')) {

  const anotherAmount = document.querySelector('#anotherAmount');

  // input colored

  let amountChoiceScaleActive = document.querySelectorAll('.pickAndFeedFriendChoiceSum__input');
amountChoiceScaleActive.forEach(scaleMark => {
    if (scaleMark.checked) {
      anotherAmount.value = scaleMark.value
    scaleMark.previousElementSibling.style.opacity = 1;
    scaleMark.nextElementSibling.style.color = '#FE9013';
    }
  scaleMark.addEventListener('click', (e) => {
    document.querySelector('#anotherAmount').value = e.target.value
    scaleMark.previousElementSibling.style.opacity = 1;
    scaleMark.nextElementSibling.style.color = '#FE9013';
    amountChoiceScaleActive.forEach(scaleMark => {
      if (!scaleMark.checked) {
        scaleMark.previousElementSibling.style.opacity = 0;
        scaleMark.nextElementSibling.style.color = '#333B41';
      }
    })
  }
  )
})

anotherAmount.addEventListener('input', (e) => {
  amountChoiceScaleActive.forEach(input => {
    if (e.currentTarget.value !== input.value) {
      input.previousElementSibling.style.opacity = 0;
        input.nextElementSibling.style.color = '#333B41';
    }
    if (e.currentTarget.value === input.value) {
      amountChoiceScaleActive.forEach(scaleMark => {
        if(scaleMark.checked) {
          scaleMark.previousElementSibling.style.opacity = 0;
        scaleMark.nextElementSibling.style.color = '#333B41';
        }
      })
      input.setAttribute('checked', 'checked')
      input.previousElementSibling.style.opacity = 1;
    input.nextElementSibling.style.color = '#FE9013';
    }
  })
})

}




