'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "../components/Toolbar"
const Tiptap = ({content, onChange}) => {
    const handleChange = (newContent)=>{
        onChange(newContent)
    }
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps:{
        attributes: {
            class: "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none"
        }
    },

    onUpdate: ({editor})=>{
        handleChange(editor.getHTML())
    }
  })

  return(
    <div className='w-full'>
        <Toolbar editor = {editor} content = {content}/>
        <EditorContent style={{whiteSpace: "pre-line"}} editor={editor}/>
    </div>
  )
}

export default Tiptap
