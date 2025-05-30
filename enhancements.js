console.log('enhancements.js: Script started loading');

// Floating Action Button (FAB)
const fab = document.createElement('div');
fab.className = 'fab';
fab.innerHTML = '<i class="fas fa-plus"></i>';
const fabMenu = document.createElement('div');
fabMenu.className = 'fab-menu';
fabMenu.innerHTML = `
  <button id="share-btn">Share</button>
  <button id="top-btn">Back to Top</button>
`;
fab.appendChild(fabMenu);
document.body.appendChild(fab);

fab.addEventListener('click', () => {
  console.log('FAB clicked');
  fabMenu.style.display = fabMenu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('share-btn').addEventListener('click', () => {
  navigator.share({
    title: 'Crisis Resource Hub',
    text: 'Check out this helpful crisis resource hub!',
    url: window.location.href,
  }).then(() => console.log('Page shared'));
});

document.getElementById('top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  fabMenu.style.display = 'none';
});

console.log('enhancements.js: Setting up breathing exercise');

// Select elements
const breathingExercise = document.querySelector('.breathing-exercise');
const breathingCircle = document.querySelector('.breathing-circle');
const breathingIcon = document.querySelector('.breathing-icon');
const breathingControl = document.querySelector('.breathing-control');

// Log elements for debugging
console.log('Breathing Exercise:', breathingExercise);
console.log('Breathing Circle:', breathingCircle);
console.log('Breathing Icon:', breathingIcon);
console.log('Breathing Control:', breathingControl);

if (!breathingExercise || !breathingCircle || !breathingIcon || !breathingControl) {
  console.error('enhancements.js: One or more breathing exercise elements not found');
} else {
  let isBreathing = false;

  // Expand/collapse on click (original behavior)
  breathingExercise.addEventListener('click', () => {
    breathingExercise.classList.toggle('expanded');
    console.log('enhancements.js: Breathing exercise toggled');
  });

  // Start/Stop breathing animation
  breathingControl.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from toggling the parent
    isBreathing = !isBreathing;
    breathingControl.textContent = isBreathing ? 'Stop' : 'Start';

    if (isBreathing) {
      breathingCircle.style.animationPlayState = 'running';
      breathingIcon.style.animationPlayState = 'running';
      breathingExercise.classList.add('expanded'); // Ensure it stays expanded
      console.log('enhancements.js: Breathing animation started');
    } else {
      breathingCircle.style.animationPlayState = 'paused';
      breathingIcon.style.animationPlayState = 'paused';
      console.log('enhancements.js: Breathing animation stopped');
    }
  });

  // Ensure animations are paused initially
  breathingCircle.style.animationPlayState = 'paused';
  breathingIcon.style.animationPlayState = 'paused';

  console.log('enhancements.js: Breathing exercise event listeners attached');
}

console.log('enhancements.js: Script finished loading');


// Resource Card Checklist Fix
console.log('enhancements.js: Initializing resource card checklist behavior');

// Ensure all checklists are hidden on load using CSS class
document.querySelectorAll('.checklist').forEach(checklist => {
  checklist.classList.add('hidden');
  console.log('enhancements.js: Initialized checklist hidden:', checklist.id);
});

// Attach click handlers to each resource card
document.querySelectorAll('.resource-card').forEach((card, index) => {
  const checklist = card.querySelector('.checklist');
  if (!checklist) {
    console.error('enhancements.js: Checklist not found in resource card at index:', index);
    return;
  }

  console.log('enhancements.js: Attaching listener to card with checklist:', checklist.id);

  card.addEventListener('click', (e) => {
    // Ignore clicks inside the checklist
    if (e.target.closest('.checklist')) {
      console.log('enhancements.js: Click inside checklist, ignored:', checklist.id);
      return;
    }

    console.log('enhancements.js: Click detected on card with h3:', card.querySelector('h3').textContent);

    // Toggle the clicked card's checklist
    const isHidden = checklist.classList.contains('hidden');
    console.log('enhancements.js: Checklist isHidden:', isHidden, 'for:', checklist.id);

    if (isHidden) {
      // Close all other checklists
      document.querySelectorAll('.checklist').forEach(otherChecklist => {
        if (otherChecklist !== checklist) {
          otherChecklist.classList.add('hidden');
          console.log('enhancements.js: Closed other checklist:', otherChecklist.id);
        }
      });
      // Open the clicked checklist
      checklist.classList.remove('hidden');
      console.log('enhancements.js: Opened checklist:', checklist.id);
    } else {
      // Close the clicked checklist
      checklist.classList.add('hidden');
      console.log('enhancements.js: Closed checklist:', checklist.id);
    }
  });

  // Prevent checklist clicks from propagating
  checklist.addEventListener('click', (e) => {
    console.log('enhancements.js: Checklist click stopped on:', checklist.id);
    e.stopPropagation();
  });
});

console.log('enhancements.js: Resource card event listeners fully attached');


console.log('enhancements.js: Setting up resource card borders');

const resourceCards = document.querySelectorAll('.resource-card');
resourceCards.forEach(card => {
  const category = card.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');
  card.classList.add(`category-${category}`);
  console.log(`Added class category-${category} to card`);
});

console.log('enhancements.js: Resource card borders setup complete');
