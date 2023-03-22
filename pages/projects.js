import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'

import Image1 from '../public/image1.jpg'
import Image2 from '../public/image2.jpg'
import Image3 from '../public/image3.jpg'
import Image4 from '../public/image4.jpg'

export default function Projects() {
    let projects = [
        {name: "Sala de TV", image: Image1},
        {name: "Sala de Estar", image: Image2},
        {name: "Cozinha", image: Image3},
        {name: "Escadas", image: Image4}
    ]
  return (
    <div className='projects'>
        <div className='projects-container'>
            <h1>Projetos</h1>
            <ul className='projects-grid'>
                {projects.map((project) => (
                    <li key={project.name} className='project-card'>
                        <Image 
                            src={project.image}
                            alt=''
                            width='300'
                            height='300'
                            layout='responsive'
                        />
                        <p>{project.name}</p>
                    </li>
                ))}
                <Link href='/contact'>Entre em contato</Link>
            </ul>
        </div>
    </div>
  )
}
