function allservices() {
    window.location.href = "services.html";
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
  function diy() {
    window.location.href = "diy.html";
  }

  // When the user scrolls the page, execute myFunction
window.onscroll = function () {
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



  $(document).ready(function () {
    $(".nav-toggle-btn").click(function () {
      $(".dropdown-menu").toggleClass("show");
    });
  });