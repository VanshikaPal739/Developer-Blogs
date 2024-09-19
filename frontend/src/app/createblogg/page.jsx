'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import React from 'react'


const createBlogg = () => {
  const router = useRouter();
  const [markdownContent, setMarkdownContent] = useState("**Add Blog**")
  const [imgUrl, setImgUrl] = useState('');

  const createbloggForm = useFormik({
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
    console.log(file);
    
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
        createbloggForm.setFieldValue('cover', url);
        // createbloggForm.values.cover = url;

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
            <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12 ">
              {/* Title */}
              <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
                Solving problems for every{" "}
                <span className="text-blue-600 dark:text-blue-500">team</span>
              </h1>

              {/* End Title */}

              <form onSubmit={createbloggForm.handleSubmit}>

                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    id='title'
                    placeholder="Title"
                    onChange={createbloggForm.handleChange}
                    value={createbloggForm.values.title}
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Title
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    id='description'
                    placeholder="Description"
                    onChange={createbloggForm.handleChange}
                    value={createbloggForm.values.description}
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                  </label>
                </div>




                <label htmlFor="img-upload" className='border p-4 mt-3 block'>Upload Image</label>
                <input id='img-upload' type="file" className='hidden' onChange={uploadToCloud} />

                <div className="grid">

                  <button
                    type="submit"
                    disabled={createbloggForm.isSubmitting || !imgUrl}
                    className="cursor-pointer bg-blue-500 disabled:opacity-50 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-700 hover:ring-2 hover:ring-blue-800 hover:shadow-xl hover:shadow-blue-500 focus:ring-blue-300 focus:shadow-blue-400 px-5 py-2 mt-2">
                    Submit
                  </button>
                </div>
              </form>

              <div className='mt-2'>
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

export default createBlogg