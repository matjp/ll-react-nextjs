import Image from 'next/image'

export type Book = {
  title: string;
  author: string;
  cover_image: ArrayBuffer;
  borrowed: number;
}

interface BookProps {
  book: Book
}

export default function BookItem( { book } : BookProps ) {

  const base64String = btoa(String.fromCharCode(...new Uint8Array(book.cover_image)));

  return (
    <>
      <div className="p-2 flex justify-center">
        <Image className="items-center"
          src={`data:image/avif;base64,${base64String}`}
          width="242"
          height="363"
          alt={book.title}
        />
      </div>
      <div className="p-2 text-center">{book.title}</div>
      <div className="p-2 text-center">{book.author}</div>
      <div className="p-2 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">Borrow</button>
      </div>
    </>
  )

}