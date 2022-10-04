import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

render(galleryItems);
function render (gallery){
	const arrImg = gallery.map(({original, preview, description}) => {
		return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	  </a>`
	}).join('');	
	galleryRef.insertAdjacentHTML('beforeend', arrImg);
}
new SimpleLightbox('.gallery a', {
	captionsData: `alt`,
	captionDelay: 200,
	animationSpeed: 100,
})
