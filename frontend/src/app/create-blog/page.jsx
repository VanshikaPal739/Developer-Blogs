'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import React from 'react'


const createBlog = () => {
  const router = useRouter();
  const [markdownContent, setMarkdownContent] = useState("**Add Blog**")
  const [imgUrl, setImgUrl] = useState('');

  const createblogForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      cover: '',
      content: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      values.content = markdownContent;
      console.log(values);

      axios.post('http://localhost:5000/blog/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();

        }).catch((err) => {
          console.log(err);

          setSubmitting(false);
        });
    },
  })

  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file); //append means to add
    fd.append('upload_preset', 'vpsdft12');
    fd.append('cloud_name', 'daxpdc19i');
    axios.post('https://api.cloudinary.com/v1_1/daxpdc19i/image/upload', fd,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
      .then((response) => {
        console.log(response.data);
        const { url } = response.data;
        setImgUrl(url);
        createblogForm.values.cover = url;

      }).catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className=''>
      <>
        {/* Hero */}
        <div className="relative overflow-hidden h-screen">
          <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
            <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
              {/* Title */}
              <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
                Solving problems for every{" "}
                <span className="text-blue-600 dark:text-blue-500">team</span>
              </h1>

              {/* End Title */}

              <form onSubmit={createblogForm.handleSubmit}>
                <label htmlFor="">Title</label>
                <textarea
                  id='title'
                  onChange={createblogForm.handleChange}
                  value={createblogForm.values.title}
                  type="text"
                  className="bg-gray-100 text-black font-xl  border-black-700 w-full  p-4 ">
                </textarea>


                <label htmlFor="">Description</label>
                <textarea
                  id='description'
                  onChange={createblogForm.handleChange}
                  value={createblogForm.values.description}
                  type="text"
                  className="bg-gray-100 text-black font-xl  border-black-700 w-full  p-4 ">
                </textarea>

                <label htmlFor="img-upload" className='border p-4 mt-3 block'>Upload Image</label>
                <input id='img-upload' type="file" className='hidden' onChange={uploadToCloud} />

                <div className="grid">

                  <button
                    type="submit"
                    disabled={createblogForm.isSubmitting || !imgUrl}
                    className="cursor-pointer bg-blue-500 disabled:opacity-50 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:ring-2 hover:ring-blue-800 hover:shadow-xl hover:shadow-blue-500 focus:ring-blue-300 focus:shadow-blue-400 px-5 py-2 mt-2">
                    Submit
                  </button>
                </div>
              </form>

              <div>
                <MDEditor value={markdownContent} id={markdownContent} onChange={(v) => setMarkdownContent(v)} />
              </div>
              {/* Form */}

              {/* End Form */}
            </div>
          </div>
          <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://iscodingforyou.com/blog-3-big.png')] bg-no-repeat bg-center bg-cover" />
          {/* End Col */}
        </div>
        {/* End Hero */}
      </>
    </div>
  )
}

export default createBlog;