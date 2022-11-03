import React, { useEffect, useState } from 'react';
import getInteresses from '../../service/getInteresses';
import deleteInteresse from '../../service/deleteInteresse';
import {Modal} from 'react-modal';
import EditModal from '../EditModal';
// import { Container } from './styles';

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })



function FormList() {
    const [interesses, setInteresses] = useState()

    

    async function loadInteresses() {
        setInteresses( await getInteresses())
    };

    useEffect(()=>{
        loadInteresses()
    },[])
    console.log('interesses >>', interesses);

  return <>
    <div className='container-fluid border border-info m-1 border-2 rounded col-lg-11 col-sm-12 col-md-12'>
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

                {interesses && interesses.map(d=>{
                    return(
                        <tr key={d.id_interesse}>
                            <th scope="row">{d.id_interesse}</th>
                            <td>{d.nick_name}</td>
                            <td>{d.nome}</td>
                            <td>
                                <button type="button" className="btn btn-outline-warning me-2"
                                data-toggle="modal" data-target="#Modal_Edicao"
                                >Editar</button>

                                <div class="modal" id="Modal_Edicao" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Editar Interesse</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                <button type="button" class="btn btn-outline-danger"
                                onClick={()=>{
                                    deleteInteresse({idDel: d.id_interesse, callback: ()=>{loadInteresses()}})
                                }}
                                >Excluir</button>
                            </td>
                        </tr> 
                    )
                })}
                
            </tbody>
        </table>
    </div>
    
  </>;
}

export default FormList;