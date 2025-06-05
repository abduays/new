# Invoice Mobile Application

This repository contains a simple mobile invoice application with a React Native front end and a Node.js/Express back end. The example demonstrates how to connect the two layers and can be extended with more advanced UI and UX features.

## Requirements
- Node.js 18+
- npm (comes with Node)

## Setup

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   npm install
   npm test   # runs the Jest test suite
   npm start
   ```
   The backend will start on port `3000`.

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm install
   npm test    # runs the Jest test suite
   npm run start
   ```
   The React Native bundler will start. You can run the app using the `android` or `ios` scripts depending on your environment.

## Overview
- `frontend` contains the React Native application with a dynamic form that lets you build an invoice by adding line items and a due date.
- `backend` contains an Express server exposing a `/api/invoices` endpoint that stores invoices in memory and returns them. In a real application you would persist data to a database and generate PDF invoices.

This project aims to provide a clean starting point for further enhancements in UI/UX and functionality.
