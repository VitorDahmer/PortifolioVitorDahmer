import api from './api';

const postCursos = async(data)=>{
    const {nome, email, descricao} = data
    console.log(nome, email, descricao);
    const resp = await api.post('/cursos', {
        nome, 
        email, 
        descricao 
    });
    console.log(resp);
    return resp.data;
}

export default postCursos;