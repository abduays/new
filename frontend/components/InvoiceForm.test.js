import React from 'react';
import { render } from '@testing-library/react-native';
import InvoiceForm from './InvoiceForm';

test('renders customer and amount inputs', () => {
  const { getByPlaceholderText } = render(<InvoiceForm />);
  expect(getByPlaceholderText('Customer name')).toBeTruthy();
  expect(getByPlaceholderText('Total amount')).toBeTruthy();
});
