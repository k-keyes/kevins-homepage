document.addEventListener('DOMContentLoaded', () => {
	const startingActiveFrame = document.querySelector('.jimmy-frame.active');
	updateJimmyImage(startingActiveFrame);
	setInterval(() => {
		rotateActiveFrame(randomInRange());
	}, 5000);
});

const rotateActiveFrame = () => {
	const activeFrame = document.querySelector('.jimmy-frame.active');
	const inactiveFrame = document.querySelector('.jimmy-frame:not(.active)');
	console.log(activeFrame);
	console.log(inactiveFrame);
	activeFrame.classList.remove('active');
	inactiveFrame.classList.add('active');
	updateJimmyImage(inactiveFrame);
}

const updateJimmyImage = (el) => {
	const imageSource = `./jimmy-pics/jimmy${randomInRange()}.png`;
	el.src = imageSource;
}

const randomInRange = () => {
	return Math.ceil(Math.random() * 21);
}