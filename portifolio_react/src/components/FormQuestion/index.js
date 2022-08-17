import React from 'react';

// import { Container } from './styles';

function FormQuestion() {
  return <>
  
  <div className='container border border-info m-1 border-2 rounded col-lg-5 col-sm-12 col-md-12'>
    <form>
      <h3 className='text-info'>Formulário</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nome</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Escolha um interesse</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button type="submit" class="btn btn-primary m-3 float-end">Enviar</button>
    </form>
  </div>
  </>;
}

export default FormQuestion;