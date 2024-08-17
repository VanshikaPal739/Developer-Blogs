'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const BlogListing = () => {
  // const [blogs, setBlogs] = useState([])

  const runOnce = useRef(false);
  const [blogList, setblogList] = useState([]);
  const fetchBlogs = async () => {
    const res = await axios.get('http://localhost:5000/blog/getall')
    console.table(res.data);
    setblogList(res.data);
  }

  const deleteBlog = (id) => {
    axios.delete('http://localhost:5000/blog/delete/' + id)
      .then((response) => {
        toast.success('Blog Deleted Successfully');
        fetchBlogs();
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to delete blog');
      });
  }

  useEffect(() => {
    if (!runOnce.current) {
      fetchBlogs();
      runOnce.current = true;
    }
  }, [])

  const displayBlogs = () => {
    return blogList.map((blog) => (
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80 "
            alt="Blog Image"
          />
        </div>
        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            {blog.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            {blog.description}
          </p>
          <Link href={'/viewblog/' + blog._id} className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
            Read more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
        <div className="size-px whitespace-nowrap">
          <button 
          onClick={()=> {deleteBlog(blog._id)}}
          className="item center text-sm text-white bg-red-600 rounded-lg p-1"
          href="#">
            Delete
          </button>

        </div>
      </div>
    ));
  };


  return (
    <div>
      <h1>My Blogs</h1>
      {displayBlogs()}
    </div>
  )
}

export default BlogListing;