import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <h1>Sobre</h1>
        <span className='about-text'>
            Bem-vindo à nossa empresa de iluminação e instalações elétricas! Somos uma equipe de profissionais dedicados e experientes em fornecer soluções completas de iluminação e instalações elétricas para clientes residenciais, comerciais e industriais.
            <br /><br />
            Nosso objetivo é ajudar nossos clientes a obterem os melhores resultados possíveis em seus projetos de iluminação e instalações elétricas, desde a consultoria inicial até a implementação final. Nós nos esforçamos para oferecer um serviço personalizado e de alta qualidade para cada cliente, garantindo que suas necessidades e objetivos sejam atendidos em todos os momentos.
            <br /><br />
            Com uma ampla gama de serviços, incluindo design de iluminação, instalação elétrica, manutenção e reparos, estamos preparados para ajudá-lo em qualquer etapa do processo. Além disso, estamos comprometidos em fornecer soluções de iluminação e instalações elétricas que sejam eficientes em termos de energia e ecologicamente corretas.
        </span>
        <Link href="/projects">Conheça nossos projetos</Link>
    </div>
  )
}
