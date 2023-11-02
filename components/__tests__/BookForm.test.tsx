import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import BookForm from '../BookForm';
import borrowBook from '@/actions/borrowBook';

describe('BookForm Tests', () => {

  it('renders correctly', async () => {

    render(<BookForm formAction={borrowBook} formName='borrow' formValue="Alice's Adventures in Wonderland" disabled={0} ></BookForm>);
        
    await waitFor(() => {
      expect(screen.getByRole('form', {name: 'borrow'})).toBeDefined();
    })
  })

});