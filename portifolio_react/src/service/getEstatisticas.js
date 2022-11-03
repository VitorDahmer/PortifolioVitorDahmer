import api from "./api";

// import { Container } from './styles';

const getEstatisticas = async()=> {
    const resp = await api.get('/estatisticas')
    return resp.data
}

export default getEstatisticas;