'use client';
import axios from 'axios';
import React, { useEffect, useRef,useState } from 'react'

const BlogListing = () => {
  const runOnce = useRef(false);
  const[blogList, setblogList] = useState([]);
   const fetchBlogs = async () => {
    const res = await axios.get('http://localhost:5000/blog/getall')
    console.table(res.data);
    setblogList(res.data);
   }
const deleteBlog = (id) => {
  axios.delete('http://localhost:5000/blog/delete/'+id)
  .then((response) => {
    toast.success('Blog Deleted Successfully');
    fetchBlogs();
  }).catch((err) => {
    console.log(err);
    toast.error('Failed to delete blog');
  });
}
useEffect(()=> {
  if(!runOnce.current){
    fetchBlogs();
    runOnce.current = true;
  }
},[])
  

  return (
    <div>
    <h1 className="font-bold text-4xl text-center mt-5"> Blog Sections</h1>
    <p className="text-2xl text-center mt-5">
     The Blog section offers a collection of articles, insights, and updates, providing readers <br />
     with valuable information and engaging content.
     </p>
     <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-5">
    {/* Grid */}
    <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
      {/* Card */}
      <a
        className="group block rounded-xl overflow-hidden focus:outline-none"
        href="#"
      >
      
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              Studio by Preline
            </h3>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Produce professional, reliable streams easily leveraging Preline's
              innovative broadcast studio
            </p>
            <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
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
            </p>
          </div>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group block rounded-xl overflow-hidden focus:outline-none"
        href="#"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              Onsite
            </h3>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Optimize your in-person experience with best-in-class capabilities
              like badge printing and lead retrieval
            </p>
            <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
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
            </p>
          </div>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group block rounded-xl overflow-hidden focus:outline-none"
        href="#"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              The complete guide to OKRs
            </h3>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              How to make objectives and key results work for your company
            </p>
            <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
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
            </p>
          </div>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group block rounded-xl overflow-hidden focus:outline-none"
        href="#"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              People program models
            </h3>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Six approaches to bringing your People strategy to life
            </p>
            <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
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
            </p>
          </div>
        </div>
      </a>
      {/* End Card */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Card Blog */}
</>

    </div>
  )
}

export default BlogListing;