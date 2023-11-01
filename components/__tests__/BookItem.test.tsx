import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import BookItem, { Book } from '../BookItem';

describe('BookItem Tests', () => {

  it('renders correctly', async () => {

    const book: Book = {
      title: "Alice's Adventures in Wonderland",
      author: 'Lewis Carrol',
      cover_image: new ArrayBuffer(0),
      borrowed: 0
    }

    render(<BookItem book={book}></BookItem>);
    
    await waitFor(() => {
      expect(screen.getByAltText(/Adventures/)).toBeDefined();
    })
  })

});