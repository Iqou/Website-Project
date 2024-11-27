    //
    
// JavaScript to add a class when scrolling down
window.addEventListener("scroll", function() {
    const scrolled = window.scrollY > 0; // Adjust this value based on when you want the effect to trigger
    document.body.classList.toggle("scrolled", scrolled);
  });


// Javascript to zoom image when clicking on image element
  document.getElementById('zoomImage').addEventListener('click', function() {
    this.classList.toggle('zoomed');
});