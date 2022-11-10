import React from 'react';
import HomePage from '../src/components/HomePage';
import Bookmarks from '../src/components/Bookmarks';
import './App.css';

export default function App() {
  return (
    <main className="app">
      <h1 className="app-title">Manga Register</h1>
      <HomePage />
      <Bookmarks />
    </main>
  );
}
