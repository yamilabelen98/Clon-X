'use client'

import { ComposePostButton } from './compose-post-button'
import { addPost } from '../actions/add-post-actions'
import { useRef, useState } from 'react'
import { TbPhoto } from 'react-icons/tb'
import { RiCalendarScheduleLine, RiListRadio } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineGif } from 'react-icons/hi2'
import { CiCirclePlus } from "react-icons/ci";

export function ComposePost({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [postContent, setPostContent] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value)
  }

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData)
        formRef.current?.reset()
        setPostContent('') // Reinicia el contenido del textarea después de enviar
      }}
      className='flex flex-row p-3 border-b border-white/20'
    >
      <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />

      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name='content'
          rows={4}
          className='w-full text-xl bg-black placeholder-gray-500 p-2'
          placeholder='¿Qué está pasando?'
          onChange={handleInputChange}
        ></textarea>

        <div className="flex justify-between items-center">
          {/* Íconos de acciones a la izquierda */}
          <div className="flex space-x-4 text-sky-500">
            <button type="button" aria-label="Agregar foto">
              <TbPhoto size={20} />
            </button>
            <button type="button" aria-label="Agregar GIF">
            <HiOutlineGif  size={20} />
            </button>
            <button type="button" aria-label="Agregar encuesta">
            <RiListRadio size={20} />
            </button>
            <button type="button" aria-label="Agregar emojis">
              <BsEmojiSmile size={20} />
            </button>
            <button type="button" aria-label="Programar fecha">
              <RiCalendarScheduleLine size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            
            {postContent && (
              <button type="button" className="text-sky-500" aria-label="Agregar post relacionado">
                <CiCirclePlus size={30} />
              </button>
            )}
            
            <ComposePostButton />
          </div>
          
        </div>
      </div>
    </form>
  )
}
