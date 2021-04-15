async function windowActions() {
  const request = await fetch('/api/dining');
  const data = await request.json();
  document.getElementById("insert").innerHTML = data;
}

window.onload = windowActions

