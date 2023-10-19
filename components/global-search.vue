<script setup>
import { Search } from '@element-plus/icons-vue'
const route = useRoute()

const search = ref('')

async function findMovies() {
	search.value.length
		? await navigateTo({
				name: 'result-title',
				params: { title: search.value },
		  })
		: await navigateTo('/')
}
watch(
	() => route.params,
	() => {
		search.value = !!route.params.title ? route.params.title : ''
	},
	{ immediate: true }
)
</script>

<template>
	<div class="w-full max-w-[900px] flex items-center">
		<el-input
			v-model="search"
			placeholder="Find Movie"
			:suffix-icon="Search"
			@change="findMovies">
		</el-input>
	</div>
</template>
