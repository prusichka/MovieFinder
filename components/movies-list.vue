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
	<el-row :gutter="20">
		<el-col
			v-for="(movie, idx) in movies"
			:key="idx"
			:xs="24"
			:sm="12"
			:md="8"
			:lg="6"
			:xl="6"
			class="mb-5">
			<DefaultMovieCard :movie="movie" />
		</el-col>
	</el-row>
</template>
