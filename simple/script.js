fetch('https://api.example.com/items')
  .then(response => response.json())
  .then(items => {
    // Get the container element
    const container = document.getElementById('items');
    // Loop through the items
    for (const item of items) {
      // Create a new element for each item
      const itemElement = document.createElement('div');
      itemElement.innerHTML = item.name;
      container.appendChild(itemElement);
    }
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
  