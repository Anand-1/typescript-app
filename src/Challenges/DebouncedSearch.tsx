import React, { useState, useEffect } from 'react';

export default function DebouncedSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. Immediately clear results and states if the query string is blank
        if (!query.trim()) {
            setResults([]);
            setIsLoading(false);
            setError(null);
            return;
        }

        // 2. Initialize the AbortController for network level cancellation
        const controller = new AbortController();
        const { signal } = controller;

        // 3. Setup the 300ms debounce window timer
        const debounceTimer = setTimeout(async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Replace with your actual endpoint URL target
                const response = await fetch(`https://github.com{encodeURIComponent(query)}`, { signal });

                if (!response.ok) {
                    throw new Error(`Server returned status: ${response.status}`);
                }

                const data = await response.json();
                // Assuming target structural array payload lives in data.items
                setResults(data.items || []);
            } catch (err: any) {
                // Only modify state if the request wasn't intentionally aborted by a new keystroke
                if (err.name !== 'AbortError') {
                    setError(err.message || 'An unexpected network error occurred.');
                    setResults([]);
                }
            } finally {
                // Only lower loading flag if this request is still the active one
                if (!signal.aborted) {
                    setIsLoading(false);
                }
            }
        }, 300);

        // 4. CLEANUP FUNCTION: Runs every time 'query' changes before the next side effect fires
        return () => {
            clearTimeout(debounceTimer); // Cancels the 300ms delay timer
            controller.abort();         // Instantly cancels the actual inflight HTTP fetch request
        };
    }, [query]);

    return (
        <div className="search-container" style={{ maxWidth: '450px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <label htmlFor="user-search" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                Search GitHub Users:
            </label>
            <input
                id="user-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a username..."
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            {/* RESULT AND LOOKUP VISUAL PANELS */}
            <div className="results-panel" style={{ marginTop: '16px' }}>

                {/* Loading State Skeletons */}
                {isLoading && (
                    <div className="skeleton-wrapper" data-testid="loading-skeleton">
                        {[1, 2, 3].map((n) => (
                            <div key={n} style={{ height: '40px', backgroundColor: '#e0e0e0', margin: '8px 0', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                        ))}
                    </div>
                )}

                {/* Error Notification View */}
                {!isLoading && error && (
                    <div className="error-message" style={{ color: '#dc3545', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {/* Empty Result Notification */}
                {!isLoading && !error && query.trim() !== '' && results.length === 0 && (
                    <div className="empty-message" style={{ color: '#6c757d', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
                        No users found matching "{query}".
                    </div>
                )}

                {/* Populated Result Layout */}
                {!isLoading && !error && results.length > 0 && (
                    <ul className="results-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {results.map((user: { id: React.Key | null | undefined; avatar_url: string | undefined; login: string | undefined }) => (
                            <li key={user.id} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src={user.avatar_url} alt={user.login} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                <span>{user.login}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Quick continuous inline keyframes for the pulse fallback mechanism */}
            <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
        </div>
    );
}
