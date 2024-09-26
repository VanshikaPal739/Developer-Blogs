import React from 'react'

const Featuress = () => {
  return (
    <div><>
    <header className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
      <a
        href="#"
        className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 text-4xl text-cyan-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
            />
          </svg>
        </span>
        mellow
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-7 cursor-pointer md:hidden"
        htmlFor="navbar-open"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
      >
        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
          <li className="font-bold md:mr-12">
            <a href="#">Blog</a>
          </li>
          <li className="md:mr-12">
            <a href="#">Features</a>
          </li>
          <li className="md:mr-12">
            <a href="#">Support</a>
          </li>
          <li className="md:mr-12">
            <button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <header className="mx-auto max-w-screen-xl pt-28 text-center">
          <p className="text-gray-500">Published April 4, 2022</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
            7 rules of effective marketing
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            You're doing marketing the wrong way
          </p>
          <div
            className="mt-6 flex flex-wrap justify-center gap-2"
            aria-label="Tags"
          >
            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Marketing
            </button>
            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Branding
            </button>
            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Digital
            </button>
            <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
              Identity
            </button>
          </div>
          <img
            className="sm:h-[34rem] mt-10 w-full object-contain"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Featured Image"
          />
        </header>
        <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
          <strong className="text-2xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi modi
            officia mollitia doloribus tenetur consectetur quae?
          </strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim
            maxime sit laudantium! Dolore atque, maxime iusto ut quas distinctio
            reiciendis animi voluptatibus soluta molestias, mollitia officiis
            laboriosam illum earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique reiciendis et recusandae provident repellendus rem
            doloremque eaque error assumenda?
          </p>
        </div>
      </article>
    </main>
    <div className="w-fit mx-auto mt-10 flex space-x-2">
      <div className="h-0.5 w-2 bg-gray-600" />
      <div className="h-0.5 w-32 bg-gray-600" />
      <div className="h-0.5 w-2 bg-gray-600" />
    </div>
    <aside
      aria-label="Related Articles"
      className="mx-auto mt-10 max-w-screen-xl py-20"
    >
      <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
        More Blogs
      </h2>
      <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="h-56 w-full object-cover"
              alt=""
            />
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                Branding
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                How to perform NPS Surveys
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Read Now
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="h-56 w-full object-cover"
              alt=""
            />
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                Public Relations
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                Understanding Public Relations
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Read Now
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="h-56 w-full object-cover"
              alt=""
            />
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                Marketing
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                Marketing is looking for untapped opportunities
              </h3>
              <p className="mb-4 text-base font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                tempore officiis. Lorem, ipsum dolor.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Read Now
              </span>
            </div>
          </a>
        </article>
      </div>
    </aside>
  </>
  </div>
  )
}

export default Featuress