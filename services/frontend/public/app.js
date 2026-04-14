const BASE_URL = "http://safedeploy-alb-backend-1332209818.us-east-1.elb.amazonaws.com";

async function checkHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    const data = await res.text();
    document.getElementById("healthOutput").innerText = "Health: " + data;
  } catch (err) {
    document.getElementById("healthOutput").innerText = "Error connecting backend";
  }
}

async function getMessage() {
  try {
    const res = await fetch(`${BASE_URL}/api/messages`);
    const data = await res.text();
    document.getElementById("messageOutput").innerText = data;
  } catch (err) {
    document.getElementById("messageOutput").innerText = "Error fetching message";
  }
}
