import React, { useState } from 'react';


// Wrapper / Main Menu Component
export default function DynamicMenu() {
  return (
    <nav className="menu-wrapper" style={{ fontFamily: 'sans-serif', maxWidth: '300px' }}>
      <MenuList items={menuData} />
    </nav>
  );
}

// Inner list manager
function MenuList({ items }: { items: any[] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="menu-list" style={{ listStyleType: 'none', paddingLeft: '16px', margin: '4px 0' }}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

// Individual item controller (handles its own recursive rendering)
function MenuItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasChildren) {
      e.preventDefault(); // Stop links if it's a dropdown toggle
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className="menu-item" data-testid={`menu-item-${item.id}`} style={{ margin: '6px 0' }}>
      <div
        onClick={handleToggle}
        className={`menu-trigger ${hasChildren ? 'has-children' : ''} ${isOpen ? 'expanded' : 'collapsed'}`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        {/* Render as a link if no children, otherwise plain text container */}
        {hasChildren ? (
          <span className="menu-label" style={{ fontWeight: '500' }}>{item.label}</span>
        ) : (
          <a href={item.url || '#'} className="menu-link" style={{ textDecoration: 'none', color: '#007bff' }}>
            {item.label}
          </a>
        )}

        {/* Visibility Icon Indication */}
        {hasChildren && (
          <span className="toggle-indicator" style={{ fontSize: '12px', color: '#6c757d' }}>
            {isOpen ? '▼' : '►'}
          </span>
        )}
      </div>

      {/* Conditional Rendering: Only render children if menu is open */}
      {hasChildren && isOpen && (
        <div className="submenu-container" data-testid={`submenu-${item.id}`}>
          <MenuList items={item.children} />
        </div>
      )}
    </li>
  );
}

const menuData = [
    {
        id: 'home',
        label: 'Home',
        url: '/home'
    },
    {
        id: 'services',
        label: 'Our Services',
        children: [
            { id: 'web-dev', label: 'Web Development', url: '/services/web' },
            { id: 'design', label: 'UI/UX Design', url: '/services/design' },
            {
                id: 'marketing',
                label: 'Digital Marketing',
                children: [
                    { id: 'seo', label: 'SEO Optimization', url: '/services/marketing/seo' },
                    { id: 'social', label: 'Social Media', url: '/services/marketing/social' }
                ]
            }
        ]
    },
    {
        id: 'about',
        label: 'About Us',
        url: '/about'
    }
];