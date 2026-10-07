import React, { useState, useEffect } from 'react';

// Mocked local endpoint function simulating an asynchronous API response
const fetchMockProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Wireless Bluetooth Headphones', price: 89.99, image: '🎧' },
        { id: 2, title: 'Mechanical Gaming Keyboard', price: 129.99, image: '⌨️' },
        { id: 3, title: 'Ergonomic Office Chair', price: 249.50, image: '🪑' },
        { id: 4, title: 'Smart Fitness Watch', price: 199.99, image: '⌚' },
        { id: 5, title: 'Ultra-Wide 4K Monitor', price: 450.00, image: '🖥️' },
        { id: 6, title: 'Portable Power Bank', price: 34.99, image: '🔋' },
      ]);
    }, 400); // 400ms artificial network delay
  });
};

export default function SearchableProductCatalog() {
  const [products, setProducts] = useState([] as { id: number; title: string; price: number; image: string }[]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // 'none' | 'asc' | 'desc'
  const [favorites, setFavorites] = useState(new Set()); // Using a Set for O(1) lookups

  // Fetch product catalog on initial component mount
  useEffect(() => {
    let isMounted = true;
    fetchMockProducts().then((data:any) => {
      if (isMounted) {
        setProducts(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Toggle dynamic structural IDs inside the favorites collection
  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const nextFavorites = new Set(prevFavorites);
      if (nextFavorites.has(id)) {
        nextFavorites.delete(id);
      } else {
        nextFavorites.add(id);
      }
      return nextFavorites;
    });
  };

  // DERIVED STATE: Filter and Sort logic computes synchronously on every render
  const processedProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0; // Maintain original layout sequence if 'none'
    });

  // Map out favorite items to track metadata for the sidebar layout
  const favoriteItems = products.filter((p) => favorites.has(p.id));

  return (
    <div 
      className="catalog-layout"
    >
      {/* MAIN CONTENT AREA */}
      <div className="main-content" style={{ flex: 1 }}>
        <h2>Product Catalog</h2>

        {/* CONTROLS BAR */}
        <div 
          className="controls-bar" 
          style={{ 
            display: 'flex', 
            gap: '12px', 
            marginBottom: '20px', 
            flexWrap: 'wrap' 
          }}
        >
          <input
            type="text"
            data-testid="search-input"
            placeholder="Search products by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, minWidth: '200px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />

          <select
            data-testid="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
          >
            <option value="none">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* CARDS DISPLAY PANEL */}
        {isLoading ? (
          <div data-testid="loading-indicator" style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            Loading catalog items...
          </div>
        ) : processedProducts.length === 0 ? (
          <div className="no-results" style={{ textAlign: 'center', padding: '40px', color: '#888', fontStyle: 'italic' }}>
            No products match your search criteria.
          </div>
        ) : (
          <div 
            className="product-grid" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '16px' 
            }}
          >
            {processedProducts.map((product) => {
              const isFav = favorites.has(product.id);
              return (
                <div 
                  key={product.id}
                  className="product-card"
                  data-testid={`product-${product.id}`}
                  style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', position: 'relative' }}
                >
                  {/* Favorite Star Icon Trigger */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    data-testid={`fav-btn-${product.id}`}
                    className={`fav-toggle ${isFav ? 'active' : ''}`}
                    style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', outline: 'none', padding: 0 }}
                  >
                    {isFav ? '⭐' : '☆'}
                  </button>

                  <div style={{ fontSize: '40px', textAlign: 'center', margin: '12px 0' }}>{product.image}</div>
                  <h4 style={{ margin: '8px 0 4px 0', fontSize: '15px', color: '#333' }}>{product.title}</h4>
                  <div style={{ fontWeight: 'bold', color: '#0056b3', marginTop: 'auto', paddingTop: '8px' }}>
                    \${product.price.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SIDEBAR FAVORITES VIEW */}
      <aside 
        className="favorites-sidebar" 
        data-testid="favorites-sidebar"
        style={{ 
          width: '260px', 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #e9ecef',
          alignSelf: 'flex-start'
        }}
      >
        <h3 style={{ marginTop: 0, borderBottom: '2px solid #dee2e6', paddingBottom: '8px' }}>
          Favorites ({favorites.size})
        </h3>
        {favoriteItems.length === 0 ? (
          <p style={{ color: '#6c757d', fontSize: '14px', fontStyle: 'italic' }}>No favorite items saved yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {favoriteItems.map((item) => (
              <li 
                key={item.id} 
                data-testid={`sidebar-fav-${item.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px dashed #dee2e6', fontSize: '14px' }}
              >
                <span>{item.image}</span>
                <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={item.title}>
                  {item.title}
                </span>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', fontSize: '12px', padding: '2px' }}
                  title="Remove from favorites"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
