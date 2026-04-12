const BASE_URL = ""; 
// leave empty if using ALB

async function checkHealth() {
  const res = await fetch(`${BASE_URL}/health`);
  const data = await res.text();
  document.getElementById("output").innerText = "Health: " + data;
}

async function getMessage() {
  const res = await fetch(`${BASE_URL}/api/message`);
  const data = await res.json();
  document.getElementById("output").innerText = data.message;
}