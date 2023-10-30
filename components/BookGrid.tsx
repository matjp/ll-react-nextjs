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
        <div style={{ width: '242px' }} key={book.title}>
          <Image
            src={`data:image/avif;base64,${base64String}`}
            width="242"
            height="363"
            alt={book.title}
          />
          <div className="text-center">{book.title}</div>
          <div className="text-center">{book.author}</div>
        </div>
      )
    })}
    </div>
  )

}