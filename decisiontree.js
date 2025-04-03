const quizFlow = {
	q1: {
		question: "<strong>Q1:</strong> Would you prefer to code your website?<br>(i.e. HTML, CSS, or another programming language. If you don’t know what these languages are or how to use them, select no and go to the next question.)",
		answers: {
			yes: "q2",
			no: "q3"
		}
	},
	q2: {
		question: "Do you want to create the files separately or within the hosting platform?",
		answers: {
			separately: "result_godaddy",
			within: "result_githubpages"
		}
	},
	q3: {
		question: "Do you want to use a template or design the layout on your own?",
		answers: {
			design: "q4",
			template: "q5"
		}
	},
	q4: {
		question: "Would you prefer simplified (block based) or advanced (snap-to-grid elements) editing features?",
		answers: {
			simplified: "result_weebly",
			advanced: "result_wix"
		}
	},
	q5: {
		question: "Would you want blogging capabilities?",
		answers: {
			yes: "q6",
			no: "result_googlesites"
		}
	},
	q6: {
		question: "Do you prefer more text heavy content, or is your content more multimedia based?",
		answers: {
			text: "result_wordpress",
			media: "result_squarespace"
		}
	},
	result_godaddy: {
		result: "GoDaddy is a hosting platform that allows you to upload your html/css and other files. There is a monthly cost of $9.99-20.99."
	},
	result_githubpages: {
		result: "Github Pages allows you to create and edit files right within their platform at no cost. All code posted to Github is open source, however."
	},
	result_weebly: {
		result: "Weebly has free web hosting with simplified block based design tools to allow even beginner designers to create professional looking websites."
	},
	result_wix: {
		result: "Wix has free web hosting with more advanced drag and drop tools for even more customization for those who prefer to get into the details of their design."
	},
	result_googlesites: {
		result: "Google Sites is a simple, template based website builder provided for free through the suite of Google Applications."
	},
	result_wordpress: {
		result: "Wordpress is a mostly text based platform with a variety of templates to choose from. There are plugins for added functionality, but they aren’t necessary to get the site up and running."
	},
	result_squarespace: {
		result: "Squarespace is usually made for ecommerce, but it’s also just a simple template based platform that has drag and drop features to easily add images and videos to your website."
	}
};
const restartBtn = document.getElementById('restart-btn');

let currentNode = 'q1';

function renderNode(nodeKey) {
	const node = quizFlow[nodeKey];
	const questionText = document.getElementById('question-text');
	const answersDiv = document.getElementById('answers');
	answersDiv.innerHTML = "";

	if (node.result) {
		questionText.innerHTML = node.result;
		restartBtn.style.display = 'block';
		return;
	}
		
	restartBtn.style.display = 'none';
	questionText.innerHTML = node.question;
	
	for (const [answerText, nextNode] of Object.entries(node.answers)) {
		const btn = document.createElement('button');
		btn.textContent = answerText;
		btn.classList.add('quiz-btn');
		btn.onclick = () => {
			renderNode(nextNode);
		};
		answersDiv.appendChild(btn);
	}
}

restartBtn.onclick = () => {
	renderNode('q1');
};

renderNode(currentNode);
