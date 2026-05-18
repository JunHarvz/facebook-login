import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

// 1. A basic GET route (tells the server what to send back when someone visits the homepage)
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js backend!');
  console.log('test')
});

// 2. An API GET route that returns JSON data
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Alex Developer',
    role: 'Backend Engineer'
  });
});

// 3. A POST route (used when a client wants to send data TO the server)
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  
  res.json({
    message: 'Data received successfully!',
    yourData: receivedData
  });
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173'
}));