/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Timeline JS */

const SIDENAV_NAME = 'mySidenav';

/**
 * This functions generates the panel inside the sidenav, and attatches ids to the headings for them to be clickable.
 */
function createTimeline(headingSelector, toggleText) {
	const headings = Array.from(document.querySelectorAll(headingSelector));
	if (headings.length < 2) return; // We don't want to create a 'timeline' for websites under 2 titles

	const sidenav = document.querySelector(`#${SIDENAV_NAME}`);
	if (!sidenav) return; // Don't bother if there isn't a sidenav

	const {
		panelContainer,
		panelToggle,
		panelBody
	} = buildPanel(toggleText);

	headings.forEach((heading, index) => {
		const slug = `section-${slugify(heading.textContent)}` || `section-${index}`;
		heading.id = slug;

		const link = document.createElement('a');
		link.href = `#${slug}`;

		const label = document.createElement('span');
		label.textContent = heading.textContent;

		link.appendChild(label);

		panelBody.appendChild(link);
	});

	sidenav.appendChild(document.createElement('br'));
	sidenav.appendChild(document.createElement('br'));
	sidenav.appendChild(panelToggle);
	sidenav.appendChild(panelContainer);
}

/**
 * Generates the list item for the sidenav to be colocated inside the page.
 * @param {string} titleText - The text to display on the toggle button
 * @returns {object} - Returns the toggle (the menu element that toggles the
 * visibility of the panel), body and it's container (that has every item in the timeline)
 */
function buildPanel(titleText) {
	const panelContainer = document.createElement('div');
	panelContainer.classList.add('panel-container');

	const panelTitle = document.createElement('div');
	panelTitle.classList.add('panel-title');

	const panelBody = document.createElement('div');
	panelBody.classList.add('panel-body');
	panelContainer.append(panelBody);

	const panelToggle = document.createElement('a');
	panelToggle.id = `panel-toggle`;
	panelToggle.href = '#';

	panelToggle.addEventListener('click', function(e) {
		e.preventDefault();
		panelToggle.classList.toggle('active');
		panelContainer.classList.toggle('open');
	});

	const panelLabel = document.createElement('span');
	panelLabel.textContent = titleText;
	panelToggle.append(panelLabel);
	panelTitle.append(panelToggle);

	return {
		panelContainer,
		panelToggle,
		panelBody
	};
}

/**
 * This transform a string into a more URL-friendly slug.
 * @param {string} str - The string to be transformed 
 * @returns {string} The sanitized string
 */
function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
           .replace(/\s+/g, '-') // replace spaces with hyphens
           .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}

document.addEventListener("DOMContentLoaded", function(event) { 
  // Default configuration
  var headingSelector = 'h2, h3, .date';
  var toggleText = 'Timeline';

  switch(window.location.pathname.split('/').pop().split('.')[0]){
	case 'vocespopuli':
		headingSelector = 'img.avatar + p';
		toggleText = 'Submissions';
		break;
  }
  createTimeline(headingSelector, toggleText);

  // This animates the scrolling inside the document.
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href');
      if (href == "#") return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        history.pushState(null, '', href);
      }
    });
  });
});