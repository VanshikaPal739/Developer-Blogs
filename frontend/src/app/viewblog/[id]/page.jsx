'use client'
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewblog = () => {

    const { id } = useParams();
    const [blogData, setblogData] = useState({});

    const fetchPlanData = async () => {
        const res = await fetch("http://localhost:5000/blogs/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setblogData(data);
    };

    useEffect(() => {
        fetchPlanData();
    }, []);

return (
    <div className=' border-2 grid grid-cols-6 bg-gray-600 h-40 w-40 '>
        <div>
            <MDEditor.Markdown source={blogData.content} style={{whiteSpace:'pre-wrap'}}></MDEditor.Markdown>


            </div>
    </div>
)
}

export default viewblog