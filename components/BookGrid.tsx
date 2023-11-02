import Book from '../model/Book';
import BookItem from "./BookItem";

interface BookGridProps {
  books: Book[],
  formName: string;
  formAction: (formData: FormData) => Promise<void>;
}

export default function BookGrid( { books, formName, formAction } : BookGridProps ) {

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 p-4 gap-4 font-sans place-items-center text-lg font-bold text-white">
      { books.map((book: Book) => {
        return (
          <div key={book.title}>
            <BookItem book={book} formAction={formAction} formName={formName} ></BookItem>
          </div>
        )
      })}
    </div>
  )

}