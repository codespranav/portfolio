"use client";
import { useState } from "react";
import Tiptap from "./Tiptap";
import { Loader2 } from "lucide-react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("Pranav Singh");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContentChange = (c) => setContent(c);

  const handleSave = async () => {
    if (!title || !content || !category) {
      alert("Please enter title, content, and category for the blog.");
      return;
    }

    setLoading(true);
    let fileName = "";

    // Upload Image First (if any file is selected)
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/blogs/image-upload", {
          method: "POST",
          body: formData,
        });

        const imgRes = await res.json();
        if (!res.ok) {
          throw new Error(imgRes.message || "Image upload failed");
        }
        fileName = file.name;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    // Save Blog Data
    try {
      const response = await fetch("/api/blogs/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, fileName: file.name, author, category, tags }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Blog saved successfully!");
        setTitle("");
        setContent("");
        setCategory("");
        setTags("");
        setFile(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("An error occurred while saving the blog.");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Main Blog Editor Section */}
      <div className="w-2/3 mx-auto my-10 bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-700">
        {/* Blog Title Input */}
        <input
          type="text"
          placeholder="Enter blog title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-3xl font-bold border-none outline-none p-2 mb-4 bg-transparent text-white placeholder-gray-400"
        />

        {/* Tiptap Rich Text Editor */}
        <Tiptap content={content} onChange={handleContentChange} />

        {/* Publish Button */}
        <button
          onClick={handleSave}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin size-5" /> : "Publish"}
        </button>
      </div>

      {/* Sidebar Settings */}
      <div className="w-1/3 bg-gray-800 shadow-lg p-6 mt-10 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Post Settings</h2>

        {/* Author Field */}
        <label className="block text-sm font-medium text-gray-300">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 mt-1 border rounded-lg bg-gray-700 text-white"
        />

        {/* Category Selector */}
        <label className="block mt-4 text-sm font-medium text-gray-300">Category</label>
        <select
          className="w-full p-2 mt-1 border rounded-lg bg-gray-700 text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Programming">Programming</option>
          <option value="Business">Business</option>
          <option value="Others">Others</option>
        </select>

        {/* Tags Input */}
        <label className="block mt-4 text-sm font-medium text-gray-300">Tags</label>
        <input
          type="text"
          placeholder="Add tags..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 mt-1 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />

        {/* Publish Date */}
        <label className="block mt-4 text-sm font-medium text-gray-300">Publish Date</label>
        <input type="date" className="w-full p-2 mt-1 border rounded-lg bg-gray-700 text-white" />

        {/* Upload Thumbnail */}
        <label className="block mt-4 text-sm font-medium text-gray-300">Upload Thumbnail</label>
        <input
          type="file"
          className="w-full p-2 mt-1 border rounded-lg bg-gray-700 text-white"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default NewPost;
