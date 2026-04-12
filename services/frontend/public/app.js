const BASE_URL = "http://localhost:3000";

async function checkHealth() {
  try {
    console.log("Calling backend...");

    const res = await fetch(`${BASE_URL}/health`);
    const data = await res.text();

    document.getElementById("output").innerText = "Health: " + data;
  } catch (err) {
    console.error("ERROR:", err);
    document.getElementById("output").innerText = "Error connecting backend";
  }
}

async function getMessage() {
  try {
    const res = await fetch(`${BASE_URL}/api/message`);
    const data = await res.json();

    document.getElementById("output").innerText = data.message;
  } catch (err) {
    console.error(err);
    document.getElementById("output").innerText = "Error fetching message";
  }
}