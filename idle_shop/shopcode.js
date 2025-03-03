//Verdleaf variables
let herbCount = {
	verdleaf: 0,
	azurethorn: 0
};

let herbCollect = {
	verdleaf: 1,
	azurethorn: 1
};

let herbCost = {
	verdleaf: 2,
	azurethorn: 7
};

let upgradeCost = {
	verdleaf: 75,
	azurethorn: 375
};

let upgradeCollect = {
	verdleaf: 105,
	azurethorn: 495
};

let purchasePrice = {
	azurethorn: 500
}

let moteCount = 0;

function off() {
	document.getElementById("overlay").style.display = "none";
}

function incrementHerbCount(herb) {
	herbCount[herb] += herbCollect[herb];
	
	document.getElementById(herb + 'Count').innerText = herbCount[herb];
}

function sellHerbs(herb) {
	if (herbCount[herb] > 0) {
		moteCount += (herbCost[herb] * herbCount[herb]);
		herbCount[herb] = 0;
		
		document.getElementById('moteCount').innerText = moteCount;
		document.getElementById(herb + 'Count').innerText = herbCount[herb];
	} else {
		showMessage('You have no ' + herb + ' to sell. Try collecting some first.', `error`, 4000);
	}
}

function upgradeHerbCost(herb) {
	if (moteCount >= upgradeCost[herb]) {
		moteCount -= upgradeCost[herb];
		herbCost[herb] = Math.round(herbCost[herb] * 2.45);
		upgradeCost[herb] = Math.round(upgradeCost[herb] * 1.85);
		
		document.getElementById('moteCount').innerText = moteCount;
		document.getElementById(herb + 'CostUpgrade').innerText = upgradeCost[herb];
		document.getElementById(herb + 'Cost').innerText = herbCost[herb];
	} else {
		showMessage('Not enough Mote Stones for your upgrade! Try selling herbs.', 'error', 5000);
	}
}

function upgradeHerbCollect(herb) {
	if (moteCount >= upgradeCollect[herb]) {
		moteCount -= upgradeCollect[herb];
		herbCollect[herb] = Math.round(herbCollect[herb] * 2.35);
		upgradeCollect[herb] = Math.round(upgradeCollect[herb] * 1.85);
		
		document.getElementById('moteCount').innerText = moteCount;
		document.getElementById(herb + 'CollectUpgrade').innerText = upgradeCollect[herb];
	} else {
		showMessage('Not enough Mote Stones for your upgrade! Try selling herbs.', 'error', 4000);
	}
}

function purchaseHerb(herb) {
	if (moteCount >= purchasePrice[herb]) {
		showMessage(`You've unlocked the Azurethorn herb! This is all that's available for now. Thank you for playing!`, `alert`, 10000);
		
		document.getElementById('azurethorn').style.display = "block";
		document.getElementById('purchaseAzurethorn').style.display = "none";
		
	} else {
		showMessage('Not enough Mote Stones for your purchase! Try selling more herbs.', 'error', 4000);
	}
}

function showMessage(message, type, duration) {
	const messageBox = document.getElementById('message');
	messageBox.innerText = message;
	messageBox.style.color = type === 'error' ? 'red' : 'green';
	messageBox.style.background = '#FFF4E6';
	messageBox.style.borderRadius = '15px';
	messageBox.style.padding = '20px';
	messageBox.style.margin = '20px';
	
	setTimeout(() => {
		messageBox.innerText = "";
	}, duration);
}
