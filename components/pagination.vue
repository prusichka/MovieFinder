<script setup>
const { total } = defineProps({
	total: {
		type: Number,
		required: true,
		default: 0,
	},
})
</script>

<template>
	<el-pagination
		class="justify-center"
		layout="prev, pager, next"
		background
		small 
		:hide-on-single-page="true"
		:total="total"
		@current-change="(e) => $emit('change-page', e)" />
</template>
