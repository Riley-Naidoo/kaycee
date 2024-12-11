const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const linkNavs = document.querySelectorAll('.link-nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// Create an Intersection Observer instance
var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    // Check if the progress bar is in the viewport
    if (entry.isIntersecting) {
      var bar = entry.target.querySelector('.progresss');
      var width = bar.getAttribute('data-width'); // Get target width from the data attribute
      bar.style.width = width; // Animate the progress bar to its target width
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe each progress-bar-container
var progressContainers = document.querySelectorAll('.progress-bar-container');
progressContainers.forEach(function(container) {
  observer.observe(container);
});

function redirectToPage(value) {
  if (value) {
    window.location.href = value;
  }
}


linkNavs.forEach(linkNav => {
  linkNav.addEventListener('click', () => {
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active'); // Close the menu
  });
});
