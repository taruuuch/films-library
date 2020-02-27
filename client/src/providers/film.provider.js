import { apiProvider } from './api.provider'

class createFilmProvider {
    constructor() {
        this.filmUri = '/films'
    }

    get = async (page) => await apiProvider.get(`${this.filmUri}?page=${page}`)
    getInfo = async (id) => await apiProvider.get(`${this.filmUri}/${id}`)
    search = async (params) => await apiProvider.get(this.filmUri, { params })
    add = async (film) => await apiProvider.post(`${this.filmUri}`, film)
    import = async (file) => {
        const formData = new FormData()
        formData.append('file', file, file.name)
        return await apiProvider.post(`${this.filmUri}/import`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    }
    delete = async (id) => await apiProvider.delete(`${this.filmUri}/${id}`)
}

export const filmProvider = new createFilmProvider()