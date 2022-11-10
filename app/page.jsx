import Image from 'next/image'
import Link from 'next/link'
import Button from './components/button'

import { fetchPosts } from './utils'

export default async function HomePage() {
  const char = await fetchPosts()
  const data = char.results
  // console.log(data)
  // const info = char.info
  // console.log(info)

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3 bg-[#202329] p-4 self-stretch'>
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
      {/* <div className='w-full flex flex-row justify-around items-center bg-[#202329] p-4'>
        <Button text='<' info={info} />
        <Button text='>' />
      </div> */}
    </>
  )
}
