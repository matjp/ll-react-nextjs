import BookGrid from "@/components/BookGrid";
import borrowBook from "@/actions/borrowBook";
import { getBooks } from "@/actions/getBooks";

export default async function Page() {
  const books = await getBooks();

  return(
    <BookGrid books={books} formName='borrow' formAction={borrowBook}></BookGrid>
  )
}
