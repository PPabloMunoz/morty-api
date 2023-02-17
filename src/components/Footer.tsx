import Link from 'next/link'
import { Github, Linkedin, Logo } from './Icons'

import { toast } from 'react-hot-toast'

export default function Footer() {
  return (
    <footer className='h-24 p-2 bottom-0 w-screen my-5'>
      <p className='text-center mb-4'>Created by Pablo Muñoz with 💓</p>
      <div className='flex flex-row justify-center items-center gap-5'>
        <div
          className='cursor-pointer'
          onClick={() =>
            toast('Porfolio Website will be aviable soon', {
              icon: 'ℹ️',
            })
          }>
          <Logo />
        </div>
        <Link
          href='https://github.com/ppablomunoz'
          target='_blank'
          rel='noreferrer'>
          <Github />
        </Link>
        <Link
          href='https://www.linkedin.com/in/pablo-mu%C3%B1oz-0989aa219/'
          target='_blank'
          rel='noreferrer'>
          <Linkedin />
        </Link>
      </div>
    </footer>
  )
}
