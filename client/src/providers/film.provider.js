import { apiProvider } from './api.provider'

class createFilmProvider {
    constructor() {
        this.filmUri = '/films'
    }

    get = async () => await apiProvider.get(this.filmUri)
    getInfo = async (id) => await apiProvider.get(`${this.filmUri}/${id}`)
    add = async (film) => await apiProvider.post(`${this.filmUri}`, film)
    delete = async (id) => await apiProvider.delete(`${this.filmUri}/${id}`)
}

export const filmProvider = new createFilmProvider()