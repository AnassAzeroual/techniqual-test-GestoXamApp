const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let items = [];

app.get('/api/exams', (req, res) => {
  res.json(items);
});

app.post('/api/exams', (req, res) => {
  const newItem = req.body;
  newItem.id = new Date().getTime();
  items.push(newItem);
  res.status(201).json(newItem);
});

// Endpoint to get a specific exam by ID
app.get('/api/exams/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === id);
  item ? res.json(item) : res.status(404).send('Exam not found');
});

app.put('/api/exams/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    const updatedItem = { ...items[index], ...req.body };
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Exam not found');
  }
});

app.delete('/api/exams/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Exam not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});