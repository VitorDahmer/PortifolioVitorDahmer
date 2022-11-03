import api from "./api";

const deleteInteresse = async(data)=> {
    const {idDel, callback} = data
    const resp = await api.delete(`/interesses/${idDel}`);
    callback();
    return resp.data
}

export default deleteInteresse;