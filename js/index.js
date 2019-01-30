// Your code goes here
logoHeading = document.querySelector('.logo-heading');
//  This two event listeners work together to change the
//  color of the header and make it bigger when hover over
//  and getting back to its original state once hover out

//////////////////////////////////////////////////////////////////////////
logoHeading.addEventListener('mouseover', e => e.target.classList.add('logoHeading'));
//////////////////////////////////////////////////////////////////////////
logoHeading.addEventListener('mouseleave', e => e.target.classList.remove('logoHeading'));
//////////////////////////////////////////////////////////////////////////
navBar = document.querySelector('.nav');
//  Rotates the entire nav bar at keydown
// first you need to put cursor at any nav item
navBar.addEventListener('keydown', function(){
    this.classList.add('navBar');
    console.log('navBar');
})
//////////////////////////////////////////////////////////////////////////
// Double click to any nav item change font color to blue
navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('dblclick', e => {e.target.style.color = 'Blue';})
})
//////////////////////////////////////////////////////////////////////////
// You can drag 'Welcome to Fun BUS, it will disappear for 2 sec
introH2 = document.querySelector('.intro h2');
introH2.addEventListener('drag', function(){
    this.classList.add('introH2');
})
//////////////////////////////////////////////////////////////////////////
// Once you click Home button
const homeButton = document.querySelector('.nav-link.home')
homeButton.addEventListener('click', e => {
    console.log(`Home button fired a click event!`);
    // ALL about stopping events from bubbling
    e.stopPropagation();
  });
//////////////////////////////////////////////////////////////////////////
// Everytime it reloads
window.addEventListener('load', () => {
	alert('All loaded!');
});
//////////////////////////////////////////////////////////////////////////
// Dont scroll too hard
window.addEventListener('scroll', (item) => {
    //alert('Why I am being Scrolled ?? ? ??');
    console.log('Why I am being Scrolled ?? ? ??');
 
});
//////////////////////////////////////////////////////////////////////////
const header = document.querySelector('.main-navigation');
window.addEventListener('resize', (item) => {
    header.style.backgroundColor = 'pink';
});
//////////////////////////////////////////////////////////////////////////
const imgs = document.querySelector('.img-content');
// only works for adventure image
//tried forEach, didnt work
imgs.addEventListener('dragstart', () => {
	alert('Stop dragging me!!!');
});
//////////////////////////////////////////////////////////////////////////
// event propagation

introH2.addEventListener('dblclick', (item) => {
	item.stopPropagation();
	introH2.style.backgroundColor = 'Pink';
	alert('You just successfully stopped Propagation!');
});
//////////////////////////////////////////////////////////////////////////
///preventDefault()`
navItems.forEach(item =>
    item.addEventListener('click', (item) => {
        item.preventDefault;
        console.log('Default prevented');
    })
    );