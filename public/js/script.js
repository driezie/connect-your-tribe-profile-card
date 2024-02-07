function turn() {
    document.getElementById("card").classList.toggle("turned");    
    // This toggles the inert attribute on the back and front of the card to be active for a focus
    document.querySelector(".back").toggleAttribute("inert");
    document.querySelector(".front").toggleAttribute("inert");
}

function iniFollowCursor() {
	// de te volgen elementen opzoeken --> de li's
	elements = document.querySelectorAll("body");
	
	// elke li in de array laten luisteren naar mousemoves
	elements.forEach( (element) => {
		element.addEventListener("mousemove", updateMouseLocalCoor);
	});
}


function updateMouseLocalCoor(e){
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	const element = e.currentTarget;
	const elementRectangle = element.getBoundingClientRect();
	
	let elementWidth = elementRectangle.width;
	let elementHeight = elementRectangle.height;
    
	
	// de top en left opslaan
	let elementLeft = elementRectangle.left;
	let elementTop = elementRectangle.top;
	
	let elementMouseX = mouseX - elementLeft;
	let x = elementMouseX / elementWidth;
	
	// zelfde voor y
	let elementMouseY = mouseY - elementTop;
	let y = elementMouseY / elementHeight;
	
    console.log(x * 100);
    console.log(y * 100);
	element.style.setProperty("--element-mouse-x", x * 100);
	element.style.setProperty("--element-mouse-y", y * 100);
}

// het volgen starten
iniFollowCursor();