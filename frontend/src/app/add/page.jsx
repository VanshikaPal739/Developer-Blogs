'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const AddBlog = () => {
  const runOnce = useRef(false);
  const [blogList, setBlogList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/blog/getall');
      console.table(res.data);
      setBlogList(res.data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
      console.error('Error fetching blogs:', error);
    }
  };

  // Filter blogs based on the search term
  const filteredBlogs = blogList.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch blogs once on component mount
  useEffect(() => {
    if (!runOnce.current) {
      fetchBlogs();
      runOnce.current = true;
    }
  }, []);

  // Function to display blogs
  const displayBlogs = () => {
    return filteredBlogs.map((blog) => (
      <div key={blog._id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid md:grid-cols-2">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link
              href={'/viewblog/' + blog._id}
              aria-label="Learn more about this blog"
              className="inline-block text-white bg-purple-600 hover:bg-purple-700 transition-colors rounded-md px-4 py-2 text-sm"
            >
              Learn more
            </Link>
          </div>
          <div>
            <img
              src={blog.cover}
              loading="lazy"
              alt={blog.title}
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Publish your passions, your way</h1>
        <p className="text-lg text-gray-600 mt-2">Enjoy millions of blogs at your fingertips.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-3/4 md:w-1/2 bg-white border border-gray-300 text-gray-700 text-lg px-5 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Blog List */}
      <div className="container mx-auto px-4">
        {filteredBlogs.length > 0 ? displayBlogs() : (
          <p className="text-center text-gray-500">No blogs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default AddBlog;




