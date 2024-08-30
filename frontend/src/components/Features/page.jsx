import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <div><>
    {/* Card Blog */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Blogs
        </h2>
        
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="https://blog.codinghorror.com/"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://i.pinimg.com/474x/93/d5/a1/93d5a1352dfe7790150e8341fa629065.jpg"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              Coding Horror
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
            programming and human factors
            I Fight For The Users
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
           Read more 
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="https://learntocodewith.me/blog/"
          
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://blog.codingblocks.com/content/images/size/w600/2019/12/1-cover.png"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            The Learn to Code With Me Blog
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
            The Technical Interview Questions You Must Be Able to Answer.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-2 ">
            
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
               Read more
              </h5>
            </div>
          </div>
        </Link>
        {/* End Card */}
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="https://www.linkedin.com/learning/?trk=lynda_redirect_learning"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://contentstatic.techgig.com/photo/77672235/top-8-programming-blogs-that-every-software-developer-must-read.jpg?150543"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            Keep learning in the moments that matter
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
            Expert-led courses across a variety of online class topics for every step of your career. Instructors with real-world experience.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
           
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
               Read more
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Card */}
      <div className="mt-12 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href=""
        >
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
      {/* End Card */}
    </div>
    {/* End Card Blog */}
  </>
  </div>
  )
}

export default Features