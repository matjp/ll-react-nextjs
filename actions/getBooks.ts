'use server'

import Book from "@/model/Book";

export async function getBooks(): Promise<Book[]> {
  try {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({host:process.env.DB_HOST, user:process.env.DB_USER, password:process.env.DB_PASS, database: 'library'});
    const [rows, fields] = await connection.execute('SELECT title, author, TO_BASE64(cover_image) as cover_image, borrowed FROM book ORDER BY title'); 
    return rows as Book[];
  }  
  catch (error) {
      return [];
  }
}