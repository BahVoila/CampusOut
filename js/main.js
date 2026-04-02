// ── FETCH EVENTS ──
let events = [];

async function loadEvents() {
  try {
    const response = await fetch('data/events.json');
    const data = await response.json();
    events = data.events;
    init();
  } catch (error) {
    console.error('Error loading events:', error);
  }
}

loadEvents();

// Original functions from campusout.html adapted to work with fetched data

// Example structure to add original script functionality:
// function init() {
//   // State management, rendering, filtering, saving, modal, export functionality...
// }
// 
// ... rest of the code ...
