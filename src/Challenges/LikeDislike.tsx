import React, { useState } from 'react';
export function LikeDislike({ initialLikes = 100, initialDislikes = 20 }) {
  // Track selection state: null (none), 'like', or 'dislike'
  const [activeSelection, setActiveSelection] = useState<null | 'like' | 'dislike'>(null);

  const handleLike = () => {
    if (activeSelection === 'like') {
      // Toggle off if clicked again
      setActiveSelection(null);
    } else {
      setActiveSelection('like');
    }
  };

  const handleDislike = () => {
    if (activeSelection === 'dislike') {
      // Toggle off if clicked again
      setActiveSelection(null);
    } else {
      setActiveSelection('dislike');
    }
  };

  // Compute final counts relative to the baseline values
  const currentLikes = initialLikes + (activeSelection === 'like' ? 1 : 0);
  const currentDislikes = initialDislikes + (activeSelection === 'dislike' ? 1 : 0);

  return (
    <div className="like-dislike-container" style={{ display: 'flex', gap: '12px' }}>
      {/* Like Button */}
      <button 
        onClick={handleLike}
        className={`like-button ${activeSelection === 'like' ? 'active' : ''}`}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: activeSelection === 'like' ? '#d4edda' : '#f8f9fa',
          border: `1px solid ${activeSelection === 'like' ? '#28a745' : '#ced4da'}`,
          borderRadius: '4px',
          fontWeight: activeSelection === 'like' ? 'bold' : 'normal'
        }}
      >
        Like | <span className="likes-counter">{currentLikes}</span>
      </button>

      {/* Dislike Button */}
      <button 
        onClick={handleDislike}
        className={`dislike-button ${activeSelection === 'dislike' ? 'active' : ''}`}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: activeSelection === 'dislike' ? '#f8d7da' : '#f8f9fa',
          border: `1px solid ${activeSelection === 'dislike' ? '#dc3545' : '#ced4da'}`,
          borderRadius: '4px',
          fontWeight: activeSelection === 'dislike' ? 'bold' : 'normal'
        }}
      >
        Dislike | <span className="dislikes-counter">{currentDislikes}</span>
      </button>
    </div>
  );
}
