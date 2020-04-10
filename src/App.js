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

const SectionFlex = props => {
  return (
    <div>
      <h1>Section Flexbox</h1>
      <section class="flex">
        <div>
          <img src={lobo1} alt=""></img>
          <p>foto 1</p>
        </div>
        <div>
          <img src={lobo2} alt=""></img>
          <p>foto 2</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 3</p>
        </div>
        <div>
          <img src={lobo2} alt=""></img>
          <p>foto 4</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 5</p>
        </div>
        <div>
          <img src={lobo1} alt=""></img>
          <p>foto 6</p>
        </div>
      </section>
    </div>
  );
}

const SectionGrid1 = props => {
  return (
    <div>
      <h1>Section Grid 1</h1>
      <section class="grid1">
        <div>
          <img src={lobo1} alt=""></img>
          <p>foto 1</p>
        </div>
        <div>
          <img src={lobo2} alt=""></img>
          <p>foto 2</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 3</p>
        </div>
        <div>
          <img src={lobo2} alt=""></img>
          <p>foto 4</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 5</p>
        </div>
        <div>
          <img src={lobo1} alt=""></img>
          <p>foto 6</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 3</p>
        </div>
        <div>
          <img src={lobo2} alt=""></img>
          <p>foto 4</p>
        </div>
        <div>
          <img src={lobo3} alt=""></img>
          <p>foto 5</p>
        </div>
        <div class="anuncio">
          <img src={lobo1} alt=""></img>
          <p>Anúncio</p>
        </div>
      </section>
    </div>
  );
}

const SectionGrid2 = props => {
  return (
    <div>
      <h1>Section Grid 2</h1>
      <section class="grid2">
        <div class="video">
          <img src={lobo1} alt=""></img>
          <h2>Como criar sites</h2>
        </div>
        <div class="sidebar">
          <div>
            <img src={lobo2} alt=""></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo3} alt=""></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo1} alt=""></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo3} alt=""></img>
            <p>Legenda</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const SectionGrid3 = props => {
  return (
    <div>
      <h1>Section Grid 3</h1>
      <section class="grid3">
        <div class="grid3-item">
          <img src={lobo4} alt=""></img>
          <p>Legenda</p>
        </div>
        <div class="grid3-item">
          <img src={lobo1} alt=""></img>
          <p>Legenda</p>
        </div>
        <div class="grid3-item">
          <img src={lobo2} alt=""></img>
          <p>Legenda</p>
        </div>
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





// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );


/* <div>
<img src="https://conteudo.imguol.com.br/c/entretenimento/f2/2018/06/08/dinho-bento-hinoto-julio-rasec-samuel-reoli-e-sergio-reoli-formaram-o-grupo-mamonas-assassinas-1528495357560_v2_450x450.jpg" alt=""></img>
<p>foto 1</p>
</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRMpz4llL1OxKn6Gt10Kf5PQnUFsyuJPA0RbMGzV6YD0UtKFQ3&usqp=CAU" alt=""></img>
<p>foto 2</p>
</div>
<div>
<img src="https://cdn.mensagenscomamor.com/content/images/p000003111.jpg?v=0" alt=""></img>
<p>foto 3</p>
</div>
<div>
<img src="https://www.vagalume.com.br/mamonas-assassinas/images/mamonas-assassinas.jpg" alt=""></img>
<p>foto 4</p>
</div>
<div>
<img src="https://i.pinimg.com/originals/e1/34/57/e13457dcee6fda045022384e6b90942c.jpg" alt=""></img>
<p>foto 5</p>
</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnycAmLvczUwVlHfeL7qTErMEhZLfCcVaHsIhGKaatW9Z07vp3&s" alt=""></img>
<p>foto 6</p>
</div> */