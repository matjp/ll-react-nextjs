'use server'

export default async function updateBook(formData: FormData) {
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection({host:'localhost', user: 'api', password: 'password', database: 'library'});
  const updateCmd = 'update book set borrowed = 1 where title =  "' + formData.get('borrow') + '"';
  await connection.execute(updateCmd); 
}
