<script setup>
import { ElNotification } from 'element-plus'
const form = reactive({
	title: '',
	year: '',
	poster: '',
	type: 'movie',
})

const options = [
	{
		label: 'Movie',
		value: 'movie',
	},
	{
		label: 'Series',
		value: 'series',
	},
	{
		label: 'Episode',
		value: 'episode',
	},
]
const createForm = ref()

const onSubmit = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.table(form)
			ElNotification({
				title: 'Successfully added',
				position: 'bottom-right',
			})
			navigateTo('/')
		} else console.log('Error')
	})
}
const rules = reactive({
	title: [{ required: true, message: 'Please input Title', trigger: 'blur' }],
	year: [{ type: 'number', message: 'Year must be a number', trigger: 'blur' }],
})
</script>

<template>
	<el-form
		:model="form"
		label-width="120px"
		:rules="rules"
		ref="createForm"
		class="max-w-[800px] mx-auto"
		label-position="top">
		<el-card body-class="p-5 ">
			<el-form-item
				label="Title"
				prop="title">
				<el-input v-model="form.title" />
			</el-form-item>
			<el-form-item
				label="Year"
				prop="year">
				<el-input v-model.number="form.year" />
			</el-form-item>
			<el-form-item label="Type">
				<el-select
					v-model="form.type"
					class="w-full">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value" />
				</el-select>
			</el-form-item>
			<UploadImage @select-image="(e) => (form.poster = e)" />
			<el-form-item>
				<el-button
					type="primary"
					@click="onSubmit(createForm)"
					>Create</el-button
				>
			</el-form-item>
		</el-card>
	</el-form>
</template>

<style></style>
