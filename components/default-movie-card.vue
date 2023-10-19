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
	<NuxtLink
		class="cursor-pointer"
		:to="`/details-${movie.imdbID}`">
		<el-card
			class="h-full"
			shadow="hover"
			body-class="flex flex-col items-center h-full justify-between">
			<img
				class="w-auto max-h-[500px] object-contain block"
				:src="imagePreview"
				:alt="movie.Title" />
			<div class="p-4">
				<h2 class="text-center">{{ movie.Title }}</h2>
				<p class="text-center">{{ movie.Year }} y.</p>
			</div>
		</el-card>
	</NuxtLink>
</template>
