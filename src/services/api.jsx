import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'https://backendsupportme.vercel.app/supportMe/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

//login
export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return { error: true, e }
    }
}

//addUser
export const registerPaciente = async (data) => {
    try {
        return await apiClient.post('/user/addUser', data);
    } catch (e) {
        return { error: true, e }
    }
}

//addPreceptor
export const registerPreceptor = async (data) => {
    try {
        return await apiClient.post('/user/addPreceptor', data);
    } catch (e) {
        return { error: true, e }
    }
}

//getUser
export const getUser = async () => {
    try {
        return await apiClient.get('/user/listUser');
    } catch (e) {
        return { error: true, e }
    }
}

//getPreceptor
export const getPreceptor = async () => {
    try {
        return await apiClient.get('/user/preceptores');
    } catch (e) {
        return { error: true, e }
    }
}

//getPaciente
export const getPaciente = async () => {
    try {
        return await apiClient.get('/user/pacientes');
    } catch (e) {
        return { error: true, e }
    }
}

//buscar pacientes por preceptor
export const searchPaciente = async (id) => {
    try {
        return await apiClient.post(`/user/preceptor/${id}/pacientes`);
    } catch (e) {
        return { error: true, e }
    }
}

//buscarUser
export const searchUser = async (id) => {
    try {
        return await apiClient.post(`/user/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//editarUser
export const editUser = async (id, data) => {
    try {
        return await apiClient.put(`/user/${id}`, data);
    } catch (e) {
        return { error: true, e }
    }
}

//eliminarUser
export const deleteUser = async (id) => {
    try {
        return await apiClient.delete(`/user/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//Recurso
export const addRecurso = async (data) => {
    try {
        return await apiClient.post('/recurso/addRecurso', data);
    } catch (e) {
        return { error: true, e }
    }
}

//getRecurso
export const getRecurso = async () => {
    try {
        return await apiClient.get('/recurso');
    } catch (e) {
        return { error: true, e }
    }
}

//getByIdRecurso
export const getByIdRecurso = async (id) => {
    try {
        return await apiClient.get(`/recurso/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//editarRecurso
export const editRecurso = async (id, data) => {
    try {
        return await apiClient.put(`/recurso/update/${id}`, data);
    } catch (e) {
        return { error: true, e }
    }
}

//eliminarRecurso
export const deleteRecurso = async (id) => {
    try {
        return await apiClient.delete(`/recurso/delete/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//addDiario
export const addContent = async (data) => {
    try {
        return await apiClient.post('/diarios', data);
    } catch (e) {
        return { error: true, e }
    }
}

//getDiarioByPaciente
export const getDiarioByPaciente = async (id) => {
    try {
        return await apiClient.get(`/diarios/paciente/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//getDiarioById
export const getDiarioById = async (id) => {
    try {
        return await apiClient.get(`/diarios/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

//getDiarioByPacienteByDate
export const getDiarioByPacienteByDate = async (id, fecha) => {
    try {
        return await apiClient.get(`/diarios/paciente/fecha/${id}/${fecha}`);
    } catch (e) {
        return { error: true, e }
    }
}

//editarDiario
export const editDiario = async (id, data) => {
    try {
        return await apiClient.put(`/diarios/${id}`, data);
    } catch (e) {
        return { error: true, e }
    }
}

//eliminarDiario
export const deleteDiario = async (id) => {
    try {
        return await apiClient.delete(`/diarios/${id}`);
    } catch (e) {
        return { error: true, e }
    }
}

export const getMyDiary = async () => {
    try {
        return await apiClient.get('/');
    } catch (e) {
        return { error: true, e }
    }
}