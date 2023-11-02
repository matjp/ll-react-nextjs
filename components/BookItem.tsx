import Book from '../model/Book';
import Image from 'next/image'
import BookForm from './BookForm';
import borrowBook from '../actions/borrowBook'

interface BookProps {
  book: Book;
  formName: string;
  formAction: (formData: FormData) => Promise<void>;
}

export default function BookItem( { book, formName, formAction } : BookProps ) {
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
      <BookForm formAction={formAction} formName={formName} formValue={book.title} disabled={formName === 'borrow' ? book.borrowed : !book.borrowed}></BookForm>
    </>
  )
}