function scrollDownToLearningContent() {
	scrollValue = 0;
	scrollAnimationFrameInterval = setInterval(scrollAnimationFrameBegan, 10);
}

function scrollAnimationFrameBegan() {
		scrollValue += 0.5
		if (scrollValue >= 39) {
			clearInterval(scrollAnimationFrameInterval);
		} else {
			scrollValue += 0.5
			window.scrollBy(0, scrollValue);
		}
}

