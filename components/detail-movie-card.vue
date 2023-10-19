<script setup>
const { movie } = defineProps({
	movie: {
		type: Object,
		required: true,
		default: () => {},
	},
})
const imagePreview = computed(() => {
	return movie.Poster !== 'N/A' ? movie.Poster : '/not-found.png'
})
</script>
<template>
	<el-row
		:gutter="20"
		justify="center">
		<el-col
			:xs="24"
			:sm="12"
			:md="8"
			:lg="6"
			:xl="6">
			<img
				class="w-full max-w-[400px] object-contain block"
				:src="imagePreview"
				:alt="movie.Title" />
		</el-col>
		<el-col
			:xs="24"
			:sm="12"
			:md="16"
			:lg="18"
			:xl="18"
			class="text-[18px]">
			<h2 class="text-[28px]">Title: {{ movie.Title }}</h2>
			<p>Year: {{ movie.Year }}</p>
			<p>Genre: {{ movie.Genre }}</p>
			<p>Language: {{ movie.Language }}</p>
			<p>Director: {{ movie.Director }}</p>
			<p>Writer: {{ movie.Writer }}</p>
			<p>Actors: {{ movie.Actors }}</p>
			<p>Awards: {{ movie.Awards }}</p>
			<p>Released: {{ movie.Released }}</p>
			<h3 class="font-bold">Plot: {{ movie.Plot }}</h3>
		</el-col>
	</el-row>
</template>

<style lang="scss" scoped></style>
