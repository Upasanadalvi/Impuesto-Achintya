// Find all links
const links = document.querySelectorAll('a');

// Attach event to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Stop instant navigation

    const href = this.getAttribute('href'); // Save the link target

    // Add fade-out class
    document.body.classList.add('fade-out');

    // Wait for the animation to finish, then navigate
    setTimeout(() => {
      window.location.href = href;
    }, 500); // Match this time with CSS transition time
  });
});

// When page loads, ensure it fades in
window.addEventListener('load', () => {
  document.body.classList.remove('fade-out');
});
