import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function InvoiceForm() {
  const [customer, setCustomer] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');

  const addItem = () => {
    if (!itemDesc || !itemPrice) return;
    setItems([...items, { description: itemDesc, price: parseFloat(itemPrice) }]);
    setItemDesc('');
    setItemPrice('');
  };

  const submit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, items, dueDate }),
      });
      const data = await response.json();
      setStatus(`Invoice ${data.id} created`);
    } catch (e) {
      setStatus('Error creating invoice');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Customer</Text>
      <TextInput
        style={styles.input}
        value={customer}
        onChangeText={setCustomer}
        placeholder="Customer name"
      />
      <Text style={styles.label}>Due Date</Text>
      <TextInput
        style={styles.input}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Item Description</Text>
      <TextInput
        style={styles.input}
        value={itemDesc}
        onChangeText={setItemDesc}
        placeholder="Item description"
      />
      <Text style={styles.label}>Item Price</Text>
      <TextInput
        style={styles.input}
        value={itemPrice}
        onChangeText={setItemPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={addItem} />

      {items.map((it, idx) => (
        <Text key={idx} style={styles.item}>{`${it.description}: $${it.price}`}</Text>
      ))}

      <Button title="Generate Invoice" onPress={submit} />
      {status ? <Text style={styles.status}>{status}</Text> : null}
    </ScrollView>
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
    marginBottom: 8,
  },
  item: {
    marginTop: 4,
  },
  status: {
    marginTop: 16,
    fontWeight: 'bold',
  },
});
