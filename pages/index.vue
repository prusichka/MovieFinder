<template>
	<Title>Movie Finder</Title>
	<div>
		<el-row :gutter="20">
			<el-col
				v-for="(movie, idx) in data.Search"
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
	</div>
</template>

<script setup>
const { data } = await useRequest('/', {
	query: {
		s: 'random',
	},
})
</script>

<style></style>
