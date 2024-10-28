import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;
const API_KEY = '4c45583379ac4970acff8104850e975d';

app.use(express.static('public'));

app.get('/news', async (req, res) => {
    const query = req.query.q || 'india';
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
