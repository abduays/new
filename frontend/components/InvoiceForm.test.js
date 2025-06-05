import React from 'react';
import { render } from '@testing-library/react-native';
import InvoiceForm from './InvoiceForm';

test('renders form inputs', () => {
  const { getByPlaceholderText } = render(<InvoiceForm />);
  expect(getByPlaceholderText('Customer name')).toBeTruthy();
  expect(getByPlaceholderText('YYYY-MM-DD')).toBeTruthy();
  expect(getByPlaceholderText('Item description')).toBeTruthy();
  expect(getByPlaceholderText('Price')).toBeTruthy();
});
