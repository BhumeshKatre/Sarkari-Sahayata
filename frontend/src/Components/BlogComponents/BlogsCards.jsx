import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogsCards = ({ schemes }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {schemes.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleCardClick(blog.id)}
            className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{blog.icon}</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {blog.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {blog.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogsCards;
