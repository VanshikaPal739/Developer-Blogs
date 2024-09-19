'use client';
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';


const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});


const signup = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      axios.post('http://localhost:5000/user/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User Registered Successfully');
          router.push('/login')
        }).catch((err) => {
          console.log(err);
          if (err.response.data.code === 11000) {
            toast.error('Email already exists')
          }
          setSubmitting(false);
        });
    },
    validationSchema: signupSchema
  })


  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  WELCOME BACK
                </h2>
                <p className="max-w-xl mt-3 text-gray-300 text-bold">
                  Login to access your account
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img
                    className="w-auto h-7 sm:h-8"
                    //src="https://merakiui.com/images/logo.svg"
                    alt=""
                  />
                  <h6 className="text-2xl font-bold text-blue-500 ">SIGN UP</h6>
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>
              <div className="mt-8">
                <form onSubmit={signupForm.handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name}
                      placeholder="Enter the name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40v mb-6"
                    />
                    {
                      signupForm.touched.name && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {signupForm.errors.name}
                        </p>
                      )
                    }
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.email}
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {
                      signupForm.touched.email && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {signupForm.errors.email}
                        </p>
                      )
                    }
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Your Password"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {
                      signupForm.touched.password && (
                        <p className="text-xs text-red-600 mt-2" id="email-error">
                          {signupForm.errors.password}
                        </p>
                      )
                    }
                  </div>
                  <div className="mt-6">

                    <button
                      type="submit"
                      disabled={signupForm.isSubmitting}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="login"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    login
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signup