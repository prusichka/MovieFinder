<script setup>
const { movies } = defineProps({
	movies: {
		type: Array,
		required: true,
		default: () => [],
	},
})
</script>

<template>
	<el-carousel
		height="550px"
		type="card"
		indicator-position="outside"
		arrow="hover"
		trigger="click"
		class="mb-28">
		<el-carousel-item
			v-for="movie in movies"
			:key="movie.imdbID">
			<MovieSlide :movie="movie" />
		</el-carousel-item>
	</el-carousel>
</template>
