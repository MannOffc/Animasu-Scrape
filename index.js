const express = require('express'), cors = require('cors');
const { search } = require("./animasu.js")
const app = express();
const PORT = process.env.PORT || 3000;
app.enable("trust proxy");
app.set("json spaces", 2);

// Middleware untuk CORS
app.use(cors());

// Endpoint untuk search
app.get('/search', async (req, res) => {
try {
  let q = req.query.message;
  if (!q) {
    return res.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await search(q);
  res.status(200).json(mannr)
} catch (e) {
  res.status(500).json({ error: e.message });
}
})

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app
