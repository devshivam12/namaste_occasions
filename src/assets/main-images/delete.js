document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	// const autoPlay = () => { 
	
	// 	if (window.innerWidth < 800) return; 
		
	// 	const totalCardWidth = carousel.scrollWidth; 
		
	// 	const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
	// 	if (carousel.scrollLeft >= maxScrollLeft) {carousel.scrollLeft = 0;} 
    //     else{carousel.scrollLeft += firstCardWidth;}
		
	// 	timeoutId = setTimeout(autoPlay, 2000); 
	// }; 

    const autoPlay = () => {
        // Scroll the carousel forward by one card width
        carousel.scrollLeft += firstCardWidth;
    
        // If the scroll position is greater than or equal to the total width of all cards,
        // reset the scroll position to the beginning to create a continuous loop
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
            carousel.scrollLeft = 0;
        }
    
        // Autoplay the carousel after every 500ms
        timeoutId = setTimeout(autoPlay, 500);
    };
    
    // Function to stop autoplay
    const stopAutoPlay = () => {
        clearTimeout(timeoutId);
    };
    
    // Add event listeners to all cards to stop autoplay when clicked
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', stopAutoPlay);
    });
    
    


	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	// arrowBtns.forEach(btn => { 
	// 	btn.addEventListener("click", () => { 
	// 		carousel.scrollLeft += btn.id === "left" ? 
	// 			-firstCardWidth : firstCardWidth; 
	// 	}); 
	// }); 
}); 
