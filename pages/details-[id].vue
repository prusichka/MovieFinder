<script setup>
import { useMovieStore } from '~/store/movie'
const store = useMovieStore()
const { params } = useRoute()
await store.getFullInfoForMovieByID(params.id)
</script>

<template>
	<Title>{{ store.fullInfo.Title }}</Title>
	<div>
		<DetailMovieCard :movie="store.fullInfo" />
	</div>
</template>

<style lang="scss" scoped></style>
