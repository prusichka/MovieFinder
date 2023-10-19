<script setup>
import { useMovieStore } from '~/store/movie'
const loading = ref(false)
const { params } = useRoute()
const store = useMovieStore()
await store.findMoviesByTitle(params.title, 1)

const hasResult = computed(() => {
	return !!store.foundMovies.Search?.length
})
const total = computed(() => {
	return Number(store.foundMovies.totalResults)
})
async function changePage(page) {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
	loading.value = true
	await store.findMoviesByTitle(params.title, page)
	loading.value = false
}
</script>
<template>
	<Title>{{ params.title }}</Title>
	<ResultLoader v-if="loading" />
	<div v-else-if="hasResult">
		<MoviesCarousel :movies="store.foundMovies.Search" />
		<MoviesList :movies="store.foundMovies.Search" />
	</div>
	<el-empty
		v-else
		:description="`${params.title} not Found!`" />
	<Pagination
		v-if="hasResult"
		:total="total"
		@change-page="changePage" />
</template>
