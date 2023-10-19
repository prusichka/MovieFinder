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
	<NuxtLink :to="`/details-${movie.imdbID}`">
		<div
			class="bg-slate-100 h-full border flex flex-col sm:flex-row items-center justify-evenly">
			<img
				class="object-contain h-full sm:w-full sm:max-w-[50%]"
				:src="imagePreview"
				:alt="movie.Title" />
			<div class="flex flex-col items-center">
				<h3 class="text-center">{{ movie.Title }}</h3>
				<span class="text-center">{{ movie.Year }} y.</span>
			</div>
		</div>
	</NuxtLink>
</template>
