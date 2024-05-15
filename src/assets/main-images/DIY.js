function diy() {
  window.location.href = "diy.html";
}
function bookevent() {
  window.location.href = "booking.html";
}
function joinus() {
  window.location.href = "joinus.html";
}
function contact() {
  window.location.href = "contact.html";
}
function index(){
  window.location.href = "index.html";
}




window.onload = function() {
  window.onscroll = function() {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
};
  // Card Slider


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
  
      const autoPlay = () => {
          // Scroll the carousel forward by one card width
          carousel.scrollLeft += firstCardWidth;
      
          // If the scroll position is greater than or equal to the total width of all cards,
          // reset the scroll position to the beginning to create a continuous loop
          if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
              carousel.scrollLeft = 0;
          }
      
          // Autoplay the carousel after every 500ms
          timeoutId = setTimeout(autoPlay, 2500);
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
  }); 
  











