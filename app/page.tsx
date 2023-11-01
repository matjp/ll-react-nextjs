import BookGrid from "@/components/BookGrid";

async function getData() {
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection({host:'localhost', user: 'api', password: 'password', database: 'library'});
  const [rows, fields] = await connection.execute('SELECT title, author, TO_BASE64(cover_image) as cover_image, borrowed FROM book ORDER BY title'); 
  return rows;
}

export default async function Page() {
  const books = await getData();

  return(
    <BookGrid books={books}></BookGrid>
  )
}
