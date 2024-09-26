'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup'; // Validation with Yup
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import React from 'react';

const createBlogg = () => {
  const router = useRouter();
  const [markdownContent, setMarkdownContent] = useState("**Add Blog**");
  const [imgUrl, setImgUrl] = useState('');

  // Formik validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, 'Title must be at least 5 characters')
      .required('Title is required'),
    description: Yup.string()
      .min(10, 'Description must be at least 10 characters')
      .required('Description is required'),
    cover: Yup.string().required('Cover image is required'),
  });

  const createbloggForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      cover: '',
      content: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      values.content = markdownContent;
      console.log(values);

      axios.post('http://localhost:5000/blog/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          setSubmitting(false);
          router.push('/success');
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    },
  });

  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'vpsdft12');
    fd.append('cloud_name', 'daxpdc19i');

    axios.post('https://api.cloudinary.com/v1_1/daxpdc19i/image/upload', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      const { url } = response.data;
      setImgUrl(url);
      createbloggForm.setFieldValue('cover', url);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="text-4xl font-bold mb-8 text-center">Create a New Blog</h1>

        <form onSubmit={createbloggForm.handleSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* Title Input */}
          <div className="relative">
            <input
              id="title"
              placeholder="Blog Title"
              onChange={createbloggForm.handleChange}
              value={createbloggForm.values.title}
              className={`peer w-full border-b border-gray-300 p-4 focus:outline-none focus:border-gray-600 transition-all duration-300 ${createbloggForm.errors.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {createbloggForm.errors.title && <div className="text-red-500 text-sm mt-1">{createbloggForm.errors.title}</div>}
          </div>

          {/* Description Input */}
          <div className="relative">
            <input
              id="description"
              placeholder="Blog Description"
              onChange={createbloggForm.handleChange}
              value={createbloggForm.values.description}
              className={`peer w-full border-b border-gray-300 p-4 focus:outline-none focus:border-gray-600 transition-all duration-300 ${createbloggForm.errors.description ? 'border-red-500' : 'border-gray-300'}`}
            />
            {createbloggForm.errors.description && <div className="text-red-500 text-sm mt-1">{createbloggForm.errors.description}</div>}
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="img-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Upload Cover Image
            </label>
            <input
              id="img-upload"
              type="file"
              className="hidden"
              onChange={uploadToCloud}
            />
            {imgUrl && (
              <div className="mt-4">
                <img src={imgUrl} alt="Uploaded cover" className="rounded-lg shadow-md" />
              </div>
            )}
          </div>

          {/* Markdown Editor */}
          <div>
            <MDEditor
              value={markdownContent}
              onChange={(value) => setMarkdownContent(value)}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
            />
            <h2 className="mt-4 text-lg font-semibold">Markdown Preview:</h2>
            <div className="prose max-w-none mt-2 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <MDEditor.Markdown source={markdownContent} />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={createbloggForm.isSubmitting || !imgUrl}
              className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:ring-2 hover:ring-purple-300"
            >
              {createbloggForm.isSubmitting ? 'Submitting...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createBlogg;
