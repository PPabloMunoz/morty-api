import Image from 'next/image'

const getData = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
    res.json()
  )
}

export default async function character({ params }) {
  const res = await getData(params.id)
  // console.log(res)
  return (
    <div className='bg-[#202329] text-white flex flex-col justify-evenly items-center h-[700px]'>
      <header className='mb-4 '>
        <Image
          src={res.image}
          className='w-72 rounded-xl p-4'
          alt='Character IMG'
          width={1000}
          height={1000}
        />
        <h3 className='text-center text-2xl font-bold'>{res.name}</h3>
      </header>
      <main className='w-full p-6 flex flex-row justify-center items-center gap-8'>
        <div className='flex flex-col gap-3'>
          <p>
            <span className='text-gray-400'>Id:</span> {res.id}
          </p>
          <p>
            <span className='text-gray-400'>Status:</span> {res.status}
          </p>
          <p>
            <span className='text-gray-400'>Species:</span> {res.species}
          </p>
          <p>
            <span className='text-gray-400'>Gender:</span> {res.gender}
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <p>
            <span className='text-gray-400'>Origin:</span> {res.origin.name}
          </p>
          <p>
            <span className='text-gray-400'>Last Location:</span>{' '}
            {res.location.name}
          </p>
          <p>
            <span className='text-gray-400'>Episodes:</span>{' '}
            {res.episode.length}
          </p>
          <p>
            <span className='text-gray-400'>Created in:</span>{' '}
            {res.created.slice(0, 10)}
          </p>
        </div>
      </main>
    </div>
  )
}
