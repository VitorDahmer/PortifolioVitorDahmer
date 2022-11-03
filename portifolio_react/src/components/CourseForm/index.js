import React, { useState } from 'react';

// import { Container } from './styles';

function CourseForm() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [entidade, setEntidade] = useState('')
    const [conclusao, setConclusao] = useState('')
    const [imagem, setImagem] = useState('')
  return <>
    <form className='container-fluid border border-info m-1 border-2 rounded col-11'>
        <h3 className='text-info'>Cursos</h3>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Nome do Curso ou habilidade</label>
            <input type="text" class="form-control" id="nomeCurso" value={nome} onChange={e=>{setNome(e.target.value)}} placeholder='Digite o nome do Curso'/>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Descrição do Curso</label>
            <input type="text" class="form-control" id="descricaoCurso" placeholder='Digite a descrição do Curso' value={descricao} onChange={e=>{setDescricao(e.target.value)}}/>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Entidade/Escola</label>
            <input type="text" class="form-control" id="entidadeCurso" placeholder='Digite a entidade do Curso' value={entidade} onChange={e=>{setEntidade(e.target.value)}}/>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Conclusao</label>
            <input type="text" class="form-control" id="conclusaoCurso" placeholder='Digite a data de conclusao do Curso' value={conclusao} onChange={e=>{setConclusao(e.target.value)}}/>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Imagem</label>
            <input class="form-control" type="file" id="formFile" value={imagem} onChange={e=>{setImagem(e.target.value)}}/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </>;
}

export default CourseForm;