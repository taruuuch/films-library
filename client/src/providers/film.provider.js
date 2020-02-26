import { apiProvider } from './api.provider'

class createFilmProvider {
    constructor() {
        this.filmUri = '/films'
    }

    get = async () => await apiProvider.get(this.filmUri)
    getInfo = async (id) => await apiProvider.get(`${this.filmUri}/${id}`)
}

export const filmProvider = new createFilmProvider()