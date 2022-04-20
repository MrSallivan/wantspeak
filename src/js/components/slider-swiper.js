// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		visible: true
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		576: {
			slidesPerView: "auto",
			spaceBetween: 10,
		}
	}
});