import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import BookGrid from '../BookGrid';
import Book from '@/model/Book';
import borrowBook from '@/actions/borrowBook';

const books : Book[] = [
    {
      title: "Alice's Adventures in Wonderland",
      author: 'Lewis Carrol',
      cover_image: '',
      borrowed: 0
    },
  ]

describe('BookGrid Tests', () => {
  it('renders correctly', async () => {
    render(<BookGrid books={books} formName='borrow' formAction={borrowBook}></BookGrid>);
    
    await waitFor(() => {
      expect(screen.getByAltText(/Adventures/)).toBeDefined();
    })
  })
});
