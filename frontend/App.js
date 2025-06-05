import React from 'react';
import { SafeAreaView } from 'react-native';
import InvoiceForm from './components/InvoiceForm';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InvoiceForm />
    </SafeAreaView>
  );
}
