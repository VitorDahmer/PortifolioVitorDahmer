import api from './api';

const postContatos = async(data)=>{
    const {nome, email, descricao} = data
    console.log(nome, email, descricao);
    const resp = await api.post('/contatos', {
        nome, 
        email, 
        descricao 
    });
    console.log(resp);
    return resp.data;
}

export default postContatos;