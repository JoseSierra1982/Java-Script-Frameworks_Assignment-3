// Importing Express framework (uses ES modules)
import express from 'express';
// Importing JSON data with a special directive for ES modules
import data from './data/topVisit.json' with { type: 'json' };
// Create an Express app instance
const app = express();
// Set the port number for the server to listen on
const PORT = 3000;
// Define a route at /visits to display the top visited places
app.get('/visits', (req, res) => {
  // Start building the HTML response
  let html = '<h1>Top Visited Places in Canada</h1><ul>';
  // Counter for labeling landmarks
  let LandMark = 1;
  // Loop through each place in the JSON data
  data.forEach(page => {
    // Add each place as a list item in the HTML
    html += `<li>LandMark ${LandMark++} : ${page.name} - Province: ${page.province} - Entry Fee: ${page.entryFee}</li>`;
  });
  // Close the HTML list
  html += '</ul>';
  // Send the completed HTML as a response to the browser
  res.send(html);
});
// Start the server and log a message to the console
app.listen(PORT, () => {
  console.log(`App2 Server Running on : http://localhost:${PORT}/visits`);
});