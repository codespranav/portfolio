import React from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Code,
  Bold,
  Italic,
  Strikethrough,
  Upload,
  ListOrdered,
} from "lucide-react";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="border border-gray-700 rounded-md p-2 mb-2 bg-gray-900 space-x-2 sticky top-10 z-50 flex items-center shadow-lg">

      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold") ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Bold className="size-4" />
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic") ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Italic className="size-4" />
      </button>

      {/* Strikethrough */}
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("strike") ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Strikethrough className="size-4" />
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("heading", { level: 1 }) ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Heading1 className="size-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("heading", { level: 2 }) ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Heading2 className="size-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("heading", { level: 3 }) ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Heading3 className="size-4" />
      </button>

      {/* Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("codeBlock") ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <Code className="size-4" />
      </button>

      {/* Ordered List */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("orderedList") ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
        }`}
      >
        <ListOrdered className="size-4" />
      </button>

      {/* Add Image */}
      <button
        onClick={() => {
          const url = prompt("Enter image URL:");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className="px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-500"
      >
        <Upload className="size-4" />
      </button>
    </div>
  );
};

export default Toolbar;
