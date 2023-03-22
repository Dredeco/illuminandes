import Image from 'next/image'
import Link from 'next/link';
import React, {useEffect} from 'react'

export default function Navbar() {

  useEffect(() => {
      let btns = document.getElementsByClassName('nav-link');

      for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('click', function(){
              let current = document.getElementsByClassName('active');
              current[0].className = current[0].className.replace(' active', '');
              this.className += ' active'
          })
      }

      console.log(btns);
  }, 2000)

  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span className='logo'>Illuminandes</span>
        </a>

        <button 
          class="navbar-toggler navbar-dark" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link 
                class="nav-link active"
                aria-current="page"
                href="/">Home
                </Link>

                <Link class="nav-link" 
                href="/about">Sobre
                </Link>

                <Link class="nav-link" 
                href="/projects">Projetos</Link>

                <Link class="nav-link" 
                href="/contact">Contato</Link>
            </div>
        </div>
    </div>
    </nav>
  )
}
