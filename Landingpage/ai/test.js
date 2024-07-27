import { exec } from "child_process";
import fetch from "node-fetch";

// Global variable to store the Python server process handle
let pythonServerProcess = null;

// Function to start the Python server
function startPythonServer() {
  return new Promise((resolve, reject) => {
    pythonServerProcess = exec(
      "python c:\\Users\\kosul\\Desktop\\Landingpage\\Landingpage\\ai\\model.py",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error starting Python server: ${error.message}`);
          reject(error);
          return;
        }
        if (stderr) {
          console.error(`Python server stderr: ${stderr}`);
        }
        console.log(`Python server stdout: ${stdout}`);
      }
    );

    // Give the server a moment to start
    setTimeout(() => {
      resolve();
    }, 0); // Adjust this timeout if necessary
  });
}

// Function to get the prediction from the server
async function getPrediction(inputData) {
  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: inputData }),
    });

    const result = await response.json();
    console.log("Prediction:", result.prediction);
    return result.prediction;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to stop the Python server process
function stopPythonServer() {
  if (pythonServerProcess) {
    pythonServerProcess.kill(); // Kill the process
    console.log("Python server process stopped");
  } else {
    console.log("Python server process not found");
  }
}

// Main function
async function main() {
  try {
    await startPythonServer();
    const exampleInput = [700, 80, 120, 1000, 8, 1, 0, 1];
    const prediction = await getPrediction(exampleInput);
    console.log("Received prediction:", prediction);

    // Stop the server process after a short delay to ensure the request completes
    setTimeout(() => {
      stopPythonServer();
      process.exit(0); // Exit the Node.js process successfully
    }, 0); // Adjust this timeout if necessary
  } catch (error) {
    console.error("Error in main function:", error);
    process.exit(1); // Exit with error status code
  }
}

main();
