'use client'

import { useState } from 'react';
import Book from '../model/Book';
import Image from 'next/image'

interface BookProps {
  book: Book
}

export default function BookItem( { book } : BookProps ) {

    const [borrowed, setBorrowed] = useState(book.borrowed);

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
      <div className="p-2 flex justify-center">
        <button onClick={ () => { setBorrowed(borrowed === 0 ? 1 : 0)} } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">Borrow</button>
      </div>
    </>
  )

}