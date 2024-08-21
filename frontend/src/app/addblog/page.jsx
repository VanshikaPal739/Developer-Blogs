'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const addblog = () => {
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
   <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="p-8 rounded shadow-xl sm:p-16">
    <div className="flex flex-col lg:flex-row">
      <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        {blog.title}
        </h2>
      </div>
      <div className="lg:w-1/2">
        <p className="mb-4 text-lg text-gray-700">
        {blog.description}
        </p>
        <Link
          href={'/viewblog/' + blog._id}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </Link>
      </div>
    </div>
  </div>
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
  <div className=''>
  <h1 className='font-bold text-3xl p-8 text-center '> Publish your passions, your way</h1>
  <p className='text-center text-lg '>Enjoy millions of blogs at your fingertips.</p>
  {displayBlogs()}
</div>
)
}
export default addblog