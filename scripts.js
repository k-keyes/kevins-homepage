const bgImageCount = 13;

document.addEventListener('DOMContentLoaded', () => {
	const jimmyFrame = document.querySelector('.jimmy-frame');
	updateJimmyImage();
	jimmyFrame.addEventListener('click', updateJimmyImage);
});

const updateJimmyImage = () => {
	const jimmyFrame = document.querySelector('.jimmy-frame');
	const imageSource = `./jimmy-pics/jimmy${randomInRange()}.png`;
	jimmyFrame.src = imageSource;
}

const randomInRange = () => {
	return Math.ceil(Math.random() * bgImageCount);
}