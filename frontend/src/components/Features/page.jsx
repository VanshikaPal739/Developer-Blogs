import React from 'react'

const Features = () => {
  return (
    <div><>
    {/* Card Blog */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Blog
        </h2>
        
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="size-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              How Google Assistant now helps you record stories for kids
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              Google is constantly updating its consumer AI, Google Assistant,
              with new features.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="size-8 rounded-full"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Aaron Larsson
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
              Front accounts - let's work together
            </h3>
            <p className="mt-5 text-gray-600 dark:text-neutral-400">
              Are you an accountant? Are you a company formation advisor?
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="size-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Card */}
      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          href="#"
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
        </a>
      </div>
      {/* End Card */}
    </div>
    {/* End Card Blog */}
  </>
  </div>
  )
}

export default Features