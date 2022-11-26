const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeListImagesMarkup = ({ url, alt }) => {
  return `
  <li class = "item">
    <img  class="img" src="${url}" alt="${alt}">
  </li>
  `;
};

const stringListImages = images.map(makeListImagesMarkup).join('');

const galleryRefs = document.querySelector('.gallery');
galleryRefs.classList.add('list');

galleryRefs.insertAdjacentHTML('afterbegin', stringListImages);

// const arrayNewElements = images.map(({ url, alt }) => {
//   const newItemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;

//   newItemEl.append(imageEl);

//   return newItemEl;
// });

// galleryRefs.append(...arrayNewElements);
