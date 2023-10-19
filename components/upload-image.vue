<template>
	<el-upload
		class="poster-uploader mb-5"
		action="#"
		:show-file-list="false"
		:on-success="handleAvatarSuccess"
		:before-upload="beforeAvatarUpload"
		:on-change="$emit('select-image', poster)">
		<img
			v-if="poster"
			:src="poster"
			class="poster" />
		<el-icon
			v-else
			class="poster-uploader-icon"
			><Plus
		/></el-icon>
	</el-upload>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
const poster = ref('')
const handleAvatarSuccess = (response, uploadFile) => {
	poster.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
	if (rawFile.size / 1024 / 1024 > 2) {
		ElMessage.error('Avatar picture size can not exceed 2MB!')
		return false
	}
	return true
}
</script>

<style scoped lang="scss">
.poster-uploader {
	display: flex;
	justify-content: center;

	.poster {
		width: 100%;
		max-width: 600px;
		height: 200px;
		display: block;
	}
}
</style>

<style lang="scss">
.poster-uploader {
	.el-upload {
		border: 1px dashed var(--el-border-color);
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		transition: var(--el-transition-duration-fast);

		&:hover {
			border-color: var(--el-color-primary);
		}
	}

	.el-icon.poster-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		text-align: center;
	}
}
</style>
