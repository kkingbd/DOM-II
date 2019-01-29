// Your code goes here
logoHeading = document.querySelector('.logo-heading');
//  This two event listeners work together to change the
//  color of the header and make it bigger when hover over
//  and getting back to its original state once hover out


logoHeading.addEventListener('mouseover', e => e.target.classList.add('logoHeading'));
logoHeading.addEventListener('mouseleave', e => e.target.classList.remove('logoHeading'));

navBar = document.querySelector('.nav');
//  Rotates the entire nav bar at keydown
navBar.addEventListener('keydown', function(){
    this.classList.add('navBar');
    console.log('navBar');
})
navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('dblclick', e => {e.target.style.color = 'Blue';})
})

introH2 = document.querySelector('.intro h2');

introH2.addEventListener('drag', function(){
    this.classList.add('introH2');
    preventDefault();
})

allParagraphs = document.querySelectorAll('p');

const homeButton = document.querySelector('.nav-link.home')
homeButton.addEventListener('click', e => {
    alert(`Home button fired a click event!`);
    // ALL about stopping events from bubbling
    //e.stopPropagation();
  });
  