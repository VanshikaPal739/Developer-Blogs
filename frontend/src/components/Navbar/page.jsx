'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 max-w-[80%] mx-auto py-7">
          <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
            
            {/* Button Group */}
            <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <li className="md:mr-12">
            <Link className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white"
            href="signup">
              Login
            </Link>
          </li>
            </div>
            {/* End Button Group */}
            {/* Collapse */}
            <div
              id="hs-navbar-hcail"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-8"
              aria-labelledby="hs-navbar-hcail-collapse"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                <div>
                  <Link
                    className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                    href="#"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </div>


                <div>
                  <Link
                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    href="createblogg"
                  >
                   Register
                  </Link>
                </div>


                <div>
                  <Link
                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    href="About "
                  >
                    About
                  </Link>
                </div>



                <div>
                  <Link
                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    href="addblog"
                  >
                    Blog
                  </Link>
                </div>



                <div>
                  <Link
                    className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                    href="contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>

    </div>
  )
}

export default Navbar