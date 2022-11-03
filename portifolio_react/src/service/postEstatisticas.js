import api from './api';

const postEstatisticas = async(data)=>{
    const {nick_name, nome} = data
    console.log(nick_name, nome);
    const resp = await api.post('/estatisticas', {
        nome 
    });
    console.log(resp);
    return resp.data;
}

export default postEstatisticas;