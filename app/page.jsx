import Image from 'next/image'
import Link from 'next/link'

const getData = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
    (res) => res.json()
  )
}

export default async function HomePage() {
  const char = await getData()
  const data = char.results
  // console.log(data)
  // const info = char.info
  // console.log(info)

  return (
    <>
      <div className='grid grid-cols-3 gap-5 bg-[#202329] p-4'>
        {data.map((e) => {
          return (
            <Link key={e.id} href={'/' + e.id}>
              <section className='bg-[#3C3E44] rounded-lg flex flex-row'>
                <Image
                  src={e.image}
                  alt='character img'
                  className='h-full w-44 object-fill rounded-lg'
                  width={1000}
                  height={1000}
                />
                <div className='px-4 py-2 w-full text-white'>
                  <h4 className='text-center font-bold text-xl mb-3'>
                    {e.name}
                  </h4>
                  <p className='mb-3'>
                    {e.status === 'Alive' ? `🟢 ${e.status}` : `🔴 ${e.status}`}{' '}
                    - {e.species}
                  </p>
                  <p>
                    <span className='text-gray-400'>Origin:</span>{' '}
                    {e.origin.name}
                  </p>
                  <p>
                    <span className='text-gray-400'>Last Location: </span>{' '}
                    {e.location.name}
                  </p>
                </div>
              </section>
            </Link>
          )
        })}
      </div>
    </>
  )
}
