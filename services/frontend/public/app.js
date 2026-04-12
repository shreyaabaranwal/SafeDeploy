const BASE_URL = "http://localhost:3000";

async function checkHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    const data = await res.text();
    document.getElementById("output").innerText = "Health: " + data;
  } catch (err) {
    document.getElementById("output").innerText = "Error connecting backend";
  }
}

async function getMessage() {
  try {
    const res = await fetch(`${BASE_URL}/api/messages`);
    const data = await res.text();   // ✅ IMPORTANT
    document.getElementById("output").innerText = data;
  } catch (err) {
    document.getElementById("output").innerText = "Error fetching message";
  }
}