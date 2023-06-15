const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index'.html, {title: 'Home'});
});

app.get('/about', (req, res) => {
  res.render('about.html');
});

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
