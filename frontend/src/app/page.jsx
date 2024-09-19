'use client'
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar/page'
import Footers from '@/components/Footers/page'

const Home = () => {
    return (
        <div>
 <Navbar/>   
            <div><>
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
                    rel="stylesheet"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html: "\n  * {\n  font-family: 'Source Sans Pro';\n  }\n"
                    }}
                />
                <div className="flex min-h-screen w-screen">
                    <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
                        {/* Left Column */}
                        <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
                            <div className="mb-16 lg:my-auto lg:max-w-lg">
                                <div className="mb-6 max-w-xl">

                                    <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                                        The Best Software <br />
                                        Developer Blogs to
                                        <span className="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                                            Read
                                        </span>
                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        "The Developer’s Hub: Your Source for Knowledge, Inspiration, and Community in Software Development"
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Link
                                        href="createblogg"
                                        className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                                    >
                                        {" "}
                                        Get started{" "}
                                    </Link>

                                </div>
                            </div>
                        </div>
                        {/* /Left Column */}
                        {/* Right Column */}
                        <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
                            {/* Col 2 */}
                            <div className="hidden w-56 items-center space-y-3 lg:flex">
                                <div className="overflow-hidden rounded-xl bg-yellow-400">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
                                <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                                    <img
                                        className="mx-auto h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                                    <img
                                        className="mx-auto h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                                    <img
                                        className="mx-auto h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Right Column */}
                    </div>
                </div>
            </>
            </div>


            <div>
      <>
    <main>
      <article>
        <header className="mx-auto max-w-screen-xl pt-18 text-center">
          
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
          Code Chronicles: Adventures in Web Development
          </h1>
          <p className="mt-6 text-lg text-gray-700">
          Painting the Digital World
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
            src="https://huntminds.com/wp-content/uploads/2022/10/Technology-Blog-topics-750x450.jpg"
            alt="Featured Image"
          />
        </header>
        <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
          <strong className="text-2xl font-medium">
          Developer Blog is the ultimate platform for developers to share knowledge, showcase projects, and engage with a passionate community. Whether you're a seasoned coder or just starting your journey, our platform is designed to help you create, share, and learn from the best minds in tech.
          </strong>
          <p>
          Welcome to Developer Blog, where we dive deep into the world of web development! Whether you're a seasoned developer or just starting out, our blog offers a wealth of resources, tips, and tutorials to help you build better, faster, and more innovative websites. From exploring the latest trends in technology to solving common coding challenges, we're here to empower your journey in the ever-evolving landscape of web development. Join us as we share insights, best practices, and the occasional hack to elevate your skills and projects.
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
      className="mx-auto mt-18 max-w-screen-xl py-20"
    >
      <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
        More Blogs
      </h2>
      <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="https://blog.codinghorror.com/">
            <img
              src="https://c8.alamy.com/comp/2FKBAF4/front-end-web-developer-entering-programming-code-language-for-website-on-laptop-mix-media-background-2FKBAF4.jpg"
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
                 
                </svg>
              
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
              Coding Horror
              </h3>
              <p className="mb-4 text-base font-light">
              programming and human factors <br />
              I Fight For The Users <br />
If you haven't been able to keep up with my blistering pace of one blog post per year, <br /> I don't blame you. <br />
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Read Now
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="https://www.linkedin.com/learning/?trk=lynda_redirect_learning">
            <img
              src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725.jpg"
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
                </svg>
                
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
              Keep learning in the moments that matter
              </h3>
              <p className="mb-4 text-base font-light">
              Get guidance to develop the critical skills you need to advance your career from the only learning platform informed by world’s largest marketplace.
              </p>
              <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                Read Now
              </span>
            </div>
          </a>
        </article>
        <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <a href="https://learntocodewith.me/blog/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/572/610/non_2x/web-development-coding-programming-internet-technology-business-concept-businessman-hand-holding-web-development-icon-on-virtual-screen-photo.jpg"
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
                  
                </svg>
              
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
              The Learn to Code With Me Blog
              </h3>
              <p className="mb-4 text-base font-light">
             
               If there’s likely to be a technical interview in your near future, one of the best ways to prepare is by familiarizing yourself with common technical interview questions.
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
  <section className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* Heading */}
    <div className="relative mb-10 pt-8 md:mb-16">
      <h2 className="mb-2 text-center font-serif text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl">
      Empower Your Voice in the Developer Community
      </h2>
      <span className="absolute left-1/2 top-0 rounded-lg bg-cyan-400 px-2 text-white">
        Features    
      </span>
    </div>
    {/* /Heading */}
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
      {/* Article */}
      <article className="">
        <a
          className="block rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-2 transition hover:scale-105"
          href="#"
        >
          <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
          Create Your Own Blog <br />
          Share Your Knowledge
          </h2>
          <div className="flex items-center rounded-md px-4 py-3">
          
            <p className="ml-4 w-56">
              <strong className="block text-lg font-medium text-white">
              Developer Blog
              </strong>
              <span className="text-xs text-white">
                {" "}
                A small hub for tech blogs{" "}
              </span>
            </p>
          </div>
        </a>
      </article>
      {/* /Article */}
      {/* Article */}
      <article className="">
        <a
          className="block rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 p-2 transition hover:scale-105"
          href="#"
        >
          <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
          Discover Inspiring Content 
          Explore Developer Blogs
          </h2>
          <div className="flex items-center rounded-md px-4 py-3">
           
            <p className="ml-4 w-56">
              <strong className="block text-lg font-medium text-white">
              Developer Blog
              </strong>
              <span className="text-xs text-white">
                {" "}
                A small hub for tech blogs{" "}
              </span>
            </p>
          </div>
        </a>
      </article>
      {/* /Article */}
      {/* Article */}
      <article className="">
        <a
          className="block rounded-lg bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-400 p-2 transition hover:scale-105"
          href="#"
        >
          <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
          Learn and Grow 
          Tutorials and Guides regarding tech
          </h2>
          <div className="flex items-center rounded-md px-4 py-3">
         
            <p className="ml-4 w-56">
              <strong className="block text-lg font-medium text-white">
              Developer Blog
              </strong>
              <span className="text-xs text-white">
                {" "}
                A small hub for tech blogs{" "}
              </span>
            </p>
          </div>
        </a>
      </article>
      {/* /Article */}
      {/* Article */}
      <article className="">
        <a
          className="block rounded-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400 p-2 transition hover:scale-105"
          href="#"
        >
          <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
          Connect and Collaborate
          Engage with the Community
          </h2>
          <div className="flex items-center rounded-md px-4 py-3">
            
            <p className="ml-4 w-56">
              <strong className="block text-lg font-medium text-white">
                Developer Blog
              </strong>
              <span className="text-xs text-white">
                {" "}
                A small hub for tech blogs{" "}
              </span>
            </p>
          </div>
        </a>
      </article>
      {/* /Article */}
    </div>
  </div>
</section>

  </div>
  <Footers/>


        </div>
    )
}

export default Home