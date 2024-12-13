"use client"
import { useState } from "react";
import Tiptap from "../../components/Tiptap"
const BlogEditor = () => {
  const [content, setContent] = useState("")
  const handleContentChange = (c)=>{
    setContent(c)
  }
  return (
    <div className='max max-w-6xl mx-auto'>
    <div class=" py-8">
        <input 
            type="text" 
            id="title" 
            name="title"
            placeholder="Enter the blog title"
            className=" bg-transparent w-full p-6 text-lg border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-200 transition duration-200"
        />
        <Tiptap content = {content} onChange = {(newContent)=>{handleContentChange(newContent)}}/>
    </div>
      <button onClick={"handleSave"}>Save Blog</button>
    </div>
  );
};

export default BlogEditor;