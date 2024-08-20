'use client'
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewblog = () => {

    const { id } = useParams();
    const [blogData, setblogData] = useState(null);

    const fetchPlanData = async () => {
        const res = await fetch("http://localhost:5000/blog/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setblogData(data);
    };

    useEffect(() => {
        fetchPlanData();
    }, []);

    const displayBlog = () => {
        if (blogData !== null) {
            return (
                <div className="max-w-2xl">
                    {/* Avatar Media */}
                    
                    <p>Posted On : {new Date(blogData.createdAt).toLocaleDateString()}</p>
                    <h1 className='text-5xl font-bold mb-5'>{blogData.title}</h1>


                    {/* End Avatar Media */}
                    {/* Content */}
                    <MDEditor.Markdown source={blogData.content} style={{ whiteSpace: 'pre-wrap' }} ></MDEditor.Markdown>
                    {/* End Content */}
                </div>
            )
        } else {
            return <h1>Loading ...</h1>
        }
    }

    return (
        <>
            {/* Blog Article */}
            <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                {displayBlog()}
            </div>
        </>

    )
}

export default viewblog