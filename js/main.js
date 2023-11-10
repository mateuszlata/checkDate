// buttons
const buttonHamburgerIcon = document.querySelector('.fa-solid.fa-bars');
const buttonXIcon = document.querySelector('.fa-solid.fa-x');
//menu mobilne
const mobileMenuDiv = document.querySelector('.header__mobile-menu');

buttonHamburgerIcon.addEventListener('click', () => {
	console.log('klikam w hamburgera');

	if (mobileMenuDiv.classList.contains('header__mobile-menu--active')) {
		console.log('zawiera klasę');
		mobileMenuDiv.classList.remove('header__mobile-menu--active');
	} else {
		mobileMenuDiv.classList.add('header__mobile-menu--active');
	}
});

buttonXIcon.addEventListener('click', () => {
	console.log('klikam w X');

	if (mobileMenuDiv.classList.contains('header__mobile-menu--active')) {
		mobileMenuDiv.classList.remove('header__mobile-menu--active');
	}
});
