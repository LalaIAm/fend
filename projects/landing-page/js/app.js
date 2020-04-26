/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const nodeList = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');

console.log(nodeList);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function createNav() {
	for (let i = 0; i < nodeList.length; i++) {
		let data = nodeList[i].getAttribute('data-nav');
		let id = nodeList[i].getAttribute('id');
		let anchor = document.createElement('a');

		anchor.textContent = data;
		anchor.setAttribute('class', 'menu__link');
		anchor.setAttribute('href', `#${id}`);
		let li = document.createElement('li');
		li.appendChild(anchor);

		nav.appendChild(li);
	}
}

createNav();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
const setActive = () => {
	for (let i = 0; i < nodeList.length; i++) {
		let section = nodeList[i];
		let sectionRect = section.getBoundingClientRect();
		let sectionOffsetTop = sectionRect.top + window.pageYOffset;
		let sectionOffsetBottom = sectionRect.bottom + window.pageYOffset;

		section.parentNode.style.height = sectionRect.height + 'px';

		console.log(sectionOffsetTop);
		console.log(sectionOffsetBottom);
	}
};

setActive();
