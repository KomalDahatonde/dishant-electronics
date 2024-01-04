// JavaScript to trigger the animation on page load
window.addEventListener('load', function() {
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('to-animate');
    }, index * 200); // Adjust the delay if needed
  });
});

window.addEventListener('load', function() {
  const listItems = document.querySelectorAll('.info-item');
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('to-animate');
    }, index * 200); // Adjust the delay if needed
  });
});

window.addEventListener('load', function() {
  const listItems = document.querySelectorAll('.home-anim-left-div');
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('to-animate');
    }, index * 200); // Adjust the delay if needed
  });
});

window.addEventListener('load', function() {
  const listItems = document.querySelectorAll('.home-anim-right-div');
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('to-animate');
    }, index * 200); // Adjust the delay if needed
  });
});