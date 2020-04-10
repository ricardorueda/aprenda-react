import React from 'react';
import './css/Style.css';
import logo from "./logo.svg"

import lobo1 from "./img/lobo1.jpg"
import lobo2 from "./img/lobo2.jpg"
import lobo3 from "./img/lobo3.jpg"
import lobo4 from "./img/lobo4.jpg"

const Header = props => {
  return (
    <header class="header">
      <a href="/">
        <img className="logo" alt="logo" src={logo} width="100" height="100"></img>
      </a>
      <nav>
        <ul class="menu">
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Produtos</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

const Titulo = props => {
  return (
    <h1>{props.conteudo}</h1>
  )
}

const Imagem = props => {
  return (
    <div class={props.classe}>
      <img src={props.img} alt=""></img>
      <p>{props.legenda}</p>
    </div>
  )
}

const Video = props => {
  return (
    <div class={props.classe}>
      <img src={props.img} alt=""></img>
      <h2>{props.legenda}</h2>
    </div>
  )
}

const SectionFlex = props => {
  return (
    <div>
      <Titulo conteudo="Section Flexbox"></Titulo>
      <section class="flex">
        <Imagem img={lobo1} legenda="foto 1"></Imagem>
        <Imagem img={lobo3} legenda="foto 2"></Imagem>
        <Imagem img={lobo2} legenda="foto 3"></Imagem>
        <Imagem img={lobo3} legenda="foto 4"></Imagem>
        <Imagem img={lobo1} legenda="foto 5"></Imagem>
        <Imagem img={lobo2} legenda="foto 6"></Imagem>
      </section>
    </div>
  );
}

const SectionGrid1 = props => {
  return (
    <div>
      <Titulo conteudo="Section Grid 1"></Titulo>
      <section class="grid1">
        <Imagem img={lobo2} legenda="foto 1"></Imagem>
        <Imagem img={lobo3} legenda="foto 2"></Imagem>
        <Imagem img={lobo1} legenda="foto 3"></Imagem>
        <Imagem img={lobo2} legenda="foto 4"></Imagem>
        <Imagem img={lobo1} legenda="foto 5"></Imagem>
        <Imagem img={lobo2} legenda="foto 6"></Imagem>
        <Imagem img={lobo1} legenda="foto 7"></Imagem>
        <Imagem img={lobo3} legenda="foto 8"></Imagem>
        <Imagem img={lobo2} legenda="foto 9"></Imagem>
        <Imagem img={lobo1} legenda="Anúncio" classe="anuncio"></Imagem>
      </section>
    </div>
  );
}

const SectionGrid2 = props => {
  return (
    <div>
      <Titulo conteudo="Section Grid 2"></Titulo>
      <section class="grid2">
        <Video img={lobo1} legenda="Como criar sites" classe="video"></Video>
        <div class="sidebar">
          <Imagem img={lobo2} legenda="Legenda 1"></Imagem>
          <Imagem img={lobo3} legenda="Legenda 2"></Imagem>
          <Imagem img={lobo1} legenda="Legenda 3"></Imagem>
          <Imagem img={lobo3} legenda="Legenda 4"></Imagem>
        </div>
      </section>
    </div>
  );
}

const SectionGrid3 = props => {
  return (
    <div>
      <Titulo conteudo="Section Grid 3"></Titulo>
      <section class="grid3">
        <Imagem img={lobo4} legenda="Legenda 1" classe="grid3-item"></Imagem>
        <Imagem img={lobo1} legenda="Legenda 2" classe="grid3-item"></Imagem>
        <Imagem img={lobo2} legenda="Legenda 3" classe="grid3-item"></Imagem>
      </section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <SectionFlex></SectionFlex>
      <SectionGrid1></SectionGrid1>
      <SectionGrid2></SectionGrid2>
      <SectionGrid3></SectionGrid3>
    </div>
  );
}

export default App;