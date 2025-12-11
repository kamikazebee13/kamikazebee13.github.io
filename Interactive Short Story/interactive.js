let time = 0;
let milk = false;
let blanket = false;
let crafts = false;
let book = false;

const scene = document.getElementById("scene");
const options = document.getElementById("optionsContainer");
const audio = document.getElementById("bgAudio");

function advanceStory(button) {
	const choice = button.innerText.trim();	
	// for testing purposes
	/*if (choice) {
		alert(choice);
	} else {
		alert("Empty");
	}*/
	
	if (choice == "Start") {
		start();
		button.style.display = "none";
    audio.play();
		
	} else if (choice == "Warm Milk") {
		warmMilk();
		button.style.display = "none";
		
	} else if (choice == "Turn up the AC and grab your weighted blanket") {
		weightedBlanket();
		button.style.display = "none";
		
	} else if (choice == "Sleep Aid medicine") {
		sleepAid();
		button.style.display = "none";
		
	} else if (choice == "Give up on sleep") {
		giveUp();
		button.style.display = "none";
	
	} else if (choice == "Craft project") {
		paperFlowers();
		button.style.display = "none";
	
	} else if (choice == "Read a book") {
		reading();
		button.style.display = "none";
	
	} else if (choice == "Go for a walk") {
		walk();
		button.style.display = "none";
	
	} else if (choice == "Time for work!") {
		ending();
		button.style.display = "none";
	}
};

function start() {
	scene.innerHTML = "The clock on the wall reads 3:15 and you've been tossing and turning in bed since you finally crawled into it around midnight. Rain patters against the roof and window, a sound that would normally lull you to sleep. Tonight, however, sleep is as elusive as mist slipping farther and farther away the faster you run after it. You have work in the morning, 10am sharp. If you can manage to fall asleep soon, you might just get enough sleep to feel at least mildly rested when you wake up to your alarm at 9.<br><br>You have a couple of options that have helped you in the past. Or there's always the option of giving up on sleep this time.<br><br>What do you do?";
	
	options.innerHTML = '<button class="choice" onclick="advanceStory(this)">Warm Milk</button>' +
	'<button class="choice" onclick="advanceStory(this)">Turn up the AC and grab your weighted blanket</button>' +
	'<button class="choice" onclick="advanceStory(this)">Sleep Aid medicine</button>' +
	'<button class="choice" onclick="advanceStory(this)">Give up on sleep</button>';
};

function warmMilk() {
	time++;
	milk = true;
	let temp = 0;
	let temp2 = 0;
	
	switch(time) {
		case 1:
			temp = "3:30";
			temp2 = "4";
			break;
		case 2:
			temp = "4:30";
			temp2 = "5"
			break;
	}
	
	scene.innerHTML = "You climb out of bed and pad into the kitchen without turning on the lights. The tile is cold on your feet and you can't hear the rain as well from here. You feel even more awake and alert than you did a minute ago. Still, you grab out your favorite mug and fill it with milk. The microwave sounds far too loud in the quite of the night, but you punch in the time and then drag over a chair to sit and wait. <br><br>" +
	"After what feels like forever, the microwave goes off. Thankfully, there's no one here to yell at you for being up this late and making noise. Being an adult out on your own has some perks, but it also comes with the crippling insomnia that keeps you up most nights.<br><br>" +
	"Pulling your mug out of the microwave, you decide to drizzle in some honey and give it a good stir. There's a gentle glow from the fairylights strung along the top of the cupboards and you settle into your chair again to take a tentative sip.<br><br>" +
	"<i>Ouch!</i><br><br>Too hot. You give it a few minutes to cool down, watching the time on the microwave tick by. When you deem the milk to be cool enough to drink, you finally take that first precious sip. It hits the spot and warms you from the inside. A coze heat seeps into your bones and you realize you had no idea you were that cold.<br><br>" +
	"The time on the microwave reads " + temp + " and you decide to head for bed. Unfortunately, it has cooled in your absence and you cringe away from the cold sheets as you make yourself comfortable. You're warm from the milk, however, and the bedding warms too, eventually. You feel as if you might even be able to drop off to sleep rather quickly.<br><br>" +
	"You close your eyes and... well, you think you dozed off. Only now the clock reads just after " + temp2 + " and you suddenly feel wide awake once more.<br><br>What will you do now?";
	
};

function weightedBlanket() {
	time++;
	blanket = true;
	let temp = 0;
	
	switch(time) {
		case 1:
			temp = "4:30";
			break;
		case 2:
			temp = "5:30";
			break;
	}
	
	scene.innerHTML = "Forcing yourself out of bed, you stumble into the hall to search for the thermostat. Luckily, its screen lights up when you near it so you don't have to feel blindly along the wall. You press the button until you hear the hum of the AC kick on and then try not to trip over nothing as you make your way back to your room.<br><br>" +
	"Sitting on the chest at the foot of the bed is the weighted blanket you got as a Christmas gift one year. You hadn't even realized how much you needed on until you had it, and now even when the weather outside is relatively warm, you still make use of it. It takes a moment to drag it up over your bed, especially when you're so weary.<br><br>" +
	"Once everything is in place, you shimmy underneath all of your blankets and try not to disturb their placement. It feels nice and warm, and your eyes even slide close without conscious effort. At least, until your skin starts to prickle. Unease or just restlessness, you shift and wriggle, trying to work it out of your system.<br><br>Then your nose itches. You scratch it.<br><br>" +
	"Your back is tingling. Sighing, you roll over onto your side. Frustratingly, the movement pulls the blankets with you and now they're unaligned.<br><br>For the next 20 minutes, you toss and turn and fidget with your blankets, trying everything you can to reclaim that warm, fuzzy feeling you had for that brief moment. Eventually, the weight of the blanket wears you out and you lay there staring at the ceiling.<br><br>" +
	"Finally, the warmth sinks deep into your bones and your mind goes fuzzy. You drift off, at least for a moment. When you open your eyes again, it's nearly " + temp + ".<br><br>Now what will you do?";
};

function sleepAid() {
	let temp = 0;
	
	switch(time) {
		case 0:
			temp = "3:30";
			temp2 = "6";
			break;
		case 1:
			temp = "4:30";
			temp2 = "5";
			break;
		case 2:
			temp = "5:30";
			temp2 = "4";
			break;
	}
	
	scene.innerHTML = "You pick up the bottle of Sleep Aid medicine and pause. It's nearly " + temp + " now and sleeping pills hold on for hours after they kick in. You're unsure if it's a good idea to take them when you have to be up in less than " + temp2 + " hours.<br><br>Do you take it?";
	
	options.innerHTML = '<button class="choice" onclick="sleep(this)">Yes</button>' +
	'<button class="choice" onclick="sleep(this)">No</button>';
};

function sleep(button) {
	const choice = button.innerText.trim();
	
	if (choice == "Yes") {
		time = 0;
		scene.innerHTML = "You shake out a single pill and press it onto your tongue. The water on your nightstand is warm, but it does the job of getting the pill down. Laying back down again, you wait for it to kick in.<br><br>It takes a little less than an hour for the medicine to pull you under.<br><br>";
		ending();		
	} else if (choice == "No") {
		scene.innerHTML = "You put the bottle of pills back and think over your options again.";
		options.innerHTML = '';
		
		if (!milk) {
			options.innerHTML = '<button class="choice" onclick="advanceStory(this)">Warm Milk</button>'; 
		}
		
		if (!blanket) {
			options.insertAdjacentHTML("beforeend", '<button class="choice" onclick="advanceStory(this)">Turn up the AC and grab your weighted blanket</button>')
		}
		
		options.insertAdjacentHTML("beforeend", '<button class="choice" onclick="advanceStory(this)">Give up on sleep</button>')
	}
};

function giveUp() {
	scene.innerHTML = "Tossing back the blankets, you sit on the edge of your bed and glance around your room. You could doom scroll on your phone for hours, but your eyes feel sore and heavy and the idea of staring into a light sounds miserable. You could do a craft project or read a book? Or maybe going for a walk would be a good idea. All you know is there's no point in laying back down if you aren't going to sleep.";
	
	options.innerHTML = '<button class="choice" onclick="advanceStory(this)">Craft project</button>' + 
	'<button class="choice" onclick="advanceStory(this)">Read a book</button>' +
	'<button class="choice" onclick="advanceStory(this)">Go for a walk</button>';
};

function paperFlowers() {
	time++;
	crafts = true;
	let temp = 0;
	
	switch(time) {
		case 1:
			temp = "4:30";
			temp2 = "5";
			break;
		case 2:
			temp = "5:30";
			temp2 = "4";
			break;
		case 3:
			temp = "6:30";
			temp2 = "3";
			break;
	}
	
	scene.innerHTML = "You move to the other room and turn on the small desk lamp with just enough light to see by. You pull open your desk drawer to contemplate the projects you've started. Rummaging around, you decide on one that won't require much attention: paper flowers.<br><br>" +
	"Live flowers are so difficult to maintain and care for and after watching a video about paper flowers, you had been obsessively folding your own. You had practiced with colored paper at first, but once you grew confident, you had moved on to using book pages.<br><br>" +
	"You bought a second copy of your favorite book and carefully pulled the pages out. The plan is to use the whole book to make several bouqets of fake flowers, and you had over half of the pages left.<br><br>" +
	"You get to work, folding and folding. It takes a surprisingly short amount of time to craft a single flower and the pile of completed flowers on your desk grows and grows. For a long while, only the sound of crinkling paper and rain on the window keeps you company.<br><br>" +
	"The next hour passes slowly and you can feel a heaviness in your limbs. Finishing up the flower you're working on, you push away from your desk and turn the lamp off with a click.<br><br>" +
	"Your bed looks inviting as you maneuver back into your room. Laying down on the cool sheets, you pull your blankets up and tuck in. Paper flowers bloom in your mind as you drift off. When you open your eyes again, you blearily look at the clock, which reads about " + temp + ".<br><br>" +
	"You still have roughly " + temp2 + " hours until you have to start getting around for work. What do you do?";
};

function reading() {
	time++;
	book = true;
	let temp = 0;
	
	switch(time) {
		case 1:
			temp = "5";
			break;
		case 2:
			temp = "4";
			break;
		case 3:
			temp = "3";
			break;
		case 4:
			temp = "2";
			break;
	}
	
	scene.innerHTML = "You flip on the lamp on your nightstand and grab the latest book you've been reading. Before you crack it open, you fluff your pillows against the headboard so that you can sit up properly. You can hear your doctor's words now, <i>You shouldn't do any activities in bed that aren't sleeping.</i> Well, what they didn't know wouldn't hurt them. You nestle into your blankets and listen to the satisfying sound of opening a paperback.<br><br>" +
	"You lose yourself in a story of heroics and adventure. Of sweeping plains and picturesque mountainscapes. The sound of rain is replaced by the rushing of wind through the trees and the sound of hooves on a dirt path. Birds flit overhead, their song fading in and out. Your eyes start to grow heavy and you find yourself re-reading the same sentence over and over again.<br><br>" +
	"When you realize that you've blinked and your eyes stayed closed for longer than normal, you decide it's time to put the book down. Fluffing your pillow and flicking off the light, you settle in again and let your eyes slide shut. Only now, you're envisioning riding through the forest on a pleasant spring day, the cool air against your skin and your horse warm beneath you.<br><br>" +
	"You drift, the sounds of the forest continuing to hum to life around you. After what feels like a long time, but is actually only a few minutes, you open your eyes again. You're a bit startled to see your usual bedroom and not the vibrant canopy of leaves.<br><br>With " + temp + " hours before work, what do you do?";
};

function walk() {
	time++;
	let temp = 0;
	
	switch (time) {
		case 4:
			temp = "8";
			break;
		case 5:
			temp = "9";
			break;
	}
	
	if (time == 1) {
		scene.innerHTML = "The sky outside is pitch black and other than the occasional car and the street lights, you can hardly make out the rain that you know is beating down on the house. The last thing you want to do is go out in it, but you also know that sitting around here isn't going to make you any more tired.<br><br>" +
		"Bundling up, you head for the door and snap open your umbrella into the spray outside. The wind threatens to tug it from your hands for a second, but you manage to hold on and take the first couple of tentative steps down the front walk.<br><br>" +
		"After a moment, you start to notice how peaceful it is. The rain isn't as threatening as it first seemed, gently bouncing off the material of your umbrella. You even find yourself smiling a bit as you start to head down the sidewalk. There's no one out, you haven't seen a single car since you stepped outside. There's no one to judge you for going for a walk at this time of night.<br><br>" +
		"You make it a decent distance, not even feeling tired yet, when something catches your eye. <i>There.</i> Something moved through the bushes up against that house. You stand still for a moment, eyes straining in the dark, until something comes bounding across the front yard at you. You jump-<br><br>" +
		"Until the creature lets out a plaintive meow and you really focus on it. The cat stops at your feet, pawing at your shoes before resting a paw against your leg. Deeming you safe enough, it begins to climb up your pant leg, clinging to you with claws and dripping wet fur. Your heart goes out to the small animal and you reach down to scoop it into the safety of your arms.<br><br>" +
		"Almost immediately, the cat starts purring. Turning back around, you head back home to get your new friend out of the rain. You hadn't planned on adopting a cat tonight, but you can't very well put him back in the bushes in this weather. Besides, he might just follow you home anyway.<br><br>" +
		"Back home, where it's dry and warm, you take the cat to the bathroom and towel it dry. It's affronted by your rough handling, but only complains loudly. Once they're dry enough, you dry out your own hair and change back into some dry pajamas. The cat follows you as you head into the kitchen next. While they don't look like they've been starved for any amount of time, you still decide to fish out a packet of tuna along with a ceramic dish to fill with water.<br><br>" +
		"Your new friend eats gratefully, and noisily. Maybe it has been some time since they've eaten last. Once they've polished off the tuna, you scoop them back up to show them the bedroom where you'll be sleeping. They're still a bit damp, but your not too concerned as you place them on the bed. Climbing into bed yourself, you watch them crawl around while sniffing your comforter. Eventually they find a spot they deem worthy and curl up to begin kneading.<br><br>" +
		"Your heart squeezes and you settle in to sleep. With the sound of the rain, and the sound of your new friend purring, you feel yourself drop off to sleep much faster than usual. Occasionally, you wake to the feeling of the cat nudging up against you, but you immediately slip back under afterwards.";
	} else if (time == 2 || time == 3) {
		scene.innerHTML = "It's still dark out, but you can see the early morning traffic starting to pick up from your window. The last thing you want is to go out there, but you still bundle up and make your way to the front door anyway.<br><br>" +
		"When you step outside and that first gust of wind hits you, you shiver. It's technically warm out here, but the lack of sleep has made you colder than usual. Popping open your umbrella, you tuck the collar of your jacket tighter around you and start down the sidewalk. You're starting to wonder what you're goal was with coming out here. You're too weary to really enjoy anything.<br><br>" +
		"After walking about a block, you drop onto a bench. The water coating the bench soaks into your clothing and you clutch your arms around yourself as you shiver. A car drives up the road, trying to slow as they near you, but it isn't quite slow enough. The puddle they drive through splashes up and over the sidewalk. It drenches your lower legs and your feet.<br><br>" +
		"You decide that that's quite enough and get up to head back home. Wet and cold, you trudge back inside. Tossing your dripping wet clothes into the washer, you head into the bathroom to warm yourself up. It's no small feat, waiting for the shower to turn warm, but you're grateful for it a moment later when you step into the spray.<br><br>" +
		"Luckily, the walk seems to have done it's job because your limbs and eyes feel heavy. You resist the urge to sit on the edge of the tub, knowing that you'll likely fall asleep if you do. Taking that as a good sign, you shut off the water, shivering at the loss of heat and hurry to change into your pajamas.<br><br>" +
		"It's a relief when you fall into bed and pull the blankets up to your chin. You close your eyes and wait for that warm, fuzzy haze to come over you.<br><br>And wait...<br><br><i>And</i> wait...<br><br>" +
		"Light starts to creep across the room as you continue to try and sleep. Your limbs are heavy, your eyes are sore, but you can't drop off to sleep. You can't even bring yourself to get up to try any other remedies. Feeling distraught, you continue to lay there and hope for sleep to come over you.";
	} else if (time == 4 || time == 5) {
		scene.innerHTML = "Despite the heavy storm clouds dumping rain on the city, it's still turning light outside. The pitch black darkness outside your window has slowly given way to weak gray light.<br><br>" +
		"You shuffle around, changing out of your sleep clothes and grabbing your rain coat. The house is dark when you head to the entry hall and open the door. The morning air is surprisingly warm as it curls around your ankles and tugs at your coat. You brave the first step out onto your front porch, pulling your door shut and listening to the lock catch." +
		"Popping open your umbrella, you step down and head onto the sidewalk. A couple of cars pass as you meander along, feeling that familiar ache and weight in your limbs from not sleeping all night. The chill of the rain splashing against your legs is almost enough to wake you up. But <i>just</i> almost.<br><br>" +
		"Sunlight peaks through gaps in the heavy cloud coverage, creating shimmering rainbows in the air and in the puddles. They distort and ripple as raindrops hit their surface.<br><br>You walk for a while before your feet grow too heavy and you stop to sit on a bench. The bench is wet, but you plan on showering and changing once you get home anyway. So, you sit, and glance out from underneath your umbrella. Rain drops bounce off your knee before soaking into the material. You sway a bit in place, your vision blurring slightly.<br><br>" +
		"Shaking your head, you yawn and stretch your arms, shivering at the feel of cold rain on your hands. After a few more minutes, you get back up and head back home. It's almost " + temp + " now and you'll have to start getting around soon.";
	}
	
	options.innerHTML = '<button class="choice" onclick="advanceStory(this)">Time for work!</button>';
};

function ending() {
	options.innerHTML = '';
	
	if (time == 0) {
		scene.insertAdjacentHTML("beforeend", "You wake feeling groggy and it’s hard to pry your eyes open. When you do, you glance at the clock, though it takes you longer than you would have liked to read what it says.<br><br>" +
		"Then you sit upright, your heart thundering as you realize that it’s past noon! You’re over 2 hours late for work! Throwing back your blanket, you grab your phone and realize that you have several missed calls. You scramble to hit the button to call them back as you make a mad dash for your closet.<br><br>" + 
		"If only you hadn’t taken those sleeping pills so late!<br><br>When you finally get into work, you stand there with your head hanging as your manager berates you in front of your coworkers. If they weren’t so short staffed, they would fire you. You try to protest, to remind them that you have insomnia and their face turns an unbecoming shade of fuschia. " +
		"Insomnia or not, you were supposed to be in for your shift and they had to scramble to cover it at the last minute. Even though you want to protest, you can’t. They can’t even tell you to forget it and go home because they need you.<br><br>" +
		"Feeling distraught, you get to work and hope that tonight will be better.")
		
	} else if (time == 1) {
		scene.innerHTML = "You wake to the sound of vibrating and a weight on your chest. For a moment, you panic and your eyes fly open. A ball of fluff with eyes stares back at you. Then it tucks its head and goes back to kneading your sternum.<br><br>Right. You picked up a cat last night. You blink dazedly and your eyes find the clock. It's almost 9, just before your alarm is set to go off. Surprisingly, you feel oddly well rested.<br><br>" +
		"Sitting up, you scoop the cat off to the side, giving them ample head scratches before slipping out of bed to get around for the day. The cat follows you as you head to the bathroom and makes a bed of the clothes you discard on the floor.<br><br>" +
		"Then it pads after you into the kitchen where you make yourself some coffee and toast. You aren't sure what cats eat, deciding to stop at a pet store after work, but you dig a can of chunked chicken out of the pantry for them for now. They purr as they eat and you find yourself smiling around a mouthful of toast.<br><br>" +
		"You're surprised to find yourself ready to go and walking out the door on time for once. The cat watches you from the back of the sofa, seeming not at all interested in the world beyond your front door now that they've experienced life indoors. You reach over to give them one last head scratch before heading out.<br><br>" +
		"When you get to work that morning, your manager comments on the fact that you're early for once and asks if everything is okay. You tell them about your new cat and they smile like you've never seen them smile before, excitedly whipping out their phone to show you cat pictures of their own. You spend the first half hour of your shift talking about cats with your manager and when you finally start working, you feel lighter than you have in a while.";
	} else if (time == 2 || time == 3) {
		scene.innerHTML = "Like most nights, you were awake more than you were asleep, and even when you did sleep, it wasn’t very deep or restful. Still, you managed to at least get some sleep. You nearly snooze your alarm when it starts going off, but the fear of being late to work has you dragging yourself out of bed instead.<br><br>" +
		"The hot shower you take to try to wake yourself up is all at once too long and too short. You definitely spent way too much time in there and now you’ll have to skip breakfast. Sighing, you pull on your clothes and head for the door.<br><br>" +
		"The drive to work is boring and you have to crank the music and roll down the window to stay awake.<br><br>" +
		"When you finally pull up and make it inside to clock in, you’re only a few minutes late. Not enough to earn you any tardy marks, but enough that your manager gives you one of their trademark ‘disappointed’ looks. Feeling glum, you get to work, hoping the day goes by quickly.";
	} else if (time == 4 || time == 5) {
		scene.innerHTML = "You did everything you possibly could have to try sleeping and, unfortunately, none of it helped. Still, you at least got some stuff done.<br><br>" +
		"Feeling sore and achey, you drag yourself through your morning routine. Even the coffee doesn’t seem to be having any effect. Reluctantly, you head to your car and climb in. Tossing your lunch bag on the seat and buckling in, you start to back out of your drive way.<br><br>" +
		"Only… your eyelids just feel so heavy, and your head is filled with fog. You blink, but it lasts longer than you intended and you’re jolted awake by the sound of something crashing.<br><br>" +
		"You panic, quickly pulling back into your driveway. Climbing back out, you go around the back of your car to find that the garbage bin is laying on its side. Sighing, you right the bin. Luckily, it’s empty. Though, now there’s a bit of a dent in it from where you backed into it. Examining your car, you’re glad to see that it hasn’t been damaged at all.<br><br>" +
		"That decides it. You can’t drive like this. Reluctantly, you punch your work contact as you grab your lunch bag out of the front seat and relock your car. You feel awful for calling off for such a silly reason, but can’t justify putting others in danger just to go to work.<br><br>" +
		"Your boss is annoyed, harping on about how many call offs you still have left before abruptly hanging up. On the way down the hall to your bedroom, you strip and then pull on your pajamas from where you left them. As you lay down in bed once again, you can hear the city waking up around you. Within minutes, you’re asleep.";
	}
};
