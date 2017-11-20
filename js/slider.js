var slides = []; // Stores the list of slides
var currentSlide = 0; // Slide we're viewing
var lastSlide = 0; // The last slide in the list
var timer = 0; // When the timer reaches 3, we automatically go to the next slide

// This function resets our slides
function clearClasses() {
    //Loop through each slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("animate"); // Remove the following CSS classes
        slides[i].classList.remove("current");
        slides[i].classList.remove("next");
        slides[i].classList.remove("current-reverse");
        slides[i].classList.remove("next-reverse");
    }
}

// This function makes the slider go forward one
function sliderNextSlide() {
    var nextSlide = currentSlide + 1;
    
    // If we reach the end, loop around
    if (currentSlide == lastSlide) {
        nextSlide = 0;
    }
    
    clearClasses();
    
    // Add the current and next CSS classes
    slides[currentSlide].classList.add("current");
    slides[nextSlide].classList.add("next");
    
    // Wait 50 milliseconds to let the HTML and CSS update
    setTimeout(function() { 
        slides[currentSlide].classList.add("animate"); // Add the animate CSS classes so they start moving
        slides[nextSlide].classList.add("animate");   
        currentSlide = nextSlide; // This is now the current slide.
    }, 50);
    
    timer = -5; // The timer now waits longer to move to the next to give the user time to read
}


// This function makes the slider go backwards one
function sliderPrevSlide() {
    var nextSlide = currentSlide - 1;
    
    // If we are on the first slide, loop around
    if (currentSlide == 0) {
        nextSlide = lastSlide;
    }
    
    clearClasses();
    
    // Add the current-reverse and next-reverse classes
    slides[currentSlide].classList.add("current-reverse");
    slides[nextSlide].classList.add("next-reverse");
    
    // Wait 50 milliseconds to let the HTML and CSS update
    setTimeout(function() { 
        slides[currentSlide].classList.add("animate"); // Add the animate CSS classes so they start moving
        slides[nextSlide].classList.add("animate");   
        currentSlide = nextSlide; // This is now the current slide
    }, 50);
    
    timer = -5; // The timer now waits longer to move to the next to give the user time to read
}

// Call this code ever 1000 milliseconds (1 second)
setInterval(function() {
    // If the timer hits 3 seconds, then go to the next slide. 
    if (timer == 3) {
        sliderNextSlide();
        timer = 0; // Make the timer shorter now that they aren't reading
    } else {
        timer = timer + 1; // Increase the timer by one.
    }
}, 1000); // 1000 milliseconds