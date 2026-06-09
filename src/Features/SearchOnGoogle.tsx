import React, { useState } from 'react';

export default function GoogleSearchButton() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') return;

    // Encodes the string for safety in a URL
    const encodedQuery = encodeURIComponent(query);
    
    // Opens Google search results in a new browser tab
    window.open(`https://google.com/search?q=${query}`, '_blank');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Type your search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '250px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4285F4',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Search on Google
        </button>
      </form>
    </div>
  );
}
