import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import BookItem from '../BookItem';
import Book from '@/model/Book';
import borrowBook from '@/actions/borrowBook';

describe('BookItem Tests', () => {

  it('renders correctly', async () => {

    const book: Book = {
      title: "Alice's Adventures in Wonderland",
      author: 'Lewis Carrol',
      cover_image: '',
      borrowed: 0
    }

    render(<BookItem book={book} formAction={borrowBook} formName={'borrow'} ></BookItem>);
    
    await waitFor(() => {
      expect(screen.getByAltText(/Adventures/)).toBeDefined();
    })
  })

});