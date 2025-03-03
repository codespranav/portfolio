'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from "@tiptap/extension-heading";
import Toolbar from "../components/Toolbar"
import TextAlign from '@tiptap/extension-text-align';
import Image from "@tiptap/extension-image";

const Tiptap = ({content, onChange}) => {
    const handleChange = (newContent)=>{
        onChange(newContent)
    }
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Heading.configure({ levels: [1, 2, 3] }), // Ensure heading levels are enabled
      Image
    ],
    editorProps:{
        attributes: {
            class: "flex flex-col p-4 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] text-white pt-4 rounded-bl-md rounded-br-md outline-none "
        }
    },

    onUpdate: ({editor})=>{
      console.log(editor.getHTML());
      
        handleChange(editor.getHTML())
    }
  })

  return(
    <div className=''>
        <Toolbar editor = {editor} content = {content}/>
        <EditorContent editor={editor}/>
    </div>
  )
}

export default Tiptap
