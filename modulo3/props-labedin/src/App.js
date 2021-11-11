import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import icone1 from './components/img/o-email.png'
import icone2 from './components/img/endereco-residencial.png'
import FotoPerfil from './components/img/perfil.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Luiz Felipe Luna Marques" 
          descricao="Oi, eu sou o Luiz. Sou programador em treinamento. Apaixonado por Pets e investidor de Dogecoin."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem= {icone1}
        nome="Email: " 
        descricao=" marques.luiz@outlook.com"
        />

        <CardPequeno
        imagem={icone2} 
        nome="Endereço: " 
        descricao=" Rua Dogecoin 250.000, RJ."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Planus Informatica" 
          descricao="Analista responsavel por fazer a implementação dos projetos de outsourcing de impressão." 
        />
        
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="CTIS" 
          descricao="Analista responsavel por fazer a implementação dos softwares e servidores de bilhetagem e monitoramento das impressoras." 
        />

        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Kotrac Peças e Acessorios LTDA." 
          descricao="Analista de infraestrutura" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
