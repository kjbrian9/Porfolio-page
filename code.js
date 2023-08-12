function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) { //goes through every .reveal element
      var windowHeight = window.innerHeight;  //checks the height of the window
      var elementTop = reveals[i].getBoundingClientRect().top; //get the upper edge position of the element
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) { // check if the window height hides the upper edge position of the element
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  window.addEventListener("scroll", reveal); 

  // To check the scroll position on page load
  reveal();