import Book from '../model/Book';
import Image from 'next/image'
import updateBook from '../actions/updateBook'

interface BookProps {
  book: Book
}

export default function BookItem( { book } : BookProps ) {
  return (
    <>
      <div className="p-2 flex justify-center">
        <Image className="items-center"
          src={`data:image/avif;base64,${book.cover_image}`}
          width="242"
          height="363"
          alt={book.title}
        />
      </div>
      <div className="p-2 text-center">{book.title}</div>
      <div className="p-2 text-center">{book.author}</div>
      <form action={updateBook} className="p-2 flex justify-center">
        <button name="borrow" value={book.title} disabled={book.borrowed === 1 ? true : false}
          className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded items-center">Borrow</button>
      </form>
    </>
  )
}