// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mysql, { ResultSetHeader } from 'mysql2/promise';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Create a connection to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Query the database
    const [rows] = await connection.execute<ResultSetHeader[]>('select id, Categoria from CategoriasProdutos;');

    // Close the connection
    await connection.end();

    // Return the data as JSON
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: error });
  }
}