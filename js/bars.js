
  // Function to handle the intersection observation
  function animateProgressBar(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // When the progress bar is in view, set the width to the defined percentage
        var progress = entry.target.querySelector('.progresss');
        var width = progress.getAttribute('data-width'); // Get the custom width value
        
        // Animate the width
        progress.style.width = width;

        // Once the animation is complete, stop observing the element
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer
  var observer = new IntersectionObserver(animateProgressBar, {
    threshold: 0.5 // Trigger animation when 50% of the element is in view
  });

  // Target all progress bars
  var progressBars = document.querySelectorAll('.progress-bar-container');
  
  // Set the data-width attribute and observe the progress bar
  progressBars.forEach(function(bar) {
    var progress = bar.querySelector('.progresss');
    var width = progress.innerText;  // Use innerText to get the percentage in text (e.g., "95%")
    progress.setAttribute('data-width', width);  // Set the data-width attribute
    
    observer.observe(bar);  // Start observing the progress bar container
  });
