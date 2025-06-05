import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function InvoiceForm() {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const submit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, amount }),
      });
      const data = await response.json();
      setStatus(`Invoice ${data.id} created`);
    } catch (e) {
      setStatus('Error creating invoice');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Customer</Text>
      <TextInput
        style={styles.input}
        value={customer}
        onChangeText={setCustomer}
        placeholder="Customer name"
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Total amount"
        keyboardType="numeric"
      />
      <Button title="Generate Invoice" onPress={submit} />
      {status ? <Text style={styles.status}>{status}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  status: {
    marginTop: 16,
    fontWeight: 'bold',
  },
});
