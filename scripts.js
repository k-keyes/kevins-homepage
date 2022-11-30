document.addEventListener('DOMContentLoaded', () => {
	const jimmyFrame = document.querySelector('.jimmy-frame');
	updateJimmyImage(jimmyFrame, randomInRange());
	setInterval(() => {
		updateJimmyImage(jimmyFrame, randomInRange());
	}, 3000);
});

const updateJimmyImage = (el, idx) => {
	const imageSource = `url('./jimmy-pics/jimmy${idx}.png')`;
	el.style.backgroundImage = imageSource;
}

const randomInRange = () => {
	return Math.ceil(Math.random() * 21);
}