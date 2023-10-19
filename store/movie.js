import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
	state() {
		return {
			fullInfo: {},
			foundMovies: [],
		}
	},
	actions: {
		async getFullInfoForMovieByID(id) {
			const { data } = await useRequest('/', {
				query: {
					i: id,
				},
			})
			this.fullInfo = data.value.Response === 'True' ? data.value : []
		},
		async findMoviesByTitle(title, page) {
			const { data } = await useRequest('/', {
				query: {
					s: title,
					page: page,
				},
			})
			this.foundMovies = data.value.Response === 'True' ? data.value : []
		},
	},
})
