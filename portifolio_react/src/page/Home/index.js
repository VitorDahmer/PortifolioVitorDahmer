import React from 'react';
import Carousel from '../../components/Carousel';
import Courses from '../../components/Courses';


// import { Container } from './styles';

function Home() {
  return (<>
    <div className="container p-3 mb-2 bg-dark text-white ">
      <Carousel/>
      
      <div className='container border border-info m-1 mt-3 border-2 rounded col-12'>
        <div className='d-flex justify-content-evenly'>
          <div>
            <h1 className='text-info'>Vitor Cristiano Dahmer - DEV FullStalk</h1>
          </div>
          <div>
            <h1 className='text-info' >
              <a className='m-3' href='https://www.linkedin.com/in/vitor-cristiano-dahmer-1774394a/' target='_blank'><i className="bi bi-linkedin"></i></a>
              <a className='m-3' href='https://github.com/VitorDahmer' target='_blank'><i className="bi bi-github"></i></a>
            </h1>            
          </div>
        </div>
        <div>
          <p>
          Essa página foi criada para demosntrar conhecimentos em ReactJS, NodeJS e SQL. Possui alguns comentários sobre o que foi aplicado. Mais informações profissionais no Linkedin e Git.
          </p>
          <p>
            Para entrar em contato, acessar o Linkedin ou se preferir diretamente nesse site, na aba Contato.
          </p>
        
          Um array com os cursos e conhecimentos nas ferramentas, esse possui um search;
          Um formulário para ser preenchido, gerando uma listágem abaixo;
          Um gáfico com estatisticas das opções de interesse selecionadas anteriormente;
          Uma listágem em ordem decrescente das opções cadastradas, com edição e exclusão;
          Página de contatos;
          Página de APIs;
          Página com demais projetos.
        </div>
      </div>
      <Courses/>      
    </div>    
  </>);
}

export default Home;