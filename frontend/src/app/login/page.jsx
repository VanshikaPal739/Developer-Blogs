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
    <div className='bg-cover py-28 ' style={{backgroundImage: `url('https://st4.depositphotos.com/11135096/41861/i/450/depositphotos_418612740-stock-photo-business-technology-internet-network-concept.jpg')` }}>
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md dark:bg-gray-800 mt-40 bg-gradient-to-tr from-indigo-800">
  <div className="px-6 py-6 bg-transparent">
    <div className="flex justify-center mx-auto">
     
    </div>
    <h3 className="mt-3 text-xl font-bold text-center text-black-600 dark:text-gray-600">
      Welcome Back
    </h3>
    <p className="mt-1 text-center text-black-500 dark:text-gray-400 font-medium">
      Login or create account
    </p>
    <form onSubmit={loginForm.handleSubmit}>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-blue border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          id="email"
          onChange={loginForm.handleChange}
                  value={loginForm.values.email}
          placeholder="Email Address"
          aria-label="Email Address"
        />
         {
                  loginForm.touched.email && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {loginForm.errors.email}
                    </p>
                  )
                }
      </div>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 placeholder-gray-500 text-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          id="password"
          onChange={loginForm.handleChange}
                  value={loginForm.values.password}
          placeholder="Password"          
          aria-label="Password"
        />
         {
                  loginForm.touched.password && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {loginForm.errors.password}
                    </p>
                  )
                }
      </div>
      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-sm text-black-600 dark:text-black-400 hover:text-gray-500"
        >
          Forget Password?
        </a>
        <button 
        type="Submit"
        disabled={loginForm.isSubmitting}
        className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
      </div>
    </form>
  </div>
  <div className="flex items-center justify-center py-4 text-center dark:bg-gray-700">
    <span className="text-sm text-gray-800 dark:text-gray-600">
      Don't have an account?{" "}
    </span>
    <a
      href="#"
      className="mx-2 text-sm font-bold text-blue-800 dark:text-blue-600 hover:underline"
    >
      Register
    </a>
  </div>
</div>
</div>
  )
}

export default login