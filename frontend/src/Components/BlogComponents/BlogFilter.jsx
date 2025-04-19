import React, { useState, useEffect } from 'react';

const BlogFilter = ({ posts, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const now = new Date();
    let result = posts;

    switch (activeFilter) {
      case '24h':
        result = posts.filter(post => {
          const postDate = new Date(post.publishedAt || post.date);
          return (now - postDate) <= 24 * 60 * 60 * 1000;
        });
        break;
      case '7d':
        result = posts.filter(post => {
          const postDate = new Date(post.publishedAt || post.date);
          return (now - postDate) <= 7 * 24 * 60 * 60 * 1000;
        });
        break;
      case '30d':
        result = posts.filter(post => {
          const postDate = new Date(post.publishedAt || post.date);
          return (now - postDate) <= 30 * 24 * 60 * 60 * 1000;
        });
        break;
      case 'older':
        result = posts.filter(post => {
          const postDate = new Date(post.publishedAt || post.date);
          return (now - postDate) > 30 * 24 * 60 * 60 * 1000;
        });
        break;
      default:
        // 'all' - no filtering needed
        break;
    }

    setFilteredPosts(result);
    onFilterChange(result);
  }, []);

  const filterButtons = [
    { id: 'all', label: 'All Posts' },
    { id: '24h', label: 'Last 24 Hours' },
    { id: '7d', label: 'Last 7 Days' },
    { id: '30d', label: 'Last 30 Days' },
    { id: 'older', label: 'Older' }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Filter Posts</h3>
      <div className="flex flex-wrap gap-2">
        {filterButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveFilter(button.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === button.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;