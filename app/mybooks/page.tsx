import BookGrid from "@/components/BookGrid";
import returnBook from "@/actions/returnBook";

async function getData() {
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection({host:'localhost', user: 'api', password: 'password', database: 'library'});
  const [rows, fields] = await connection.execute('SELECT title, author, TO_BASE64(cover_image) as cover_image, borrowed FROM book where borrowed=1 ORDER BY title'); 
  return rows;
}

export default async function Page() {
  const books = await getData();

  return(
    <BookGrid books={books} formName='return' formAction={returnBook}></BookGrid>
  )
}
