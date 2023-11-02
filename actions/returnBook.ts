'use server'

import { revalidatePath } from 'next/cache'

export default async function returnBook(formData: FormData) {
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection({host:'localhost', user: 'api', password: 'password', database: 'library'});
  const updateCmd = 'update book set borrowed = 0 where title =  "' + formData.get('return') + '"';
  await connection.execute(updateCmd); 
  revalidatePath('/', 'page');
}
