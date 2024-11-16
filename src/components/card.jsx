import React from 'react'

export default function Card({ title, description, icon }) {
    return (
        <div className='bg-cardBg max-w-[24vw] flex flex-col  border-stroke/25 border-[0.1rem] p-8 rounded-[2rem]'>
            <img src={icon} alt='icon' className='w-16 h-16 p-3 bg-blackishGray rounded-[1.9rem] border-[0.1rem] border-stroke/25' />
            <p className='text-2xl font-semibold mt-4 text-[#F3F3F3]/80'>{title}</p>
            <p className='text-[#F3F3F3]/80 mt-2'>{description}</p>
        </div>
    )
}
