'use server'

import { revalidatePath } from 'next/cache'

export default async function returnBook(formData: FormData) {
  try {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({host:process.env.DB_HOST, user:process.env.DB_USER, password:process.env.DB_PASS, database: 'library'});
    const updateCmd = 'update book set borrowed = 0 where title =  "' + formData.get('return') + '"';
    await connection.execute(updateCmd); 
    revalidatePath('/', 'page');
  }  
  catch {
  }
}
