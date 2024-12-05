import React from 'react'

const Title = ({ text1, text2, textColor = 'text-gray-500', lineColor = 'bg-gray-700', lineWidth = 'w-8', lineHeight = 'h-[2px]' }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className={`${textColor}`}>{text1}<span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className={`${lineWidth} ${lineHeight} ${lineColor}`}></p>
    </div>
  )
}

export default Title
