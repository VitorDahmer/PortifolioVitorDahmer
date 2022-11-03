import api from './api';

const postInteresses = async(data)=>{
    const {nick_name, nome} = data
    console.log(nick_name, nome);
    const resp = await api.post('/interesses', {
        nick_name,
        nome 
    });
    console.log(resp);
    return resp.data;
}

export default postInteresses;