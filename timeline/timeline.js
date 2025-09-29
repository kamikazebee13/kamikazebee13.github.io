let currentAudio = null;

function openTimeline(button) {
	const content = button.parentElement.querySelector('.tlcontent');
	const audioFile = button.getAttribute('data-audio');
	const isOpen = content.classList.contains('show');
	
	if (content) {
		//stops audio if closing timeline section
		if (isOpen && currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
			currentAudio = null;
		}
		//toggles timeline section open or closed
		content.classList.toggle('show');
	}
	
	//plays new audio
	if (audioFile && content && !isOpen) {
		if (currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		
		currentAudio = new Audio(audioFile);
		currentAudio.play().catch(err => {
			console.warn("Audio play failed:", err);
		});
	}	
}
