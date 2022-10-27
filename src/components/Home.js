import React from 'react';
import CataA from './CataA';
// import AddBookmark from './AddBookmark';

export default function Home() {
  return (
    <div>
      <h1>Bookmark Manager</h1>
      <a
        href="/add"
        style={{ textDecoration: 'none', borderStyle: 'solid', padding: '5px' }}
      >
        Add Bookmark
      </a>
      <h1>Category A</h1>

      <CataA />

      <h1>Category B</h1>
      <CataA />
    </div>
  );
}
