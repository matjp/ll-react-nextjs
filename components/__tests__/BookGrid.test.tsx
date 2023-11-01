import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import BookGrid from '../BookGrid';
import { Book } from '../BookItem';

const books : Book[] = [
    {
      title: "Alice's Adventures in Wonderland",
      author: 'Lewis Carrol',
      cover_image: new ArrayBuffer(0),
      borrowed: 0
    },
  ]

describe('BookGrid Tests', () => {
  it('renders correctly', async () => {
    render(<BookGrid books={books}></BookGrid>);
    
    await waitFor(() => {
      expect(screen.getByAltText(/Adventures/)).toBeDefined();
    })
  })
});
