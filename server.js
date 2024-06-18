const express = require('express');
const cors = require('cors');
const { generateRandomArray } = require('./utils/generateRandomArray');
const { sumArrayInParallel } = require('./utils/sumArrayParallel');
const { highestOccurrence } = require('./optional/highestOccurrence');
const { averagePair } = require('./optional/averagePair');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/highest-occurrence', (req, res) => {
    
    const response = highestOccurrence(req.body.data);
    res.json(response);
});



app.post('/average-pair', (req, res) => {
    const { input, target } = req.body;
    console.log(req.body)
    if (!Array.isArray(input) || typeof target !== 'number') {
        return res.status(400).json({ error: 'Invalid input or target' });
    }

    const result = averagePair(input, target);
    res.json({ result });
});


app.post('/generate-and-sum', async (req, res) => {
    const count = req.body.count;

    if (!count || typeof count !== 'number' || count <= 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const numbers = generateRandomArray(count, 1000);
    const batchSize = count / 10;

    try {
        const totalSum = await sumArrayInParallel(numbers, batchSize);
        res.json({ totalSum });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
