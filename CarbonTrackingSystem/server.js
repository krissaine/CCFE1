const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.get('*', (request, response) => {
	const status = {
		Status: "Running"
	};

	response.send(status);;
});

// Serve static files from the 'dist/your-angular-app-name' directory
app.use(express.static(path.join(__dirname, 'dist/carbon-tracking-system')));

Handle all routes and return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/carbon-tracking-system/browser/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});

app.post("/signup", (request, response) => {
	console.log(JSON.stringify(request));

	response.send('OK');
});
