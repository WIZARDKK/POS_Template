import express, { Request, Response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 5000; // Port for backend server

app.use(cors());
app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Use your MySQL username
  password: 'Kasun123@',  // Use your MySQL password
  database: 'pos_system_db',
});

// Sample route to test the server
app.get('/', (req: Request, res: Response) => {
  res.send('POS Backend Running');
});

// Start the backend server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
