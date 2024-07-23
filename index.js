/**
  * Made by MannR
  * ini cr woila jan didelete
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/

const express = require('express'), cors = require('cors');
const { search, donghua_list, popular_list, top_list } = require("./animasu.js")
const app = express();
const PORT = process.env.PORT || 3000;
app.enable("trust proxy");
app.set("json spaces", 2);

// Middleware untuk CORS
app.use(cors());

// Endpoint untuk search
app.get('/search', async function(a, b) {
try {
  let { q } = a.query;
  if (!q) {
    return b.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await search(q);
  b.status(200).json(mannr);
} catch (e) {
  b.status(500).json({ error: e.message });
}
})

// Endpoint untuk donghualist
app.get('/donghualist', async function(a, b) {
try {
  let { q } = a.query;
  if (!q) {
    return b.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await donghua_list(q);
  b.status(200).json(mannr);
} catch (e) {
  b.status(500).json({ error: e.message });
}
})

// Endpoint untuk ongoing
app.get('/ongoing', async function(a, b) {
try {
  let { q } = a.query;
  if (!q) {
    return b.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await ongoing(q);
  b.status(200).json(mannr);
} catch (e) {
  b.status(500).json({ error: e.message })
}
})

// Endpoint untuk popularlist
app.get('/popularlist', async function(a, b) {
try {
  let { q } = a.query;
  if (!q) {
    return b.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await popular_list(q);
  b.status(200).json(mannr);
} catch (e) {
  b.status(500).json({ error: e.message })
}
})

// Endpoint untuk toplist
app.get('/toplist', async function(a, b) {
try {
  let { q } = a.query;
  if (!q) {
    return b.status(400).json({ error: 'Parameter "q" tidak ditemukan' });
  }
  let mannr = await top_list(q);
  b.status(200).json(mannr);
} catch (e) {
  b.status(500).json({ error: e.message })
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
