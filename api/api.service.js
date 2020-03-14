import '../config/axios'

export const ApiMain = {
    post (resource, params, config = null) {
        return axios.post(`${ resource }`, params, config)
            .then(response => response.data)
            .catch(error => {
                throw error.response.data
            })
    },
    get (resource, slug = '', config = null) {
        return axios.get(`${ resource }`, config)
            .then(response => response.data)
            .catch(error => {
                throw error.response.data
            })
    },

};
export const ApiRegistration = {
    get (resource, slug = '', config = null) {
        return axios.get(`${ resource }`, config)
            .then(response => response.data)
            .catch(error => {
                throw error.response.data
            })
    },
};
export const ApiGlobal = {
    post (resource, params, config = null) {
        return axios.post(`${ resource }`, params, config)
            .then(response => response.data)
            .catch(error => {
                throw error.response.data
            })
    },

};

