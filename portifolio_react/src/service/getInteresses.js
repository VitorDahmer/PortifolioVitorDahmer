import api from "./api";

// import { Container } from './styles';

const getInteresses = async()=> {
    const resp = await api.get('/interesses')
    return resp.data
}

export default getInteresses;