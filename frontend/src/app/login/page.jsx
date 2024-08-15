'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const login = () => {
  const router = useRouter();
  const loginForm = useFormik({
    initialValues:{
     
      email:'',
      password:''
    },
    onSubmit:(values, {resetForm,setSubmitting})=>{
      console.log(values);
      axios.post('http://localhost:5000/user/add',values)
      .then((response) => { 
       console.log(response.status);
       resetForm();
       toast.success('User Registered Successfully');
       router.push('/login')
      }).catch((err) => {
       console.log(err);
       if(err.response.data.code === 11000){
         toast.error('Email already exists')
       }
      setSubmitting(false);
      });
  },
    validationSchema:loginSchema
})

  return (
    
    <div className="h-screen">
    <>
{/* Hero */}
<div className="relative bg-gradient-to-bl bg-no-repeat bg-cover bg-center h-screen from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent "
style={{backgroundImage: `url('https://images.unsplash.com/photo-1659574086903-f7a231c4fe75?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBza3l8ZW58MHx8MHx8fDA%3D')` }}>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
    <div>
    
      {/* Title */}
      <div className="mt-4 md:mb-12 max-w-2xl">
        <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
        The developer's journey: Innovation.
        </h1>
        <p className="text-gray-600 dark:text-neutral-400">
          We provide you with a test account that can be set up in seconds.
          Our main focus is getting responses to you as soon as we can.
        </p>
      </div>
      {/* End Title */}
      {/* Blockquote */}
      <blockquote className="hidden md:block relative max-w-sm">
        <svg
          className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          />
        </svg>
        <div className="relative z-10">
          <p className="text-xl italic text-gray-800 dark:text-white">
            Amazing people to work with. Very fast and professional partner.
          </p>
        </div>
        
      </blockquote>
      {/* End Blockquote */}
    </div>
    {/* End Col */}
    <div>
      {/* Form */}
      <form onSubmit={loginForm.handleSubmit}>
        <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto mt-10">
          {/* Card */}
          <div className="p-4 sm:p-7 flex flex-col bg rounded-2xl shadow-lg dark:bg-neutral-900">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Start your free trial
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Already have an account?
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="#"
                >
                  Sign in here
                </a>
              </p>
            </div>
            <div className="mt-5">
            
              <div className="grid grid-cols-2 gap-4">
               

               
                <div className="relative col-span-full">
                 
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.email}
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="********"
                    />
                    <label
                      htmlFor="hs-hero-signup-form-floating-input-new-password"
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                    >
                     Email Address
                    </label>
                    {
                      loginForm.touched.email && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {loginForm.errors.email}
                        </p>
                      )
                    }
                  </div>
                  {/* End Floating Input */}
                  <div
                    id="hs-strong-password-popover"
                    className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4 dark:bg-neutral-950"
                  >
                    <div
                      id="hs-strong-password-in-popover"
                      data-hs-strong-password='{
                "target": "#hs-hero-signup-form-floating-input-new-password",
                "hints": "#hs-strong-password-popover",
                "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                "mode": "popover"
              }'
                      className="flex mt-2 -mx-1"
                    ></div>
                    
                    <ul className="space-y-1 text-sm text-gray-500 dark:text-neutral-500">
                      <li
                        data-hs-strong-password-hints-rule-text="min-length"
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                      >
                        <span className="hidden" data-check="">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                       
                      </li>
                      <li
                        data-hs-strong-password-hints-rule-text="lowercase"
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                      >
                        <span className="hidden" data-check="">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                     
                      </li>
                      <li
                        data-hs-strong-password-hints-rule-text="uppercase"
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                      >
                        <span className="hidden" data-check="">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                      
                      </li>
                      <li
                        data-hs-strong-password-hints-rule-text="numbers"
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                      >
                        <span className="hidden" data-check="">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                      
                      </li>
                      <li
                        data-hs-strong-password-hints-rule-text="special-characters"
                        className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                      >
                        <span className="hidden" data-check="">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span data-uncheck="">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Input Group */}
                {/* Input Group */}
                <div className="col-span-full">
                  {/* Floating Input */}
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                      className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="********"
                    />
                    <label
                      htmlFor="hs-hero-signup-form-floating-input-current-password"
                      className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                    >
                      Password
                    </label>
                    {
                      loginForm.touched.password && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {loginForm.errors.password}
                        </p>
                      )
                    }
                  </div>
                  {/* End Floating Input */}
                </div>
                {/* End Input Group */}
              </div>
              {/* End Grid */}
              {/* Checkbox */}
              <div className="mt-5 flex items-center">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ms-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm dark:text-white"
                  >
                    I accept the{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {/* End Checkbox */}
              <div className="mt-5">
                <button
                  type="submit"
                  disabled={loginForm.isSubmitting}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
      </form>
      {/* End Form */}
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
  {/* Clients Section */}
 
  {/* End Clients */}
</div>
{/* End Clients Section */}
</div>
{/* End Hero */}
</>

</div>
  )
}

export default login