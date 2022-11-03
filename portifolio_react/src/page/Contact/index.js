import React, { useState } from 'react';
import CourseForm from '../../components/CourseForm';
import postContatos from '../../service/postContatos';

// import { Container } from './styles';

function Contact() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')
  return <>
    <form className='container-fluid border border-info m-1 border-2 rounded col-11'>
        <h3 className='text-info'>Contato</h3>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label mt-3">Nome</label>
          <input type="text" className="form-control" id="nome" placeholder="Seu Nome" value={nome} onChange={e=>{setNome(e.target.value)}}/>
          <label for="exampleFormControlInput1" className="form-label mt-3">Endereço de Email</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={e=>{setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Mensagem</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={descricao} onChange={e=>{setDescricao(e.target.value)}}></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-3"
        onClick={()=>{
          postContatos({nome, email, descricao})
        }}
        >Enviar</button>
    </form>
    <CourseForm/>
  </>;
}

export default Contact;