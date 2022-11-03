import React from 'react';
import postInteresses from '../../service/postInteresse';
import {useState} from 'react';
import postEstatisticas from '../../service/postEstatisticas';

// import { Container } from './styles';

function FormQuestion() {
  const [nick_name, setNickName] = useState('')
  const [nome, setNome] = useState('')
  return <>
  
  <div className='container border border-info m-1 border-2 rounded col-lg-5 col-sm-12 col-md-12 d-flex flex-column'>
    <h3 className='text-info'>Formulário</h3>
    <form className='d-flex flex-column justify-content-center '>
      
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nome</label>
        <input type="text" class="form-control " id="nick_name" placeholder="digite seu nome ou apelido" value={nick_name} onChange={e=>{setNickName(e.target.value)}}/>
      </div>
      <label for="exampleFormControlInput1" class="form-label">Interesse</label>
      <select class="form-select" aria-label="Default select example" value={nome}  onChange={e=>{setNome(e.target.value)}}>
        <option selected>Escolha um interesse</option>
        <option value="Back-End">Back-End</option>
        <option value="Front-End">Front-End</option>
        <option value="Full-Stalk">Full-Stalk</option>
      </select>
      <button type="submit" class="btn btn-primary m-3 col-2 float-end"
      onClick={()=>{ 
        postInteresses({nick_name, nome})
        postEstatisticas({nome})
      }} >Enviar</button>
    </form>
  </div>
  </>;
}

export default FormQuestion;