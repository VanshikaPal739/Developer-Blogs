'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const adddblog = () => {
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
<section class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
    </div>
   
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
    
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <div  class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src={blog.cover} alt={blog.cover} loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">{blog.title}</a>
          </h2>

          <p class="text-gray-500"> {blog.description}</p>

          <Link
          href={'/viewblog/' + blog._id}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </Link>
        </div>
      </article>
     
     

    </div>
  </div>
</section>



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
export default adddblog