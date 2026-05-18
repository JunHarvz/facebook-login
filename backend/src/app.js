import express from 'express'
import cors from 'cors'
import xlsxPkg from 'xlsx';
import fs from 'fs'
import path from 'path'

const app = express();
const PORT = 3000;
const { readFile, utils, writeFile } = xlsxPkg;


app.use(cors())
app.use(express.json());

const EXCEL_FILE_PATH = path.resolve('form_submissions.xlsx');

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
  const {email, password} = req.body;

  const newRecord = {
    email: email,
    password: password
  }

  let workbook;
  let existingRows = [];

  if (fs.existsSync(EXCEL_FILE_PATH)) {
      // Read the existing file
      workbook = readFile(EXCEL_FILE_PATH);
      // Target the very first worksheet tab
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      // Convert current spreadsheet rows into an array of JS objects
      existingRows = utils.sheet_to_json(worksheet);
    } else {
      // If file doesn't exist, build a completely fresh workbook layout
      workbook = utils.book_new();
    }

    existingRows.push(newRecord);

    const updatedWorksheet = utils.json_to_sheet(existingRows);

    if (workbook.SheetNames.length > 0) {
      workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;
    } else {
      utils.book_append_sheet(workbook, updatedWorksheet, 'Submissions Log');
    }
  
    writeFile(workbook, EXCEL_FILE_PATH);

    console.log('Successfully recorded new entry to Excel!');
    return res.status(200).json({ status: 'success', message: 'Data logged successfully!' });
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173'
}));