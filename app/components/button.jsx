'use client'

export default function Button(props) {
  console.log(props.info)
  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {props.text}
      </button>
    </>
  )
}
