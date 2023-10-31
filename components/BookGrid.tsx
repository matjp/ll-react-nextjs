import Image from 'next/image'

interface BookGridProps {
  books: []
}

export default function BookGrid( { books } : BookGridProps ) {

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 p-4 gap-4 font-sans place-items-center text-lg font-bold text-white">
    { books.map((book: any) => {
      const base64String = btoa(String.fromCharCode(...new Uint8Array(book.cover_image)));
      return (
        <div key={book.title}>
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
        </div>
      )
    })}
    </div>
  )

}