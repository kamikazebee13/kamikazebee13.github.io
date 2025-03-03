let seedCount = 0;
let herbCount = 0;
let moteCount = 10;
let plotPlanted = {};
const seedPrice = 3;

function purchaseSeeds() {
	if (moteCount >= seedPrice) {
		moteCount -=seedPrice;
		
		document.getElementById('seedCount').innerText = ++seedCount;
		document.getElementById('moteCount').innerText = moteCount;
	}
}

function plantSeed(plotId) {
	const plot = document.getElementById(plotId);
	
	if (!plotPlanted[plotId]) {
		if (seedCount > 0) {
			document.getElementById('seedCount').innerText = --seedCount;
			
			plotPlanted[plotId] = true;
			plot.classList.add('planted')
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const closeButton = document.getElementById('close-popup');

    // Show the pop-up on page load
    popup.style.display = 'flex';

    // Close the pop-up when the button is clicked
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
