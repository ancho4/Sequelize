async function windowActions() {
    const request = await fetch('/api/dining');
    const data = await request.json();
    console.log(response);
  }

  window.onload = windowActions