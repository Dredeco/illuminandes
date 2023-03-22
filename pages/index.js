import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'

import BgImage from '../public/bg1.jpg'

export default function Home() {
  return (
    <main className='main'>
      <div className='main-content'>
       <span className='title'>Luz em Foco</span>
       <span className='subtitle'>Ilumine sua vida com instalações elétricas profissionais.</span>
      
        <Link href='/about'>Saiba mais</Link>

      </div>
      <div className='main-image'>
        <Image 
          src={BgImage}
          width='300'
          height='300'
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>
    </main>
  )
}
