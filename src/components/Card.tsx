/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { characters } from '../types/charactersTypes'

export default function Card({ character }: { character: characters }) {
  return (
    <>
      {/* <Link href={'/' + character.id}> */}
      <section className='bg-gray-600 rounded-lg flex flex-row'>
        <img
          src={character.image}
          alt='character img'
          className='h-full w-1/2 object-fill rounded-lg'
          width={1000}
          height={1000}
        />
        <div className='px-4 py-2 w-full text-white'>
          <h4 className='text-center font-bold text-xl mb-3'>
            {character.name}
          </h4>
          <p className='mb-3'>
            {character.status === 'Alive'
              ? `🟢 ${character.status}`
              : `🔴 ${character.status}`}{' '}
            - {character.species}
          </p>
          <p>
            <span className='text-gray-400'>Origin:</span>{' '}
            {character.origin.name}
          </p>
          <p>
            <span className='text-gray-400'>Last Location: </span>{' '}
            {character.location.name}
          </p>
        </div>
      </section>
      {/* </Link> */}
    </>
  )
}
