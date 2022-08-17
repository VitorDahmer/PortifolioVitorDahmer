import React from 'react';

// import { Container } from './styles';

function FormList() {
  return <>
    <div className='container border border-info m-1 border-2 rounded col-lg-11 col-sm-12 col-md-12'>
        <h3 className='text-info'>Lista de Respostas</h3>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Interesse</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>FullStalk</td>
                    <td>
                        <button type="button" class="btn btn-outline-warning me-2">Editar</button>
                        <button type="button" class="btn btn-outline-danger">Excluir</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Front-End</td>
                    <td>
                        <button type="button" class="btn btn-outline-warning me-2">Editar</button>
                        <button type="button" class="btn btn-outline-danger">Excluir</button>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    
  </>;
}

export default FormList;