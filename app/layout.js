import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.png'
import github from '../public/footer/github.png'
import linkedin from '../public/footer/linkedin.png'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Rick and Morty Api</title>
        <link rel='icon' type='image/png' href={logo} />
      </head>
      <body>
        <div className='flex flex-row justify-center items-center my-5'>
          <Image
            src={logo}
            alt='Logo'
            className='h-24 w-24 absolute left-0'
            height={1000}
            width={1000}
          />
          <Link href='/'>
            <h1 className='text-5xl text-center font-bold'>
              Rick and Morty Api
            </h1>
          </Link>
        </div>
        {children}
        <footer className='bg-white text-black h-24 p-2 bottom-0 w-screen pt-5'>
          <p className='text-center mb-4'>Created by Pablo Muñoz with 💓</p>
          <div className='flex flex-row justify-center items-center'>
            <Link href='#'>
              <Image
                src={logo}
                className='h-full w-14 mx-2'
                width={1000}
                height={1000}
                alt='Porfolio'
              />
            </Link>
            <Link
              href='https://github.com/ppablomunoz'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src={github}
                className='h-full w-8 mx-2'
                width={1000}
                height={1000}
                alt='Github'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/pablo-mu%C3%B1oz-0989aa219/'>
              <Image
                src={linkedin}
                className='h-full w-8 mx-2'
                width={1000}
                height={1000}
                alt='Linkedin'
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
